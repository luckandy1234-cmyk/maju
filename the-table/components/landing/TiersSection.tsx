const tiers = [
  {
    icon: "☕",
    name: "Coffee",
    desc: "60~90분 커피 미팅. 가볍지만 진지하게.",
    features: ["1:1 포맷", "5% 기부 (멘토 명의)", "에스크로 결제 보호", "양방향 후기"],
    price: "₩100,000+",
    priceSub: "멘토가 가격 설정",
    donationDesc: "5%가 멘토 명의로 기부됩니다",
    featured: false,
    comingSoon: false,
  },
  {
    icon: "🍽️",
    name: "Premium",
    desc: "브런치 또는 다이닝. 깊이 있는 대화.",
    features: ["1:1 또는 라운드 테이블", "10% 기부 (멘토 명의)", "에스크로 결제 보호", "운영진 큐레이션 동석", "구조화된 진행"],
    price: "₩250,000+",
    priceSub: "멘토가 가격 설정",
    donationDesc: "10%가 멘토 명의로 기부됩니다",
    featured: true,
    comingSoon: false,
  },
  {
    icon: "🏆",
    name: "Signature",
    desc: "경매로 열리는 단 한 자리. 수익 대부분이 기부.",
    features: ["경매 형식", "70~90% 기부", "멘토의 명예가 목적", "최상위 큐레이션"],
    price: "Coming Soon",
    priceSub: "2025 하반기 예정",
    donationDesc: "최대 90%가 기부됩니다",
    featured: false,
    comingSoon: true,
  },
];

export default function TiersSection() {
  return (
    <section id="tiers" className="py-24 px-6 bg-cream-alt">
      <div className="max-w-5xl mx-auto">

        <div className="scroll-reveal mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-ink-4 mb-4">프로그램</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-ink">테이블의 종류</h2>
            <p className="text-sm text-ink-3 max-w-xs">
              모든 테이블에서 수익의 일부가<br />멘토 명의로 기부됩니다.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`scroll-reveal rounded-3xl border overflow-hidden card-lift ${
                tier.featured ? "bg-ink border-ink" : "bg-card border-border"
              } ${tier.comingSoon ? "opacity-70" : ""}`}
            >
              {tier.featured && (
                <div className="bg-cream/10 text-cream text-center text-xs font-semibold py-2">
                  가장 인기
                </div>
              )}
              <div className="p-7">
                <div className="text-3xl mb-4">{tier.icon}</div>
                <h3 className={`text-xl font-bold mb-1 ${tier.featured ? "text-cream" : "text-ink"}`}>
                  {tier.name}
                </h3>
                <p className={`text-sm mb-6 ${tier.featured ? "text-cream/60" : "text-ink-3"}`}>
                  {tier.desc}
                </p>

                <ul className="space-y-2.5 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <svg
                        className={`w-4 h-4 flex-shrink-0 ${tier.featured ? "text-cream/50" : "text-ink-4"}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={tier.featured ? "text-cream/80" : "text-ink-3"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className={`pt-5 border-t ${tier.featured ? "border-cream/20" : "border-border"}`}>
                  <div className={`text-2xl font-bold ${tier.comingSoon ? "text-ink-4" : tier.featured ? "text-cream" : "text-ink"}`}>
                    {tier.price}
                  </div>
                  <div className={`text-xs mt-0.5 ${tier.featured ? "text-cream/50" : "text-ink-4"}`}>
                    {tier.priceSub}
                  </div>
                  <div className={`text-xs mt-2 ${tier.featured ? "text-cream/40" : "text-ink-4"}`}>
                    {tier.donationDesc}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
