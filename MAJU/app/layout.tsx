import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "THE TABLE — 만나기 어려운 그 분과, 테이블에서",
  description:
    "한국 각 분야의 멘토와 1:1 식사 또는 소수 정예 라운드 테이블을 나눕니다. 큐레이션된 만남, 에스크로 보호, 멘토 명의 기부까지.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}
