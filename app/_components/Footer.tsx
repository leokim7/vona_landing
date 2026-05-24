import Image from "next/image";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="bg-dark py-12 text-dark-text-1">
      <Container>
        <div className="border-t border-dark-line pt-10">
          <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <Image
                  src="/images/nav-logo.png"
                  alt=""
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
                <span className="text-[18px] font-bold tracking-[-0.5px] text-dark-text-1">
                  Vona
                </span>
              </div>
              <p className="mt-5 text-[13px] text-dark-text-2">
                AI Voice Companion · Widit Agency
              </p>
              <p className="mt-1 text-[12px] text-dark-text-3">
                © 2026 Widit Agency. All rights reserved.
              </p>
            </div>

            <div className="sm:text-right">
              <p className="text-[10px] font-bold uppercase tracking-[1px] text-dark-text-1">
                CONTACT
              </p>
              <a
                href="mailto:info@vona.kr"
                className="mt-2 inline-block text-[13px] font-semibold tracking-[-0.3px] text-dark-text-1 hover:text-coral"
              >
                info@vona.kr
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
