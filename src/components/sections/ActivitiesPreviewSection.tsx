import React from "react";
import Image from "next/image";
import { Palette, Trophy, BookOpen } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const ActivitiesPreviewSection: React.FC = () => {
  const activities = [
    {
      icon: Palette,
      title: "Art, Craft & Drawing",
      description: "Encouraging fine motor skills and creative self-expression through colors and crafts.",
      image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=800&auto=format&fit=crop",
    },
    {
      icon: Trophy,
      title: "Physical Play & Games",
      description: "Supervised outdoor recreation promoting physical health, agility, and sportsmanship.",
      image: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=800&auto=format&fit=crop",
    },
    {
      icon: BookOpen,
      title: "Reading & Story Circles",
      description: "Building imagination, listening skills, and vocabulary through daily guided reading.",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-canvas">
      <Container size="default">
        <SectionHeading
          eyebrow="BEYOND TEXTBOOKS"
          title="Learning Should Be Full Of Discovery"
          description="Co-curricular activities that build self-confidence, teamwork, and creative joy."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {activities.map((act) => {
            const Icon = act.icon;
            return (
              <div
                key={act.title}
                className="group rounded-2xl bg-canvas-surface border border-academic-green/10 shadow-subtle overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-card transition-all duration-300"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-academic-green/5">
                  <Image
                    src={act.image}
                    alt={act.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[10px] text-white/90">
                    Representational
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-saffron-gold-dark mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg text-academic-green mb-2">
                    {act.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                    {act.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="md"
            href="/activities"
          >
            Discover All Co-Curricular Activities
          </Button>
        </div>
      </Container>
    </section>
  );
};
