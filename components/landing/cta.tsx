"use client";

import { ArrowDownToLine, Mail } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { BRAND } from "@/lib/brand";
import { Button } from "@/components/ui/button";
import { FloatingBlobs } from "@/components/ui/floating-blobs";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <FloatingBlobs variant="cta" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="glass rounded-[2rem] px-6 py-16 sm:px-12 sm:py-20 glow-primary">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Start Managing Your Hostel{" "}
              <span className="gradient-text">Smarter Today</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-foreground/60 sm:text-lg">
              Join hundreds of hostel owners who&apos;ve ditched spreadsheets
              and WhatsApp chaos for {BRAND.name}.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="#contact">
                <ArrowDownToLine size={18} />
                Download App
              </Button>
              <Button variant="outline" href="#contact">
                <Mail size={18} />
                Contact Us
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
