import Image from "next/image";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const BULLETS = [
  { title: "Zero Learning", body: "설명서 없음" },
  { title: "Zero Friction", body: "벨이 울리면 받는다" },
  { title: "Two-way", body: "AI도 걸고, 사용자도 건다" },
  { title: "Emotional", body: "음성은 텍스트보다 4배 친밀" },
];

export function WhyPhoneCall() {
  return (
    <section className="bg-bg-warm py-24 lg:py-32">
      <Container className="flex flex-col items-stretch">
        <Reveal variant="fade-up">
          <SectionLabel>WHY PHONE CALL</SectionLabel>
          <h2 className="mt-4 text-[36px] font-bold leading-[1.2] tracking-[-1.5px] text-text-1 sm:text-[42px] lg:text-[56px] lg:tracking-[-2px]">
            전화는 가장 오래 살아남은 인터페이스다.
          </h2>
        </Reveal>

        {/* full-width image */}
        <Reveal
          variant="zoom"
          delay={150}
          className="relative mt-12 aspect-[1200/420] w-full overflow-hidden rounded-[4px] sm:aspect-[1200/360] lg:mt-16 lg:aspect-[1200/320]"
        >
          <Image
            src="/images/why-phone-call.png"
            alt="3세대가 함께 통화하는 모습"
            fill
            sizes="(min-width: 1024px) 1200px, 100vw"
            className="object-cover object-center"
          />
        </Reveal>

        <Reveal variant="zoom" delay={250}>
          <p className="mt-12 text-center text-[44px] font-bold tracking-[-1.5px] text-text-1 sm:text-[56px] lg:mt-16 lg:text-[72px] lg:tracking-[-3px]">
            &ldquo;여보세요?&rdquo;
          </p>
        </Reveal>

        <Reveal variant="fade-up" delay={350}>
          <div className="mx-auto mt-6 max-w-2xl text-center">
            <span
              className="mx-auto block h-px w-8 bg-dark-2"
              aria-hidden="true"
            />
            <p className="mt-3 text-[15px] leading-[1.7] text-text-2 sm:text-[16px]">
              3살 아이도, 80대 어르신도 — 이 한 마디는 가르칠 필요가 없습니다.
            </p>
          </div>
        </Reveal>

        <ul className="mx-auto mt-10 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-10">
          {BULLETS.map((b, idx) => (
            <Reveal
              key={b.title}
              as="li"
              variant="fade-up"
              delay={400 + idx * 100}
              className="flex items-start gap-3"
            >
              <span
                className="mt-[10px] block h-px w-4 shrink-0 bg-dark-2"
                aria-hidden="true"
              />
              <span className="text-[14px] font-bold tracking-[-0.2px] text-text-1">
                {b.title}
              </span>
              <span className="text-[14px] text-text-3">—</span>
              <span className="text-[14px] text-text-2">{b.body}</span>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
