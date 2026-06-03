import Image from "next/image";

const testimonials = [
  {
    photo: "https://randomuser.me/api/portraits/men/42.jpg",
    name: "정민호",
    role: "초기 스타트업 대표 · Premium 이용",
    quote:
      "링크드인으로 100번 DM을 보내도 안 됐던 만남을 여기서 했습니다. 그것도 진심을 가진 사람들만 오는 자리에서. 1시간 대화가 지난 6개월의 방황을 정리해줬어요.",
    large: true,
  },
  {
    photo: "https://randomuser.me/api/portraits/women/51.jpg",
    name: "서유진",
    role: "Product Director · 멘토 참여",
    quote:
      "멘토로 참여하는 게 처음엔 어색했는데, 기부가 연결되니까 달랐어요. 내 시간이 의미 있게 쓰인다는 게 느껴졌고, 오히려 제가 더 많은 걸 얻어갔습니다.",
    large: false,
  },
  {
    photo: "https://randomuser.me/api/portraits/men/67.jpg",
    name: "윤재원",
    role: "대기업 3년차 · Premium 라운드",
    quote:
      "라운드 테이블 포맷이 정말 좋았어요. 나만 모르는 게 아니라는 것도 알고, 같은 고민을 가진 사람들과의 네트워크도 생겼습니다.",
    large: false,
  },
  {
    photo: "https://randomuser.me/api/portraits/women/76.jpg",
    name: "최아름",
    role: "취업 준비생 · Coffee 이용",
    quote:
      "신청서 작성하면서 오히려 제 생각이 정리됐어요. 무엇을 물어볼지 준비하게 되니까 만남 자체의 질이 달랐습니다. THE TABLE은 만남 전부터 이미 시작되는 것 같아요.",
    large: false,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-cream">
      <div className="max-w-5xl mx-auto">

        <div className="scroll-reveal mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-ink-4 mb-4">실제 후기</p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink">
            테이블에 다녀온<br />분들의 이야기
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map(({ photo, name, role, quote, large }) => (
            <div
              key={name}
              className={`scroll-reveal p-7 rounded-3xl border border-border bg-card card-lift flex flex-col justify-between gap-6`}
            >
              {/* 인용 */}
              <p className="text-ink-2 leading-relaxed text-sm md:text-base">
                &ldquo;{quote}&rdquo;
              </p>

              {/* 프로필 */}
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={photo}
                    alt={name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{name}</p>
                  <p className="text-xs text-ink-4">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
