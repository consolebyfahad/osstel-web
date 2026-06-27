"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  src: string;
  alt: string;
  className?: string;
  frameClassName?: string;
  size?: "sm" | "md" | "lg";
  animate?: boolean;
  priority?: boolean;
  showGlow?: boolean;
}

const sizeClasses = {
  sm: "w-[180px] sm:w-[210px]",
  md: "w-[210px] sm:w-[250px] md:w-[270px]",
  lg: "w-[230px] sm:w-[270px] md:w-[300px]",
};

export function PhoneMockup({
  src,
  alt,
  className,
  frameClassName,
  size = "md",
  animate = true,
  priority = false,
  showGlow = false,
}: PhoneMockupProps) {
  const frame = (
    <div className={cn("relative mx-auto", sizeClasses[size], className)}>
      {showGlow && (
        <div
          className="pointer-events-none absolute inset-0 -z-10 scale-110 rounded-full bg-gradient-to-br from-primary-start/25 to-primary-end/15 blur-3xl"
          aria-hidden
        />
      )}
      <div className={cn("iphone-frame", frameClassName)}>
        <div className="iphone-notch" aria-hidden />
        <div className="iphone-screen">
          <Image
            src={src}
            alt={alt}
            width={1206}
            height={2622}
            className="h-full w-full object-cover object-top"
            sizes="(max-width: 640px) 220px, (max-width: 1024px) 260px, 300px"
            priority={priority}
          />
        </div>
      </div>
    </div>
  );

  if (!animate) return frame;

  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      {frame}
    </motion.div>
  );
}
