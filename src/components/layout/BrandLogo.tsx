import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SCHOOL_CONFIG } from "@/config/school-info";

export interface BrandLogoProps {
  className?: string;
  isDark?: boolean;
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className,
  isDark = false,
  showSubtitle = true,
}) => {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-gold rounded-lg transition-transform active:scale-95",
        className
      )}
      aria-label={`${SCHOOL_CONFIG.name} — Home`}
    >
      {/* Crest / Monogram Icon */}
      <div
        className={cn(
          "w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center font-serif font-bold text-lg shadow-subtle border transition-colors duration-300",
          isDark
            ? "bg-canvas text-academic-green border-canvas/20 group-hover:bg-amber-100"
            : "bg-academic-green text-canvas border-academic-green-dark group-hover:bg-academic-green-light"
        )}
      >
        <span className="tracking-tighter">SD</span>
      </div>

      {/* Brand Title & Subtitle */}
      <div className="flex flex-col text-left">
        <span
          className={cn(
            "font-serif font-bold text-base sm:text-lg leading-tight tracking-tight",
            isDark ? "text-canvas" : "text-academic-green"
          )}
        >
          {SCHOOL_CONFIG.name}
        </span>
        {showSubtitle && (
          <span
            className={cn(
              "text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-wider",
              isDark ? "text-canvas/70" : "text-saffron-gold-dark"
            )}
          >
            {SCHOOL_CONFIG.type} • Patawa
          </span>
        )}
      </div>
    </Link>
  );
};
