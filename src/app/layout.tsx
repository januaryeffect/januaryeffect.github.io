import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "January Effect | Mobile App Development",
  description: "January Effect (제뉴어리이펙트) - We create innovative mobile applications that make a difference.",
  keywords: ["January Effect", "제뉴어리이펙트", "mobile app", "iOS", "Android", "app development"],
  openGraph: {
    title: "January Effect | Mobile App Development",
    description: "We create innovative mobile applications that make a difference.",
    type: "website",
    locale: "ko_KR",
    siteName: "January Effect",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <header className="border-b border-gray-200 dark:border-gray-800">
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold tracking-tight">
              January Effect
            </Link>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/apps/chauffeur-log/" className="hover:text-blue-600 transition-colors">
                대리로그
              </Link>
              <Link href="/privacy/" className="hover:text-blue-600 transition-colors">
                개인정보처리방침
              </Link>
              <Link href="/terms/" className="hover:text-blue-600 transition-colors">
                이용약관
              </Link>
            </div>
          </nav>
        </header>

        <main className="flex-1">
          {children}
        </main>

        <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold mb-3">January Effect</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  (주)제뉴어리이펙트
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-3">연락처</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  contact@januaryeffect.app
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-3">법적 고지</h3>
                <div className="flex flex-col gap-1 text-sm">
                  <Link href="/apps/chauffeur-log/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                    대리로그 소개
                  </Link>
                  <Link href="/apps/chauffeur-log/feedback/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                    대리로그 피드백
                  </Link>
                  <Link href="/apps/chauffeur-log/internal-testing/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                    대리로그 내부테스트
                  </Link>
                  <Link href="/privacy/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                    개인정보처리방침
                  </Link>
                  <Link href="/terms/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                    서비스 이용약관
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500">
              © {new Date().getFullYear()} January Effect. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
