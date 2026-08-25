import React from "react";
import { cn } from "@/lib/utils";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "rounded" | "circle" | "text" | "card";
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className,
  variant = "rounded",
  ...props
}) => {
  const variantClasses = {
    rounded: "rounded-lg",
    circle: "rounded-full",
    text: "h-4 rounded",
    card: "h-48 rounded-2xl",
  };

  return (
    <div
      className={cn(
        "animate-pulse bg-academic-green/10 dark:bg-academic-green/20",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
};
