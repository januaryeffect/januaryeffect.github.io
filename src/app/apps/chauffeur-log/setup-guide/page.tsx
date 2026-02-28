"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "chauffeur-log-setup-checklist";

interface CheckItem {
  id: string;
  label: string;
  hint?: string;
}

interface Section {
  title: string;
  path?: string;
  description?: string;
  items: CheckItem[];
  note?: string;
}

const sections: Section[] = [
  {
    title: "1. 앱 콘텐츠 등급 (Content Rating)",
    path: "Play Console > 대리로그 > 앱 콘텐츠 > 콘텐츠 등급",
    items: [
      { id: "cr-1", label: "콘텐츠 등급 설문 시작" },
      {
        id: "cr-2",
        label: '앱 카테고리: "유틸리티, 생산성, 커뮤니케이션 또는 기타" 선택',
      },
      {
        id: "cr-3",
        label: "모든 설문 항목 \"아니요\" 응답",
        hint: "폭력, 성적, 언어/욕설, 마약/알코올, 도박, 사용자 상호작용, 위치 공유 — 전부 아니요",
      },
      { id: "cr-4", label: "등급 저장 + 적용 (예상: 전체이용가 / Everyone)" },
    ],
  },
  {
    title: "2. 타겟층 선택 (Target Audience)",
    path: "Play Console > 대리로그 > 앱 콘텐츠 > 타겟층 및 콘텐츠",
    items: [
      { id: "ta-1", label: '타겟 연령대: "18세 이상" 선택' },
      {
        id: "ta-2",
        label: '아동 대상 여부: "아니요"',
        hint: '13세 미만 또는 13~17세 절대 선택 금지',
      },
      { id: "ta-3", label: "저장" },
    ],
  },
  {
    title: "3. 광고 선언 (Ads)",
    path: "Play Console > 대리로그 > 앱 콘텐츠 > 광고",
    items: [
      {
        id: "ad-1",
        label: '"아니요, 앱에 광고가 포함되어 있지 않습니다" 선택',
      },
      { id: "ad-2", label: "저장" },
    ],
  },
  {
    title: "4. 데이터 보안 설문 (Data Safety)",
    path: "Play Console > 대리로그 > 앱 콘텐츠 > 데이터 보안",
    description: "data-security-declaration.md 기반",
    items: [
      {
        id: "ds-1",
        label: '기본 질문 3개 모두 "예"',
        hint: "데이터 수집 여부, 전송 암호화, 삭제 방법 제공",
      },
      {
        id: "ds-2",
        label: "이메일 주소 (선택, 앱 기능, 미공유)",
        hint: "Google Drive 백업 인증용",
      },
      {
        id: "ds-3",
        label: "기타 재무 정보 (필수, 앱 기능, 미공유)",
        hint: "수입/지출 금액, 카테고리",
      },
      {
        id: "ds-4",
        label: "기타 사용자 생성 콘텐츠 (필수, 앱 기능, 미공유)",
        hint: "운행 기록: 출발지/도착지, 운행 시간, 호출 앱",
      },
      {
        id: "ds-5",
        label: "비정상 종료 로그 (필수, 분석, Google과 공유)",
        hint: "Firebase Crashlytics",
      },
      {
        id: "ds-6",
        label: "기타 앱 성능 데이터 (선택, 분석, Google과 공유)",
        hint: "Firebase Analytics",
      },
      {
        id: "ds-7",
        label: "기기 또는 기타 ID (필수, 앱 기능, 미공유)",
        hint: "해시된 Android ID",
      },
      { id: "ds-8", label: "설문 저장 + 제출" },
    ],
    note: "백업 파일은 Drive 루트 하위 \"대리로그 백업\" 폴더에 평문 SQLite로 저장. OAuth scope 3개: driveReadonlyScope(DCB 검색), driveAppdataScope(레거시), driveFileScope(자체 백업).",
  },
  {
    title: "5. 개인정보처리방침 URL 등록",
    path: "Play Console > 대리로그 > 앱 정보 > 앱 세부정보",
    items: [
      {
        id: "pp-1",
        label: "개인정보처리방침 URL 입력",
        hint: "https://januaryeffect.app/apps/chauffeur-log/privacy/",
      },
      { id: "pp-2", label: "저장 후 링크 클릭하여 접속 확인" },
    ],
  },
  {
    title: "6. 접근성 서비스 선언",
    path: "Play Console > 대리로그 > 앱 콘텐츠 > 접근성 서비스",
    items: [
      { id: "ac-1", label: '"앱이 접근성 서비스를 사용합니까?" → 예' },
      {
        id: "ac-2",
        label: "사용 목적 입력 (한국어)",
        hint: "대리운전 호출 앱의 운행 완료 알림에서 수입 정보를 자동으로 읽어 기록 보조",
      },
      { id: "ac-3", label: "저장" },
    ],
  },
  {
    title: "7. 공개 테스트 승격",
    path: "Play Console > 대리로그 > 테스트 > 공개 테스트",
    items: [
      { id: "ot-1", label: "앱 콘텐츠 대시보드 모든 항목 녹색 확인" },
      { id: "ot-2", label: '국가/지역: "한국 (KR)" 선택' },
      {
        id: "ot-3",
        label: "테스터 피드백 이메일: januaryeffect.app@gmail.com",
      },
      { id: "ot-4", label: "빌드 선택 (v1.1.9 build 28)" },
      { id: "ot-5", label: "릴리즈 노트 확인" },
      { id: "ot-6", label: '저장 → "검토 제출" 클릭' },
    ],
    note: "첫 공개 테스트 제출 시 Google 검토 3-7 영업일 소요",
  },
];

