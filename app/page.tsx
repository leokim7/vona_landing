import { CTA } from "./_components/CTA";
import { FAQ } from "./_components/FAQ";
import { Footer } from "./_components/Footer";
import { Hero } from "./_components/Hero";
import { NavBar } from "./_components/NavBar";
import { ThreeSteps } from "./_components/ThreeSteps";
import { TrustSafety } from "./_components/TrustSafety";
import { TwoPersonas } from "./_components/TwoPersonas";
import { WhatIsVona } from "./_components/WhatIsVona";
import { WhyPhoneCall } from "./_components/WhyPhoneCall";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <WhatIsVona />
        <ThreeSteps />
        <TwoPersonas />
        <WhyPhoneCall />
        <TrustSafety />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
