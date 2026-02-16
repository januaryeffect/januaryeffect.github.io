import type { Metadata } from "next";
import Link from "next/link";

import { chauffeurLogCopy, chauffeurLogLinks } from "@/lib/chauffeur-log";

export const metadata: Metadata = {
  title: "대리로그 피드백 | January Effect",
  description: "대리로그 사용자 피드백 접수 페이지",
};

export default function ChauffeurLogFeedbackPage() {
  const hasGoogleForm = Boolean(chauffeurLogLinks.feedbackForm);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-3">대리로그 피드백</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          기능 요청, 불편사항, 오류 제보를 보내주세요. 배포 품질 개선에 바로 반영합니다.
        </p>

        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8">
          <h2 className="text-xl font-semibold mb-4">접수 방법</h2>
          <div className="space-y-4">
            {hasGoogleForm ? (
              <a
                href={chauffeurLogLinks.feedbackForm}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-xl px-5 py-3 font-semibold bg-teal-600 text-white hover:bg-teal-700 transition-colors"
              >
                Google Form으로 피드백 보내기
              </a>
            ) : (
              <div className="rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 px-4 py-3 text-sm text-amber-800 dark:text-amber-200">
                Google Form URL이 아직 연결되지 않았습니다. 임시로 이메일 접수를 사용해 주세요.
              </div>
            )}

            <a
              href={`mailto:${chauffeurLogCopy.feedbackEmail}?subject=[대리로그 피드백]`}
              className="inline-flex items-center rounded-xl px-5 py-3 font-semibold border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            >
              이메일로 보내기 ({chauffeurLogCopy.feedbackEmail})
            </a>
          </div>
        </div>

        <div className="mt-8 text-sm">
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
