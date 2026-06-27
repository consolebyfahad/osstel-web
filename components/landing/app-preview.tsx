"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BedDouble, Download, Users } from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animated-section";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { PhoneMockup } from "@/components/ui/phone-mockup";
import { APP_SCREENSHOTS } from "@/lib/app-screenshots";
import { BRAND } from "@/lib/brand";
import { cn } from "@/lib/utils";

function StoreButton({
  store,
  href,
}: {
  store: "google" | "apple";
  href: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-border surface px-4 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary-start/25 hover:shadow-md sm:w-auto sm:justify-start"
    >
      {store === "google" ? (
        <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" aria-hidden>
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
          className="h-7 w-7 shrink-0 fill-foreground"
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
    </Link>
  );
}

export function AppPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = APP_SCREENSHOTS[activeIndex];

  return (
    <section id="download" className="section-glow-top relative py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Mobile App"
          title={
            <>
              Your Hostel.{" "}
              <span className="gradient-text">Always in Your Pocket.</span>
            </>
          }
          description={`Manage tenants, track rent, verify JazzCash & Easypaisa payments, and handle complaints — securely from anywhere in ${BRAND.country}.`}
          className="mb-10 sm:mb-12"
        />

        <AnimatedSection>
          <div className="glass overflow-hidden rounded-[1.75rem] sm:rounded-[2rem]">
            <div className="grid items-center gap-8 px-5 py-8 sm:gap-10 sm:px-8 sm:py-10 lg:grid-cols-2 lg:gap-6 lg:px-12 lg:py-14">
              <div className="order-2 flex flex-col justify-center lg:order-1">
                <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-primary-start/10 px-4 py-2 sm:mb-5">
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

                <div className="relative mt-2 flex gap-2 overflow-x-auto pb-1 no-scrollbar sm:mt-4 sm:flex-wrap">
                  {APP_SCREENSHOTS.map((screen, index) => (
                    <button
                      key={screen.id}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={cn(
                        "relative shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors sm:px-4 sm:py-2 sm:text-sm",
                        activeIndex === index
                          ? "text-white"
                          : "surface-muted text-foreground/65 hover:text-primary-start"
                      )}
                    >
                      {activeIndex === index && (
                        <motion.span
                          layoutId="app-tab-pill"
                          className="absolute inset-0 rounded-full btn-gradient shadow-md"
                          transition={{ type: "spring", stiffness: 380, damping: 28 }}
                        />
                      )}
                      <span className="relative z-10">{screen.label}</span>
                    </button>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <StoreButton store="google" href="/#contact" />
                  <StoreButton store="apple" href="/#contact" />
                </div>

                <div className="mt-5">
                  <Button href="/#contact" variant="outline" className="w-full sm:w-auto">
                    <Download size={16} />
                    Request Demo
                  </Button>
                </div>
              </div>

              {/* Phone mockup + mobile scroll gallery */}
              <div className="order-1 lg:order-2">
                {/* Desktop / tablet — animated single mockup */}
                <div className="relative mx-auto hidden min-h-[420px] items-center justify-center sm:flex lg:min-h-[480px]">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-start/15 to-primary-end/10 blur-3xl" />
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active.id}
                      initial={{ opacity: 0, y: 16, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -16, scale: 0.96 }}
                      transition={{ duration: 0.35 }}
                      className="relative z-10"
                    >
                      <PhoneMockup
                        src={active.src}
                        alt={active.alt}
                        size="md"
                        animate={false}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Mobile — swipeable screenshot strip */}
                <div className="sm:hidden">
                  <p className="mb-3 text-center text-xs font-medium text-foreground/50">
                    Swipe to explore app screens
                  </p>
                  <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 no-scrollbar">
                    {APP_SCREENSHOTS.map((screen) => (
                      <div
                        key={screen.id}
                        className="w-[72%] shrink-0 snap-center first:pl-1 last:pr-1"
                      >
                        <PhoneMockup
                          src={screen.src}
                          alt={screen.alt}
                          size="sm"
                          animate={false}
                          showGlow
                        />
                        <p className="mt-2 text-center text-xs font-medium text-foreground/60">
                          {screen.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <StaggerContainer className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:mt-10 sm:gap-3">
          {[
            { icon: Users, label: "Tenant Management" },
            { icon: BedDouble, label: "Room Tracking" },
            { icon: Download, label: "Rent Collection" },
          ].map((item) => (
            <StaggerItem key={item.label}>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 rounded-full border border-border surface-muted px-3 py-1.5 shadow-sm sm:px-4 sm:py-2"
              >
                <item.icon size={14} className="text-primary-start" />
                <span className="text-xs font-medium text-foreground/70">
                  {item.label}
                </span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
