import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  number?: string | number;
  title: string;
  description: string;
  variant?: "default" | "featured" | "compact";
  eyebrow?: string;
  ctaText?: string;
  ctaHref?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  className,
  icon,
  number,
  title,
  description,
  variant = "default",
  eyebrow,
  ctaText,
  ctaHref,
  ...props
}) => {
  const isFeatured = variant === "featured";

  const cardContent = (
    <div
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl transition-all duration-300 p-6 sm:p-8 h-full",
        "border border-academic-green/10 bg-canvas-surface shadow-subtle hover:-translate-y-1 hover:shadow-card hover:border-academic-green/25",
        isFeatured && "md:col-span-2 bg-gradient-to-br from-canvas-surface via-canvas-surface to-amber-50/40 border-amber-200/60 shadow-card",
        className
      )}
      {...props}
    >
      <div>
        <div className="flex items-center justify-between gap-4 mb-5">
          {icon && (
            <div className="w-12 h-12 rounded-xl bg-academic-green/5 border border-academic-green/10 flex items-center justify-center text-academic-green group-hover:bg-academic-green group-hover:text-white transition-colors duration-300">
              {icon}
            </div>
          )}
          {number && (
            <span className="font-serif font-bold text-2xl text-academic-green/20 group-hover:text-saffron-gold transition-colors">
              {typeof number === "number" ? String(number).padStart(2, "0") : number}
            </span>
          )}
        </div>

        {eyebrow && (
          <span className="text-[11px] uppercase tracking-wider font-semibold text-saffron-gold-dark block mb-2">
            {eyebrow}
          </span>
        )}

        <h3 className="font-serif font-semibold text-xl sm:text-2xl text-academic-green mb-3 leading-snug">
          {title}
        </h3>

        <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
          {description}
        </p>
      </div>

      {ctaText && (
        <div className="mt-6 pt-4 border-t border-academic-green/8 flex items-center text-sm font-semibold text-academic-green group-hover:text-saffron-gold-dark transition-colors">
          <span>{ctaText}</span>
          <span className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">→</span>
        </div>
      )}
    </div>
  );

  if (ctaHref) {
    return (
      <Link href={ctaHref} className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-gold rounded-2xl">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};
