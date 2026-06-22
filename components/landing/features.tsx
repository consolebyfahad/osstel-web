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
import { AnimatedSection } from "@/components/ui/animated-section";

const features = [
  {
    icon: Users,
    title: "Tenant Management",
    description:
      "Add tenants, assign rooms, store contact details and documents — all in one profile.",
    gradient: "from-primary-start/20 to-primary-end/10",
  },
  {
    icon: BedDouble,
    title: "Room & Bed Tracking",
    description:
      "Visual room layout with occupancy status. Know which beds are vacant at a glance.",
    gradient: "from-accent/20 to-teal-400/10",
  },
  {
    icon: CreditCard,
    title: "Rent Collection System",
    description:
      "Set rent amounts, due dates, and auto-generate monthly collection reports.",
    gradient: "from-accent-soft/25 to-primary-start/10",
  },
  {
    icon: Camera,
    title: "Payment Screenshot Verification",
    description:
      "Tenants upload UPI/bank screenshots. Verify payments with a single tap.",
    gradient: "from-accent/15 to-emerald-400/10",
  },
  {
    icon: MessageSquare,
    title: "Complaint Management",
    description:
      "Tenants submit complaints in-app. Track status from open to resolved.",
    gradient: "from-primary-end/15 to-violet-400/10",
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
    <section id="features" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-start">
            Features
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Hostel & Hotel Management Software Features
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/60">
            OSSTEL includes everything you need in a modern hostel management
            system and hotel management system — built for owners and property
            managers in Pakistan.
          </p>
        </AnimatedSection>

        {/* Desktop grid */}
        <div className="mt-14 hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.08}>
              <FeatureCard feature={feature} />
            </AnimatedSection>
          ))}
        </div>

        {/* Mobile swipeable carousel */}
        <div className="mt-10 flex gap-4 overflow-x-auto pb-4 no-scrollbar sm:hidden snap-x snap-mandatory">
          {features.map((feature) => (
            <div key={feature.title} className="w-[85vw] shrink-0 snap-center">
              <FeatureCard feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: (typeof features)[number] }) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`glass group relative h-full overflow-hidden rounded-3xl bg-gradient-to-br ${feature.gradient} p-7 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-start/10`}
    >
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary-start/5 transition-transform duration-500 group-hover:scale-150" />

      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400 }}
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
    </motion.div>
  );
}
