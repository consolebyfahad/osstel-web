"use client";

import { motion } from "framer-motion";
import {
  AlertCircle,
  FileSpreadsheet,
  MessageSquareWarning,
  Wallet,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

const painPoints = [
  {
    icon: FileSpreadsheet,
    title: "Manual Rent Tracking",
    description:
      "Spreadsheets and notebooks make it impossible to track who paid, who didn't, and when rent is due.",
    color: "from-red-500/10 to-orange-500/10",
    iconColor: "text-red-500",
  },
  {
    icon: Wallet,
    title: "Missed Payments",
    description:
      "Without automated reminders, tenants forget due dates and owners lose lakhs in delayed collections.",
    color: "from-orange-500/10 to-yellow-500/10",
    iconColor: "text-orange-500",
  },
  {
    icon: MessageSquareWarning,
    title: "WhatsApp Reminder Chaos",
    description:
      "Endless message threads, lost screenshots, and no way to verify if payment was actually received.",
    color: "from-yellow-500/10 to-amber-500/10",
    iconColor: "text-amber-600",
  },
  {
    icon: AlertCircle,
    title: "No Tenant Records",
    description:
      "No centralized system for tenant details, room assignments, complaints, or payment history.",
    color: "from-purple-500/10 to-primary-start/10",
    iconColor: "text-primary-start",
  },
];

export function TrustProblem() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-start">
            The Problem
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Hostel Management Shouldn&apos;t Be This Hard
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/60">
            Most hostel owners still rely on outdated methods that cost time,
            money, and peace of mind.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((point, i) => (
            <AnimatedSection key={point.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`glass group h-full rounded-3xl bg-gradient-to-br ${point.color} p-6 glow-primary transition-shadow duration-300 hover:shadow-xl hover:shadow-primary-start/10`}
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 shadow-sm"
                >
                  <point.icon size={24} className={point.iconColor} />
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                  {point.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
