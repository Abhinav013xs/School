import React from "react";
import { Sparkles, MapPin } from "lucide-react";
import { SCHOOL_CONFIG } from "@/config/school-info";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { HeroVisual } from "@/components/sections/HeroVisual";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full pt-6 sm:pt-10 md:pt-14 pb-16 sm:pb-20 md:pb-28 overflow-hidden bg-gradient-to-b from-canvas via-canvas to-canvas-alt">
      {/* Subtle organic background ambient glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-saffron-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] rounded-full bg-academic-green/5 blur-3xl pointer-events-none" />

      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Narrative & Conversion Hierarchy (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center sm:items-start text-center sm:text-left z-10">
            {/* Eyebrow badge */}
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <Badge variant="gold" size="md">
                <Sparkles className="w-3.5 h-3.5 mr-1.5 text-amber-700 inline" />
                <span>Primary School • Tekar, Patawa</span>
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-academic-green leading-[1.15] tracking-tight mb-5 sm:mb-6">
              A Strong Beginning <br className="hidden sm:block" />
              <span className="text-academic-green-light">For A Brighter Future.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl text-charcoal-muted leading-relaxed max-w-2xl mb-8 sm:mb-10">
              Welcome to <strong className="text-charcoal font-semibold">{SCHOOL_CONFIG.name}</strong>. We provide a warm, nurturing primary school environment in Tekar, Patawa where young children develop foundational literacy, numeracy, active curiosity, and positive moral character.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3.5 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-10">
              <Button
                variant="primary"
                size="lg"
                href="/admissions"
                className="w-full sm:w-auto shadow-elevated justify-center"
              >
                Enquire for Admission
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/about"
                className="w-full sm:w-auto justify-center"
              >
                Explore Our School
              </Button>
            </div>

            {/* Verified Location & Timing Pill */}
            <div className="inline-flex flex-wrap items-center justify-center sm:justify-start gap-y-2 gap-x-4 p-3 sm:p-3.5 rounded-2xl bg-canvas-surface/90 border border-academic-green/10 text-xs sm:text-sm text-charcoal-muted shadow-subtle text-center sm:text-left">
              <div className="flex items-center gap-1.5 font-medium text-academic-green">
                <MapPin className="w-4 h-4 text-saffron-gold-dark shrink-0" />
                <span>Tekar, Patawa, UP (230401)</span>
              </div>
              <span className="hidden sm:inline text-academic-green/20">•</span>
              <div className="text-charcoal-subtle">
                Mon–Sat: 9:00 AM – 1:00 PM
              </div>
            </div>
          </div>

          {/* Right Column: Prestigious Private School Visual (5 cols) */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative background framing border */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-3xl border border-academic-green/10 -rotate-1 pointer-events-none" />
              <div className="absolute -inset-1 rounded-3xl bg-amber-50/50 rotate-1 pointer-events-none" />

              <HeroVisual />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
