import type { Metadata } from "next";
import Link from "next/link";

import { chauffeurLogCopy, chauffeurLogLinks } from "@/lib/chauffeur-log";

export const metadata: Metadata = {
  title: "대리로그 내부테스터 모집 | January Effect",
  description: "대리로그 내부테스터 모집 및 내부테스트 참여 안내",
};

const testerApplyMailSubject = encodeURIComponent("[대리로그 내부테스터 신청]");
const testerApplyMailBody = encodeURIComponent(
  "이름:\n연락처:\nGoogle 계정 이메일(Play 스토어 로그인 계정):\n기기 모델:\nAndroid 버전:\n테스트 가능 시간대:\n"
);
const testerApplyMailTo = `mailto:${chauffeurLogCopy.feedbackEmail}?subject=${testerApplyMailSubject}&body=${testerApplyMailBody}`;

export default function ChauffeurLogInternalTestingPage() {
  const hasApplyForm = Boolean(chauffeurLogLinks.testerApplyForm);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-3">
          대리로그 내부테스터 모집
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          접근성 기능(자동 입력) 안정화를 위해 내부테스터를 모집합니다. 신청 후
          초대된 Google 계정으로 Play 내부테스트에 참여해 주세요.
        </p>

        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 mb-6">
          <h2 className="text-xl font-semibold mb-4">1) 테스터 신청</h2>
          <div className="space-y-4">
            {hasApplyForm ? (
              <a
                href={chauffeurLogLinks.testerApplyForm}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-xl px-5 py-3 font-semibold bg-teal-600 text-white hover:bg-teal-700 transition-colors"
              >
                내부테스터 신청 폼 열기
              </a>
            ) : (
              <div className="space-y-3">
                <div className="rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 px-4 py-3 text-sm text-amber-800 dark:text-amber-200">
                  테스터 신청 Google Form URL이 아직 연결되지 않았습니다. 아래
                  이메일로 신청 정보를 보내 주세요.
                </div>
                <a
                  href={testerApplyMailTo}
                  className="inline-flex items-center rounded-xl px-5 py-3 font-semibold border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                >
                  이메일로 테스터 신청 ({chauffeurLogCopy.feedbackEmail})
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 mb-6">
          <h2 className="text-xl font-semibold mb-4">2) 내부테스트 참여</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            초대 등록이 완료되면 아래 링크에서 내부테스트 참여가 가능합니다.
            Play에 로그인된 계정이 초대받은 계정과 동일해야 합니다.
          </p>
          <a
            href={chauffeurLogLinks.playInternalTest}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-xl px-5 py-3 font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Play 내부테스트 참여 링크 열기
          </a>
          <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>- `App not available`이 보이면 계정 초대 반영을 확인해 주세요.</li>
            <li>- 초대 후 반영까지 10~30분 정도 소요될 수 있습니다.</li>
          </ul>
        </div>

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
