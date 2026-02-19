import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { chauffeurLogCopy, chauffeurLogLinks } from "@/lib/chauffeur-log";

export const metadata: Metadata = {
  title: "대리로그 내부테스터 모집 | January Effect",
  description: "대리로그 내부테스터 모집 및 내부테스트 참여 안내",
};

const testerApplyMailSubject = encodeURIComponent("[대리로그 내부테스터 신청]");
const testerApplyMailBody = encodeURIComponent(
  "이름:\n연락처:\nGoogle 계정 이메일(Google Play 스토어 로그인 계정):\n기기 모델:\nAndroid 버전:\n테스트 가능 시간대:\n"
);
const testerApplyMailTo = `mailto:${chauffeurLogCopy.feedbackEmail}?subject=${testerApplyMailSubject}&body=${testerApplyMailBody}`;

export default function ChauffeurLogInternalTestingPage() {
  const hasApplyForm = Boolean(chauffeurLogLinks.testerApplyForm);
  const hasKakaoOpenChat = Boolean(chauffeurLogLinks.kakaoOpenChat);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-3">
          대리로그 내부테스터 모집
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          접근성 기능(자동 입력) 안정화를 위해 내부테스터를 모집합니다. 신청 후
          초대된 Google 계정으로 Google Play 내부테스트에 참여해 주세요.
        </p>

        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 mb-6">
          <h2 className="text-xl font-semibold mb-4">1) 테스터 신청</h2>
          <div className="space-y-4">
            {hasApplyForm ? (
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
                <a
                  href={chauffeurLogLinks.testerApplyForm}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full sm:w-auto justify-center items-center rounded-xl px-5 py-3 font-semibold bg-teal-600 text-white hover:bg-teal-700 transition-colors"
                >
                  내부테스터 신청 폼 열기
                </a>
                {hasKakaoOpenChat ? (
                  <a
                    href={chauffeurLogLinks.kakaoOpenChat}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full sm:w-auto justify-center items-center rounded-xl px-5 py-3 font-semibold border border-yellow-300 text-yellow-900 bg-yellow-50 hover:bg-yellow-100 dark:border-yellow-700 dark:text-yellow-300 dark:bg-yellow-950/30 dark:hover:bg-yellow-950/50 transition-colors"
                  >
                    카카오톡 오픈채팅으로 문의하기
                  </a>
                ) : null}
              </div>
            ) : (
              <div className="space-y-3">
                <div className="rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 px-4 py-3 text-sm text-amber-800 dark:text-amber-200">
                  테스터 신청 Google Form URL이 아직 연결되지 않았습니다. 아래
                  이메일로 신청 정보를 보내 주세요.
                </div>
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
                  <a
                    href={testerApplyMailTo}
                    className="inline-flex w-full sm:w-auto justify-center items-center rounded-xl px-5 py-3 font-semibold border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                  >
                    이메일로 테스터 신청 ({chauffeurLogCopy.feedbackEmail})
                  </a>
                  {hasKakaoOpenChat ? (
                    <a
                      href={chauffeurLogLinks.kakaoOpenChat}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full sm:w-auto justify-center items-center rounded-xl px-5 py-3 font-semibold border border-yellow-300 text-yellow-900 bg-yellow-50 hover:bg-yellow-100 dark:border-yellow-700 dark:text-yellow-300 dark:bg-yellow-950/30 dark:hover:bg-yellow-950/50 transition-colors"
                    >
                      카카오톡 오픈채팅으로 문의하기
                    </a>
                  ) : null}
                </div>
              </div>
            )}
            {hasKakaoOpenChat ? (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                신청/초대 지연/설치 오류 문의는 오픈채팅이 가장 빠릅니다.
              </p>
            ) : null}
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 mb-6">
          <h2 className="text-xl font-semibold mb-4">2) 내부테스트 참여</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            초대 등록이 완료되면 아래 링크에서 내부테스트 참여가 가능합니다.
            Google Play에 로그인된 계정이 초대받은 계정과 동일해야 합니다.
          </p>
          <a
            href={chauffeurLogLinks.playInternalTest}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-xl px-5 py-3 font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Google Play 내부테스트 참여 링크 열기
          </a>
          <div className="mt-5 rounded-xl border border-blue-200 dark:border-blue-900/60 bg-blue-50 dark:bg-blue-950/20 p-4 sm:p-5">
            <h3 className="font-semibold mb-2">
              링크를 연 뒤 다음 순서로 진행해 주세요
            </h3>
            <ol className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>
                1) 웹 페이지에서{" "}
                <code className="font-mono text-xs bg-white/70 dark:bg-black/50 px-1.5 py-0.5 rounded">
                  You are a tester.
                </code>{" "}
                표시를 확인합니다.
              </li>
              <li>
                2) 같은 화면의{" "}
                <code className="font-mono text-xs bg-white/70 dark:bg-black/50 px-1.5 py-0.5 rounded">
                  download it on Google Play
                </code>{" "}
                를 누릅니다.
              </li>
              <li>
                3) Google Play 앱이 열리면 <strong>설치</strong> 버튼을 눌러
                설치합니다.
              </li>
              <li>
                4) 앱 실행 후 메인 상단{" "}
                <strong>`자동 입력 활성화`</strong> 배너의{" "}
                <strong>`설정`</strong> 버튼으로 들어가 접근성 권한을{" "}
                <strong>반드시 켜 주세요.</strong>
              </li>
            </ol>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <figure className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black p-3">
                <Image
                  src="/apps/chauffeur-log/internal-testing/step-02-play-install.jpeg"
                  alt="Google Play 내부테스트 웹 페이지에서 You are a tester와 download it on Google Play 링크가 보이는 화면"
                  width={648}
                  height={1404}
                  className="w-full h-auto rounded-lg"
                />
                <figcaption className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                  Step 1~2.{" "}
                  <code className="font-mono text-[11px] bg-gray-100 dark:bg-gray-900 px-1 py-0.5 rounded">
                    You are a tester.
                  </code>{" "}
                  확인 후{" "}
                  <code className="font-mono text-[11px] bg-gray-100 dark:bg-gray-900 px-1 py-0.5 rounded">
                    download it on Google Play
                  </code>
                  를 누르세요.
                </figcaption>
              </figure>
              <figure className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black p-3">
                <Image
                  src="/apps/chauffeur-log/internal-testing/step-01-tester-page.jpeg"
                  alt="Google Play 앱에서 내부테스트 앱 페이지와 설치 버튼이 보이는 화면"
                  width={648}
                  height={1404}
                  className="w-full h-auto rounded-lg"
                />
                <figcaption className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                  Step 3. Google Play 앱 화면으로 이동하면{" "}
                  <strong>설치</strong> 버튼을 눌러 진행하세요.
                </figcaption>
              </figure>
            </div>
            <figure className="mt-4 max-w-sm rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black p-3">
              <Image
                src="/apps/chauffeur-log/internal-testing/step-03-enable-auto-input.jpeg"
                alt="대리로그 메인 화면 상단 자동 입력 활성화 배너와 설정 버튼 예시"
                width={648}
                height={1404}
                className="w-full h-auto rounded-lg"
              />
              <figcaption className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                Step 4. 설치 후 앱을 실행해서 상단{" "}
                <strong>자동 입력 활성화</strong> 배너의 <strong>설정</strong>을
                눌러 권한을 켜 주세요.
              </figcaption>
            </figure>
            <div className="mt-4 rounded-lg border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50 dark:bg-emerald-950/20 px-4 py-3 text-sm text-emerald-900 dark:text-emerald-200">
              자동 입력 활성화는 이번 내부테스트의 핵심 확인 항목입니다. 기능
              검증을 위해 반드시 활성화 후 테스트를 진행해 주세요.
            </div>
          </div>
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
