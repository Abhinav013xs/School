import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "soft" | "cream" | "dark" | "accent";
  containerSize?: "default" | "narrow" | "wide" | "full";
  noContainer?: boolean;
  spacing?: "default" | "compact" | "spacious" | "none";
}

export const Section: React.FC<SectionProps> = ({
  className,
  variant = "default",
  containerSize = "default",
  noContainer = false,
  spacing = "default",
  children,
  ...props
}) => {
  const variantClasses = {
    default: "bg-canvas text-charcoal",
    soft: "bg-canvas-alt text-charcoal",
    cream: "bg-[#FAF6EE] text-charcoal",
    dark: "bg-academic-green text-canvas",
    accent: "bg-amber-50 text-charcoal border-y border-amber-200/60",
  };

  const spacingClasses = {
    none: "py-0",
    compact: "py-8 sm:py-12",
    default: "py-12 sm:py-16 md:py-20 lg:py-24",
    spacious: "py-16 sm:py-20 md:py-28 lg:py-32",
  };

  const content = noContainer ? (
    children
  ) : (
    <Container size={containerSize}>{children}</Container>
  );

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden",
        variantClasses[variant],
        spacingClasses[spacing],
        className
      )}
      {...props}
    >
      {content}
    </section>
  );
};
