const steps = [
  { icon: "🙋", label: "멘티 결제",       sub: "에스크로 보관",      highlight: false },
  { icon: "🤝", label: "만남 성사",       sub: "큐레이션 · 검증",    highlight: true  },
  { icon: "💝", label: "기부 자동 확정",   sub: "멘토 명의로 기록",   highlight: false },
  { icon: "🏅", label: "명예 배지 적립",   sub: "프로필에 누적",      highlight: false },
];

export default function SolutionSection() {
  return (
    <section className="py-24 px-6 bg-cream-alt">
      <div className="max-w-4xl mx-auto">

        {/* 헤더 */}
        <div className="scroll-reveal mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-ink-4 mb-4">
            THE TABLE의 해법
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink leading-snug max-w-xl">
            좋은 사람들이 시간을 내는 데는
            <br />
            <span className="text-ink-3">이유가 필요합니다</span>
          </h2>
        </div>

        {/* 본문 + 플로우 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="scroll-reveal">
            <p className="text-ink-3 leading-relaxed mb-6">
              THE TABLE은 그 이유를 만들었습니다. 멘토가 식사 자리를 열면, 그 수익의 일부가{" "}
              <strong className="text-ink">멘토 본인의 이름으로 기부</strong>됩니다.
            </p>
            <p className="text-ink-3 leading-relaxed">
              단순한 시간 판매가 아닙니다.{" "}
              <strong className="text-ink">의미 있는 시간 + 사회적 명분</strong>을 함께 만드는 것입니다.
            </p>
          </div>

          {/* 플로우 카드 */}
          <div className="scroll-reveal grid grid-cols-2 gap-3">
            {steps.map(({ icon, label, sub, highlight }) => (
              <div
                key={label}
                className={`p-4 rounded-2xl border text-center card-lift ${
                  highlight
                    ? "bg-ink text-cream border-ink"
                    : "bg-card border-border"
                }`}
              >
                <div className="text-2xl mb-2">{icon}</div>
                <div className={`text-sm font-semibold ${highlight ? "text-cream" : "text-ink"}`}>
                  {label}
                </div>
                <div className={`text-xs mt-0.5 ${highlight ? "text-cream/60" : "text-ink-4"}`}>
                  {sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="scroll-reveal mt-10 text-xs text-ink-4 text-center">
          모든 결제는 에스크로로 보호됩니다. 만남이 확인된 후에만 정산이 이루어집니다.
        </p>
      </div>
    </section>
  );
}
