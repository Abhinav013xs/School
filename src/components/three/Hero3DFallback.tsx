import React from "react";
import Image from "next/image";

export const Hero3DFallback: React.FC = () => {
  return (
    <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-card border border-academic-green/15 bg-academic-green/5 flex items-center justify-center">
      <Image
        src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop"
        alt="Students engaged in joyful learning at Spring Dales Academy"
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 45vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-academic-green-dark/35 via-transparent to-transparent" />
      <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-sm text-[10px] text-white/90 font-medium">
        Representational Imagery
      </div>
    </div>
  );
};
