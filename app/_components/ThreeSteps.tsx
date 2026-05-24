import { Container } from "./Container";
import { SectionLabel } from "./SectionLabel";

const STEPS = [
  {
    number: "01",
    title: "페르소나 선택",
    body: "지윤·철수 등 캐릭터 중 마음에 드는 페르소나를 고른다. 성격·말투·통화 빈도를 설정한다.",
  },
  {
    number: "02",
    title: "번호 발급",
    body: "선택한 페르소나에게 전화번호가 부여된다. 자동 콜 시간과 사용자 콜 권한이 설정된다.",
  },
  {
    number: "03",
    title: "여보세요",
    body: "벨이 울리면, 내가 걸면 — AI가 받는다. 이전 대화를 기억하고, 관계를 이어간다.",
  },
];

export function ThreeSteps() {
  return (
    <section className="bg-bg-gray py-24 lg:py-32">
      <Container>
        <SectionLabel>HOW IT WORKS</SectionLabel>

        <h2 className="mt-4 text-[36px] font-bold tracking-[-1.5px] text-text-1 sm:text-[42px] lg:text-[48px] lg:tracking-[-2px]">
          3단계로 시작합니다.
        </h2>
        <p className="mt-4 text-[16px] text-text-2 sm:text-[18px]">
          복잡한 설정 없이, 단 몇 분 만에.
        </p>

        <ol className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {STEPS.map((step) => (
            <li
              key={step.number}
              className="relative overflow-hidden rounded-lg bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            >
              <span
                className="absolute inset-y-0 left-0 w-1 bg-dark-2"
                aria-hidden="true"
              />
              <p className="text-[32px] font-bold tracking-[-1px] text-coral">
                {step.number}
              </p>
              <h3 className="mt-3 text-[22px] font-bold tracking-[-0.5px] text-text-1 sm:text-[24px]">
                {step.title}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.6] text-text-2">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
