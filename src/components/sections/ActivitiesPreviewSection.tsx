import React from "react";
import Image from "next/image";
import { Palette, Trophy, BookOpen, Sparkles } from "lucide-react";
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
    {
      icon: Sparkles,
      title: "Celebrations & Stage",
      description: "Nurturing stage confidence, cultural values, and expressive speaking in school assemblies.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {activities.map((act) => {
            const Icon = act.icon;
            return (
              <div
                key={act.title}
                className="group rounded-3xl bg-canvas-surface border border-academic-green/10 shadow-subtle overflow-hidden flex flex-col hover:-translate-y-1.5 hover:shadow-elevated transition-all duration-300 items-center sm:items-start text-center sm:text-left"
              >
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-academic-green/5">
                  <Image
                    src={act.image}
                    alt={act.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-academic-green-dark/60 via-transparent to-transparent opacity-50" />
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[10px] text-white/90">
                    Representational
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 items-center sm:items-start text-center sm:text-left">
                  <div className="w-11 h-11 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-saffron-gold-dark mb-4 shadow-sm shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-academic-green mb-2 leading-snug">
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
