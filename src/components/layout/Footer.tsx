import React from "react";
import Link from "next/link";
import { MapPin, Clock } from "lucide-react";
import { FOOTER_NAV_ITEMS } from "@/config/navigation";
import { SCHOOL_CONFIG } from "@/config/school-info";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BrandLogo } from "./BrandLogo";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-academic-green text-canvas pt-16 pb-12 border-t border-academic-green-dark mt-auto">
      <Container size="default">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <BrandLogo isDark showSubtitle />
            <p className="text-sm text-canvas/80 leading-relaxed max-w-sm mt-2">
              {SCHOOL_CONFIG.mottoProposal} — A dedicated foundational primary school in Tekar, Patawa, nurturing character, curiosity, and learning for life.
            </p>

            <div className="pt-2">
              <Button
                variant="primary"
                size="sm"
                href="/admissions"
                className="shadow-card"
              >
                Enquire for Admission
              </Button>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-serif font-semibold text-base text-amber-200 tracking-wide">
              Explore
            </h3>
            <ul className="space-y-2 text-sm text-canvas/80">
              {FOOTER_NAV_ITEMS.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-amber-200 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-saffron-gold rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Admissions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif font-semibold text-base text-amber-200 tracking-wide">
              Admissions
            </h3>
            <ul className="space-y-2 text-sm text-canvas/80">
              {FOOTER_NAV_ITEMS.admissions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-amber-200 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-saffron-gold rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Verified School Details (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-serif font-semibold text-base text-amber-200 tracking-wide">
              School Location & Timings
            </h3>
            
            <div className="space-y-3 text-sm text-canvas/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <p className="leading-snug">
                  {SCHOOL_CONFIG.location.fullAddress}
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-canvas">{SCHOOL_CONFIG.schedule.summary}</p>
                  <p className="text-xs text-amber-200/90 mt-1 italic">
                    {SCHOOL_CONFIG.schedule.holidayNotice}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="pt-8 border-t border-canvas/10 flex flex-col sm:flex-row items-center justify-between text-xs text-canvas/60 gap-4">
          <p>© {currentYear} {SCHOOL_CONFIG.name}. All rights reserved.</p>
          <p className="text-[11px] text-canvas/50">
            Primary Education Institution • Uttar Pradesh 230401
          </p>
        </div>
      </Container>
    </footer>
  );
};
