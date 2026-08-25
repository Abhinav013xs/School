"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { MAIN_NAV_ITEMS } from "@/config/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BrandLogo } from "./BrandLogo";
import { MobileNavigation } from "./MobileNavigation";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? "bg-canvas-surface/95 backdrop-blur-md border-b border-academic-green/10 shadow-subtle py-3"
            : "bg-canvas/90 backdrop-blur-sm border-b border-academic-green/5 py-4 sm:py-5"
        )}
      >
        <Container size="wide" className="flex items-center justify-between gap-4">
          {/* Brand Identity */}
          <BrandLogo />

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center space-x-1 xl:space-x-2"
            aria-label="Main Navigation"
          >
            {MAIN_NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-3.5 py-2 text-sm font-medium rounded-full transition-colors duration-200",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-gold",
                    isActive
                      ? "text-academic-green font-semibold bg-academic-green/8"
                      : "text-charcoal-muted hover:text-academic-green hover:bg-academic-green/4"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-saffron-gold rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Button
                variant="primary"
                size="sm"
                href="/admissions"
                className="shadow-subtle"
              >
                Enquire for Admission
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              className="lg:hidden p-2.5 rounded-xl border border-academic-green/15 text-academic-green bg-canvas-surface hover:bg-academic-green/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-gold"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activePath={pathname}
      />
    </>
  );
};
