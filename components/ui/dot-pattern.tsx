"use client";

import { cn } from "@/lib/utils";

interface DotPatternProps {
  className?: string;
}

export function DotPattern({ className }: DotPatternProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 dot-pattern opacity-[0.35] dark:opacity-[0.2]",
        className
      )}
    />
  );
}
