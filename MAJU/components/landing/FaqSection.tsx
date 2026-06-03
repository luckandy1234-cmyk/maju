"use client";

import { useState } from "react";

const faqs = [
  {
    q: "신청했다고 바로 만날 수 있나요?",
    a: "아닙니다. 신청서 제출 → 운영진 검토 → 멘토 최종 승인의 단계를 거칩니다. 승인 후에만 결제가 진행되고, 그때부터 만남이 확정됩니다. 이 과정이 만남의 질을 보장합니다.",
  },
  {
    q: "거절되면 어떻게 되나요?",
    a: "승인 전까지 결제가 없으므로 비용이 전혀 발생하지 않습니다. 운영진으로부터 거절 사유를 간략히 안내받을 수 있으며, 다른 테이블에 재신청하실 수 있습니다.",
  },
  {
    q: "기부는 어떻게 처리되나요?",
    a: "만남이 완료되면 자동으로 멘토 명의의 기부가 처리됩니다. 기부처는 THE TABLE이 검증한 지정기부금단체 목록에서 멘토가 선택합니다. 기부 내역은 멘토 프로필에 투명하게 공개됩니다.",
  },
  {
    q: "노쇼나 취소 시 환불이 되나요?",
    a: "에스크로 결제이므로 만남 전까지 금액이 보관됩니다. 멘토 사정으로 취소 시 전액 환불, 멘티 사정으로 취소 시 일정에 따른 환불 정책이 적용됩니다.",
  },
  {
    q: "멘토로 참여하려면 어떻게 해야 하나요?",
    a: "멘토 신청 폼을 작성해 주시면 운영진이 검토 후 연락드립니다. 특정 분야의 전문성과 함께 '진지한 사람에게 시간을 나눌 의향'이 있으시면 충분합니다.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 bg-cream-alt">
      <div className="max-w-3xl mx-auto">

        <div className="scroll-reveal mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-ink-4 mb-4">
            자주 묻는 질문
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink">궁금한 점이 있으신가요</h2>
        </div>

        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <div
              key={q}
              className="scroll-reveal rounded-2xl border border-border bg-card overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-medium text-ink pr-4">{q}</span>
                <span
                  className={`text-ink-3 text-xl flex-shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-sm text-ink-3 leading-relaxed border-t border-border/50 pt-4">
                  {a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
