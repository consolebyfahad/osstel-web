"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { EASE_OUT } from "@/lib/motion";

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "p" | "span";
}

export function TextReveal({
  children,
  className,
  delay = 0,
  as: Tag = "span",
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <Tag ref={ref as never} className={cn("inline-block overflow-hidden", className)}>
      <motion.span
        initial={{ y: "110%", opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: "110%", opacity: 0 }}
        transition={{ duration: 0.75, delay, ease: EASE_OUT }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </Tag>
  );
}

interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export function WordReveal({ text, className, delay = 0 }: WordRevealProps) {
  const words = text.split(" ");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <span ref={ref} className={cn("inline-flex flex-wrap gap-x-[0.28em]", className)}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden">
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            animate={
              isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }
            }
            transition={{
              duration: 0.55,
              delay: delay + i * 0.04,
              ease: EASE_OUT,
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
