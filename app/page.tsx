import type { Metadata } from "next";
import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { TrustProblem } from "@/components/landing/trust-problem";
import { Solution } from "@/components/landing/solution";
import { Features } from "@/components/landing/features";
import { HowItWorks } from "@/components/landing/how-it-works";
import { AppPreview } from "@/components/landing/app-preview";
import { Pricing } from "@/components/landing/pricing";
import { Contact } from "@/components/landing/contact";
import { Footer } from "@/components/landing/footer";
import { MobileStickyCTA } from "@/components/landing/mobile-sticky-cta";
import { StatsBand } from "@/components/landing/stats-band";
import { SEO_DESCRIPTION, SEO_TITLE } from "@/lib/seo";

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: SEO_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pb-20 md:pb-0">
        <Hero />
        <StatsBand />
        <TrustProblem />
        <Solution />
        <Features />
        <HowItWorks />
        <AppPreview />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
