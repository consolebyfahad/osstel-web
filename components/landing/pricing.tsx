"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
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
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-start">
            Pricing
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/60">
            Start free. Upgrade when you grow. No hidden fees.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan, i) => (
            <AnimatedSection key={plan.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`relative flex h-full flex-col rounded-3xl p-8 transition-shadow duration-300 ${
                  plan.popular
                    ? "btn-gradient text-white shadow-2xl shadow-primary-start/30"
                    : "glass glow-primary hover:shadow-xl hover:shadow-primary-start/10"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full surface px-4 py-1.5 text-xs font-bold text-primary-start shadow-lg">
                      <Sparkles size={12} />
                      Most Popular
                    </span>
                  </div>
                )}

                <div>
                  <h3
                    className={`text-lg font-semibold ${
                      plan.popular ? "text-white" : "text-foreground"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span
                      className={`text-4xl font-bold ${
                        plan.popular ? "text-white" : "text-foreground"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`text-sm ${
                        plan.popular ? "text-white/70" : "text-foreground/50"
                      }`}
                    >
                      {plan.period}
                    </span>
                  </div>
                  <p
                    className={`mt-3 text-sm ${
                      plan.popular ? "text-white/80" : "text-foreground/60"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        size={16}
                        className={`mt-0.5 shrink-0 ${
                          plan.popular ? "text-accent" : "text-primary-start"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          plan.popular ? "text-white/90" : "text-foreground/70"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    href="#contact"
                    variant={plan.popular ? "secondary" : "primary"}
                    className={`w-full ${
                      plan.popular
                        ? "!bg-surface !text-primary-start hover:!bg-surface-muted"
                        : ""
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
