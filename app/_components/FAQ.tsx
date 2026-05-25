"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function FAQ() {
  const initialOpen = faqs.find((f) => f.defaultOpen)?.id ?? "";
  const [openId, setOpenId] = useState(initialOpen);

  return (
    <section id="faq" className="bg-bg-warm py-24 lg:py-32">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
        {/* LEFT — header + contact CTA */}
        <Reveal variant="fade-up">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-4 text-[36px] font-bold tracking-[-1.5px] text-text-1 sm:text-[42px] lg:text-[48px] lg:tracking-[-2px]">
            자주 묻는 질문
          </h2>
          <p className="mt-6 text-[15px] leading-[1.7] text-text-2 sm:text-[16px]">
            Vona를 시작하기 전,
            <br />
            가장 많이 받는 질문들에 답해드립니다.
          </p>

          <div className="mt-12">
            <span className="block h-px w-6 bg-dark-2" aria-hidden="true" />
            <p className="mt-3 text-[13px] font-semibold tracking-[-0.3px] text-text-1">
              더 궁금한 점이 있으신가요?
            </p>
            <a
              href="mailto:info@vona.kr"
              className="mt-1 inline-block text-[16px] font-semibold tracking-[-0.3px] text-text-1 transition-colors hover:text-coral"
            >
              info@vona.kr
            </a>
            <p className="mt-1 text-[12px] text-text-3">
              24시간 내 답변드립니다.
            </p>
          </div>
        </Reveal>

        {/* RIGHT — accordion list */}
        <ul className="flex flex-col">
          {faqs.map((faq, idx) => {
            const isOpen = openId === faq.id;
            const qNumber = `Q${String(idx + 1).padStart(2, "0")}`;
            const panelId = `faq-panel-${faq.id}`;
            const buttonId = `faq-button-${faq.id}`;
            return (
              <Reveal
                key={faq.id}
                as="li"
                variant="fade-up"
                delay={120 + idx * 70}
                className="border-b border-line last:border-b-0"
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenId(isOpen ? "" : faq.id)}
                  className="group flex w-full items-center gap-4 py-5 text-left transition-colors hover:bg-black/[0.015] focus:outline-none focus-visible:bg-black/[0.025] sm:py-6"
                >
                  <span className="inline-block w-10 shrink-0 text-[12px] font-bold uppercase tracking-[1px] text-text-3 group-hover:text-coral sm:text-[13px]">
                    {qNumber}
                  </span>
                  <span className="flex-1 text-[15px] font-semibold tracking-[-0.3px] text-text-1 sm:text-[17px]">
                    {faq.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`shrink-0 text-[24px] font-light leading-none text-text-3 transition-transform duration-300 ease-out motion-reduce:transition-none ${
                      isOpen ? "rotate-45 text-coral" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* answer — smooth height via grid-template-rows trick */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pl-[56px] pr-10 text-[14px] leading-[1.75] text-text-2 sm:text-[15px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
