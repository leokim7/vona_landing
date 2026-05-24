import Image from "next/image";
import { Container } from "./Container";

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 h-20 border-b border-line bg-white/95 backdrop-blur">
      <Container className="flex h-full items-center justify-between">
        <a href="#top" className="flex items-center gap-3" aria-label="Vona 홈">
          <Image
            src="/images/nav-logo.png"
            alt=""
            width={36}
            height={36}
            className="rounded-[9px]"
            priority
          />
          <span className="text-[22px] font-bold tracking-[-0.5px] text-text-1">
            Vona
          </span>
        </a>

        <a
          href="#cta"
          className="inline-flex h-11 items-center justify-center rounded-lg bg-dark px-5 text-[15px] font-semibold tracking-[-0.3px] text-dark-text-1 transition hover:bg-dark-2"
        >
          사전 신청
        </a>
      </Container>
    </header>
  );
}
