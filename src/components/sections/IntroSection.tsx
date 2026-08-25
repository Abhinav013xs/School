import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { SCHOOL_CONFIG } from "@/config/school-info";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const IntroSection: React.FC = () => {
  const highlights = [
    "Warm, child-friendly classroom spaces designed for young learners",
    "Individual care and attention for every child's early growth",
    "Balanced focus on academic fundamentals, play, and character values",
    "Situated conveniently in Tekar, Patawa (UP 230401)",
  ];

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-canvas">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Visual: Framed Editorial (5 cols) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-card border border-academic-green/15 bg-academic-green/5">
              <Image
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
                alt="Teacher engaging with young students in classroom"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-academic-green-dark/40 via-transparent to-transparent" />
              <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[10px] text-white/90">
                Representational
              </div>
            </div>

            {/* Trust Quote Card */}
            <div className="mt-4 p-4 rounded-2xl bg-canvas-alt border border-academic-green/10 text-left">
              <p className="font-serif italic text-sm text-academic-green">
                “Every child’s educational journey begins with curiosity and a caring environment.”
              </p>
            </div>
          </div>

          {/* Right Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2">
            <Badge variant="gold" className="mb-3 sm:mb-4">
              WELCOME TO {SCHOOL_CONFIG.name.toUpperCase()}
            </Badge>

            <h2 className="font-serif font-semibold text-2xl sm:text-3xl md:text-4xl text-academic-green leading-snug mb-5">
              A Dedicated Primary School <br className="hidden sm:block" />
              Rooted in Care and Foundation.
            </h2>

            <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed mb-6">
              At <strong className="text-charcoal">{SCHOOL_CONFIG.name}</strong>, we believe the early years of schooling form the bedrock of a child’s lifelong confidence. Our school in Tekar, Patawa is designed to give young children a joyful, disciplined, and supportive environment where learning feels natural and inspiring.
            </p>

            {/* Value checklist */}
            <ul className="space-y-3 mb-8 w-full">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-academic-green shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Button
              variant="outline"
              size="md"
              href="/about"
            >
              Discover Our Approach
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
