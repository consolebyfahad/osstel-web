"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { BorderBeam } from "@/components/ui/border-beam";
import { SectionHeader } from "@/components/ui/section-header";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/brand";

const plans = [
  {
    name: "Free",
    price: "Rs. 0",
    period: "forever",
    description: `Perfect for trying ${BRAND.name} with a single hostel.`,
    features: [
      "Up to 1 hostel",
      "Up to 10 rooms",
      "Unlimited tenants",
      "Tenant management",
      "Manual payment marking",
      "Basic hostel management",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Standard",
    price: "Rs. 1,999",
    period: "/month",
    description: "For growing hostels that need reports, alerts, and exports.",
    features: [
      "Everything in Free",
      "Up to 25 rooms",
      "Push notifications",
      "Expense tracking",
      "Reports & analytics",
      "Complaint system",
      "Payment proof upload",
      "Automatic rent reminders",
      "Alert messages",
      "Support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Pro",
    price: "Rs. 2,999",
    period: "/month",
    description: "For property managers with multiple hostels.",
    features: [
      "Everything in Standard",
      "Up to 5 hostels",
      "Up to 75 rooms",
      "Priority support",
      "All reports",
      "Full analytics",
      "All premium features",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="section-glow-top relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Pricing"
          title={
            <>
              Simple, Transparent{" "}
              <span className="gradient-text">Pricing</span>
            </>
          }
          description="Start free. Upgrade when you grow. No hidden fees."
        />

        <StaggerContainer className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan) => (
            <StaggerItem key={plan.name} className="h-full">
              {plan.popular ? (
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className="relative flex h-full flex-col rounded-3xl btn-gradient p-8 text-white shadow-2xl shadow-primary-start/30"
                >
                  <BorderBeam />
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <motion.span
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                      className="inline-flex items-center gap-1.5 rounded-full surface px-4 py-1.5 text-xs font-bold text-primary-start shadow-lg"
                    >
                      <Sparkles size={12} />
                      Most Popular
                    </motion.span>
                  </div>
                  <PricingContent plan={plan} popular />
                </motion.div>
              ) : (
                <SpotlightCard className="glass flex h-full flex-col p-8 glow-primary">
                  <PricingContent plan={plan} popular={false} />
                </SpotlightCard>
              )}
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function PricingContent({
  plan,
  popular,
}: {
  plan: (typeof plans)[number];
  popular: boolean;
}) {
  return (
    <>
      <div>
        <h3
          className={`text-lg font-semibold ${
            popular ? "text-white" : "text-foreground"
          }`}
        >
          {plan.name}
        </h3>
        <div className="mt-4 flex items-baseline gap-1">
          <span
            className={`text-4xl font-bold ${
              popular ? "text-white" : "text-foreground"
            }`}
          >
            {plan.price}
          </span>
          <span
            className={`text-sm ${
              popular ? "text-white/70" : "text-foreground/50"
            }`}
          >
            {plan.period}
          </span>
        </div>
        <p
          className={`mt-3 text-sm ${
            popular ? "text-white/80" : "text-foreground/60"
          }`}
        >
          {plan.description}
        </p>
      </div>

      <ul className="mt-8 flex-1 space-y-3">
        {plan.features.map((feature, i) => (
          <motion.li
            key={feature}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.04 }}
            viewport={{ once: true }}
            className="flex items-start gap-3"
          >
            <Check
              size={16}
              className={`mt-0.5 shrink-0 ${
                popular ? "text-accent" : "text-primary-start"
              }`}
            />
            <span
              className={`text-sm ${
                popular ? "text-white/90" : "text-foreground/70"
              }`}
            >
              {feature}
            </span>
          </motion.li>
        ))}
      </ul>

      <div className="mt-8">
        <Button
          href="#contact"
          variant={popular ? "secondary" : "primary"}
          className={`w-full ${
            popular
              ? "!bg-surface !text-primary-start hover:!bg-surface-muted"
              : ""
          }`}
        >
          {plan.cta}
        </Button>
      </div>
    </>
  );
}
