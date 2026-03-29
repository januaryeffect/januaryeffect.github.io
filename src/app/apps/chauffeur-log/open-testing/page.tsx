import type { Metadata } from "next";
import Link from "next/link";

import { chauffeurLogCopy, chauffeurLogLinks } from "@/lib/chauffeur-log";

export const metadata: Metadata = {
  title: "대리로그 공개 테스트 | January Effect",
  description:
    "대리로그 공개 테스트에 참여하고 피드백으로 앱을 함께 만들어 주세요.",
};

export default function ChauffeurLogOpenTestingPage() {
  const hasKakaoOpenChat = Boolean(chauffeurLogLinks.kakaoOpenChat);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300 mb-4">
          공개 테스트 진행 중
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-3">
          대리로그 공개 테스트
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          대리기사 분들의 의견을 받아 앱을 다듬고 있습니다. Google Play에서 바로
          설치하고 써보신 뒤 피드백을 남겨 주세요.
        </p>

        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 mb-6">
          <h2 className="text-xl font-semibold mb-4">참여 방법</h2>
          <ol className="space-y-5">
            <li className="flex gap-4">
              <span className="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 text-sm font-bold">
                1
              </span>
              <div>
                <h3 className="font-semibold mb-1">앱 설치</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Google Play에서 &quot;대리로그&quot;를 검색하거나 아래 버튼을
                  눌러 설치하세요.
                </p>
                <a
                  href={chauffeurLogLinks.playStore}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-xl px-5 py-3 font-semibold bg-teal-600 text-white hover:bg-teal-700 transition-colors"
                >
                  Google Play에서 설치
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 text-sm font-bold">
                2
              </span>
              <div>
                <h3 className="font-semibold mb-1">자동 입력 설정 (선택)</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  앱 실행 후 상단 &quot;자동 입력 활성화&quot; 배너에서
                  설정을 켜면, 호출 앱 알림을 감지해 운행 기록을 자동으로
                  채워 줍니다. 이 기능은 선택사항이며, 수동 입력만으로도 모든
                  기능을 사용할 수 있습니다.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 text-sm font-bold">
                3
              </span>
              <div>
                <h3 className="font-semibold mb-1">사용 후 피드백</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  불편한 점, 필요한 기능, 오류 등 어떤 의견이든 환영합니다.
                  피드백은 앱 개선에 바로 반영됩니다.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={chauffeurLogLinks.feedbackPage}
                    className="inline-flex w-full sm:w-auto justify-center items-center rounded-xl px-5 py-3 font-semibold border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                  >
                    피드백 보내기
                  </Link>
                  {hasKakaoOpenChat ? (
                    <a
                      href={chauffeurLogLinks.kakaoOpenChat}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full sm:w-auto justify-center items-center rounded-xl px-5 py-3 font-semibold border border-yellow-300 text-yellow-900 bg-yellow-50 hover:bg-yellow-100 dark:border-yellow-700 dark:text-yellow-300 dark:bg-yellow-950/30 dark:hover:bg-yellow-950/50 transition-colors"
                    >
                      카카오톡 오픈채팅 참여
                    </a>
                  ) : null}
                </div>
              </div>
            </li>
          </ol>
        </div>

        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 mb-6">
          <h2 className="text-xl font-semibold mb-4">주요 기능</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "운행별 매출/수수료/실수령액 자동 계산",
              "카카오대리, 티맵대리 등 앱별 수입 통계",
              "자동 운행 기록 (베타) — 호출 앱 알림 감지",
              "대리가계부/최강대리 데이터 가져오기",
              "월간/일일 실적 이미지 공유 (등급 시스템)",
              "Google Drive 백업/복원",
              "CSV/Excel 내보내기",
              "종합소득세 증빙 리포트",
            ].map((feature) => (
              <div
                key={feature}
                className="rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3 text-sm text-gray-700 dark:text-gray-300"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>

        {chauffeurLogLinks.eventForm ? (
          <div className="rounded-2xl border-2 border-amber-400 dark:border-amber-600 bg-amber-50 dark:bg-amber-950/20 p-6 sm:p-8 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl" role="img" aria-label="gift">
                🎁
              </span>
              <h2 className="text-xl font-semibold">얼리어답터 이벤트</h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-5">
              대리로그를 설치하고 실제 운행 기록을 공유해 주시면 편의점
              이용권을 드립니다!
            </p>

            <div className="space-y-4 mb-6">
              <div className="rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-4">
                <div className="flex items-start gap-3">
                  <span className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 text-sm font-bold">
                    1
                  </span>
                  <div>
                    <h3 className="font-semibold mb-1">
                      설치 + 오픈채팅 입장 + 운행 기록 3건 + 공유 인증
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      앱을 설치하고,{" "}
                      <a
                        href={chauffeurLogLinks.kakaoOpenChat}
                        target="_blank"
                        rel="noreferrer"
                        className="text-yellow-700 dark:text-yellow-400 underline"
                      >
                        카카오톡 오픈채팅
                      </a>
                      에 입장한 뒤, 운행 기록을 3건 이상 입력하고 공유
                      이미지를 채팅방에 올려 주세요.{" "}
                      <strong className="text-amber-700 dark:text-amber-400">
                        GS25 금액권(5,000원)
                      </strong>
                      을 카카오톡 선물하기로 보내 드립니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-4">
                <div className="flex items-start gap-3">
                  <span className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm font-bold">
                    2
                  </span>
                  <div>
                    <h3 className="font-semibold mb-1">
                      14일간 10건 이상 기록 + 피드백 1건
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      2주 동안 꾸준히 사용하시고 간단한 피드백(개선점, 좋았던
                      점)을 남겨 주시면{" "}
                      <strong className="text-amber-700 dark:text-amber-400">
                        GS25 금액권(10,000원)
                      </strong>
                      을 카카오톡 선물하기로 보내 드립니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={chauffeurLogLinks.eventForm}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full sm:w-auto justify-center items-center rounded-xl px-6 py-3 font-semibold bg-amber-500 text-white hover:bg-amber-600 transition-colors"
            >
              이벤트 인증 폼 제출하기
            </a>

            <p className="mt-4 text-xs text-gray-500 dark:text-gray-500">
              GS25 금액권은 인증 확인 후 카카오톡 선물하기로 발송됩니다.
              오픈채팅 입장 필수. 1인 1회 참여 가능합니다.
              본 이벤트는 금액권 소진 시 사전 고지 없이 종료될 수 있습니다.
            </p>
          </div>
        ) : null}

        <div className="text-sm">
          <Link
            href="/apps/chauffeur-log/"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            대리로그 소개 페이지로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}
