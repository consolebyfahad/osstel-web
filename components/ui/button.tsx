"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "whatsapp";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variants = {
  primary: "btn-gradient text-white",
  secondary: "glass text-foreground hover:bg-surface-muted",
  outline:
    "border border-primary-start/25 text-foreground hover:border-primary-start/50 hover:bg-primary-start/5",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#20BD5A] shadow-lg shadow-[#25D366]/25",
};

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseClass =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold transition-all duration-300";

  const combined = `${baseClass} ${variants[variant]} ${disabled ? "pointer-events-none opacity-60" : ""} ${className}`;

  const motionProps = disabled
    ? {}
    : {
        whileHover: { scale: 1.03, y: -2 },
        whileTap: { scale: 0.97 },
        transition: { type: "spring" as const, stiffness: 400, damping: 17 },
      };

  if (href) {
    return (
      <motion.a href={href} className={combined} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={combined}
      disabled={disabled}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
