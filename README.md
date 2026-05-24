# Vona — Landing Page

AI Voice 컴패니언 **Vona**의 사전 신청 랜딩 페이지.

- **도메인**: [vona.kr](https://vona.kr)
- **스택**: Next.js 16 · React 19 · TypeScript · Tailwind CSS v4
- **호스팅**: Vercel
- **이메일**: Resend (사전신청 알림 → `leokim7@gmail.com`)
- **디자인**: Figma `Landing_web` (1440 × 5295)

## 빠른 시작

```bash
# 1) 의존성
npm install

# 2) 환경변수 — .env.example을 복사해 .env.local로
cp .env.example .env.local
#   RESEND_API_KEY=re_xxx  ← https://resend.com/api-keys
#   (테스트만 할 거면 RESEND_FROM=onboarding@resend.dev 로)

# 3) 개발 서버
npm run dev
# → http://localhost:3000
```

## 환경변수

| 변수 | 필수 | 기본값 | 설명 |
|---|---|---|---|
| `RESEND_API_KEY` | ✅ | — | Resend API 키 |
| `RESEND_FROM` | ❌ | `Vona <noreply@vona.kr>` | 발신자 — 도메인이 verify 되어야 함 |
| `SUBSCRIBE_NOTIFY_TO` | ❌ | `leokim7@gmail.com` | 쉼표로 여러 명 가능 |
| `NEXT_PUBLIC_SITE_URL` | ❌ | `https://vona.kr` | OG/sitemap에 사용 |
| `NEXT_PUBLIC_GA_ID` | ❌ | — | GA4 측정 ID (`G-XXXXXXXXXX`) |

## 디렉토리 구조

```
app/
├── _components/        ← 9개 섹션 + 공통 컴포넌트
│   ├── NavBar.tsx
│   ├── Hero.tsx
│   ├── WhatIsVona.tsx
│   ├── ThreeSteps.tsx
│   ├── TwoPersonas.tsx
│   ├── WhyPhoneCall.tsx
│   ├── TrustSafety.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   ├── EmailForm.tsx
│   ├── RotatingWord.tsx
│   ├── SectionLabel.tsx
│   ├── Container.tsx
│   └── Analytics.tsx
├── api/subscribe/route.ts   ← POST 이메일 수집
├── layout.tsx               ← 폰트, metadata, analytics
├── page.tsx                 ← 9 섹션 조립
├── sitemap.ts / robots.ts
└── globals.css              ← Tailwind v4 @theme
public/
├── images/                  ← Figma export 자산
└── fonts/PretendardVariable.woff2
```

## 디자인 토큰 (Tailwind v4)

`app/globals.css`의 `@theme` 블록에서 정의 — 클래스로 바로 사용:

- 컬러: `bg-brand` `text-coral` `bg-dark` `bg-bg-warm` `text-text-1` `text-dark-text-2` 등
- 폰트: Inter + Pretendard Variable이 `font-sans`로 묶임

## API

### `POST /api/subscribe`

```json
{
  "email": "user@example.com",
  "source": "hero" | "cta",
  "website": ""  // honeypot — 비워두기
}
```

응답: `{ ok: true }` 또는 `{ ok: false, message: "..." }`

서버 동작: zod 검증 → honeypot 체크 → Resend로 `SUBSCRIBE_NOTIFY_TO`에 알림.

## 배포 (Vercel + vona.kr)

1. **Vercel에 import** — GitHub repo 연결, 자동 감지된 Next.js 설정 그대로
2. **환경변수** 등록 (위 표) — 최소 `RESEND_API_KEY` + (선택) `NEXT_PUBLIC_GA_ID`
3. **도메인 연결**
   - Vercel Project → Settings → Domains → `vona.kr` 추가
   - DNS 제공자(가비아 등)에서 레코드 추가:
     - `A   @   76.76.21.21` (Vercel apex IP)
     - `CNAME   www   cname.vercel-dns.com`
4. **Resend 도메인 인증**
   - https://resend.com/domains 에서 `vona.kr` 추가
   - SPF/DKIM TXT 레코드를 DNS에 추가 → verified 되면 `noreply@vona.kr` 발송 가능
   - 인증 전엔 `RESEND_FROM=onboarding@resend.dev` 사용 (테스트용)
5. **GA4** (선택) — Google Analytics에서 측정 ID 발급 후 `NEXT_PUBLIC_GA_ID`에 입력

## 반응형 브레이크포인트

- 모바일: 단일 컬럼, 컨테이너 24px padding
- `sm` (640px): 폰트 사이즈 ↑
- `md` (768px): 3 Steps / Personas 2~3 컬럼
- `lg` (1024px+): 1200px container, 데스크탑 풀 레이아웃 (Hero/WhatIsVona/WhyPhoneCall은 좌우 2단)
