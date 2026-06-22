"use client";

import { motion } from "framer-motion";
import { Bell, CheckCircle2, ClipboardList, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/animated-section";
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

function SolutionIllustration() {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 scale-90 rounded-full bg-gradient-to-br from-primary-start/20 to-accent/15 blur-3xl" />
      <motion.div
        className="glass rounded-3xl p-6 sm:p-8 glow-primary"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-foreground/50">{BRAND.name} Dashboard</p>
            <p className="text-xl font-bold text-foreground">
              All-in-One Control
            </p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl overflow-hidden">
            <Image
              src={BRAND.logo}
              alt={BRAND.name}
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
        </div>

        <div className="space-y-3">
          {[
            { label: "Tenants Managed", value: "48", bar: "w-full" },
            { label: "Rent Collected", value: "Rs. 2.4L", bar: "w-4/5" },
            { label: "Complaints Resolved", value: "12/14", bar: "w-[85%]" },
            { label: "Payment Verified", value: "96%", bar: "w-[96%]" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white/60 p-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground/70">
                  {item.label}
                </span>
                <span className="text-sm font-bold text-foreground">
                  {item.value}
                </span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-foreground/5">
                <motion.div
                  className={`h-full rounded-full bg-gradient-to-r from-primary-start to-accent ${item.bar}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.8 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 rounded-2xl bg-accent/10 p-4">
          <CheckCircle2 size={20} className="text-accent shrink-0" />
          <p className="text-sm font-medium text-foreground/80">
            Everything synced across your phone — manage on the go.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export function Solution() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <AnimatedSection>
            <SolutionIllustration />
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-start">
              The Solution
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              One Platform.{" "}
              <span className="gradient-text">Total Control.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/60">
              {BRAND.name} replaces spreadsheets, WhatsApp threads, and manual
              tracking with a single, powerful app built for hostel owners in
              Pakistan.
            </p>

            <div className="mt-8 space-y-5">
              {solutions.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-start/10">
                    <item.icon size={20} className="text-primary-start" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-foreground/60">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
