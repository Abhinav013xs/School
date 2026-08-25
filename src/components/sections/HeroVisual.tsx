import React from "react";
import { ShieldCheck, Sparkles } from "lucide-react";
import { SCHOOL_CONFIG } from "@/config/school-info";

export const HeroVisual: React.FC = () => {
  return (
    <div
      className="relative w-full aspect-[4/3] sm:aspect-[16/11] min-h-[320px] sm:min-h-[400px] rounded-3xl overflow-hidden shadow-elevated border border-academic-green/20 bg-academic-green/5 group"
      style={{
        backgroundImage: "url('/images/hero-school.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Native Direct Image Element (100% Reliable, Zero-Proxy) */}
      <img
        src="/images/hero-school.jpg"
        alt="Spring Dales Academy Primary School Students Learning in Class"
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out z-0"
        loading="eager"
      />

      {/* Subtle Bottom Vignette Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10" />

      {/* Top Floating Badge: Quality Assurance */}
      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-white/60 shadow-md text-xs font-bold text-academic-green z-20">
        <Sparkles className="w-3.5 h-3.5 text-saffron-gold shrink-0" />
        <span>Nurturing Primary Education</span>
      </div>

      {/* Top Right Representational Tag */}
      <div className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-sm text-[10px] text-white/90 font-medium z-20">
        Representational
      </div>

      {/* Bottom Floating Institution Crest Badge */}
      <div className="absolute bottom-4 left-4 right-4 sm:right-auto inline-flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-card text-left z-20">
        <div className="w-11 h-11 rounded-xl bg-academic-green text-saffron-gold flex items-center justify-center font-serif font-bold text-base shrink-0 shadow-sm border border-saffron-gold/30">
          SD
        </div>
        <div>
          <h4 className="font-serif font-bold text-sm sm:text-base text-academic-green leading-tight">
            {SCHOOL_CONFIG.name}
          </h4>
          <p className="text-[11px] sm:text-xs text-charcoal-muted flex items-center gap-1 mt-0.5 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-academic-green shrink-0" />
            <span>Nursery to Class 5 • Tekar, Patawa</span>
          </p>
        </div>
      </div>
    </div>
  );
};
