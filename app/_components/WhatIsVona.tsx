import Image from "next/image";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function WhatIsVona() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        {/* TEXT — first in DOM (mobile shows on top); on lg, ordered to the right */}
        <Reveal variant="fade-up" className="lg:order-2">
          <SectionLabel>WHAT IS VONA</SectionLabel>

          <p className="mt-4 text-[28px] font-normal tracking-[-0.5px] text-text-2 sm:text-[32px] lg:text-[36px]">
            Vona는,
          </p>
          <h2 className="mt-2 text-[36px] font-bold leading-[1.2] tracking-[-1.5px] text-text-1 sm:text-[42px] lg:text-[48px] lg:tracking-[-2px]">
            AI 페르소나에게
            <br />
            전화번호를 부여한,
            <br />
            AI 음성 컴패니언입니다.
          </h2>

          <div className="mt-10">
            <span className="block h-px w-10 bg-dark-2" aria-hidden="true" />
            <p className="mt-3 text-[20px] font-semibold tracking-[-0.5px] text-text-1 sm:text-[22px]">
              채팅 앱이 아니라, 전화.
            </p>
            <p className="mt-2 text-[15px] leading-[1.6] text-text-2 sm:text-[16px]">
              설치도, 가입도, 화면도 필요 없다 — 벨이 울리면 받는다.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-[2px] text-text-3">
                WHO
              </dt>
              <p className="mt-2 text-[17px] font-bold tracking-[-0.3px] text-text-1">
                AI 페르소나
              </p>
              <dd className="mt-2 text-[13px] leading-[1.5] text-text-2">
                여친·친구·코치 성격과 말투를 가진 캐릭터
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-[2px] text-text-3">
                HOW
              </dt>
              <p className="mt-2 text-[17px] font-bold tracking-[-0.3px] text-text-1">
                전화번호
              </p>
              <dd className="mt-2 text-[13px] leading-[1.5] text-text-2">
                앱 안의 기능이 아닌, 진짜 전화번호로 통화합니다.
              </dd>
            </div>
          </dl>
        </Reveal>

        {/* IMAGE — second in DOM (mobile shows below text); on lg, ordered to the left */}
        <Reveal
          variant="from-left"
          className="relative aspect-[580/460] w-full overflow-hidden rounded-[4px] lg:order-1"
        >
          <Image
            src="/images/what-is-vona.png"
            alt="카페에서 통화하는 사용자"
            fill
            sizes="(min-width: 1024px) 580px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
