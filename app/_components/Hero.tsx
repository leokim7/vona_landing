import Image from "next/image";
import { Container } from "./Container";
import { EmailForm } from "./EmailForm";
import { RotatingWord } from "./RotatingWord";
import { SectionLabel } from "./SectionLabel";

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

      <Container className="grid min-h-[640px] grid-cols-1 items-center gap-12 py-24 lg:min-h-[720px] lg:grid-cols-[1.1fr_1fr] lg:py-32">
        <div className="flex flex-col">
          <SectionLabel accent="coral">AI VOICE 친구</SectionLabel>

          <h1 className="mt-8 text-[40px] font-bold leading-[1.15] tracking-[-1.5px] text-dark-text-1 sm:text-[52px] lg:text-[64px] lg:tracking-[-2px]">
            <span className="block">
              <span className="text-coral">&quot;여보세요.&quot;</span>
            </span>
          </h1>

          <p className="mt-8 text-[20px] leading-[1.5] text-dark-text-2 sm:text-[24px] lg:text-[26px]">
            AI Voice{" "}
            <RotatingWord />{" "}
            전화로 찾아옵니다.
          </p>

          <p className="mt-4 text-[18px] font-semibold tracking-[-0.3px] text-dark-text-1 sm:text-[20px] lg:text-[22px]">
            친구 · 상담사 · 코치 · 선생님 —
          </p>
          <p className="mt-1 text-[15px] leading-[1.6] text-dark-text-2 sm:text-[17px] lg:text-[18px]">
            당신에게 필요한 누구든, 벨이 울리면 받으세요.
          </p>

          <div className="mt-10">
            <EmailForm variant="hero" source="hero" />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[540px] lg:mx-0 lg:ml-auto">
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
        </div>
      </Container>
    </section>
  );
}
