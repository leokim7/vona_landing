import Image from "next/image";
import { Container } from "./Container";
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
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="relative aspect-[580/326] w-full overflow-hidden rounded-[4px]">
          <Image
            src="/images/why-phone-call.png"
            alt="3세대가 함께 통화하는 모습"
            fill
            sizes="(min-width: 1024px) 580px, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <SectionLabel>WHY PHONE CALL</SectionLabel>

          <h2 className="mt-4 text-[36px] font-bold leading-[1.2] tracking-[-1.5px] text-text-1 sm:text-[42px] lg:text-[48px] lg:tracking-[-2px]">
            전화는 가장 오래
            <br />
            살아남은 인터페이스다.
          </h2>

          <p className="mt-10 text-[40px] font-bold tracking-[-1.5px] text-text-1 sm:text-[48px] lg:text-[56px] lg:tracking-[-2px]">
            &ldquo;여보세요?&rdquo;
          </p>

          <span className="mt-4 block h-px w-8 bg-dark-2" aria-hidden="true" />
          <p className="mt-3 text-[15px] leading-[1.7] text-text-2 sm:text-[16px]">
            3살 아이도, 80대 어르신도 — 이 한 마디는 가르칠 필요가 없습니다.
          </p>

          <ul className="mt-8 space-y-3">
            {BULLETS.map((b) => (
              <li key={b.title} className="flex items-start gap-3">
                <span
                  className="mt-[10px] block h-px w-4 shrink-0 bg-dark-2"
                  aria-hidden="true"
                />
                <span className="text-[14px] font-bold tracking-[-0.2px] text-text-1">
                  {b.title}
                </span>
                <span className="text-[14px] text-text-3">—</span>
                <span className="text-[14px] text-text-2">{b.body}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
