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
      desc: "Supervised campus premises ensuring physical safety throughout the school day.",
    },
    {
      icon: SunMedium,
      title: "Bright & Ventilated Spaces",
      desc: "Classroom environments with natural airflow, sunlight, and child-friendly furniture.",
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
          <div className="lg:col-span-6 flex flex-col items-center sm:items-start text-center sm:text-left">
            <SectionHeading
              eyebrow="CAMPUS & ENVIRONMENT"
              title="A Safe, Inspiring Place To Learn & Grow"
              description="We prioritize safety, cleanliness, and an inviting physical space so children can focus happily on learning."
              align="left"
              className="mb-8 items-center sm:items-start text-center sm:text-left"
            />

            <div className="space-y-4 w-full mb-8">
              {features.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 rounded-2xl bg-canvas-surface border border-academic-green/10 text-center sm:text-left"
                  >
                    <div className="w-11 h-11 rounded-xl bg-academic-green/6 border border-academic-green/12 flex items-center justify-center text-academic-green shrink-0 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-base text-academic-green">
                        {feat.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-charcoal-muted mt-0.5 leading-relaxed">
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
              className="shadow-sm"
            >
              Explore Campus & Facilities
            </Button>
          </div>

          {/* Right Visual Composition: Dual Image Layout (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {/* Image 1: Main Classroom Reading Space */}
              <div className="col-span-2 relative aspect-[16/10] rounded-3xl overflow-hidden shadow-elevated border border-academic-green/15 bg-academic-green/5">
                <Image
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop"
                  alt="Children reading in warm, ventilated classroom space"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-academic-green-dark/40 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-academic-green shadow-sm">
                  Ventilated Classrooms
                </div>
                <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[10px] text-white/90">
                  Representational
                </div>
              </div>

              {/* Image 2: Campus Architecture */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card border border-academic-green/15 bg-academic-green/5">
                <Image
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=600&auto=format&fit=crop"
                  alt="School campus building and grounds"
                  fill
                  sizes="30vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 text-[11px] font-semibold text-white px-2 py-0.5 rounded bg-black/40 backdrop-blur-xs">
                  Campus Grounds
                </span>
              </div>

              {/* Image 3: Active Play Ground */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card border border-academic-green/15 bg-academic-green/5">
                <Image
                  src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=600&auto=format&fit=crop"
                  alt="Students enjoying safe active play"
                  fill
                  sizes="30vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 text-[11px] font-semibold text-white px-2 py-0.5 rounded bg-black/40 backdrop-blur-xs">
                  Active Play Area
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
