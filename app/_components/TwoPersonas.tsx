import Image from "next/image";
import { Container } from "./Container";
import { SectionLabel } from "./SectionLabel";

const PERSONAS = [
  {
    label: "AI 친구 · B2C",
    labelColor: "text-brand",
    name: "지윤",
    sub: "다정한 친구 · 24세 · 디자이너",
    quote: "오늘 어땠어? 같이 얘기해요.",
    image: "/images/jiyun.png",
    alt: "지윤 — AI 친구",
  },
  {
    label: "안부 친구 · B2B2C",
    labelColor: "text-coral",
    name: "철수",
    sub: "어르신 안부 친구 · 42세 · 아들 같은 톤",
    quote: "어머니, 오늘 약은 드셨어요?",
    image: "/images/cheolsu.png",
    alt: "철수 — 어르신 안부 친구",
  },
];

export function TwoPersonas() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Container>
        <div className="text-center">
          <SectionLabel className="justify-center">
            TWO PERSONAS · PHASE 1
          </SectionLabel>
          <h2 className="mt-4 text-[36px] font-bold tracking-[-1.5px] text-text-1 sm:text-[42px] lg:text-[48px] lg:tracking-[-2px]">
            동일한 엔진, 다른 페르소나.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[16px] text-text-2 sm:text-[18px]">
            B2C 친구와 B2B2C 어르신 안부 친구를 동시 출시합니다.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {PERSONAS.map((p) => (
            <article
              key={p.name}
              className="rounded-lg bg-bg-gray p-8 sm:p-10"
            >
              <div className="relative aspect-[460/575] w-full overflow-hidden rounded-lg">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 768px) 460px, 100vw"
                  className="object-cover"
                />
              </div>

              <p
                className={`mt-6 text-[11px] font-bold uppercase tracking-[2px] ${p.labelColor}`}
              >
                {p.label}
              </p>
              <h3 className="mt-2 text-[32px] font-bold tracking-[-1px] text-text-1 sm:text-[36px]">
                {p.name}
              </h3>
              <p className="mt-2 text-[15px] font-semibold text-text-1">
                {p.sub}
              </p>
              <blockquote className="mt-3 text-[15px] leading-[1.5] text-text-2">
                &ldquo;{p.quote}&rdquo;
              </blockquote>
            </article>
          ))}
        </div>

        <div className="mt-14 flex items-start gap-4">
          <span
            className="mt-1 block h-12 w-1 shrink-0 bg-dark-2"
            aria-hidden="true"
          />
          <p className="text-[16px] font-semibold tracking-[-0.4px] text-text-1 sm:text-[18px]">
            동일 엔진, 다른 L4 — 단일 페르소나에 베팅하지 않습니다.
          </p>
        </div>
      </Container>
    </section>
  );
}
