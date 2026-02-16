import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { chauffeurLogCopy, chauffeurLogLinks } from "@/lib/chauffeur-log";

export const metadata: Metadata = {
  title: "대리로그 | January Effect",
  description:
    "대리운전 기사님을 위한 운행 기록 및 수입/지출 관리 앱, 대리로그 소개 페이지",
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
  "통계 리포트: 일별/월별 수익 확인",
  "데이터 이전: 대리가계부(DCB) 데이터 마이그레이션",
  "백업/복원: Google Drive 연동",
];

export default function ChauffeurLogPage() {
  const hasInternalAppSharing = Boolean(chauffeurLogLinks.internalAppSharing);

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
                <p className="text-sm font-semibold text-teal-700 dark:text-teal-300 mb-2">
                  Chauffeur Log
                </p>
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
                    href={chauffeurLogLinks.playInternalTest}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-xl px-5 py-3 font-semibold bg-teal-600 text-white hover:bg-teal-700 transition-colors"
                  >
                    내부테스트 참여
                  </a>
                  {hasInternalAppSharing ? (
                    <a
                      href={chauffeurLogLinks.internalAppSharing}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-xl px-5 py-3 font-semibold border border-teal-600 text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-950/30 transition-colors"
                    >
                      빠른 설치(IAS)
                    </a>
                  ) : null}
                  <Link
                    href={chauffeurLogLinks.feedbackPage}
                    className="inline-flex items-center rounded-xl px-5 py-3 font-semibold border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                  >
                    피드백 보내기
                  </Link>
                </div>
                {!hasInternalAppSharing ? (
                  <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                    현재 설치 링크는 내부테스트(옵트인) 방식으로 제공됩니다.
                  </p>
                ) : null}
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
