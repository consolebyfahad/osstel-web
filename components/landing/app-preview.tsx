"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  BedDouble,
  Download,
  Users,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/brand";

const floatingCards = [
  {
    id: "rent-in",
    className: "left-0 top-8 sm:-left-6 sm:top-12",
    delay: 0.2,
    float: 8,
    content: (
      <div className="flex items-center gap-3 rounded-2xl surface px-4 py-3 shadow-xl shadow-foreground/10">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-success/15">
          <ArrowDownRight size={18} className="text-success" />
        </div>
        <div>
          <p className="text-xs font-semibold text-foreground">Rent Received</p>
          <p className="text-[11px] text-foreground/45">
            Ahmed Khan · JazzCash
          </p>
        </div>
        <p className="text-sm font-bold text-success">+12,000</p>
      </div>
    ),
  },
  {
    id: "rent-pending",
    className: "left-4 top-28 sm:-left-2 sm:top-36",
    delay: 0.35,
    float: 10,
    content: (
      <div className="flex items-center gap-3 rounded-2xl surface px-4 py-3 shadow-xl shadow-foreground/10">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20">
          <ArrowUpRight size={18} className="text-accent-foreground dark:text-accent" />
        </div>
        <div>
          <p className="text-xs font-semibold text-foreground">Pending Rent</p>
          <p className="text-[11px] text-foreground/45">
            Fatima Ali · Room B-204
          </p>
        </div>
        <p className="text-sm font-bold text-primary-start">10,500</p>
      </div>
    ),
  },
  {
    id: "tenants",
    className: "right-0 top-16 sm:-right-4 sm:top-20",
    delay: 0.5,
    float: 7,
    content: (
      <div className="flex flex-col items-center gap-1 rounded-2xl surface px-5 py-4 shadow-xl shadow-foreground/10">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-start to-primary-end">
          <Users size={20} className="text-white" />
        </div>
        <p className="text-lg font-bold text-foreground">42</p>
        <p className="text-[10px] font-medium text-foreground/45">
          Active Tenants
        </p>
      </div>
    ),
  },
  {
    id: "occupancy",
    className: "bottom-0 left-1/2 -translate-x-1/2 sm:bottom-4",
    delay: 0.65,
    float: 6,
    content: (
      <div className="rounded-2xl surface px-5 py-4 shadow-2xl shadow-foreground/10">
        <p className="text-xs font-bold text-foreground">Room Occupancy</p>
        <div className="mt-3 flex items-center gap-4">
          <div className="relative h-16 w-16 shrink-0">
            <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
              <circle
                cx="18"
                cy="18"
                r="15.9"
                fill="none"
                className="stroke-border"
                strokeWidth="3"
              />
              <circle
                cx="18"
                cy="18"
                r="15.9"
                fill="none"
                className="stroke-primary-start"
                strokeWidth="3"
                strokeDasharray="78 100"
                strokeLinecap="round"
              />
              <circle
                cx="18"
                cy="18"
                r="15.9"
                fill="none"
                className="stroke-primary-end"
                strokeWidth="3"
                strokeDasharray="15 100"
                strokeDashoffset="-78"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[10px] font-bold text-foreground">78%</span>
            </div>
          </div>
          <div className="space-y-1.5">
            {[
              { label: "Occupied", color: "bg-primary-start", pct: "78%" },
              { label: "Vacant", color: "bg-primary-end", pct: "15%" },
              { label: "Reserved", color: "bg-accent", pct: "7%" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <div className={`h-2 w-2 rounded-full ${item.color}`} />
                <span className="text-[10px] text-foreground/55">
                  {item.label}
                </span>
                <span className="text-[10px] font-semibold text-foreground">
                  {item.pct}
                </span>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-2 text-center text-[10px] text-foreground/40">
          22 of 28 rooms filled
        </p>
      </div>
    ),
  },
];

function DashboardScreen() {
  return (
    <div className="flex min-h-[400px] flex-col bg-gradient-to-b from-primary-start/8 to-background px-4 pb-4 pt-10">
      <div className="flex items-center gap-2.5">
        <Image
          src={BRAND.logo}
          alt=""
          width={30}
          height={30}
          className="rounded-lg"
        />
        <div>
          <p className="text-xs font-bold text-foreground">{BRAND.name}</p>
          <p className="text-[10px] text-foreground/45">Dashboard</p>
        </div>
      </div>
      <p className="mt-4 text-[11px] text-foreground/50">
        Assalam o Alaikum 👋
      </p>
      <p className="text-base font-bold text-foreground">
        Al-Noor Hostel, Lahore
      </p>

      <div className="mt-4 rounded-2xl btn-gradient p-4 shadow-lg">
        <p className="text-[10px] font-medium opacity-85">
          This Month&apos;s Collection
        </p>
        <p className="mt-0.5 text-2xl font-bold tracking-tight">Rs. 2,45,000</p>
        <div className="mt-3 h-2 rounded-full bg-white/25">
          <div className="h-full w-[78%] rounded-full bg-white" />
        </div>
        <p className="mt-1.5 text-[10px] opacity-75">
          78% collected · 6 pending
        </p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2.5">
        {[
          { l: "Rooms", v: "28", c: "surface shadow-sm" },
          { l: "Paid", v: "22", c: "bg-success/10" },
          { l: "Pending", v: "6", c: "bg-accent/15" },
          { l: "Issues", v: "1", c: "bg-primary-end/10" },
        ].map((s) => (
          <div key={s.l} className={`rounded-xl ${s.c} p-3`}>
            <p className="text-[10px] font-medium text-foreground/45">{s.l}</p>
            <p className="text-lg font-bold text-foreground">{s.v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function IPhoneMockup() {
  return (
    <div className="iphone-frame iphone-frame--featured mx-auto w-[240px] sm:w-[260px]">
      <div className="iphone-screen">
        <div className="iphone-notch" />
        <div className="flex items-center justify-between px-5 pb-0 pt-3">
          <span className="text-[10px] font-semibold text-foreground">
            9:41
          </span>
          <div className="h-[9px] w-[14px] rounded-[2px] border-[1.5px] border-foreground/55" />
        </div>
        <DashboardScreen />
        <div className="flex justify-center pb-3 pt-2">
          <div className="h-[4px] w-[100px] rounded-full bg-foreground/15" />
        </div>
      </div>
    </div>
  );
}

function StoreButton({
  store,
  href,
}: {
  store: "google" | "apple";
  href: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-3 rounded-xl border border-border surface px-4 py-2.5 shadow-sm transition-all hover:border-foreground/20 hover:shadow-md"
    >
      {store === "google" ? (
        <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden>
          <path
            d="M3.609 1.814L13.792 12 3.61 22.186a1.35 1.35 0 01-.174-.675V2.489c0-.25.06-.49.173-.675z"
            fill="#4285F4"
          />
          <path
            d="M16.273 15.273l-3.03 3.03 5.908 3.43c1.1.64 2.48-.12 2.48-1.4v-.19l-5.358-4.87z"
            fill="#34A853"
          />
          <path
            d="M16.273 8.727l-5.358-4.87c-1.18-.68-2.56.08-2.56 1.36v.19l5.908 3.43 3.03-3.03z"
            fill="#FBBC04"
          />
          <path
            d="M3.61 1.814l9.583 9.583 3.03-3.03L6.14 1.14C5.06.5 3.68 1.26 3.61 2.49v-.676z"
            fill="#EA4335"
          />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7 fill-foreground"
          aria-hidden
        >
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      )}
      <div className="text-left">
        <p className="text-[9px] leading-none text-foreground/45">
          {store === "google" ? "GET IT ON" : "Download on the"}
        </p>
        <p className="text-sm font-semibold leading-tight text-foreground">
          {store === "google" ? "Google Play" : "App Store"}
        </p>
      </div>
    </a>
  );
}

export function AppPreview() {
  return (
    <section id="download" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Blue outer frame like reference */}
        <AnimatedSection>
          <div className="overflow-hidden rounded-[2rem]  p-3 sm:rounded-[2.5rem] sm:p-4">
            <div className="overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
              <div className="grid items-center gap-10 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-2 lg:gap-6 lg:px-14 lg:py-16">
                {/* Left — copy & CTAs */}
                <div className="flex flex-col justify-center">
                  <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-primary-start/10 px-4 py-2">
                    <Image
                      src={BRAND.logo}
                      alt=""
                      width={20}
                      height={20}
                      className="rounded-md"
                    />
                    <span className="text-sm font-semibold text-primary-start">
                      {BRAND.name} Mobile App
                    </span>
                  </div>

                  <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.6rem]">
                    Your Hostel.
                    <br />
                    Always in Your Pocket.
                  </h2>

                  <p className="mt-5 max-w-md text-base leading-relaxed text-foreground/55 sm:text-lg">
                    Manage tenants, track rent, verify JazzCash & Easypaisa
                    payments, and handle complaints — securely and effortlessly
                    from anywhere in Pakistan.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <StoreButton store="google" href="#contact" />
                    <StoreButton store="apple" href="#contact" />
                  </div>

                  <div className="mt-6">
                    <Button
                      href="#contact"
                      variant="outline"
                      className="!rounded-xl"
                    >
                      <Download size={16} />
                      Request Demo
                    </Button>
                  </div>
                </div>

                {/* Right — phone + floating cards */}
                <div className="relative mx-auto flex min-h-[480px] w-full max-w-md items-center justify-center lg:mx-0 lg:max-w-none lg:min-h-[520px]">
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-start/20 to-primary-end/10 blur-3xl" />

                  {/* Floating cards */}
                  {floatingCards.map((card) => (
                    <motion.div
                      key={card.id}
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      animate={{ y: [0, -card.float, 0] }}
                      transition={{
                        opacity: { delay: card.delay, duration: 0.5 },
                        scale: { delay: card.delay, duration: 0.5 },
                        y: {
                          duration: 4 + card.delay,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: card.delay + 0.5,
                        },
                      }}
                      className={`absolute z-20 hidden sm:block ${card.className}`}
                    >
                      {card.content}
                    </motion.div>
                  ))}

                  {/* Phone */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    animate={{ y: [0, -8, 0] }}
                    className="relative z-10"
                  >
                    <IPhoneMockup />
                  </motion.div>

                  {/* Mobile floating cards — simplified row */}
                  <div className="absolute -bottom-2 left-0 right-0 z-20 flex justify-center gap-3 sm:hidden">
                    <div className="rounded-xl surface px-3 py-2 shadow-lg">
                      <p className="text-[10px] font-semibold text-success">
                        +Rs. 12,000
                      </p>
                      <p className="text-[9px] text-foreground/45">
                        Rent received
                      </p>
                    </div>
                    <div className="rounded-xl surface px-3 py-2 shadow-lg">
                      <div className="flex items-center gap-1">
                        <BedDouble size={12} className="text-primary-start" />
                        <p className="text-[10px] font-bold text-foreground">
                          78%
                        </p>
                      </div>
                      <p className="text-[9px] text-foreground/45">Occupancy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Feature pills below the card */}
        <AnimatedSection delay={0.2} className="mt-10">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {[
              { icon: Users, label: "Tenant Management" },
              { icon: BedDouble, label: "Room Tracking" },
              { icon: Download, label: "Rent Collection" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 rounded-full border border-border surface-muted px-4 py-2 shadow-sm"
              >
                <item.icon size={14} className="text-primary-start" />
                <span className="text-xs font-medium text-foreground/70">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
