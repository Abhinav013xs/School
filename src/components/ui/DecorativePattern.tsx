import React from "react";
import { cn } from "@/lib/utils";

export interface DecorativePatternProps {
  className?: string;
  variant?: "dots" | "jaali" | "glow";
}

export const DecorativePattern: React.FC<DecorativePatternProps> = ({
  className,
  variant = "dots",
}) => {
  if (variant === "jaali") {
    return (
      <svg
        className={cn("absolute opacity-5 pointer-events-none", className)}
        width="240"
        height="240"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 0L100 50L50 100L0 50L50 0Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="1" />
        <path d="M50 10L90 50L50 90L10 50L50 10Z" stroke="currentColor" strokeWidth="1" />
      </svg>
    );
  }

  if (variant === "glow") {
    return (
      <div
        className={cn(
          "absolute rounded-full bg-saffron-gold/10 blur-3xl pointer-events-none",
          className
        )}
      />
    );
  }

  return (
    <div
      className={cn(
        "absolute inset-0 bg-[radial-gradient(#143D2B_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none",
        className
      )}
    />
  );
};
