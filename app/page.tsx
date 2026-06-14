import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { TrustProblem } from "@/components/landing/trust-problem";
import { Solution } from "@/components/landing/solution";
import { Features } from "@/components/landing/features";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Pricing } from "@/components/landing/pricing";
import { Contact } from "@/components/landing/contact";
import { Footer } from "@/components/landing/footer";
import { MobileStickyCTA } from "@/components/landing/mobile-sticky-cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pb-20 md:pb-0">
        <Hero />
        <TrustProblem />
        <Solution />
        <Features />
        <HowItWorks />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
