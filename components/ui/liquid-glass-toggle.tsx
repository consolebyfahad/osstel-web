"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { setThemeWithAnimation } from "@/lib/theme-transition";
import { cn } from "@/lib/utils";

export function LiquidGlassToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div
        className={cn(
          "h-9 w-[4.25rem] rounded-full bg-foreground/5",
          className
        )}
        aria-hidden
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    setThemeWithAnimation(setTheme, isDark ? "light" : "dark", e);
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={handleToggle}
      className={cn(
        "liquid-glass-switch group relative shrink-0",
        className
      )}
    >
      <span className="liquid-glass-switch-track">
        <span className="liquid-glass-switch-shine" aria-hidden />

        <Sun
          size={14}
          className={cn(
            "liquid-glass-switch-icon liquid-glass-switch-icon-sun",
            !isDark && "liquid-glass-switch-icon-active"
          )}
        />
        <Moon
          size={14}
          className={cn(
            "liquid-glass-switch-icon liquid-glass-switch-icon-moon",
            isDark && "liquid-glass-switch-icon-active"
          )}
        />

        <motion.span
          className="liquid-glass-switch-thumb"
          layout
          transition={{
            type: "spring",
            stiffness: 520,
            damping: 34,
            mass: 0.7,
          }}
          animate={{ x: isDark ? 34 : 2 }}
        >
          <span className="liquid-glass-switch-thumb-glow" aria-hidden />
          {isDark ? (
            <Moon size={13} className="text-accent" />
          ) : (
            <Sun size={13} className="text-accent-foreground dark:text-accent" />
          )}
        </motion.span>
      </span>
    </button>
  );
}
