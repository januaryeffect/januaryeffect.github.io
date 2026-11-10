"use client";

import { useMemo, useState } from "react";

import {
  type CalcInput,
  type FeeMode,
  type InsuranceMode,
  type ProgramFee,
  calculate,
  defaultInput,
  fmtCalls,
  fmtManwon,
  fmtWon,
} from "@/lib/net-profit-calculator";

// TODO(측정): 스펙 §7은 앱 usage_reporter 이벤트(net_profit_card_open/save)만 정의한다.
// 웹 페이지 방문·사용 측정 방식은 미정이라 새 분석 스크립트는 넣지 않았다.

const REVENUE_MIN = 3_000_000;
const REVENUE_MAX = 8_000_000;

const parseNum = (s: string): number => {
  const v = Number(s.replace(/[^0-9.]/g, ""));
  return Number.isFinite(v) ? v : 0;
};

function NumberField({
  label,
  value,
  onChange,
  suffix,
  assumed,
  placeholder,
}: {
  label: string;
  value: number | null;
  onChange: (v: number | null) => void;
  suffix?: string;
  assumed?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 mb-1">
        {label}
        {assumed ? (
          <span className="rounded px-1.5 py-0.5 text-[10px] bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
            가정값
          </span>
        ) : null}
      </span>
      <span className="flex items-center rounded-xl border border-gray-300 dark:border-gray-700 px-3 focus-within:border-teal-600">
        <input
          type="text"
          inputMode="numeric"
          className="w-full bg-transparent py-2.5 text-right text-base outline-none"
          value={value == null ? "" : value.toLocaleString("ko-KR")}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value.trim() === "" ? null : parseNum(e.target.value))}
        />
        {suffix ? <span className="ml-1.5 shrink-0 text-sm text-gray-500">{suffix}</span> : null}
      </span>
    </label>
  );
}