export default function SetupGuidePage() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setChecked(JSON.parse(saved));
    } catch {
      /* ignore */
    }
    setMounted(true);
  }, []);

  const toggle = useCallback(
    (id: string) => {
      setChecked((prev) => {
        const next = { ...prev, [id]: !prev[id] };
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        } catch {
          /* ignore */
        }
        return next;
      });
    },
    [],
  );

  const totalItems = sections.reduce((n, s) => n + s.items.length, 0);
  const doneItems = Object.values(checked).filter(Boolean).length;
  const pct = totalItems > 0 ? Math.round((doneItems / totalItems) * 100) : 0;

  if (!mounted) return null;

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
          Play Console 공개 테스트 설정 가이드
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">
          대리로그 v1.1.9 &middot; 2026-02-28
        </p>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm mb-1">
            <span className="font-medium">
              진행률: {doneItems}/{totalItems}
            </span>
            <span className="text-gray-500">{pct}%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-teal-500 transition-all duration-300 rounded-full"
              style={{ width: `${pct}%` }}
            />
          </div>
          {pct === 100 && (
            <p className="mt-2 text-sm text-teal-600 dark:text-teal-400 font-semibold">
              모든 항목 완료! fastlane deploy_open_testing 실행 가능
            </p>
          )}
        </div>

        {sections.map((section) => {
          const sectionDone = section.items.every((item) => checked[item.id]);
          return (
            <div
              key={section.title}
              className="mb-8 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden"
            >
              <div
                className={`px-5 py-3 flex items-center justify-between ${
                  sectionDone
                    ? "bg-teal-50 dark:bg-teal-950/30"
                    : "bg-gray-50 dark:bg-gray-900"
                }`}
              >
                <h2 className="font-semibold text-sm sm:text-base">
                  {sectionDone ? "\u2705 " : ""}
                  {section.title}
                </h2>
              </div>
              {section.path && (
                <p className="px-5 pt-2 text-xs text-gray-400 font-mono">
                  {section.path}
                </p>
              )}
              <ul className="divide-y divide-gray-100 dark:divide-gray-800">
                {section.items.map((item) => (
                  <li key={item.id} className="px-5 py-3">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={!!checked[item.id]}
                        onChange={() => toggle(item.id)}
                        className="mt-0.5 h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500 flex-shrink-0"
                      />
                      <div>
                        <span
                          className={`text-sm ${
                            checked[item.id]
                              ? "line-through text-gray-400"
                              : "text-gray-800 dark:text-gray-200"
                          }`}
                        >
                          {item.label}
                        </span>
                        {item.hint && (
                          <p className="text-xs text-gray-400 mt-0.5">
                            {item.hint}
                          </p>
                        )}
                      </div>
                    </label>
                  </li>
                ))}
              </ul>
              {section.note && (
                <div className="px-5 py-2 bg-amber-50 dark:bg-amber-950/20 border-t border-amber-200 dark:border-amber-800">
                  <p className="text-xs text-amber-700 dark:text-amber-300">
                    {section.note}
                  </p>
                </div>
              )}
            </div>
          );
        })}

        <div className="mt-8 p-4 rounded-xl border border-gray-200 dark:border-gray-800 text-sm text-gray-500">
          <p className="font-medium text-gray-700 dark:text-gray-300 mb-2">
            완료 후 CLI 명령
          </p>
          <pre className="bg-gray-100 dark:bg-gray-900 rounded-lg p-3 text-xs overflow-x-auto">
{`cd /Users/wanbok/workspace/chauffeur_log/android
fastlane deploy_open_testing`}
          </pre>
          <p className="mt-2 text-xs">
            체크 상태는 브라우저 localStorage에 저장됩니다.
          </p>
        </div>
      </div>
    </div>
  );
}
