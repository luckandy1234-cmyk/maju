import Image from "next/image";
import Link from "next/link";

const mentors = [
  {
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "김태준",
    role: "Series B CTO",
    company: "전 카카오 · 현 스타트업",
    tags: ["백엔드 아키텍처", "초기 팀 빌딩", "기술 전략"],
    quote: "처음 창업하는 분들이 기술 스택 선택에서 방향을 못 잡는 경우가 많아요. 그 한 시간이 1년을 바꿀 수 있습니다.",
    format: "1:1 Coffee",
    duration: "90분",
    price: "₩250,000",
    donation: "5%",
    donated: "₩320,000",
    featured: false,
  },
  {
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "이서연",
    role: "VC 파트너",
    company: "Ventures · Series A–C",
    tags: ["투자 유치", "VC 생태계", "피칭 코칭"],
    quote: "VC 미팅 준비가 안 된 창업자를 만나면 제가 더 아파요. 피칭 전 30분의 피드백이 라운드를 바꿉니다.",
    format: "라운드 테이블",
    duration: "120분",
    price: "₩380,000",
    donation: "10%",
    donated: "₩1,200,000",
    featured: true,
  },
  {
    photo: "https://randomuser.me/api/portraits/men/55.jpg",
    name: "박준혁",
    role: "글로벌 브랜드 CMO",
    company: "전 뉴욕 광고 에이전시",
    tags: ["브랜딩", "마케팅 전략", "카피라이팅"],
    quote: "제품은 좋은데 이야기 못 하는 팀이 너무 많습니다. 좋은 이야기를 찾아내는 것, 그게 제가 도울 수 있는 부분이에요.",
    format: "1:1 Lunch",
    duration: "120분",
    price: "₩420,000",
    donation: "10%",
    donated: "₩480,000",
    featured: false,
  },
  {
    photo: "https://randomuser.me/api/portraits/women/28.jpg",
    name: "최지은",
    role: "HR · 조직문화 전문가",
    company: "전 Google · 현 컨설팅",
    tags: ["채용 전략", "조직문화", "리더십"],
    quote: "팀이 커질수록 문화를 만드는 것이 제품을 만드는 것만큼 중요해집니다. 그 타이밍에 대해 이야기 나누고 싶어요.",
    format: "1:1 Coffee",
    duration: "60분",
    price: "₩180,000",
    donation: "5%",
    donated: "₩240,000",
    featured: false,
  },
  {
    photo: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "정민수",
    role: "IPO 자문 변호사",
    company: "법무법인 · M&A 전문",
    tags: ["법인 설립", "계약 리뷰", "IPO 준비"],
    quote: "창업 초기의 법적 실수는 나중에 몇 배로 돌아옵니다. 한 번의 대화가 큰 리스크를 막을 수 있어요.",
    format: "라운드 테이블",
    duration: "90분",
    price: "₩300,000",
    donation: "10%",
    donated: "₩600,000",
    featured: false,
  },
  {
    photo: "https://randomuser.me/api/portraits/women/63.jpg",
    name: "한수민",
    role: "Product Director",
    company: "유니콘 스타트업 · 전 LINE",
    tags: ["프로덕트 전략", "B2B SaaS", "유저 리서치"],
    quote: "좋은 제품이 왜 시장에서 외면받는지, 그 답은 항상 사용자에게 있었습니다. 같이 찾아봐요.",
    format: "1:1 Brunch",
    duration: "90분",
    price: "₩280,000",
    donation: "10%",
    donated: "₩840,000",
    featured: false,
  },
];

export default function MentorsSection() {
  return (
    <section id="mentors" className="py-24 px-6 bg-cream-alt">
      <div className="max-w-6xl mx-auto">

        {/* 헤더 */}
        <div className="scroll-reveal flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-ink-4 mb-3">엄선된 멘토</p>
            <h2 className="text-3xl md:text-4xl font-bold text-ink">
              이런 분들이<br />테이블을 엽니다
            </h2>
          </div>
          <p className="text-sm text-ink-3 max-w-xs">
            모든 멘토는 THE TABLE 운영진의 검증을 거쳤습니다.
          </p>
        </div>

        {/* 멘토 그리드 */}
        <div className="grid md:grid-cols-3 gap-5">
          {mentors.map((m) => (
            <div
              key={m.name}
              className={`scroll-reveal rounded-3xl overflow-hidden border card-lift ${
                m.featured
                  ? "border-ink bg-ink text-cream col-span-1 md:row-span-1"
                  : "border-border bg-card"
              }`}
            >
              {/* 사진 */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={m.photo}
                  alt={m.name}
                  fill
                  className="object-cover object-top"
                  unoptimized
                />
                {m.featured && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-cream text-ink text-[10px] font-semibold">
                    가장 인기
                  </div>
                )}
              </div>

              {/* 정보 */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className={`font-bold text-base ${m.featured ? "text-cream" : "text-ink"}`}>
                      {m.name}
                    </p>
                    <p className={`text-sm ${m.featured ? "text-cream/70" : "text-ink-3"}`}>
                      {m.role}
                    </p>
                    <p className={`text-xs mt-0.5 ${m.featured ? "text-cream/50" : "text-ink-4"}`}>
                      {m.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className={`text-base font-bold ${m.featured ? "text-cream" : "text-ink"}`}>
                      {m.price}
                    </p>
                    <p className={`text-[10px] ${m.featured ? "text-cream/50" : "text-ink-4"}`}>
                      {m.format} · {m.duration}
                    </p>
                  </div>
                </div>

                {/* 태그 */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {m.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
                        m.featured ? "bg-cream/10 text-cream/80" : "bg-tag text-ink-3"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 인용구 */}
                <p className={`text-xs leading-relaxed mb-4 ${m.featured ? "text-cream/70" : "text-ink-3"}`}>
                  &ldquo;{m.quote}&rdquo;
                </p>

                {/* 기부 표시 */}
                <div className={`flex items-center justify-between text-[10px] pt-3 border-t ${
                  m.featured ? "border-cream/20 text-cream/50" : "border-border text-ink-4"
                }`}>
                  <span>기부 {m.donation} · 멘토 명의</span>
                  <span>누적 {m.donated}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="scroll-reveal text-center mt-10">
          <Link
            href="#apply"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm text-ink hover:bg-cream-deep transition-colors"
          >
            전체 멘토 보기 →
          </Link>
        </div>
      </div>
    </section>
  );
}
