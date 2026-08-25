import React from "react";
import Image from "next/image";
import { GraduationCap, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const AcademicsPreviewSection: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-canvas-alt border-t border-academic-green/8">
      <Container size="default">
        <SectionHeading
          eyebrow="ACADEMICS & LEARNING STAGES"
          title="Building Strong Foundations for Lifelong Learning"
          description="Our academic progression bridges early childhood discovery with primary school mastery."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Kindergarten Stage Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-canvas-surface border border-academic-green/10 shadow-subtle flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <Badge variant="gold" size="sm">
                  EARLY YEARS
                </Badge>
                <Sparkles className="w-5 h-5 text-saffron-gold" />
              </div>

              <h3 className="font-serif font-semibold text-xl sm:text-2xl text-academic-green mb-2">
                Kindergarten (Nursery, LKG, UKG)
              </h3>
              <p className="text-sm text-charcoal-muted leading-relaxed mb-6">
                Activity-led learning focusing on alphabet recognition, phonics, basic counting, motor skills, and social collaboration.
              </p>

              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-academic-green/5">
                <Image
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop"
                  alt="Early childhood learning and creative activities"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[10px] text-white/90">
                  Representational
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              href="/academics"
            >
              Explore Kindergarten Stages
            </Button>
          </div>

          {/* Primary Stage Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-canvas-surface border border-academic-green/10 shadow-subtle flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <Badge variant="green" size="sm">
                  PRIMARY STAGE
                </Badge>
                <GraduationCap className="w-5 h-5 text-academic-green" />
              </div>

              <h3 className="font-serif font-semibold text-xl sm:text-2xl text-academic-green mb-2">
                Primary Classes (Class 1 to 5)
              </h3>
              <p className="text-sm text-charcoal-muted leading-relaxed mb-6">
                Structured learning covering language comprehension, mathematics, environmental studies, and values for scholastic confidence.
              </p>

              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-academic-green/5">
                <Image
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1000&auto=format&fit=crop"
                  alt="Primary school students in focused learning environment"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[10px] text-white/90">
                  Representational
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              href="/academics"
            >
              Explore Primary Curriculum
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
