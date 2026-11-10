import type { Metadata } from "next";

import { chauffeurLogLinks } from "@/lib/chauffeur-log";

import ProfitCalculator from "./ProfitCalculator";

export const metadata: Metadata = {
  title: "대리운전 매출 → 순익 계산기 | 대리로그",
  description:
    "월 매출 500만 원이면 실제로 얼마 남을까? 수수료·원천징수·프로그램 사용료·보험·복귀 교통비를 빼고 순익과 손익분기 콜 수를 계산해 보세요.",
  // 초안: 공개 전까지 검색 노출 막음
  robots: { index: false, follow: false },
  openGraph: {
    title: "대리운전 매출 → 순익 계산기",
    description: "수수료·보험·복귀 교통비까지 빼면 손에 얼마 남는지 계산해 보세요.",
    type: "website",
    locale: "ko_KR",
    siteName: "January Effect",
    images: [
      {
        url: "https://januaryeffect.app/apps/chauffeur-log/og-banner.png",
        width: 1200,
        height: 630,
        alt: "대리로그 — 매출 → 순익 계산기",
      },
    ],
  },
};

export default function ProfitCalculatorPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <div className="max-w-xl mx-auto">
        <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300 mb-4">
          신규 기사용
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
          월 500 번다는 게 매출이에요, 순익이에요?
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          흔히 말하는 월 400~700만 원은 매출(요금 합)이에요. 수수료, 원천징수, 프로그램 사용료,
          보험, 복귀 교통비를 빼면 손에 남는 돈이 얼마인지 계산해 보세요. 회색 &quot;가정값&quot;은
          오픈채팅에서 자주 나온 숫자라 내 상황에 맞게 바꿔 주세요.
        </p>

        <ProfitCalculator />

        <div className="mt-8 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 text-sm text-gray-600 dark:text-gray-400 space-y-2">
          <p>
            유류비·식비와 종합소득세 정산은 넣지 않았어요. 결과는 참고용 추정치예요.
          </p>
          <p>
            운행을 기록하면 대리로그 앱이 실제 순익을 매달 계산해 드려요.{" "}
            <a
              href={chauffeurLogLinks.playStore}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-teal-700 dark:text-teal-300 underline"
            >
              Google Play에서 설치
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
