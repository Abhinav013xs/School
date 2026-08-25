import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  isDark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  className,
  eyebrow,
  title,
  description,
  align = "center",
  isDark = false,
  ...props
}) => {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div
      className={cn(
        "flex flex-col max-w-3xl mb-10 sm:mb-12 md:mb-16",
        alignClasses[align],
        className
      )}
      {...props}
    >
      {eyebrow && (
        <Badge
          variant={isDark ? "accent" : "gold"}
          className="mb-3 sm:mb-4"
        >
          {eyebrow}
        </Badge>
      )}
      <h2
        className={cn(
          "font-serif font-semibold tracking-tight leading-[1.2]",
          "text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem]",
          isDark ? "text-canvas" : "text-academic-green"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl",
            isDark ? "text-canvas/80" : "text-charcoal-muted"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
