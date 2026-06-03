import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-14 px-6 border-t border-border bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-10">
          <div className="max-w-xs">
            <div className="text-base font-bold tracking-[0.2em] uppercase text-ink mb-3">
              THE TABLE
            </div>
            <p className="text-ink-3 text-sm leading-relaxed">
              프리미엄 오프라인 멘토십 플랫폼.<br />
              의미 있는 시간과 사회적 명분의 결합.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-10 text-sm">
            {[
              {
                title: "서비스",
                links: [["#how", "어떻게 작동하나요"], ["#tiers", "프로그램"], ["#mentors", "멘토 보기"]],
              },
              {
                title: "참여",
                links: [["#apply", "멘티 신청"], ["#mentor-apply", "멘토 지원"]],
              },
              {
                title: "정보",
                links: [["/terms", "이용약관"], ["/privacy", "개인정보처리방침"], ["/refund", "환불정책"]],
              },
            ].map(({ title, links }) => (
              <div key={title}>
                <p className="font-semibold text-ink mb-3">{title}</p>
                <ul className="space-y-2 text-ink-3">
                  {links.map(([href, label]) => (
                    <li key={href}>
                      <Link href={href} className="hover:text-ink transition-colors">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="divider mb-6" />

        <div className="flex flex-col md:flex-row justify-between gap-3 text-xs text-ink-4">
          <p>© 2025 THE TABLE. All rights reserved.</p>
          <p>통신판매중개업 신고 · 에스크로 서비스 · Toss Payments</p>
        </div>
      </div>
    </footer>
  );
}
