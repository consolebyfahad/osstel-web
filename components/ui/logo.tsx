import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "full" | "icon";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: { icon: 32, text: "text-base" },
  md: { icon: 36, text: "text-lg" },
  lg: { icon: 44, text: "text-xl" },
};

export function Logo({ variant = "full", size = "md", className = "" }: LogoProps) {
  const { icon, text } = sizes[size];

  return (
    <Link href="#" className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src="/applogo.png"
        alt="VAAS logo"
        width={icon}
        height={icon}
        className="rounded-xl"
        priority
      />
      {variant === "full" && (
        <span className={`${text} font-bold tracking-tight text-foreground`}>
          VAAS
        </span>
      )}
    </Link>
  );
}
