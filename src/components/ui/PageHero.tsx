import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { Badge } from "./Badge";
import { Breadcrumb, BreadcrumbItem } from "./Breadcrumb";

export interface PageHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  variant?: "default" | "cream" | "accent";
}

export const PageHero: React.FC<PageHeroProps> = ({
  className,
  eyebrow,
  title,
  description,
  breadcrumbs,
  variant = "default",
  children,
  ...props
}) => {
  const bgClasses = {
    default: "bg-canvas-alt border-b border-academic-green/8",
    cream: "bg-[#FAF6EE] border-b border-academic-green/8",
    accent: "bg-amber-50/50 border-b border-amber-200/60",
  };

  return (
    <div
      className={cn(
        "relative pt-12 sm:pt-16 pb-12 sm:pb-20 overflow-hidden",
        bgClasses[variant],
        className
      )}
      {...props}
    >
      {/* Subtle organic background glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-academic-green/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-saffron-gold/5 blur-3xl pointer-events-none" />

      <Container size="default" className="relative z-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="mb-6">
            <Breadcrumb items={breadcrumbs} />
          </div>
        )}

        <div className="max-w-3xl">
          {eyebrow && (
            <Badge variant="gold" className="mb-4">
              {eyebrow}
            </Badge>
          )}

          <h1 className="font-serif font-semibold text-3xl sm:text-4xl md:text-5xl text-academic-green leading-[1.15] mb-4">
            {title}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-charcoal-muted leading-relaxed">
            {description}
          </p>

          {children && <div className="mt-8">{children}</div>}
        </div>
      </Container>
    </div>
  );
};