function Toggle({
  options,
  value,
  onChange,
}: {
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="inline-flex rounded-xl border border-gray-300 dark:border-gray-700 p-1 text-sm">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => onChange(o.value)}
          className={`rounded-lg px-3 py-1.5 transition-colors ${
            value === o.value
              ? "bg-teal-600 text-white"
              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

const defaults = defaultInput();

export default function ProfitCalculator() {
  const [input, setInput] = useState<CalcInput>(defaultInput);
  const [showSteps, setShowSteps] = useState(false);
  const result = useMemo(() => calculate(input), [input]);

  const set = <K extends keyof CalcInput>(key: K, value: CalcInput[K]) =>
    setInput((prev) => ({ ...prev, [key]: value }));
  const num = (key: keyof CalcInput) => (v: number | null) =>
    set(key, (v ?? 0) as CalcInput[typeof key]);

  const updateProgram = (id: string, patch: Partial<ProgramFee>) =>
    setInput((prev) => ({
      ...prev,
      programs: prev.programs.map((p) => (p.id === id ? { ...p, ...patch } : p)),
    }));
  const addProgram = () =>
    setInput((prev) => ({
      ...prev,
      programs: [
        ...prev.programs,
        { id: `custom-${Date.now()}`, name: "기타", enabled: true, mode: "daily", amount: 0, channels: 1 },
      ],
    }));
  const removeProgram = (id: string) =>
    setInput((prev) => ({ ...prev, programs: prev.programs.filter((p) => p.id !== id) }));

  const negative = result.netProfit < 0;
  const stepsOpen = showSteps || negative;
  const revenueLabel =
    input.revenueMode === "monthly"
      ? `월 매출 ${fmtManwon(result.revenue).replace("약 ", "")}이면`
      : `하루 ${input.callsPerDay.toLocaleString("ko-KR")}콜 × ${result.workDays}일이면`;

  let breakEvenText: string;
  if (result.breakEvenMonthly == null) {
    breakEvenText = "콜을 할수록 손해예요. 평균 요금이나 수수료를 확인해 주세요.";
  } else if (result.breakEvenMonthly === 0) {
    breakEvenText = "고정비가 없어서 첫 콜부터 남아요.";
  } else {
    breakEvenText = `한 달 ${result.breakEvenMonthly.toLocaleString("ko-KR")}콜(하루 ${result.breakEvenDaily?.toLocaleString(
      "ko-KR",
    )}콜)부터 남아요. 그 전 콜은 고정비 메우는 데 들어가요.`;
  }

  return (
    <div className="space-y-6">
      {/* 결과 카드 */}
      <section
        aria-live="polite"
        className="rounded-2xl border border-teal-200 dark:border-teal-900 bg-gradient-to-b from-teal-50 to-white dark:from-teal-950/30 dark:to-black p-6 sm:p-8"
      >
        <h2 className="text-sm font-semibold text-teal-700 dark:text-teal-300 mb-3">매출 말고 순익은?</h2>
        <p className="text-gray-700 dark:text-gray-300">{revenueLabel}</p>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">손에 남는 돈</p>
        <p className={`text-4xl font-bold tracking-tight ${negative ? "text-red-600" : ""}`}>
          {fmtManwon(result.netProfit)}
          {result.netMargin != null ? (
            <span className="ml-2 text-lg font-semibold text-gray-500">
              ({Math.round(result.netMargin * 100)}%)
            </span>
          ) : null}
        </p>

        <dl className="mt-5 grid grid-cols-3 gap-2 text-center">
          <div className="rounded-xl bg-white/70 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 px-2 py-3">
            <dt className="text-xs text-gray-500">콜당</dt>
            <dd className="font-semibold">{fmtWon(result.contributionPerCall)}</dd>
          </div>
          <div className="rounded-xl bg-white/70 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 px-2 py-3">
            <dt className="text-xs text-gray-500">하루</dt>
            <dd className="font-semibold">{fmtWon(result.profitPerDay)}</dd>
          </div>
          <div className="rounded-xl bg-white/70 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 px-2 py-3">
            <dt className="text-xs text-gray-500">시간당</dt>
            <dd className="font-semibold">
              {result.profitPerHour == null ? "-" : fmtWon(result.profitPerHour)}
            </dd>
          </div>
        </dl>
        <p className="mt-2 text-xs text-gray-500">
          콜당 = 고정비 빼기 전 한 콜에서 남는 돈. 하루·시간당 = 월 순익 ÷ 근무일(÷ 근무 시간).
        </p>

        <p className="mt-4 text-sm">
          <span className="font-semibold">손익분기</span> {breakEvenText}
        </p>

        {result.warnings.length > 0 ? (
          <ul className="mt-3 space-y-1 text-sm text-amber-700 dark:text-amber-400">
            {result.warnings.map((w) => (
              <li key={w}>! {w}</li>
            ))}
          </ul>
        ) : null}

        {result.assumedCount > 0 ? (
          <p className="mt-3 text-xs text-gray-500">가정값 {result.assumedCount}개 사용 중 — 아래에서 내 값으로 바꿔 보세요.</p>
        ) : null}

        <button
          type="button"
          onClick={() => setShowSteps((v) => !v)}
          className="mt-4 text-sm font-semibold text-teal-700 dark:text-teal-300"
          aria-expanded={stepsOpen}
        >
          {stepsOpen ? "▾" : "▸"} 무엇이 빠지나 보기
        </button>

        {stepsOpen ? (
          <table className="mt-3 w-full text-sm">
            <tbody>
              {result.steps.map((s, i) => (
                <tr key={s.label} className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-1.5 text-gray-700 dark:text-gray-300">
                    {i === 0 ? s.label : `− ${s.label}`}
                  </td>
                  <td className="py-1.5 text-right tabular-nums">{s.amount.toLocaleString("ko-KR")}</td>
                  <td className="py-1.5 pl-2 w-12 text-right text-xs text-gray-500 tabular-nums">
                    {result.revenue > 0 ? `${Math.round((Math.abs(s.amount) / result.revenue) * 100)}%` : ""}
                  </td>
                </tr>
              ))}
              <tr className="font-semibold">
                <td className="pt-2">순익</td>
                <td className={`pt-2 text-right tabular-nums ${negative ? "text-red-600" : ""}`}>
                  {result.netProfit.toLocaleString("ko-KR")}
                </td>
                <td className="pt-2 pl-2 text-right text-xs text-gray-500 tabular-nums">
                  {result.netMargin != null ? `${Math.round(result.netMargin * 100)}%` : ""}
                </td>
              </tr>
            </tbody>
          </table>
        ) : null}
      </section>

      {/* 입력 */}
      <section className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-3">매출</h2>
          <Toggle
            options={[
              { value: "monthly", label: "월 매출" },
              { value: "perCall", label: "콜 수 × 평균 요금" },
            ]}
            value={input.revenueMode}
            onChange={(v) => {
              if (v === "perCall" && input.revenueMode === "monthly") {
                // 월 매출 방식 값으로 하루 콜 수를 미리 채움: G ÷ P ÷ D
                const n = input.avgFare > 0 ? input.monthlyRevenue / input.avgFare / result.workDays : 0;
                setInput((prev) => ({ ...prev, revenueMode: "perCall", callsPerDay: Math.round(n * 10) / 10 }));
              } else {
                set("revenueMode", v as CalcInput["revenueMode"]);
              }
            }}
          />
          <div className="mt-4 space-y-4">
            {input.revenueMode === "monthly" ? (
              <div>
                <input
                  type="range"
                  min={REVENUE_MIN}
                  max={REVENUE_MAX}
                  step={100_000}
                  value={Math.min(REVENUE_MAX, Math.max(REVENUE_MIN, input.monthlyRevenue))}
                  onChange={(e) => set("monthlyRevenue", Number(e.target.value))}
                  className="w-full accent-teal-600"
                  aria-label="월 매출 슬라이더"
                />
                <NumberField label="월 매출" value={input.monthlyRevenue} onChange={num("monthlyRevenue")} suffix="원" />
              </div>
            ) : (
              <NumberField
                label="하루 콜 수"
                value={input.callsPerDay}
                onChange={(v) => set("callsPerDay", v ?? 0)}
                suffix="콜"
              />
            )}
            <div className="grid grid-cols-2 gap-3">
              <NumberField
                label="평균 요금"
                value={input.avgFare}
                onChange={num("avgFare")}
                suffix="원"
                assumed={input.avgFare === defaults.avgFare}
              />
              <NumberField label="근무일" value={input.workDays} onChange={num("workDays")} suffix="일" />
              <NumberField label="하루 근무 시간" value={input.hoursPerDay} onChange={num("hoursPerDay")} suffix="시간" />
              <div className="flex items-end pb-2.5 text-sm text-gray-600 dark:text-gray-400">
                → 월 {fmtCalls(result.monthlyCalls)}콜
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">수수료·세금</h2>
          <div className="grid grid-cols-2 gap-3 items-end">
            <NumberField label="수수료율" value={input.feeRate} onChange={num("feeRate")} suffix="%" />
            <label className="flex items-center gap-2 pb-2.5 text-sm">
              <input
                type="checkbox"
                className="w-5 h-5 accent-teal-600"
                checked={input.withholding}
                onChange={(e) => set("withholding", e.target.checked)}
              />
              원천징수 3.3%
            </label>
          </div>
          <p className="mt-2 text-xs text-gray-500">원천징수는 (요금 − 수수료)의 3.3%로, 앱과 같은 방식으로 계산해요.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">프로그램 사용료</h2>
          <ul className="space-y-3">
            {input.programs.map((p) => (
              <li key={p.id} className="rounded-xl border border-gray-200 dark:border-gray-800 p-3">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="w-5 h-5 accent-teal-600"
                    checked={p.enabled}
                    onChange={(e) => updateProgram(p.id, { enabled: e.target.checked })}
                    aria-label={`${p.name} 사용`}
                  />
                  {p.id.startsWith("custom-") ? (
                    <input
                      type="text"
                      value={p.name}
                      onChange={(e) => updateProgram(p.id, { name: e.target.value })}
                      className="flex-1 min-w-0 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-2 py-1"
                      aria-label="프로그램 이름"
                    />
                  ) : (
                    <span className="flex-1 font-medium">{p.name}</span>
                  )}
                  <select
                    value={p.mode}
                    onChange={(e) => updateProgram(p.id, { mode: e.target.value as FeeMode })}
                    className="rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-2 py-1 text-sm"
                    aria-label={`${p.name} 요금 방식`}
                  >
                    <option value="free">무료</option>
                    <option value="daily">일비</option>
                    <option value="monthly">월정액</option>
                  </select>
                  {p.id.startsWith("custom-") ? (
                    <button
                      type="button"
                      onClick={() => removeProgram(p.id)}
                      className="text-sm text-gray-500 hover:text-red-600"
                      aria-label="삭제"
                    >
                      ✕
                    </button>
                  ) : null}
                </div>
                {p.enabled && p.mode !== "free" ? (
                  <div className="mt-3 grid grid-cols-2 gap-3 items-end">
                    <NumberField
                      label={p.mode === "daily" ? "일비" : "월정액"}
                      value={p.amount}
                      onChange={(v) => updateProgram(p.id, { amount: v ?? 0 })}
                      suffix={p.mode === "daily" ? "원/일" : "원/월"}
                      assumed={
                        (p.id === "logi" && p.amount === 1000) || (p.id === "callmanner" && p.amount === 300)
                      }
                    />
                    {p.id === "logi" && p.mode === "daily" ? (
                      <div>
                        <span className="block text-sm text-gray-600 dark:text-gray-400 mb-1">채널 수</span>
                        <Toggle
                          options={[1, 2, 3].map((n) => ({ value: String(n), label: String(n) }))}
                          value={String(p.channels)}
                          onChange={(v) => updateProgram(p.id, { channels: Number(v) })}
                        />
                      </div>
                    ) : null}
                  </div>
                ) : null}
                {p.id === "logi" && p.enabled && p.mode === "daily" ? (
                  <p className="mt-2 text-xs text-gray-500">D1·D2·D3 채널마다 일비가 붙으면 채널 수를 고르세요.</p>
                ) : null}
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={addProgram}
            className="mt-3 text-sm font-semibold text-teal-700 dark:text-teal-300"
          >
            + 프로그램 추가
          </button>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">보험</h2>
          <Toggle
            options={[
              { value: "perCall", label: "건보" },
              { value: "monthly", label: "월보" },
              { value: "unknown", label: "모름" },
            ]}
            value={input.insuranceMode}
            onChange={(v) => set("insuranceMode", v as InsuranceMode)}
          />
          <div className="mt-3 grid grid-cols-2 gap-3">
            {input.insuranceMode === "perCall" ? (
              <NumberField
                label="건보 단가"
                value={input.insurancePerCall}
                onChange={num("insurancePerCall")}
                suffix="원/콜"
                assumed={input.insurancePerCall === defaults.insurancePerCall}
              />
            ) : null}
            {input.insuranceMode === "monthly" ? (
              <NumberField
                label="월보 금액"
                value={input.insuranceMonthly}
                onChange={(v) => set("insuranceMonthly", v)}
                suffix="원/월"
                placeholder="필수"
              />
            ) : null}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">교통비</h2>
          <div className="grid grid-cols-2 gap-3">
            <NumberField
              label="하루 복귀 교통비"
              value={input.returnCostPerDay}
              onChange={num("returnCostPerDay")}
              suffix="원/일"
              assumed={input.returnCostPerDay === defaults.returnCostPerDay}
            />
            <NumberField
              label="콜 사이 이동비"
              value={input.moveCostPerCall}
              onChange={num("moveCostPerCall")}
              suffix="원/콜"
            />
          </div>
          <p className="mt-2 text-xs text-gray-500">퇴근 복귀(택시·트루카·심야버스) 하루 합계를 넣어 주세요.</p>
        </div>

        <button
          type="button"
          onClick={() => {
            setInput(defaultInput());
            setShowSteps(false);
          }}
          className="inline-flex w-full sm:w-auto justify-center items-center rounded-xl px-5 py-3 font-semibold border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
        >
          기본값으로 되돌리기
        </button>
      </section>
    </div>
  );
}
