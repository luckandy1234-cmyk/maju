const problems = [
  {
    icon: "🔒",
    title: "인맥 없이는 불가능한 만남",
    body: "CTO에게 커피 챗을 요청하려면 지인 소개가 필요합니다. 아무리 실력이 있어도 접근 자체가 막혀 있습니다.",
  },
  {
    icon: "🎰",
    title: "운에 달린 행운의 만남",
    body: "링크드인 DM, 컨퍼런스 명함 교환 — 운이 좋아야 답장이 옵니다. 체계도, 보장도, 안전도 없습니다.",
  },
  {
    icon: "💸",
    title: "유료 멘토링의 불편한 현실",
    body: "좋은 멘토일수록 '시간을 판다'는 거래에 불편함을 느낍니다. 멘토도, 멘티도 어색한 관계가 됩니다.",
  },
  {
    icon: "🛡️",
    title: "검증되지 않은 자리",
    body: "누가 참석하는지, 어떤 맥락인지, 안전한 자리인지 — 멘토 입장에서도 불확실해 대부분 거절합니다.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 px-6 bg-cream">
      <div className="max-w-5xl mx-auto">
        <div className="divider mb-20" />

        <div className="scroll-reveal grid md:grid-cols-[44%_56%] gap-16 items-start">
          {/* 좌측 타이틀 */}
          <div className="md:sticky md:top-28">
            <p className="text-xs font-semibold tracking-widest uppercase text-ink-4 mb-4">
              왜 THE TABLE인가
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-ink leading-snug">
              당신이 만나고 싶은<br />
              사람이 있습니다.
              <br />
              <span className="text-ink-3">하지만 그 문이<br />닫혀 있습니다.</span>
            </h2>
          </div>

          {/* 우측 카드 */}
          <div className="space-y-4">
            {problems.map(({ icon, title, body }) => (
              <div
                key={title}
                className="scroll-reveal p-6 rounded-2xl bg-card border border-border card-lift"
              >
                <div className="text-2xl mb-3">{icon}</div>
                <h3 className="font-semibold text-ink mb-1.5">{title}</h3>
                <p className="text-sm text-ink-3 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
