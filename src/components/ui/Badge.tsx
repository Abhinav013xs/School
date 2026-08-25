import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "gold" | "green" | "neutral" | "accent" | "outline";
  size?: "sm" | "md";
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "gold",
  size = "md",
  children,
  ...props
}) => {
  const variantClasses = {
    gold: "bg-amber-50 text-amber-900 border-amber-200/80",
    green: "bg-emerald-50 text-emerald-950 border-emerald-200/80",
    neutral: "bg-canvas-alt text-charcoal-muted border-academic-green/10",
    accent: "bg-saffron-gold/15 text-saffron-gold-dark border-saffron-gold/30",
    outline: "bg-transparent text-charcoal border-current",
  };

  const sizeClasses = {
    sm: "text-[11px] px-2.5 py-0.5 tracking-wider font-semibold",
    md: "text-xs px-3 py-1 tracking-widest font-semibold",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center uppercase rounded-full border transition-colors",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
