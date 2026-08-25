import React from "react";
import Image from "next/image";
import { Shield, Droplets, SunMedium } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const EnvironmentSection: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Child Safety & Security",
      desc: "Supervised campus premises ensuring safety throughout the school day.",
    },
    {
      icon: SunMedium,
      title: "Bright & Ventilated Spaces",
      desc: "Classroom environments with natural airflow and child-friendly furniture.",
    },
    {
      icon: Droplets,
      title: "Clean Drinking Water",
      desc: "Hygienic drinking water facilities and maintained sanitation standards.",
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-canvas-alt border-y border-academic-green/8">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <SectionHeading
              eyebrow="CAMPUS & ENVIRONMENT"
              title="A Safe, Inspiring Place To Learn & Grow"
              description="We prioritize safety, cleanliness, and an inviting physical space so children can focus happily on learning."
              align="left"
              className="mb-8"
            />

            <div className="space-y-4 w-full mb-8">
              {features.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-canvas-surface border border-academic-green/10"
                  >
                    <div className="w-10 h-10 rounded-xl bg-academic-green/5 border border-academic-green/10 flex items-center justify-center text-academic-green shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-semibold text-base text-academic-green">
                        {feat.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-charcoal-muted mt-0.5">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button
              variant="outline"
              size="md"
              href="/campus"
            >
              Explore Campus & Facilities
            </Button>
          </div>

          {/* Right Visual Composition (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-card border border-academic-green/15 bg-academic-green/5">
              <Image
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop"
                alt="Children reading and learning in school library area"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-academic-green-dark/40 via-transparent to-transparent" />
              <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[10px] text-white/90">
                Representational
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
