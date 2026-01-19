# PRD (Product Requirements Document)

## 프로젝트 배경 및 목적

**(주)제뉴어리이펙트** 공식 홈페이지 프로젝트입니다.

### 목적
- Apple Developer Program 법인 등록
- Google Play Developer 법인 등록
- 회사 정보 및 연락처 공개
- 앱별 개인정보처리방침 제공

### 필요 요건

**Apple Developer Program 요구사항:**
- D-U-N-S 번호
- 공개 접근 가능한 웹사이트
- 법인 연락처 정보
- 개인정보처리방침

**Google Play Developer 요구사항:**
- 법인 정보
- 개인정보처리방침 URL
- 연락처 이메일

---

## 기술 스택

| 기술 | 선택 | 선택 이유 |
|------|------|-----------|
| **Framework** | Next.js 15 (App Router) | 정적 사이트 생성(SSG) 지원, SEO 최적화 |
| **Language** | TypeScript | 타입 안전성, 개발 생산성 |
| **Styling** | Tailwind CSS | 빠른 스타일링, 반응형 디자인 |
| **Hosting** | GitHub Pages | 무료, 간편한 배포, 커스텀 도메인 지원 |
| **Domain** | januaryeffect.app | 브랜드 아이덴티티 |

### 기술 결정 사항

1. **Next.js Static Export**: `output: 'export'` 설정으로 완전한 정적 사이트 생성
2. **다국어 지원**: URL 경로 기반 (`/privacy/`, `/privacy/en/`)
3. **GitHub Actions**: 자동 빌드 및 배포

---

## 페이지 구조

```
/                           - 메인 페이지 (회사 소개)
/privacy/                   - 회사 일반 개인정보처리방침 (한국어)
/privacy/en/                - 회사 일반 개인정보처리방침 (영어)
/privacy/chauffeur-log/     - 대리로그 앱 개인정보처리방침 (한국어)
/privacy/chauffeur-log/en/  - 대리로그 앱 개인정보처리방침 (영어)
/terms/                     - 서비스 이용약관 (한국어)
/terms/en/                  - 서비스 이용약관 (영어)
```

---

## 앱별 개인정보처리방침

### 대리로그 (Chauffeur Log)

| 언어 | URL |
|------|-----|
| 한국어 | https://januaryeffect.app/privacy/chauffeur-log/ |
| 영어 | https://januaryeffect.app/privacy/chauffeur-log/en/ |

**수집 정보:**
- 위치 정보 (운행 기록용)
- 접근성 서비스 (화면 읽기 기능)

---

## 회사 정보

- **회사명**: (주)제뉴어리이펙트 / January Effect Co., Ltd.
- **이메일**: contact@januaryeffect.app
- **도메인**: januaryeffect.app

---

## 참고자료

### Apple Developer

- [Apple Developer Program 가입](https://developer.apple.com/programs/enroll/)
- [D-U-N-S 번호 안내](https://developer.apple.com/support/D-U-N-S/)
- [App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)

### Google Play

- [Google Play Console 가입](https://play.google.com/console/signup)
- [개인정보처리방침 요구사항](https://support.google.com/googleplay/android-developer/answer/10144311)

### 기술 문서

- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages 문서](https://docs.github.com/pages)
- [Tailwind CSS](https://tailwindcss.com/docs)
