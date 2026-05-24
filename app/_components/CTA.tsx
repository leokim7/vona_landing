import Image from "next/image";
import { Container } from "./Container";
import { EmailForm } from "./EmailForm";

export function CTA() {
  return (
    <section
      id="cta"
      className="relative isolate overflow-hidden bg-dark py-24 text-dark-text-1 lg:py-32"
    >
      <Image
        src="/images/soundwave.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover opacity-35"
      />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0f1419_85%)]"
        aria-hidden="true"
      />

      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="text-[12px] font-bold uppercase tracking-[3px] text-coral">
            사전 신청 OPEN
          </p>
          <h2 className="mt-6 text-[36px] font-bold leading-[1.15] tracking-[-1.5px] text-dark-text-1 sm:text-[44px] lg:text-[56px] lg:tracking-[-2px]">
            벨이 울리는 순간을
            <br className="sm:hidden" /> 함께해주세요.
          </h2>
          <p className="mt-5 text-[16px] text-dark-text-2 sm:text-[18px] lg:text-[20px]">
            Phase 1 클로즈드 베타 — 선착순 100명.
          </p>

          <div className="mt-10 w-full">
            <div className="mx-auto w-full max-w-[540px]">
              <EmailForm variant="cta" source="cta" />
            </div>
          </div>

          <p className="mt-8 text-[13px] text-dark-text-2">
            베타 사용자에게는 평생 50% 할인 혜택을 제공합니다.
          </p>
        </div>
      </Container>
    </section>
  );
}
