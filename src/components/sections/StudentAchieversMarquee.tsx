"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Award, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

interface StudentAchiever {
  id: string;
  name: string;
  className: string;
  percentage: string;
  rankBadge: string;
  imageUrl: string;
}

const ACHIEVERS: StudentAchiever[] = [
  {
    id: "1",
    name: "Aarav Sharma",
    className: "Class 5",
    percentage: "98.6%",
    rankBadge: "1st Position",
    imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "Ananya Patel",
    className: "Class 4",
    percentage: "97.8%",
    rankBadge: "1st Position",
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "Vihaan Verma",
    className: "Class 3",
    percentage: "97.2%",
    rankBadge: "1st Position",
    imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "4",
    name: "Ishita Singh",
    className: "Class 2",
    percentage: "96.5%",
    rankBadge: "1st Position",
    imageUrl: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "5",
    name: "Reyansh Gupta",
    className: "Class 1",
    percentage: "96.0%",
    rankBadge: "1st Position",
    imageUrl: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=400&auto=format&fit=crop",
  },
];

export const StudentAchieversMarquee: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Repeat 4 times to ensure infinite smooth scrolling buffer
  const marqueeList = [...ACHIEVERS, ...ACHIEVERS, ...ACHIEVERS, ...ACHIEVERS];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    // 0.5x speed: 0.75 pixels per animation frame (approx 45px / sec)
    const speed = 0.75;

    const step = () => {
      if (!isPaused && container) {
        container.scrollLeft += speed;

        // When half of the scroll content has passed, seamlessly reset to start
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused]);

  return (
    <section className="w-full bg-canvas-alt/80 border-b border-academic-green/10 py-12 sm:py-16 overflow-hidden relative">
      <Container size="default" className="mb-8 sm:mb-10 text-center">
        <div className="flex flex-col items-center">
          <Badge variant="gold" className="mb-3">
            <Sparkles className="w-3 h-3 mr-1.5 inline-block text-saffron-gold" />
            ACADEMIC HONOUR ROLL
          </Badge>
          <h2 className="font-serif font-semibold text-2xl sm:text-3xl text-academic-green mb-2">
            Celebrating Our Young Position Holders
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted max-w-2xl">
            Recognizing foundational dedication, curiosity, and high academic performance across classes.
          </p>
        </div>
      </Container>

      {/* Infinite Horizontal Smooth Moving Container */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right Edge Fade Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-canvas-alt via-canvas-alt/90 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-canvas-alt via-canvas-alt/90 to-transparent z-10" />

        {/* Scrollable Track (Hidden Scrollbar + JS-driven continuous auto-scroll) */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex items-center gap-6 py-4 px-4 overflow-x-hidden no-scrollbar select-none cursor-grab active:cursor-grabbing"
          style={{ scrollBehavior: "auto" }}
        >
          {marqueeList.map((student, idx) => (
            <div
              key={`${student.id}-${idx}`}
              className="w-64 sm:w-72 shrink-0 bg-surface-card rounded-2xl p-5 border border-academic-green/12 shadow-subtle hover:shadow-card hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Circular Student Photo with Double Ring & Rank Badge */}
              <div className="relative mb-4">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden p-1 border-2 border-saffron-gold/50 group-hover:border-saffron-gold shadow-sm bg-white transition-colors">
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-academic-green/5">
                    <Image
                      src={student.imageUrl}
                      alt={student.name}
                      fill
                      sizes="112px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Floating Rank Badge */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-saffron-gold text-white text-[11px] font-semibold tracking-wide shadow-sm whitespace-nowrap flex items-center gap-1">
                  <Award className="w-3 h-3" />
                  <span>{student.rankBadge}</span>
                </div>
              </div>

              {/* Student Name */}
              <h3 className="font-serif font-bold text-base sm:text-lg text-academic-green group-hover:text-academic-green-light transition-colors mb-1">
                {student.name}
              </h3>

              {/* Class Name */}
              <span className="inline-block text-xs font-medium text-charcoal-muted bg-academic-green/6 px-2.5 py-0.5 rounded-md mb-3">
                {student.className}
              </span>

              {/* Percentage & Distinction */}
              <div className="w-full pt-3 border-t border-academic-green/8 flex items-center justify-between px-2">
                <span className="text-xs text-charcoal-subtle uppercase tracking-wider font-medium">
                  Score
                </span>
                <span className="font-serif font-bold text-lg sm:text-xl text-saffron-gold">
                  {student.percentage}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
