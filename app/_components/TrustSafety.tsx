import { Container } from "./Container";
import { SectionLabel } from "./SectionLabel";

const ITEMS = [
  {
    number: "01",
    title: "유해 콘텐츠 차단",
    body: "성적 표현·차별·자해 유도 콘텐츠 사전 필터링.",
  },
  {
    number: "02",
    title: "연령 인증",
    body: "PASS·휴대폰 본인인증으로 19+ 페르소나 차단.",
  },
  {
    number: "03",
    title: "위험 신호 감지",
    body: "자해·우울 표현 감지 시 통화 중단 + 1393 연결.",
  },
  {
    number: "04",
    title: "투명성",
    body: "통화 시작 시 'AI입니다' 고지. 데이터 삭제권 보장.",
  },
];

export function TrustSafety() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Container>
        <SectionLabel accent="coral">TRUST &amp; SAFETY</SectionLabel>

        <h2 className="mt-4 text-[36px] font-bold tracking-[-1.5px] text-text-1 sm:text-[42px] lg:text-[48px] lg:tracking-[-2px]">
          신뢰는 제품의 일부입니다.
        </h2>

        <ul className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item) => (
            <li key={item.number}>
              <span className="block h-px w-8 bg-dark-2" aria-hidden="true" />
              <p className="mt-3 text-[13px] font-bold uppercase tracking-[2px] text-text-3">
                {item.number}
              </p>
              <h3 className="mt-3 text-[20px] font-bold tracking-[-0.5px] text-text-1 sm:text-[22px]">
                {item.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.65] text-text-2">
                {item.body}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex items-start gap-4">
          <span
            className="mt-1 block h-12 w-1 shrink-0 bg-dark-2"
            aria-hidden="true"
          />
          <p className="text-[16px] font-semibold tracking-[-0.4px] text-text-1 sm:text-[18px]">
            우리는 &lsquo;AI 연인&rsquo;을 만들지 않습니다. &lsquo;안전한 AI 동반자&rsquo;를 만듭니다.
          </p>
        </div>
      </Container>
    </section>
  );
}
