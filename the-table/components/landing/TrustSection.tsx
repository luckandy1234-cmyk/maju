const pillars = [
  {
    num: "01",
    icon: "🔐",
    title: "에스크로 보호 결제",
    body: "Toss Payments 에스크로로 결제금이 보관됩니다. 만남이 실제로 이루어진 후에만 정산됩니다. 노쇼·취소 시 전액 환불.",
  },
  {
    num: "02",
    icon: "🎯",
    title: "양방향 큐레이션",
    body: "멘토도, 멘티도 검증됩니다. 운영진이 신청서를 검토하고, 멘토가 최종 승인합니다. 아무나 앉는 자리가 아닙니다.",
  },
  {
    num: "03",
    icon: "🛡️",
    title: "신원 보호 & 플랫폼 내 소통",
    body: "개인 연락처와 SNS는 기본으로 숨겨집니다. 만남 전 모든 소통은 플랫폼 내에서만. 사후 연락은 양측 동의 시에만.",
  },
];

export default function TrustSection() {
  return (
    <section className="py-24 px-6 bg-cream">
      <div className="max-w-5xl mx-auto">

        <div className="scroll-reveal mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-ink-4 mb-4">
            안심할 수 있는 이유
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink">
            신뢰가 기본값입니다
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map(({ num, icon, title, body }) => (
            <div key={title} className="scroll-reveal p-7 rounded-3xl bg-cream-alt border border-border card-lift">
              <div className="flex items-center justify-between mb-5">
                <span className="text-3xl">{icon}</span>
                <span className="text-xs font-bold text-ink-4">{num}</span>
              </div>
              <h3 className="font-bold text-ink mb-2">{title}</h3>
              <p className="text-sm text-ink-3 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
