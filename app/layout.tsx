import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "./_components/Analytics";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vona.kr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vona — AI Voice 친구가 전화로 찾아옵니다",
    template: "%s · Vona",
  },
  description:
    "친구·상담사·코치·선생님 — 당신에게 필요한 누구든, 벨이 울리면 받으세요. AI 페르소나에게 전화번호를 부여한 AI 음성 컴패니언.",
  keywords: [
    "AI 음성",
    "AI 친구",
    "AI 컴패니언",
    "Voice AI",
    "Vona",
    "보나",
    "AI 통화",
  ],
  authors: [{ name: "Widit Agency" }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName: "Vona",
    title: "Vona — AI Voice 친구가 전화로 찾아옵니다",
    description:
      "벨이 울리면 받으세요. AI 페르소나에게 전화번호를 부여한 AI 음성 컴패니언.",
    images: [
      {
        url: "/og-image.png",
        width: 1672,
        height: 941,
        alt: "Vona — AI Voice 친구가 전화로 찾아옵니다",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vona — AI Voice 친구가 전화로 찾아옵니다",
    description: "벨이 울리면 받으세요.",
    images: [
      {
        url: "/og-image.png",
        alt: "Vona — AI Voice 친구가 전화로 찾아옵니다",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0f1419",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ko"
      className={`${inter.variable} ${pretendard.variable} antialiased`}
    >
      <head>
        {/* JS-disabled fallback — reveal animations rely on JS, so show content statically */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important;transition:none!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-screen bg-white text-text-1">
        {children}
        <Analytics />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
