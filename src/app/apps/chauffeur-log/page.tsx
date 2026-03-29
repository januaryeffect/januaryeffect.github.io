import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { chauffeurLogCopy, chauffeurLogLinks } from "@/lib/chauffeur-log";

export const metadata: Metadata = {
  title: "대리로그 | January Effect",
  description:
    "대리운전 기사님을 위한 운행 기록 및 수입/지출 관리 앱, 대리로그 소개 페이지",
  openGraph: {
    title: "대리로그 — 운행의 시작과 마무리",
    description:
      "대리기사의 운행 기록과 정산을 한 번에 관리하는 앱. 자동 운행 기록, 앱별 통계, Google Drive 백업.",
    type: "website",
    locale: "ko_KR",
    siteName: "January Effect",
    images: [
      {
        url: "https://januaryeffect.app/apps/chauffeur-log/og-banner.png",
        width: 1200,
        height: 630,
        alt: "대리로그 — 운행의 시작과 마무리",
      },
    ],
  },
};

const screenshots = [
  {
    src: "/apps/chauffeur-log/screenshots/main-list.png",
    alt: "대리로그 메인 목록 화면",
  },
  {
    src: "/apps/chauffeur-log/screenshots/ride-entry.png",
    alt: "대리로그 운행 입력 화면",
  },
  {
    src: "/apps/chauffeur-log/screenshots/stats-monthly.png",
    alt: "대리로그 월간 통계 화면",
  },
  {
    src: "/apps/chauffeur-log/screenshots/settings.png",
    alt: "대리로그 설정 화면",
  },
];

const features = [
  "운행 기록 관리: 날짜/시간/출발지/도착지/경유지/메모",
  "수입·지출 정산: 요금·수수료·교통비 등 항목별 기록",
  "앱별 수입 통계: 카카오대리·티맵대리 등 앱별 분석",
  "자동 운행 기록: 호출 앱 알림 감지 후 자동 기록 (베타)",
  "통계 리포트: 일별/월별 수익 확인 및 이미지 공유",
  "데이터 이전: 대리가계부·최강대리 데이터 마이그레이션",
  "백업/복원: Google Drive 연동",
  "내보내기: CSV/Excel, 종합소득세 증빙 리포트",
];

export default function ChauffeurLogPage() {
  const hasKakaoOpenChat = Boolean(chauffeurLogLinks.kakaoOpenChat);

  return (
    <div className="bg-white dark:bg-black">
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-gradient-to-b from-teal-50 to-white dark:from-teal-950/30 dark:to-black p-8 sm:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <Image
                src="/apps/chauffeur-log/icon.png"
                alt="대리로그 앱 아이콘"
                className="w-28 h-28 rounded-2xl shadow-lg shadow-teal-500/20"
                width={112}
                height={112}
              />
              <div className="text-center lg:text-left">
                <div className="flex items-center gap-2 justify-center lg:justify-start mb-2">
                  <p className="text-sm font-semibold text-teal-700 dark:text-teal-300">
                    Chauffeur Log
                  </p>
                  <span className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300">
                    공개 테스트
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
                  {chauffeurLogCopy.appNameKo}
                </h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                  {chauffeurLogCopy.catchphrase}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {chauffeurLogCopy.oneLiner}
                </p>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <a
                    href={chauffeurLogLinks.playStore}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-xl px-5 py-3 font-semibold bg-teal-600 text-white hover:bg-teal-700 transition-colors"
                  >
                    Google Play에서 설치
                  </a>
                  <Link
                    href={chauffeurLogLinks.openTestingPage}
                    className="inline-flex items-center rounded-xl px-5 py-3 font-semibold border border-teal-600 text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-950/30 transition-colors"
                  >
                    공개 테스트 참여 안내
                  </Link>
                  <Link
                    href={chauffeurLogLinks.feedbackPage}
                    className="inline-flex items-center rounded-xl px-5 py-3 font-semibold border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                  >
                    피드백 보내기
                  </Link>
                  {hasKakaoOpenChat ? (
                    <a
                      href={chauffeurLogLinks.kakaoOpenChat}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-xl px-5 py-3 font-semibold border border-yellow-300 text-yellow-900 bg-yellow-50 hover:bg-yellow-100 dark:border-yellow-700 dark:text-yellow-300 dark:bg-yellow-950/30 dark:hover:bg-yellow-950/50 transition-colors"
                    >
                      카카오톡 오픈채팅
                    </a>
                  ) : null}
                </div>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  현재 공개 테스트 중입니다. 써보시고 의견 남겨 주시면 앱 개선에
                  바로 반영합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">핵심 기능</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {features.map((feature) => (
              <li
                key={feature}
                className="rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3 text-gray-700 dark:text-gray-300"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">앱 화면</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {screenshots.map((shot) => (
              <div
                key={shot.src}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden bg-gray-50 dark:bg-gray-900"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  className="w-full h-auto"
                  width={1080}
                  height={2400}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-5xl mx-auto rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-3">지원 및 안내</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            정책/개인정보 관련 내용은 아래 문서를 확인해 주세요.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link
              href={chauffeurLogLinks.privacyPolicy}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              대리로그 개인정보처리방침
            </Link>
            <a
              href={`mailto:${chauffeurLogCopy.feedbackEmail}`}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              이메일 문의: {chauffeurLogCopy.feedbackEmail}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
