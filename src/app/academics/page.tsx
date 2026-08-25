import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";
import { Badge } from "@/components/ui/Badge";
import { BookOpen, Calculator, Globe, Sparkles, PencilRuler } from "lucide-react";

export const metadata: Metadata = {
  title: "Academics & Learning Stages | Spring Dales Academy",
  description: "Explore foundational learning stages, early literacy, numeracy, and curriculum focus at Spring Dales Academy, Tekar, Patawa.",
};

export default function AcademicsPage() {
  const domains = [
    {
      icon: BookOpen,
      title: "Language & Reading",
      description: "Phonics, letter comprehension, vocabulary building, and guided story listening to establish expressive speech.",
    },
    {
      icon: Calculator,
      title: "Early Mathematics & Logic",
      description: "Number sense, counting, spatial patterns, and practical problem-solving designed without anxiety.",
    },
    {
      icon: Globe,
      title: "Environmental & Nature Awareness",
      description: "Observing seasons, living beings, hygiene habits, and community awareness.",
    },
    {
      icon: PencilRuler,
      title: "Creative Arts & Motor Skills",
      description: "Drawing, coloring, paper craft, and tactile activities to build fine motor control and imagination.",
    },
  ];

  return (
    <div className="w-full flex flex-col">
      <PageHero
        eyebrow="ACADEMICS & LEARNING"
        title="Strong Foundations. Curious Minds."
        description="Our academic progression bridges joyful early childhood exploration with structured primary school learning in a supportive environment."
        breadcrumbs={[{ label: "Academics" }]}
      />

      <section className="py-16 sm:py-20 bg-canvas">
        <Container size="default">
          <SectionHeading
            eyebrow="FOUNDATIONAL STAGES"
            title="A Step-by-Step Learning Journey"
            description="From early kindergarten through Class 5, each grade is tailored to developmental readiness."
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
            <div className="p-8 rounded-3xl bg-canvas-surface border border-academic-green/15 shadow-subtle flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="gold" size="sm">
                    EARLY CHILDHOOD
                  </Badge>
                  <Sparkles className="w-5 h-5 text-saffron-gold" />
                </div>

                <h3 className="font-serif font-semibold text-2xl text-academic-green mb-3">
                  Kindergarten (Nursery, LKG, UKG)
                </h3>
                <p className="text-sm text-charcoal-muted leading-relaxed mb-6">
                  Early childhood education at Spring Dales Academy centers on play, verbal expression, social confidence, and foundational motor coordination. Children learn to love school through songs, interactive toys, and story circles.
                </p>

                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-academic-green/5 mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop"
                    alt="Early childhood kindergarten learning activities"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[10px] text-white/90">
                    Representational
                  </div>
                </div>
              </div>

              <div className="text-xs text-charcoal-subtle italic border-t border-academic-green/8 pt-3">
                Focus: Phonics • Counting • Social Play • Motor Skills
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-canvas-surface border border-academic-green/15 shadow-subtle flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="green" size="sm">
                    PRIMARY STAGE
                  </Badge>
                  <BookOpen className="w-5 h-5 text-academic-green" />
                </div>

                <h3 className="font-serif font-semibold text-2xl text-academic-green mb-3">
                  Primary Classes (Class 1 to Class 5)
                </h3>
                <p className="text-sm text-charcoal-muted leading-relaxed mb-6">
                  Primary grade learning transitions students into structured subjects, building solid comprehension in reading, arithmetic, environmental studies, and moral science.
                </p>

                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-academic-green/5 mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1000&auto=format&fit=crop"
                    alt="Primary grade classroom with teacher guidance"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[10px] text-white/90">
                    Representational
                  </div>
                </div>
              </div>

              <div className="text-xs text-charcoal-subtle italic border-t border-academic-green/8 pt-3">
                Focus: Language • Mathematics • Environmental Studies • Moral Values
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 bg-canvas-alt border-y border-academic-green/8">
        <Container size="default">
          <SectionHeading
            eyebrow="LEARNING AREAS"
            title="Balanced Foundational Development"
            description="We develop core intellectual competencies while keeping the classroom engaging."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {domains.map((d) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.title}
                  className="p-6 rounded-2xl bg-canvas-surface border border-academic-green/10 shadow-subtle flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-saffron-gold-dark mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg text-academic-green mb-2">
                    {d.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                    {d.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="EXPLORE CO-CURRICULAR LIFE"
        title="Learning Beyond The Classroom"
        description="Discover how arts, sports, and storytelling enrich our primary school experience."
        primaryCtaText="Explore Activities"
        primaryCtaHref="/activities"
        secondaryCtaText="Enquire for Admission"
        secondaryCtaHref="/admissions"
        variant="dark"
      />
    </div>
  );
}
