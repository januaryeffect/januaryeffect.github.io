// 신규 대리기사용 매출 → 순익 계산 (순수 함수).
// 스펙: vault Projects/ChauffeurLog/spec-수익계산카드-초안.md §3.
// 수수료·원천징수 반올림은 앱(chauffeur_log)과 같게 맞춘다:
// - 수수료 = round(요금 × 수수료율 / 100)  (ride_entry_view.dart)
// - 원천징수 = 소득세 3%(10원 미만 절사) + 지방소득세 10%(10원 미만 절사)  (withholding_tax.dart)

export type FeeMode = "free" | "daily" | "monthly";
export type InsuranceMode = "perCall" | "monthly" | "unknown";
export type RevenueMode = "monthly" | "perCall";

export interface ProgramFee {
  id: string;
  name: string;
  enabled: boolean;
  mode: FeeMode;
  /** 일비(원/일) 또는 월정액(원/월). 무료면 무시. */
  amount: number;
  /** 로지 D1~D3처럼 채널마다 붙는 일비. 기본 1. */
  channels: number;
}

export interface CalcInput {
  revenueMode: RevenueMode;
  /** 월 매출 G (원/월) — revenueMode "monthly"일 때 */
  monthlyRevenue: number;
  /** 하루 콜 수 n — revenueMode "perCall"일 때 */
  callsPerDay: number;
  /** 평균 요금 P (원/콜) */
  avgFare: number;
  /** 근무일 D (일/월) */
  workDays: number;
  /** 하루 근무 시간 (시간당 순익 표시용) */
  hoursPerDay: number;
  /** 수수료율 f (%) */
  feeRate: number;
  withholding: boolean;
  programs: ProgramFee[];
  insuranceMode: InsuranceMode;
  /** 건보 단가 b (원/콜) */
  insurancePerCall: number;
  /** 월보 금액 M (원/월). null이면 미입력 */
  insuranceMonthly: number | null;
  /** 하루 복귀 교통비 R (원/일) */
  returnCostPerDay: number;
  /** 콜 사이 이동비 r (원/콜) */
  moveCostPerCall: number;
}

export interface Step {
  label: string;
  amount: number; // 빠지는 금액은 음수
}

export interface CalcResult {
  workDays: number;
  monthlyCalls: number;
  revenue: number;
  commissionPerCall: number;
  withholdingPerCall: number;
  contributionPerCall: number; // c
  fixedCost: number; // F
  netProfit: number;
  netMargin: number | null; // 순익 ÷ 매출
  profitPerDay: number;
  profitPerHour: number | null;
  breakEvenMonthly: number | null; // null = 없음(c ≤ 0)
  breakEvenDaily: number | null;
  steps: Step[];
  warnings: string[];
  assumedCount: number;
}

export const WITHHOLDING_RATE_LABEL = "3.3%";

/** 앱 WithholdingTax.compute 와 같은 반올림. */
export function withholdingTax(base: number): number {
  if (base <= 0) return 0;
  const incomeTax = Math.floor((base * 3) / 1000) * 10;
  const localTax = Math.floor(incomeTax / 100) * 10;
  return incomeTax + localTax;
}

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));
const safe = (v: number) => (Number.isFinite(v) ? v : 0);

export function defaultPrograms(): ProgramFee[] {
  // 이름은 앱 App 테이블 시드에 맞춤. 단가는 오픈채팅 가정값.
  // 스펙 예시 3.1(순익 336만 원)과 같도록 로지 1채널·콜마너를 켠 상태로 시작.
  return [
    { id: "kakao", name: "카카오T 대리", enabled: true, mode: "free", amount: 0, channels: 1 },
    { id: "logi", name: "로지", enabled: true, mode: "daily", amount: 1000, channels: 1 },
    { id: "callmanner", name: "콜마너", enabled: true, mode: "daily", amount: 300, channels: 1 },
  ];
}

export function defaultInput(): CalcInput {
  return {
    revenueMode: "monthly",
    monthlyRevenue: 5_000_000,
    callsPerDay: 0,
    avgFare: 25_000,
    workDays: 22,
    hoursPerDay: 8,
    feeRate: 20,
    withholding: true,
    programs: defaultPrograms(),
    insuranceMode: "perCall",
    insurancePerCall: 1273,
    insuranceMonthly: null,
    returnCostPerDay: 10_000,
    moveCostPerCall: 0,
  };
}

