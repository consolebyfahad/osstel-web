"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownToLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/brand";

export function MobileStickyCTA() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [200, 400], [0, 1]);
  const y = useTransform(scrollY, [200, 400], [24, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-border glass p-3 shadow-2xl shadow-primary-start/10 safe-bottom md:hidden"
    >
      <div className="flex gap-3">
        <Button
          href="#contact"
          variant="outline"
          className="flex-1 !py-3 !text-xs"
        >
          Request Demo
        </Button>
        <Button href={BRAND.appAccessUrl} className="flex-1 !py-3 !text-xs">
          <ArrowDownToLine size={16} />
          Get the App
        </Button>
      </div>
    </motion.div>
  );
}
