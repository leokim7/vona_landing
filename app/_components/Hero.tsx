import Image from "next/image";
import { Container } from "./Container";
import { EmailForm } from "./EmailForm";
import { Reveal } from "./Reveal";
import { RotatingWord } from "./RotatingWord";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-dark text-dark-text-1"
    >
      {/* soundwave bg */}
      <Image
        src="/images/soundwave.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover opacity-40"
      />
      {/* radial vignette */}
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0f1419_85%)]"
        aria-hidden="true"
      />

      <Container className="grid min-h-[560px] grid-cols-1 items-center gap-12 py-20 lg:min-h-[660px] lg:grid-cols-[minmax(0,640px)_minmax(0,1fr)] lg:py-24">
        <div className="flex flex-col">
          <Reveal variant="fade-up">
            <p className="text-[32px] font-bold leading-[1.1] tracking-[-2px] text-dark-text-1 sm:text-[40px] lg:text-[50px] lg:tracking-[-3px]">
              &ldquo;여보세요.&rdquo;
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={100}>
            <h1
              lang="en"
              className="mt-4 text-[48px] font-bold leading-[1.05] tracking-[-3px] text-dark-text-1 sm:text-[68px] lg:whitespace-nowrap lg:text-[84px] lg:tracking-[-5px]"
            >
              AI - you can call
            </h1>
          </Reveal>

          <Reveal variant="fade-up" delay={250}>
            <p className="mt-10 text-[18px] leading-[1.5] text-dark-text-2 sm:text-[22px] lg:text-[26px]">
              AI Voice <RotatingWord /> 전화로 찾아옵니다.
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={350}>
            <p className="mt-4 text-[14px] leading-[1.6] text-dark-text-2 sm:text-[16px] lg:text-[18px]">
              당신에게 필요한 누구든, 벨이 울리면 받으세요.
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={500}>
            <div className="mt-12">
              <EmailForm variant="hero" source="hero" />
            </div>
          </Reveal>
        </div>

        <Reveal
          variant="from-right"
          delay={200}
          className="relative mx-auto w-full max-w-[540px] lg:mx-0 lg:ml-auto"
        >
          {/* glow */}
          <div
            className="pointer-events-none absolute -inset-12 -z-10 bg-[radial-gradient(circle_at_center,rgba(244,106,106,0.25),transparent_60%)] blur-2xl"
            aria-hidden="true"
          />
          <div className="relative aspect-[540/304] w-full overflow-hidden rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
            <Image
              src="/images/hero-phone.png"
              alt="Vona 통화 화면 — 19:00 지윤"
              fill
              priority
              sizes="(min-width: 1024px) 540px, 100vw"
              className="object-cover"
            />
            {/* fades to blend with dark bg */}
            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-dark/85 via-dark/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent via-dark/30 to-dark/85" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
