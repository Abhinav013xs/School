import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { Button } from "./Button";
import { Badge } from "./Badge";

export interface CTASectionProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  variant?: "dark" | "cream" | "gold";
}

export const CTASection: React.FC<CTASectionProps> = ({
  className,
  eyebrow = "ADMISSIONS OPEN",
  title = "Give Your Child a Strong Beginning",
  description = "Admissions are open for early childhood and primary foundational grades. Connect with our school office in Tekar, Patawa to schedule a campus visit.",
  primaryCtaText = "Enquire for Admission",
  primaryCtaHref = "/admissions",
  secondaryCtaText = "Contact School Office",
  secondaryCtaHref = "/contact",
  variant = "dark",
  ...props
}) => {
  const isDark = variant === "dark";

  const variantStyles = {
    dark: "bg-academic-green text-canvas border-academic-green-dark",
    cream: "bg-[#FAF6EE] text-charcoal border-academic-green/15",
    gold: "bg-amber-50 text-charcoal border-amber-200/80",
  };

  return (
    <div className={cn("py-12 sm:py-16 md:py-20", className)} {...props}>
      <Container size="default">
        <div
          className={cn(
            "relative rounded-3xl p-8 sm:p-12 md:p-16 text-center overflow-hidden border shadow-card",
            variantStyles[variant]
          )}
        >
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-saffron-gold/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            {eyebrow && (
              <Badge
                variant={isDark ? "accent" : "gold"}
                className="mb-4"
              >
                {eyebrow}
              </Badge>
            )}

            <h2
              className={cn(
                "font-serif font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4",
                isDark ? "text-canvas" : "text-academic-green"
              )}
            >
              {title}
            </h2>

            <p
              className={cn(
                "text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-xl",
                isDark ? "text-canvas/80" : "text-charcoal-muted"
              )}
            >
              {description}
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              {primaryCtaText && (
                <Button
                  variant="primary"
                  size="lg"
                  href={primaryCtaHref}
                >
                  <span>{primaryCtaText}</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
              {secondaryCtaText && (
                <Button
                  variant={isDark ? "outline" : "secondary"}
                  size="lg"
                  href={secondaryCtaHref}
                  className={isDark ? "border-canvas text-canvas hover:bg-canvas hover:text-academic-green" : ""}
                >
                  {secondaryCtaText}
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
