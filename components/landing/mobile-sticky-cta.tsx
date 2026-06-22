"use client";

import { ArrowDownToLine } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border glass p-3 shadow-2xl shadow-primary-start/10 md:hidden">
      <div className="flex gap-3">
        <Button
          href="#contact"
          variant="outline"
          className="flex-1 !py-3 !text-xs"
        >
          Request Demo
        </Button>
        <Button href="#contact" className="flex-1 !py-3 !text-xs">
          <ArrowDownToLine size={16} />
          Download App
        </Button>
      </div>
    </div>
  );
}
