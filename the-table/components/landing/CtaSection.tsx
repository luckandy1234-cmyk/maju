import Image from "next/image";
import Link from "next/link";

const mentorAvatars = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/55.jpg",
  "https://randomuser.me/api/portraits/women/28.jpg",
];

export function MentorCtaSection() {
  return (
    <section id="mentor-apply" className="py-24 px-6 bg-cream">
      <div className="max-w-5xl mx-auto">
        <div className="scroll-reveal rounded-3xl border border-border bg-cream-alt overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* 좌측 텍스트 */}
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <p className="text-xs font-semibold tracking-widest uppercase text-ink-4 mb-4">
                멘토 모집
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-ink mb-5 leading-snug">
                당신의 1~2시간이<br />누군가의 방향을<br />바꿀 수 있습니다
              </h2>
              <p className="text-sm text-ink-3 leading-relaxed mb-8">
                THE TABLE은 의미 있는 만남을 원하는 멘토를 찾고 있습니다.
                수익의 일부는 당신의 이름으로 세상을 더 좋게 만듭니다.
              </p>
              <Link
                href="#apply"
                className="self-start px-7 py-3.5 rounded-full font-semibold bg-ink text-cream hover:bg-ink-2 transition-colors text-sm"
              >
                멘토 신청하기 →
              </Link>
            </div>

            {/* 우측: 아바타 모자이크 */}
            <div className="relative bg-cream-deep hidden md:flex items-center justify-center p-10">
              <div className="grid grid-cols-2 gap-4">
                {mentorAvatars.map((src, i) => (
                  <div
                    key={i}
                    className="relative w-28 h-28 rounded-2xl overflow-hidden shadow-md"
                    style={{ marginTop: i % 2 === 1 ? "2rem" : "0" }}
                  >
                    <Image src={src} alt="멘토" fill className="object-cover" unoptimized />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCtaSection() {
  return (
    <section id="apply" className="py-32 px-6 bg-ink text-cream">
      <div className="max-w-2xl mx-auto text-center scroll-reveal">
        <p className="text-xs font-semibold tracking-widest uppercase text-cream/40 mb-6">
          지금 시작하세요
        </p>
        <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-6">
          이제 테이블에<br />
          <span className="text-cream/60">앉으세요</span>
        </h2>
        <p className="text-cream/60 text-lg leading-relaxed mb-12">
          만나고 싶었던 그 분과의 자리가 기다리고 있습니다.
          <br />
          진지한 사람들만을 위한 자리입니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="#"
            className="px-10 py-4 rounded-full font-semibold bg-cream text-ink hover:bg-cream-alt transition-colors text-base"
          >
            멘티 신청하기
          </Link>
          <Link
            href="#mentor-apply"
            className="px-10 py-4 rounded-full font-semibold border border-cream/20 text-cream hover:border-cream/50 transition-colors text-base"
          >
            멘토로 참여하기
          </Link>
        </div>
        <p className="text-cream/30 text-xs">
          베타 기간 중 · 운영진 검토 후 개별 연락드립니다
        </p>
      </div>
    </section>
  );
}
