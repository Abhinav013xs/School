import React from "react";
import Image from "next/image";
import { Smile, ShieldCheck, Users, Compass } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const WhySchoolSection: React.FC = () => {
  const points = [
    {
      icon: Smile,
      title: "Warm, Nurturing Atmosphere",
      description:
        "A welcoming primary school space where young children feel secure, valued, and excited to attend school each day.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: Compass,
      title: "Strong Early Foundations",
      description:
        "A structured curriculum designed to build clear fundamentals in reading, math, and expressive communication.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: Users,
      title: "Individual Child Care",
      description:
        "Dedicated primary teachers who understand that every child grows at their own unique pace and style.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: ShieldCheck,
      title: "Safe & Clean Environment",
      description:
        "Focus on safety, hygiene, clean drinking water, and well-maintained learning spaces for complete peace of mind.",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=600&auto=format&fit=crop",
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-canvas">
      <Container size="default">
        <SectionHeading
          eyebrow="WHY SPRING DALES ACADEMY"
          title="A Caring School Built For Early Growth"
          description="We focus on what matters most for young children: safe surroundings, caring teachers, and strong foundational learning."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt) => {
            const Icon = pt.icon;
            return (
              <div
                key={pt.title}
                className="group rounded-3xl bg-canvas-surface border border-academic-green/10 shadow-subtle hover:-translate-y-1.5 hover:shadow-elevated transition-all duration-300 flex flex-col overflow-hidden text-center sm:text-left items-center sm:items-start"
              >
                {/* Rich Photo Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-academic-green/5">
                  <Image
                    src={pt.image}
                    alt={pt.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-academic-green-dark/60 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[10px] text-white/90">
                    Representational
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 items-center sm:items-start text-center sm:text-left">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-saffron-gold-dark mb-4 shadow-sm shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-academic-green mb-2 leading-snug">
                    {pt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                    {pt.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
