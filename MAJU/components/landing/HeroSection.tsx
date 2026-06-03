import Image from "next/image";
import Link from "next/link";

const floatingCards = [
  {
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "김태준",
    role: "Series B CTO",
    tag: "기술 · 창업",
    cls: "float-a top-0 right-0 w-48",
  },
  {
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "이서연",
    role: "VC 파트너",
    tag: "투자 · 전략",
    cls: "float-b top-36 right-44 w-40",
  },
  {
    photo: "https://randomuser.me/api/portraits/men/18.jpg",
    name: "박준혁",
    role: "CMO · 브랜딩",
    tag: "마케팅",
    cls: "float-c bottom-8 right-8 w-44",
  },
];

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-24 pb-16 bg-cream">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-[58%_42%] gap-12 items-center">

        {/* ── 좌측: 카피 ── */}
        <div>
          {/* 배지 */}
          <div className="fade-up inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tag text-ink-3 text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-point-warm animate-pulse" />
            큐레이션된 멘토십 플랫폼 · 베타 운영 중
          </div>

          {/* 헤드라인 */}
          <h1 className="fade-up delay-1 text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-[1.08] tracking-tight mb-6">
            만나기 어려운
            <br />
            <em className="not-italic text-ink-3">그 분</em>과,
            <br />
            테이블에서.
          </h1>

          {/* 서브 */}
          <p className="fade-up delay-2 text-base md:text-lg text-ink-3 leading-relaxed max-w-md mb-10">
            한국 각 분야의 리더와 식사를 나눕니다.
            인맥도, 운도 필요 없습니다.{" "}
            <span className="text-ink font-medium">진지한 사람</span>에게 열린 자리입니다.
          </p>

          {/* CTA */}
          <div className="fade-up delay-3 flex flex-wrap gap-3 mb-14">
            <Link
              href="#apply"
              className="px-7 py-3.5 rounded-full font-semibold bg-ink text-cream hover:bg-ink-2 transition-colors text-sm"
            >
              멘티로 신청하기
            </Link>
            <Link
              href="#mentor-apply"
              className="px-7 py-3.5 rounded-full font-semibold border border-border text-ink hover:bg-cream-alt transition-colors text-sm"
            >
              멘토로 참여하기
            </Link>
          </div>

          {/* 숫자 */}
          <div className="fade-up delay-4 flex gap-10">
            {[
              { value: "47+",   label: "엄선된 멘토" },
              { value: "₩3.2M", label: "누적 기부금" },
              { value: "4.9★",  label: "평균 만족도" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-2xl font-bold text-ink">{value}</div>
                <div className="text-xs text-ink-4 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 우측: 프로필 카드 콜라주 ── */}
        <div className="relative h-[480px] hidden md:block">
          {floatingCards.map((card) => (
            <div
              key={card.name}
              className={`absolute ${card.cls} bg-card rounded-2xl shadow-[0_4px_24px_rgba(26,20,16,0.10)] overflow-hidden`}
            >
              <div className="relative w-full aspect-[3/4]">
                <Image
                  src={card.photo}
                  alt={card.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-3">
                <p className="text-xs font-semibold text-ink">{card.name}</p>
                <p className="text-[11px] text-ink-3">{card.role}</p>
                <span className="inline-block mt-1.5 px-2 py-0.5 rounded-full bg-tag text-[10px] text-ink-3">
                  {card.tag}
                </span>
              </div>
            </div>
          ))}

          {/* 배경 장식 */}
          <div className="absolute top-20 left-4 w-24 h-24 rounded-full bg-cream-deep opacity-60" />
          <div className="absolute bottom-20 left-20 w-16 h-16 rounded-full bg-cream-alt" />
        </div>
      </div>
    </section>
  );
}
