"use client";

import { motion } from "framer-motion";
import {
  BedDouble,
  BellRing,
  Camera,
  CreditCard,
  MessageSquare,
  Users,
} from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animated-section";
import { SectionHeader } from "@/components/ui/section-header";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { BRAND } from "@/lib/brand";
const features = [
  {
    icon: Users,
    title: "Tenant Management",
    description:
      "Add tenants, assign rooms, store contact details and documents — all in one profile.",
    gradient: "from-primary-start/20 to-primary-end/10",
    featured: true,
  },
  {
    icon: BedDouble,
    title: "Room & Bed Tracking",
    description:
      "Visual room layout with occupancy status. Know which beds are vacant at a glance.",
    gradient: "from-primary-end/20 to-primary-mid/10",
  },
  {
    icon: CreditCard,
    title: "Rent Collection System",
    description:
      "Set rent amounts, due dates, and auto-generate monthly collection reports.",
    gradient: "from-primary-start/20 to-accent-soft/15",
  },
  {
    icon: Camera,
    title: "Payment Screenshot Verification",
    description:
      "Tenants upload UPI/bank screenshots. Verify payments with a single tap.",
    gradient: "from-accent/20 to-primary-end/10",
  },
  {
    icon: MessageSquare,
    title: "Complaint Management",
    description:
      "Tenants submit complaints in-app. Track status from open to resolved.",
    gradient: "from-primary-mid/15 to-primary-end/10",
  },
  {
    icon: BellRing,
    title: "Notification System",
    description:
      "Automated rent reminders, payment confirmations, and complaint updates.",
    gradient: "from-primary-start/15 to-accent-soft/15",
  },
];

export function Features() {
  return (
    <section id="features" className="section-glow-top relative py-20 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Features"
          title={
            <>
              Hostel Management{" "}
              <span className="gradient-text">Software Features</span>
            </>
          }
          description={`${BRAND.name} includes everything you need in a modern hostel management system — built for hostel owners and property managers in Pakistan.`}
        />

        <StaggerContainer className="mt-14 hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <StaggerItem
              key={feature.title}
              className={feature.featured ? "sm:col-span-2 lg:col-span-1 lg:row-span-1" : ""}
            >
              <FeatureCard feature={feature} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-10 flex gap-4 overflow-x-auto pb-4 no-scrollbar sm:hidden snap-x snap-mandatory">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.06} className="w-[85vw] shrink-0 snap-center">
              <FeatureCard feature={feature} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
}: {
  feature: (typeof features)[number];
}) {
  return (
    <SpotlightCard
      className={`glass h-full bg-gradient-to-br ${feature.gradient} p-7 glow-primary`}
    >
      <motion.div
        whileHover={{ scale: 1.08, rotate: 4 }}
        transition={{ type: "spring", stiffness: 400, damping: 18 }}
        className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl surface shadow-sm"
      >
        <feature.icon size={26} className="text-primary-start" />
      </motion.div>

      <h3 className="relative text-lg font-semibold text-foreground">
        {feature.title}
      </h3>
      <p className="relative mt-2 text-sm leading-relaxed text-foreground/60">
        {feature.description}
      </p>
    </SpotlightCard>
  );
}
