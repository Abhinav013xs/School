import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined" | "soft";
  isInteractive?: boolean;
}

export const Card: React.FC<CardProps> = ({
  className,
  variant = "default",
  isInteractive = false,
  children,
  ...props
}) => {
  const variantClasses = {
    default: "bg-canvas-surface border border-academic-green/10 shadow-subtle",
    elevated: "bg-canvas-surface border border-academic-green/10 shadow-card",
    outlined: "bg-transparent border border-academic-green/15",
    soft: "bg-canvas-alt border border-academic-green/8",
  };

  return (
    <div
      className={cn(
        "rounded-2xl p-6 sm:p-8 transition-all duration-300",
        variantClasses[variant],
        isInteractive && "hover:-translate-y-1 hover:shadow-elevated hover:border-academic-green/25 cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => <div className={cn("flex flex-col space-y-1.5 mb-4", className)} {...props} />;

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  ...props
}) => (
  <h3
    className={cn("font-serif font-semibold text-xl sm:text-2xl text-academic-green leading-snug", className)}
    {...props}
  />
);

export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  ...props
}) => (
  <p
    className={cn("text-sm sm:text-base text-charcoal-muted leading-relaxed", className)}
    {...props}
  />
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => <div className={cn("text-charcoal", className)} {...props} />;

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => <div className={cn("flex items-center pt-4 mt-auto border-t border-academic-green/8", className)} {...props} />;
