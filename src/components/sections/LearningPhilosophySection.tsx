import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Lightbulb, HeartHandshake, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export const LearningPhilosophySection: React.FC = () => {
  const pillars = [
    {
      icon: BookOpen,
      number: "01",
      eyebrow: "CORE FOUNDATION",
      title: "Foundational Literacy & Numeracy",
      description:
        "Building strong, intuitive language reading habits and core arithmetic readiness through structured, step-by-step guidance.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
      ctaText: "Learn about academics",
      ctaHref: "/academics",
    },
    {
      icon: Lightbulb,
      number: "02",
      eyebrow: "ACTIVE INQUIRY",
      title: "Curiosity & Conceptual Thinking",
      description:
        "Encouraging young learners to observe, ask thoughtful questions, and connect concepts to the world around them.",
      image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=800&auto=format&fit=crop",
      ctaText: "Explore activities",
      ctaHref: "/activities",
    },
    {
      icon: HeartHandshake,
      number: "03",
      eyebrow: "CHARACTER ROOTS",
      title: "Values, Respect & Discipline",
      description:
        "Nurturing kindness, mutual respect, classroom discipline, and social cooperation from the very earliest grades.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
      ctaText: "Read our philosophy",
      ctaHref: "/about",
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-canvas-alt border-y border-academic-green/8">
      <Container size="default">
        <SectionHeading
          eyebrow="HOW WE APPROACH LEARNING"
          title="Learning Beyond Rote Memorization"
          description="We emphasize conceptual understanding, personal confidence, and joyful discovery across every foundational stage."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group rounded-3xl bg-canvas-surface border border-academic-green/10 shadow-subtle hover:-translate-y-1.5 hover:shadow-elevated transition-all duration-300 flex flex-col overflow-hidden text-center sm:text-left items-center sm:items-start"
              >
                {/* Rich Photo Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-academic-green/5">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-academic-green-dark/60 via-transparent to-transparent opacity-60" />
                  
                  {/* Top Badge & Number */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <Badge variant="gold" size="sm">
                      {pillar.eyebrow}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm text-white font-serif font-bold text-xs flex items-center justify-center">
                    {pillar.number}
                  </div>

                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[10px] text-white/90">
                    Representational
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex flex-col flex-1 items-center sm:items-start text-center sm:text-left justify-between w-full">
                  <div className="flex flex-col items-center sm:items-start">
                    <div className="w-12 h-12 rounded-2xl bg-academic-green/6 border border-academic-green/15 flex items-center justify-center text-academic-green mb-4 shadow-sm shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif font-bold text-xl text-academic-green mb-2.5 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed mb-6">
                      {pillar.description}
                    </p>
                  </div>

                  <Link
                    href={pillar.ctaHref}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-academic-green hover:text-saffron-gold-dark transition-colors group/link pt-3 border-t border-academic-green/8 w-full justify-center sm:justify-start"
                  >
                    <span>{pillar.ctaText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
