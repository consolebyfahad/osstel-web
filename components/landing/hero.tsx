"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowDownToLine, Banknote, CalendarCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingBlobs } from "@/components/ui/floating-blobs";
import { PhoneMockup } from "@/components/ui/phone-mockup";
import { AnimatedNumber } from "@/components/ui/animated-number";
import { FadeIn } from "@/components/ui/animated-section";
import { WordReveal } from "@/components/ui/text-reveal";
import { APP_SCREENSHOTS } from "@/lib/app-screenshots";
import { BRAND } from "@/lib/brand";

const dashboardShot = APP_SCREENSHOTS[0];

const stats: {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}[] = [
  { value: 1, suffix: "", label: "Platform" },
  { value: 100, suffix: "%", label: "Mobile Ready" },
  { value: 24, suffix: "/7", label: "Rent Tracking" },
];

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-[100dvh] overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24"
    >
      <FloatingBlobs />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <FadeIn className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 260, damping: 22 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium text-foreground/70 sm:mb-6"
            >
              <Image
                src={BRAND.logo}
                alt=""
                width={20}
                height={20}
                className="rounded-md"
              />
              {BRAND.tagline}
            </motion.div>

            <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl sm:text-5xl lg:text-6xl">
              <WordReveal text={`${BRAND.name}:`} delay={0.2} />
              <br />
              <WordReveal
                text="Hostel Management System"
                delay={0.35}
                className="gradient-text-shimmer"
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-foreground/60 sm:mt-6 sm:text-lg lg:mx-0"
            >
              The complete hostel management software for owners in{" "}
              {BRAND.country}. Manage tenants, rooms, rent collection, payments,
              and complaints — all in one {BRAND.name} platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="mt-7 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-center lg:justify-start"
            >
              <Button href="/#contact" className="w-full sm:w-auto">
                <ArrowDownToLine size={18} />
                Get Started
              </Button>
              <Button
                variant="secondary"
                href={BRAND.whatsappUrl}
                className="w-full sm:w-auto"
              >
                Chat on WhatsApp
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-5 sm:gap-6 lg:justify-start"
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-5 sm:gap-6">
                  {i > 0 && (
                    <div className="hidden h-8 w-px bg-foreground/10 sm:block" />
                  )}
                  <div className="text-center lg:text-left">
                    <p className="text-xl font-bold text-foreground sm:text-2xl">
                      <AnimatedNumber
                        value={stat.value}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                      />
                    </p>
                    <p className="text-xs text-foreground/50">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </FadeIn>

          <motion.div
            style={{ y, opacity }}
            className="relative mx-auto w-full max-w-[320px] sm:max-w-none lg:mx-0"
          >
            <motion.div
              className="glass absolute -left-2 top-12 z-10 hidden rounded-2xl p-3 shadow-xl md:block lg:-left-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-start/15">
                  <Banknote size={16} className="text-primary-start" />
                </div>
                <div>
                  <p className="text-xs text-foreground/50">Rent Collected</p>
                  <p className="text-sm font-bold text-foreground">Rs. 1,24,500</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="glass absolute -right-2 top-28 z-10 hidden rounded-2xl p-3 shadow-xl md:block lg:-right-8"
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-end/15">
                  <Users size={16} className="text-primary-end" />
                </div>
                <div>
                  <p className="text-xs text-foreground/50">Active Tenants</p>
                  <p className="text-sm font-bold text-foreground">48</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="glass absolute -right-1 bottom-16 z-10 hidden rounded-2xl p-3 shadow-xl md:block lg:-right-6"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-success/15">
                  <CalendarCheck size={16} className="text-success" />
                </div>
                <div>
                  <p className="text-xs text-foreground/50">On-time Payments</p>
                  <p className="text-sm font-bold text-primary-start">92%</p>
                </div>
              </div>
            </motion.div>

            <PhoneMockup
              src={dashboardShot.src}
              alt={dashboardShot.alt}
              size="lg"
              priority
              showGlow
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
