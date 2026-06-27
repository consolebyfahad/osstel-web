"use client";

import { motion } from "framer-motion";
import {
  AlertCircle,
  FileSpreadsheet,
  MessageSquareWarning,
  Wallet,
} from "lucide-react";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animated-section";
import { SectionHeader } from "@/components/ui/section-header";
import { SpotlightCard } from "@/components/ui/spotlight-card";

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
    color: "from-primary-end/10 to-primary-mid/10",
    iconColor: "text-primary-start",
  },
];

export function TrustProblem() {
  return (
    <section className="section-glow-top relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="The Problem"
          title={
            <>
              Hostel Management Shouldn&apos;t Be{" "}
              <span className="gradient-text">This Hard</span>
            </>
          }
          description="Most hostel owners still rely on outdated methods that cost time, money, and peace of mind."
        />

        <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((point) => (
            <StaggerItem key={point.title}>
              <SpotlightCard
                className={`glass h-full bg-gradient-to-br ${point.color} p-6 glow-primary`}
              >
                <motion.div
                  whileHover={{ rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.45 }}
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl surface shadow-sm"
                >
                  <point.icon size={24} className={point.iconColor} />
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                  {point.description}
                </p>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
