"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { blurFade, defaultTransition } from "@/lib/motion";

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
      }}
      className={cn(
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <motion.span
        variants={blurFade}
        transition={defaultTransition}
        className="badge-shimmer inline-flex items-center rounded-full border border-primary-start/20 bg-primary-start/8 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-start"
      >
        {eyebrow}
      </motion.span>

      <motion.h2
        variants={blurFade}
        transition={{ ...defaultTransition, delay: 0.05 }}
        className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          variants={blurFade}
          transition={{ ...defaultTransition, delay: 0.1 }}
          className={cn(
            "mt-4 max-w-2xl text-base leading-relaxed text-foreground/60 sm:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
