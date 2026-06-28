"use client";

import { motion } from "framer-motion";
import { Bell, CheckCircle2, ClipboardList, ShieldCheck } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { SectionHeader } from "@/components/ui/section-header";
import { PhoneMockup } from "@/components/ui/phone-mockup";
import { APP_SCREENSHOTS } from "@/lib/app-screenshots";
import { BRAND } from "@/lib/brand";

const solutions = [
  {
    icon: ClipboardList,
    title: "Digital Tenant Management",
    description:
      "Store tenant profiles, documents, and room assignments in one secure dashboard.",
  },
  {
    icon: CheckCircle2,
    title: "Auto Rent Tracking",
    description:
      "Automated due date tracking with smart reminders so you never chase payments manually.",
  },
  {
    icon: ShieldCheck,
    title: "Payment Verification",
    description:
      "Tenants upload payment screenshots — you verify with one tap. No more WhatsApp chaos.",
  },
  {
    icon: Bell,
    title: "Complaint Handling",
    description:
      "Tenants raise complaints in-app. Track, assign, and resolve issues with full visibility.",
  },
];

const rentShot = APP_SCREENSHOTS.find((s) => s.id === "rent")!;

function SolutionIllustration() {
  return (
    <div className="relative mx-auto flex max-w-[280px] justify-center sm:max-w-none">
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 -z-10 scale-90 rounded-full bg-gradient-to-br from-primary-start/25 to-primary-end/20 blur-3xl"
      />
      <PhoneMockup
        src={rentShot.src}
        alt={rentShot.alt}
        size="md"
        showGlow
      />
    </div>
  );
}

export function Solution() {
  return (
    <section className="section-glow-top relative py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <AnimatedSection className="order-2 lg:order-1">
            <SolutionIllustration />
          </AnimatedSection>

          <div className="order-1 lg:order-2">
            <SectionHeader
              align="left"
              eyebrow="The Solution"
              title={
                <>
                  One Platform.{" "}
                  <span className="gradient-text">Total Control.</span>
                </>
              }
              description={`${BRAND.name} replaces spreadsheets, WhatsApp threads, and manual tracking with one hostel management system built for property owners in ${BRAND.country}.`}
            />

            <StaggerContainer className="mt-6 space-y-4 sm:mt-8 sm:space-y-5" stagger={0.1}>
              {solutions.map((item) => (
                <StaggerItem key={item.title}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 400, damping: 24 }}
                    className="flex gap-3 sm:gap-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-start/10 sm:h-11 sm:w-11">
                      <item.icon size={20} className="text-primary-start" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground sm:text-base">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-foreground/60">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
