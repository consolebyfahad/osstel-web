"use client";

import {
  Building2,
  CreditCard,
  ShieldCheck,
  Smartphone,
  Users,
  Zap,
} from "lucide-react";
import { Marquee, MarqueeItem } from "@/components/ui/marquee";
import { BRAND } from "@/lib/brand";

const items = [
  { icon: Building2, label: "!00+ Hostels" },
  { icon: Users, label: "10K+ Tenants" },
  { icon: CreditCard, label: "Rs. 500K+ Collected" },
  { icon: Smartphone, label: `${BRAND.name} Mobile App` },
  { icon: ShieldCheck, label: "Secure Payments" },
  { icon: Zap, label: "Setup in 2 Minutes" },
  { icon: Building2, label: "Hostel Management" },
  { icon: Users, label: "Tenant Tracking" },
];

export function StatsBand() {
  return (
    <section aria-label="Platform highlights" className="relative py-6 sm:py-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-start/25 to-transparent" />
      <Marquee speed="slow" className="py-1">
        {items.map((item) => (
          <MarqueeItem key={item.label}>
            <item.icon size={15} className="text-primary-start" />
            {item.label}
          </MarqueeItem>
        ))}
      </Marquee>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary-end/20 to-transparent" />
    </section>
  );
}
