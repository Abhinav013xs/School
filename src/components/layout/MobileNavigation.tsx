"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { X, ChevronRight, MapPin, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { MAIN_NAV_ITEMS } from "@/config/navigation";
import { SCHOOL_CONFIG } from "@/config/school-info";
import { Button } from "@/components/ui/Button";
import { BrandLogo } from "./BrandLogo";

export interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  activePath: string;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onClose,
  activePath,
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-navigation-drawer"
      className="fixed inset-0 z-50 lg:hidden flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Drawer"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-academic-green-dark/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over Drawer Panel */}
      <div
        ref={drawerRef}
        className="relative w-full max-w-sm sm:max-w-md bg-canvas h-full shadow-2xl flex flex-col justify-between overflow-y-auto z-10 animate-in slide-in-from-right duration-300"
      >
        {/* Top Header */}
        <div className="p-5 border-b border-academic-green/10 flex items-center justify-between bg-canvas-surface">
          <BrandLogo showSubtitle={false} />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="p-2 rounded-full text-charcoal-muted hover:text-academic-green hover:bg-academic-green/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-gold"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Items (56px Touch Targets) */}
        <nav className="flex-1 p-4 sm:p-6 space-y-1.5" aria-label="Mobile Navigation Links">
          {MAIN_NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? activePath === "/"
                : activePath.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-colors min-h-[52px]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-gold",
                  isActive
                    ? "bg-academic-green text-white font-semibold shadow-subtle"
                    : "text-charcoal hover:bg-academic-green/8"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                <span>{item.label}</span>
                <ChevronRight
                  className={cn(
                    "w-4 h-4 transition-transform",
                    isActive ? "text-saffron-gold" : "text-charcoal-subtle"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        {/* Bottom Details & CTA */}
        <div className="p-5 border-t border-academic-green/10 bg-canvas-surface space-y-4">
          <Button
            variant="primary"
            size="lg"
            href="/admissions"
            className="w-full justify-center shadow-card"
            onClick={onClose}
          >
            Enquire for Admission
          </Button>

          <div className="pt-2 text-xs text-charcoal-muted space-y-2 border-t border-academic-green/8">
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-academic-green shrink-0 mt-0.5" />
              <span>{SCHOOL_CONFIG.location.fullAddress}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-academic-green shrink-0" />
              <span>{SCHOOL_CONFIG.schedule.summary}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
