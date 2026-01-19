# 배포 가이드 (Deployment Guide)

## 개발 환경 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

http://localhost:3000 에서 확인

---

## 빌드

```bash
# 정적 사이트 빌드
npm run build
```

빌드 결과물은 `out/` 폴더에 생성됩니다.

---

## GitHub Pages 배포

### 방법 1: GitHub Actions 자동 배포 (권장)

1. `.github/workflows/deploy.yml` 파일 생성:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

2. GitHub 저장소 설정:
   - Settings > Pages > Source: `gh-pages` branch

### 방법 2: 수동 배포

```bash
# 빌드
npm run build

# gh-pages 브랜치에 배포
npx gh-pages -d out
```

---

## 커스텀 도메인 연결

### 1. DNS 설정 (도메인 제공업체에서)

**A 레코드 (Apex 도메인):**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME 레코드 (www 서브도메인):**
```
www -> januaryeffect.github.io
```

### 2. GitHub 설정

1. `public/CNAME` 파일 생성:
```
januaryeffect.app
```

2. Settings > Pages > Custom domain: `januaryeffect.app`

3. "Enforce HTTPS" 체크

---

## HTTPS 확인

GitHub Pages는 커스텀 도메인에 자동으로 Let's Encrypt SSL 인증서를 발급합니다.

- 도메인 연결 후 최대 24시간 소요
- Settings > Pages에서 "Enforce HTTPS" 활성화 확인

---

## 트러블슈팅

### 빌드 실패

```bash
# node_modules 삭제 후 재설치
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 에러

- `next.config.ts`에 `output: 'export'` 설정 확인
- `trailingSlash: true` 설정 확인

### 이미지 로드 실패

- Next.js Image 컴포넌트 사용 시 `unoptimized: true` 설정 필요
- 정적 export에서는 이미지 최적화 API 사용 불가

### 커스텀 도메인 연결 안 됨

1. DNS 전파 대기 (최대 48시간)
2. DNS 확인: `dig januaryeffect.app`
3. `public/CNAME` 파일 존재 확인

### HTTPS 인증서 발급 지연

- DNS 설정 완료 후 최대 24시간 대기
- GitHub 상태 페이지 확인: https://www.githubstatus.com/
