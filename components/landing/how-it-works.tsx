"use client";

import { motion } from "framer-motion";
import {
  Building2,
  DoorOpen,
  Banknote,
  UserPlus,
  Wallet,
  ArrowRight,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/brand";

const steps = [
  {
    step: "01",
    icon: Building2,
    title: "Create Hostel",
    description:
      "Add your hostel name, city, and contact details. Done in 2 minutes.",
    color: "from-primary-start to-primary-end",
    glow: "shadow-primary-start/20",
  },
  {
    step: "02",
    icon: DoorOpen,
    title: "Add Rooms",
    description:
      "Set up rooms, beds, and monthly rent. See occupancy at a glance.",
    color: "from-primary-end to-primary-mid",
    glow: "shadow-primary-end/20",
  },
  {
    step: "03",
    icon: UserPlus,
    title: "Add Tenants",
    description: "Onboard tenants, assign rooms, and store their contact info.",
    color: "from-accent-soft to-primary-start",
    glow: "shadow-accent-soft/20",
  },
  {
    step: "04",
    icon: Banknote,
    title: "Track Rent",
    description:
      "Automatic due dates, reminders, and a clear pending-paid view.",
    color: "from-primary-start to-primary-mid",
    glow: "shadow-primary-start/15",
  },
  {
    step: "05",
    icon: Wallet,
    title: "Receive Payments",
    description:
      "Tenants pay via JazzCash or Easypaisa — you verify screenshots in one tap.",
    color: "from-primary-mid to-accent-soft",
    glow: "shadow-primary-mid/15",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden py-20 sm:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-start/[0.04] via-background to-accent/[0.04]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary-start/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <span className="inline-block rounded-full bg-primary-start/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-start">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            From Setup to Rent Collection
            <br />
            <span className="gradient-text">in 5 Easy Steps</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-foreground/60 sm:text-lg">
            Get your hostel running on {BRAND.name} in under an hour — no
            technical skills needed.
          </p>
        </AnimatedSection>

        {/* Desktop zigzag path */}
        <div className="relative mt-16 hidden lg:block">
          <div className="absolute left-1/2 top-8 bottom-8 w-px -translate-x-1/2 bg-gradient-to-b from-primary-start/30 via-primary-end/20 to-accent/30" />

          <div className="space-y-6">
            {steps.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <AnimatedSection key={item.step} delay={i * 0.1}>
                  <div
                    className={`flex items-center gap-8 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, y: -4 }}
                      className={`w-[calc(50%-2.5rem)] rounded-3xl surface p-6 shadow-xl backdrop-blur-sm ${item.glow}`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} shadow-lg`}
                        >
                          <item.icon size={24} className="text-white" />
                        </div>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-primary-start/70">
                            Step {item.step}
                          </span>
                          <h3 className="mt-1 text-xl font-bold text-foreground">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Center node */}
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full btn-gradient text-xs font-bold text-white shadow-lg ring-4 ring-background">
                      {i + 1}
                    </div>

                    <div className="w-[calc(50%-2.5rem)]" />
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        {/* Tablet: 2-column grid */}
        <div className="mt-12 hidden gap-5 sm:grid sm:grid-cols-2 lg:hidden">
          {steps.map((item, i) => (
            <AnimatedSection key={item.step} delay={i * 0.08}>
              <StepCard item={item} />
            </AnimatedSection>
          ))}
        </div>

        {/* Mobile: horizontal snap scroll */}
        <div className="mt-10 flex gap-4 overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory sm:hidden">
          {steps.map((item, i) => (
            <div
              key={item.step}
              className="w-[85vw] shrink-0 snap-center first:pl-1 last:pr-1"
            >
              <AnimatedSection delay={i * 0.06}>
                <StepCard item={item} />
              </AnimatedSection>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <AnimatedSection delay={0.3} className="mt-14">
          <div className="flex flex-col items-center justify-between gap-4 rounded-3xl border border-primary-start/10 bg-gradient-to-r from-primary-start/5 via-surface-muted to-accent-soft/10 px-6 py-8 text-center sm:flex-row sm:px-10 sm:text-left">
            <div>
              <p className="text-lg font-bold text-foreground">
                Ready to get started?
              </p>
              <p className="mt-1 text-sm text-foreground/60">
                Free plan available — no credit card required.
              </p>
            </div>
            <Button href="#contact" className="w-full shrink-0 sm:w-auto">
              Start Free
              <ArrowRight size={16} />
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function StepCard({ item }: { item: (typeof steps)[number] }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className={`h-full rounded-3xl surface p-5 shadow-lg backdrop-blur-sm sm:p-6 ${item.glow}`}
    >
      <div
        className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} shadow-md`}
      >
        <item.icon size={22} className="text-white" />
      </div>
      <span className="text-[10px] font-bold uppercase tracking-widest text-primary-start/70">
        Step {item.step}
      </span>
      <h3 className="mt-1 text-lg font-bold text-foreground">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground/60">
        {item.description}
      </p>
    </motion.div>
  );
}
