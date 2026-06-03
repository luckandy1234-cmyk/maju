"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-base font-bold tracking-[0.2em] text-ink uppercase">
          THE TABLE
        </Link>

        <div className="hidden md:flex items-center gap-7 text-sm text-ink-3">
          <Link href="#how"     className="hover:text-ink transition-colors">어떻게 작동하나요</Link>
          <Link href="#mentors" className="hover:text-ink transition-colors">멘토</Link>
          <Link href="#tiers"   className="hover:text-ink transition-colors">프로그램</Link>
          <Link href="#faq"     className="hover:text-ink transition-colors">FAQ</Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="#apply"
            className="hidden md:block text-sm text-ink-3 hover:text-ink transition-colors"
          >
            로그인
          </Link>
          <Link
            href="#apply"
            className="px-5 py-2 rounded-full text-sm font-medium bg-ink text-cream hover:bg-ink-2 transition-colors"
          >
            지금 신청하기
          </Link>
          <button
            className="md:hidden text-ink-3 hover:text-ink"
            onClick={() => setOpen((v) => !v)}
            aria-label="메뉴"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border px-6 py-4 flex flex-col gap-3 text-sm text-ink-3 bg-cream">
          {["#how|어떻게 작동하나요", "#mentors|멘토", "#tiers|프로그램", "#faq|FAQ"].map((item) => {
            const [href, label] = item.split("|");
            return (
              <Link key={href} href={href} onClick={() => setOpen(false)} className="hover:text-ink">
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