export function calculate(raw: CalcInput): CalcResult {
  const warnings: string[] = [];
  const D = clamp(Math.round(safe(raw.workDays)) || 1, 1, 31);
  const P = Math.max(0, safe(raw.avgFare));
  const f = clamp(safe(raw.feeRate), 0, 50);
  const hours = Math.max(0, safe(raw.hoursPerDay));

  if (P < 5_000 || P > 200_000) warnings.push("평균 요금을 확인해 주세요 (5,000~200,000원 범위 밖).");

  let N: number;
  if (raw.revenueMode === "monthly") {
    N = P > 0 ? Math.max(0, safe(raw.monthlyRevenue)) / P : 0;
  } else {
    N = Math.max(0, safe(raw.callsPerDay)) * D;
  }
  const G = raw.revenueMode === "monthly" ? Math.max(0, safe(raw.monthlyRevenue)) : N * P;

  // 콜 하나 기준
  const commission = Math.round((P * f) / 100);
  const wh = raw.withholding ? withholdingTax(P - commission) : 0;
  const b = raw.insuranceMode === "perCall" ? Math.max(0, safe(raw.insurancePerCall)) : 0;
  const r = Math.max(0, safe(raw.moveCostPerCall));
  const c = P - commission - wh - b - r;

  // 월 고정비
  let programCost = 0;
  const programNames: string[] = [];
  for (const p of raw.programs) {
    if (!p.enabled || p.mode === "free") continue;
    const amt = Math.max(0, safe(p.amount));
    const cost = p.mode === "daily" ? amt * clamp(Math.round(p.channels) || 1, 1, 3) * D : amt;
    if (cost > 0) {
      programCost += cost;
      programNames.push(p.name);
    }
  }
  let monthlyInsurance = 0;
  if (raw.insuranceMode === "monthly") {
    if (raw.insuranceMonthly == null || !Number.isFinite(raw.insuranceMonthly)) {
      warnings.push("월보 금액을 넣어 주세요. 지금은 0원으로 계산했어요.");
    } else {
      monthlyInsurance = Math.max(0, raw.insuranceMonthly);
    }
  }
  if (raw.insuranceMode === "unknown") warnings.push("보험 미포함으로 계산했어요.");
  const returnCost = Math.max(0, safe(raw.returnCostPerDay)) * D;
  const F = programCost + monthlyInsurance + returnCost;

  const netProfit = Math.round(N * c - F);

  let breakEvenMonthly: number | null = null;
  let breakEvenDaily: number | null = null;
  if (c > 0) {
    breakEvenMonthly = F === 0 ? 0 : Math.ceil(F / c);
    breakEvenDaily = F === 0 ? 0 : Math.ceil(F / D / c);
  }

  const steps: Step[] = [{ label: "매출", amount: Math.round(G) }];
  steps.push({ label: `수수료 ${f}%`, amount: -Math.round(N * commission) });
  if (raw.withholding) steps.push({ label: `원천징수 ${WITHHOLDING_RATE_LABEL}`, amount: -Math.round(N * wh) });
  if (b > 0) steps.push({ label: `건보 ${fmtCalls(N)}콜×${b.toLocaleString("ko-KR")}`, amount: -Math.round(N * b) });
  if (r > 0) steps.push({ label: "콜 사이 이동비", amount: -Math.round(N * r) });
  if (programCost > 0) steps.push({ label: `프로그램 (${programNames.join("·")})`, amount: -programCost });
  if (raw.insuranceMode === "monthly") steps.push({ label: "월보", amount: -monthlyInsurance });
  if (returnCost > 0) steps.push({ label: `복귀 교통비 ${D}일`, amount: -returnCost });

  // 가정값 개수(기본값 그대로 쓰는 추정 항목)
  const d = defaultInput();
  let assumed = 0;
  if (raw.programs.some((p) => p.enabled && p.id === "logi" && p.amount === 1000)) assumed++;
  if (raw.programs.some((p) => p.enabled && p.id === "callmanner" && p.amount === 300)) assumed++;
  if (raw.insuranceMode === "perCall" && raw.insurancePerCall === d.insurancePerCall) assumed++;
  if (raw.returnCostPerDay === d.returnCostPerDay) assumed++;

  return {
    workDays: D,
    monthlyCalls: N,
    revenue: Math.round(G),
    commissionPerCall: commission,
    withholdingPerCall: wh,
    contributionPerCall: c,
    fixedCost: F,
    netProfit,
    netMargin: G > 0 ? netProfit / G : null,
    profitPerDay: Math.round(netProfit / D),
    profitPerHour: hours > 0 ? Math.round(netProfit / D / hours) : null,
    breakEvenMonthly,
    breakEvenDaily,
    steps,
    warnings,
    assumedCount: assumed,
  };
}

export function fmtCalls(n: number): string {
  return (Math.round(n * 10) / 10).toLocaleString("ko-KR");
}

export function fmtWon(n: number): string {
  return `${Math.round(n).toLocaleString("ko-KR")}원`;
}

/** "약 336만 원" — 월 합계 표시용(만 원 단위). */
export function fmtManwon(n: number): string {
  const man = Math.round(n / 10_000);
  return `${man < 0 ? "−" : ""}약 ${Math.abs(man).toLocaleString("ko-KR")}만 원`;
}
