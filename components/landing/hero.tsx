"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDownToLine, Banknote, CalendarCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingBlobs } from "@/components/ui/floating-blobs";
import { FadeIn } from "@/components/ui/animated-section";
import { BRAND } from "@/lib/brand";

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[300px]">
      {/* Glow behind phone */}
      <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-gradient-to-br from-primary-start/30 to-accent/20 blur-3xl" />

      {/* Floating UI cards */}
      <motion.div
        className="glass absolute -left-8 top-16 z-10 rounded-2xl p-3 shadow-xl sm:-left-12"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/20">
            <Banknote size={16} className="text-accent" />
          </div>
          <div>
            <p className="text-xs text-foreground/50">Rent Collected</p>
            <p className="text-sm font-bold text-foreground">Rs. 1,24,500</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="glass absolute -right-6 top-32 z-10 rounded-2xl p-3 shadow-xl sm:-right-10"
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-start/20">
            <Users size={16} className="text-primary-start" />
          </div>
          <div>
            <p className="text-xs text-foreground/50">Active Tenants</p>
            <p className="text-sm font-bold text-foreground">48</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="glass absolute -right-4 bottom-24 z-10 rounded-2xl p-3 shadow-xl sm:-right-8"
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/15">
            <CalendarCheck size={16} className="text-emerald-500" />
          </div>
          <div>
            <p className="text-xs text-foreground/50">On-time Payments</p>
            <p className="text-sm font-bold text-emerald-500">92%</p>
          </div>
        </div>
      </motion.div>

      {/* Phone */}
      <motion.div
        className="phone-frame relative z-0"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="phone-screen">
          {/* Status bar */}
          <div className="flex items-center justify-between bg-white px-5 py-3">
            <span className="text-xs font-semibold text-foreground">9:41</span>
            <div className="mx-auto h-6 w-24 rounded-full bg-foreground/10" />
            <div className="flex gap-1">
              <div className="h-2.5 w-2.5 rounded-full bg-foreground/30" />
              <div className="h-2.5 w-2.5 rounded-full bg-foreground/30" />
            </div>
          </div>

          {/* App content */}
          <div className="bg-gradient-to-b from-primary-start/8 to-background px-4 pb-6 pt-2">
            <div className="flex items-center gap-2">
              <Image
                src={BRAND.logo}
                alt=""
                width={28}
                height={28}
                className="rounded-lg"
              />
              <div>
                <p className="text-xs text-foreground/50">
                  Assalam o Alaikum 👋
                </p>
                <p className="text-lg font-bold text-foreground">
                  Al-Noor Hostel, Lahore
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-2xl btn-gradient p-4 text-white shadow-lg shadow-primary-start/20">
              <p className="text-xs opacity-80">This Month&apos;s Collection</p>
              <p className="text-2xl font-bold">Rs. 2,45,000</p>
              <div className="mt-2 h-1.5 rounded-full bg-white/30">
                <div className="h-full w-3/4 rounded-full bg-white" />
              </div>
              <p className="mt-1 text-xs opacity-70">75% collected</p>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                { label: "Rooms", value: "32", color: "bg-primary-start/10" },
                { label: "Pending", value: "6", color: "bg-amber-500/10" },
                { label: "Paid", value: "26", color: "bg-accent/20" },
                { label: "Complaints", value: "2", color: "bg-primary-end/10" },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`rounded-xl ${item.color} p-3`}
                >
                  <p className="text-xs text-foreground/50">{item.label}</p>
                  <p className="text-lg font-bold text-foreground">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 space-y-2">
              <p className="text-xs font-semibold text-foreground/60">
                Recent Payments
              </p>
              {[
                "Ahmed K. — Rs. 12,000",
                "Fatima A. — Rs. 10,500",
                "Hassan R. — Rs. 12,000",
              ].map((payment) => (
                <div
                  key={payment}
                  className="flex items-center justify-between rounded-xl bg-white p-2.5 shadow-sm"
                >
                  <span className="text-xs font-medium text-foreground">
                    {payment}
                  </span>
                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-semibold text-green-700">
                    Verified
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24"
    >
      <FloatingBlobs />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <FadeIn className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium text-foreground/70"
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

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              Manage Hostels.{" "}
              <span className="gradient-text">Collect Rent.</span> Effortlessly.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-foreground/60 sm:text-lg lg:mx-0 mx-auto"
            >
              A complete digital platform for hostel owners in Pakistan to
              manage tenants, rooms, payments, and complaints in one place.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start justify-center"
            >
              <Button href="#contact" className="w-full sm:w-auto">
                <ArrowDownToLine size={18} />
                Download App
              </Button>
              <Button
                variant="secondary"
                href="#contact"
                className="w-full sm:w-auto"
              >
                Request Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-10 flex items-center justify-center gap-6 lg:justify-start"
            >
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">500+</p>
                <p className="text-xs text-foreground/50">Hostels</p>
              </div>
              <div className="h-8 w-px bg-foreground/10" />
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">10K+</p>
                <p className="text-xs text-foreground/50">Tenants</p>
              </div>
              <div className="h-8 w-px bg-foreground/10" />
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">Rs. 5Cr+</p>
                <p className="text-xs text-foreground/50">Rent Collected</p>
              </div>
            </motion.div>
          </FadeIn>

          {/* Right - Phone mockup with parallax */}
          <motion.div style={{ y, opacity }} className="relative">
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
