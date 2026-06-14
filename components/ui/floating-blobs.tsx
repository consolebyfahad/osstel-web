"use client";

import { motion } from "framer-motion";

interface FloatingBlobsProps {
  className?: string;
  variant?: "hero" | "cta" | "subtle";
}

export function FloatingBlobs({
  className = "",
  variant = "hero",
}: FloatingBlobsProps) {
  const opacity = variant === "subtle" ? 0.35 : variant === "cta" ? 0.55 : 0.65;

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <motion.div
        className="animate-blob absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(91,95,232,0.28) 0%, transparent 70%)",
          opacity,
        }}
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="animate-blob animate-blob-delay-1 absolute -right-24 top-1/4 h-[400px] w-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(155,124,248,0.22) 0%, transparent 70%)",
          opacity,
        }}
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="animate-blob animate-blob-delay-2 absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(61,217,195,0.18) 0%, transparent 70%)",
          opacity,
        }}
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-white/50 bg-white/30 backdrop-blur-sm"
          style={{
            width: 8 + i * 4,
            height: 8 + i * 4,
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -20 - i * 5, 0],
            opacity: [0.25, 0.6, 0.25],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}
