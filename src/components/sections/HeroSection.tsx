import React from "react";
import { Sparkles, MapPin, ShieldCheck, GraduationCap, Clock, Award } from "lucide-react";
import { SCHOOL_CONFIG } from "@/config/school-info";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-24 md:pb-28 overflow-hidden min-h-[640px] sm:min-h-[720px] flex items-center bg-academic-green-dark">
      {/* 1. Full-Bleed High-Resolution School Campus Background Photo */}
      <img
        src="/images/hero-school-bg.jpg"
        alt="Spring Dales Academy School Campus"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        loading="eager"
      />

      {/* 2. Cinematic Gradient Overlay (Dark Academic Green to Translucent) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-academic-green-dark/85 to-black/90 sm:bg-gradient-to-r sm:from-academic-green-dark/95 sm:via-academic-green-dark/80 sm:to-black/35 z-10 pointer-events-none" />

      {/* 3. Foreground Content */}
      <Container size="wide" className="relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline & Action Hierarchy (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center sm:items-start text-center sm:text-left mx-auto sm:mx-0 w-full max-w-2xl lg:max-w-none">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 backdrop-blur-md text-amber-300 text-xs font-semibold shadow-sm mb-4 sm:mb-6">
              <Sparkles className="w-3.5 h-3.5 text-saffron-gold shrink-0" />
              <span>Primary School • Tekar, Patawa</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-white leading-[1.14] tracking-tight mb-4 sm:mb-6 drop-shadow-sm">
              A Strong Beginning <br className="hidden sm:block" />
              <span className="text-amber-300">For A Brighter Future.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-xl sm:max-w-2xl mb-6 sm:mb-8 font-normal drop-shadow-xs">
              Welcome to <strong className="text-white font-semibold">{SCHOOL_CONFIG.name}</strong>. We provide a warm, nurturing primary school environment in Tekar, Patawa where young children develop foundational literacy, numeracy, active curiosity, and positive moral character.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 sm:gap-4 w-full sm:w-auto mb-6 sm:mb-8">
              <Button
                variant="primary"
                size="lg"
                href="/admissions"
                className="w-full sm:w-auto shadow-elevated justify-center bg-saffron-gold text-academic-green-dark font-bold hover:bg-saffron-gold-light border-0"
              >
                Enquire for Admission
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/about"
                className="w-full sm:w-auto justify-center bg-white/15 text-white border-white/40 backdrop-blur-md hover:bg-white hover:text-academic-green-dark"
              >
                Explore Our School
              </Button>
            </div>

            {/* Verified Location & Timing Pill */}
            <div className="inline-flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1.5 sm:gap-4 p-3 sm:p-3.5 rounded-2xl bg-black/50 border border-white/20 backdrop-blur-md text-xs sm:text-sm text-white/90 shadow-card text-center sm:text-left w-full sm:w-auto">
              <div className="flex items-center justify-center gap-1.5 font-medium text-amber-300">
                <MapPin className="w-4 h-4 text-saffron-gold shrink-0" />
                <span>Tekar, Patawa, UP (230401)</span>
              </div>
              <span className="hidden sm:inline text-white/30">•</span>
              <div className="text-white/80">
                Mon–Sat: 9:00 AM – 1:00 PM
              </div>
            </div>
          </div>

          {/* Right Column: Floating Glassmorphism Highlights Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center w-full">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-none rounded-3xl p-5 sm:p-7 bg-black/45 backdrop-blur-xl border border-white/20 shadow-elevated text-white">
              {/* Institution Header */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 sm:gap-3.5 pb-4 border-b border-white/15">
                <div className="w-12 h-12 rounded-2xl bg-academic-green text-saffron-gold flex items-center justify-center font-serif font-bold text-lg shrink-0 shadow-md border border-saffron-gold/40">
                  SD
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-white leading-tight">
                    {SCHOOL_CONFIG.name}
                  </h3>
                  <p className="text-xs text-amber-300/90 font-medium mt-0.5 flex items-center justify-center sm:justify-start gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
                    <span>Tekar, Patawa, Uttar Pradesh</span>
                  </p>
                </div>
              </div>

              {/* Quick Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 my-4 sm:my-5">
                <div className="p-3 rounded-2xl bg-white/10 border border-white/10 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-2.5">
                  <GraduationCap className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-xs text-white">Nursery – Class 5</h4>
                    <p className="text-[11px] text-white/70 mt-0.5">Foundational Primary</p>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white/10 border border-white/10 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-2.5">
                  <Award className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-xs text-white">Active Growth</h4>
                    <p className="text-[11px] text-white/70 mt-0.5">Curiosity & Character</p>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white/10 border border-white/10 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-xs text-white">Caring & Safe</h4>
                    <p className="text-[11px] text-white/70 mt-0.5">Supervised Campus</p>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white/10 border border-white/10 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-2.5">
                  <Clock className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-xs text-white">School Timings</h4>
                    <p className="text-[11px] text-white/70 mt-0.5">9:00 AM – 1:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Bottom Callout */}
              <div className="pt-3.5 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-2 text-xs text-white/80">
                <span>Admissions Open for 2026–27</span>
                <span className="px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-300/30 text-[10px] font-bold">
                  Enquire Now
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
