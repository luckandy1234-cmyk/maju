const menteeSteps = [
  {
    n: "01",
    title: "테이블 탐색 & 신청",
    body: "공개된 테이블을 둘러보고, 왜 이 멘토와 이야기하고 싶은지 진지하게 작성합니다.",
  },
  {
    n: "02",
    title: "큐레이션 승인 대기",
    body: "운영진과 멘토가 신청서를 검토합니다. 승인 후에만 결제로 진행됩니다. 거절 시 전액 미청구.",
  },
  {
    n: "03",
    title: "테이블에서 만남",
    body: "식사나 커피를 함께합니다. 만남 후 양방향 후기가 남겨지고, 기부가 확정됩니다.",
  },
];

const mentorSteps = [
  {
    n: "01",
    title: "테이블 오픈",
    body: "일정, 포맷(1:1 또는 라운드), 가격, 기부 비율을 설정합니다. 검증된 멘토만 열 수 있습니다.",
  },
  {
    n: "02",
    title: "신청자 검토 & 승인",
    body: "신청서를 보고 직접 승인하거나 운영진에게 위임합니다. 원치 않는 만남은 없습니다.",
  },
  {
    n: "03",
    title: "명의 기부 & 배지 누적",
    body: "만남 후 자동으로 기부 처리됩니다. 프로필에 누적 기부 금액과 횟수가 배지로 남습니다.",
  },
];

function Steps({ items }: { items: typeof menteeSteps }) {
  return (
    <ol className="space-y-8">
      {items.map(({ n, title, body }, i) => (
        <li key={n} className="flex gap-5">
          <div className="flex-shrink-0 w-10 h-10 rounded-full border border-border flex items-center justify-center text-xs font-bold text-ink-3">
            {n}
          </div>
          <div className="pt-1.5">
            <h3 className="font-semibold text-ink mb-1">{title}</h3>
            <p className="text-sm text-ink-3 leading-relaxed">{body}</p>
            {i < items.length - 1 && (
              <div className="mt-4 ml-0 h-6 w-px bg-border ml-[-2.25rem] ml-5" />
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function HowItWorksSection() {
  return (
    <section id="how" className="py-24 px-6 bg-cream">
      <div className="max-w-5xl mx-auto">

        {/* 헤더 */}
        <div className="scroll-reveal mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-ink-4 mb-4">프로세스</p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink">어떻게 작동하나요</h2>
        </div>

        {/* 2컬럼 */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="scroll-reveal">
            <p className="text-xs font-semibold tracking-widest uppercase text-ink-4 mb-6">멘티의 여정</p>
            <Steps items={menteeSteps} />
          </div>
          <div className="scroll-reveal">
            <p className="text-xs font-semibold tracking-widest uppercase text-ink-4 mb-6">멘토의 여정</p>
            <Steps items={mentorSteps} />
          </div>
        </div>
      </div>
    </section>
  );
}
