"use client";

import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
}

export function BorderBeam({
  className,
  size = 220,
  duration = 8,
}: BorderBeamProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]",
        className
      )}
      style={
        {
          "--beam-size": `${size}px`,
          "--beam-duration": `${duration}s`,
        } as React.CSSProperties
      }
    >
      <div className="border-beam absolute inset-0 rounded-[inherit]" />
    </div>
  );
}
