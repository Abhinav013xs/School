import React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = "md",
  className,
  label = "Loading...",
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  return (
    <div className={cn("inline-flex items-center justify-center gap-2", className)}>
      <Loader2 className={cn("animate-spin text-saffron-gold", sizeClasses[size])} />
      {label && <span className="text-xs sm:text-sm text-charcoal-muted">{label}</span>}
    </div>
  );
};
