import React from "react";
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
    },
    {
      icon: Compass,
      title: "Strong Early Foundations",
      description:
        "A structured curriculum designed to build clear fundamentals in reading, math, and expressive communication.",
    },
    {
      icon: Users,
      title: "Individual Child Care",
      description:
        "Dedicated primary teachers who understand that every child grows at their own unique pace and style.",
    },
    {
      icon: ShieldCheck,
      title: "Safe & Clean Environment",
      description:
        "Focus on safety, hygiene, clean drinking water, and well-maintained learning spaces for complete peace of mind.",
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
                className="p-6 rounded-2xl bg-canvas-surface border border-academic-green/10 shadow-subtle hover:-translate-y-1 hover:shadow-card transition-all duration-300 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-saffron-gold-dark mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-academic-green mb-2">
                  {pt.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  {pt.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
