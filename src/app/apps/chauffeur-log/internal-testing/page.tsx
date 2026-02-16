import type { Metadata } from "next";
import Link from "next/link";

import { chauffeurLogCopy, chauffeurLogLinks } from "@/lib/chauffeur-log";

export const metadata: Metadata = {
  title: "대리로그 내부테스터 모집 | January Effect",
  description: "대리로그 내부테스터 모집 및 접근성 테스트 로그 수집 안내",
};

const testerApplyMailSubject = encodeURIComponent("[대리로그 내부테스터 신청]");
const testerApplyMailBody = encodeURIComponent(
  "이름:\n연락처:\nGoogle 계정 이메일(Play 스토어 로그인 계정):\n기기 모델:\nAndroid 버전:\n테스트 가능 시간대:\n"
);
const testerApplyMailTo = `mailto:${chauffeurLogCopy.feedbackEmail}?subject=${testerApplyMailSubject}&body=${testerApplyMailBody}`;

const logReportMailSubject = encodeURIComponent("[대리로그 접근성 로그 제보]");
const logReportMailBody = encodeURIComponent(
  "앱 버전:\n기기 모델 / Android 버전:\n자동 입력 활성화 상태:\n문제 발생 화면/시점:\n재현 단계:\n예상 결과:\n실제 결과:\n발생 시각:\n첨부(스크린샷/영상):\n"
);
const logReportMailTo = `mailto:${chauffeurLogCopy.feedbackEmail}?subject=${logReportMailSubject}&body=${logReportMailBody}`;

export default function ChauffeurLogInternalTestingPage() {
  const hasApplyForm = Boolean(chauffeurLogLinks.testerApplyForm);
  const logFormUrl =
    chauffeurLogLinks.accessibilityLogForm || chauffeurLogLinks.feedbackForm;
  const hasLogForm = Boolean(logFormUrl);

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

        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 mb-8">
          <h2 className="text-xl font-semibold mb-4">3) 접근성 테스트 로그 제출</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            자동 입력 활성화 이슈를 재현할 수 있도록 아래 항목을 포함해 로그를
            보내 주세요.
          </p>

          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-5">
            <li>- 앱 버전</li>
            <li>- 기기 모델 / Android 버전</li>
            <li>- 자동 입력(접근성) 활성화 여부</li>
            <li>- 문제 발생 화면/단계와 재현 순서</li>
            <li>- 예상 결과와 실제 결과</li>
            <li>- 스크린샷 또는 짧은 영상</li>
          </ul>

          <div className="flex flex-wrap gap-3">
            {hasLogForm ? (
              <a
                href={logFormUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-xl px-5 py-3 font-semibold bg-teal-600 text-white hover:bg-teal-700 transition-colors"
              >
                테스트 로그 폼 열기
              </a>
            ) : null}
            <a
              href={logReportMailTo}
              className="inline-flex items-center rounded-xl px-5 py-3 font-semibold border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            >
              이메일로 로그 보내기
            </a>
            <Link
              href={chauffeurLogLinks.feedbackPage}
              className="inline-flex items-center rounded-xl px-5 py-3 font-semibold border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            >
              피드백 페이지
            </Link>
          </div>
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
