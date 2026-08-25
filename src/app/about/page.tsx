import type { Metadata } from "next";
import Image from "next/image";
import { SCHOOL_CONFIG } from "@/config/school-info";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, Heart, Sparkles, BookOpen, ShieldCheck, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Spring Dales Academy",
  description: "Learn about Spring Dales Academy, our educational philosophy, character values, and foundational learning environment in Tekar, Patawa.",
};

export default function AboutPage() {
  const values = [
    {
      icon: Sparkles,
      title: "Active Curiosity",
      description: "Encouraging young minds to ask questions, explore ideas, and find genuine joy in learning.",
    },
    {
      icon: Heart,
      title: "Kindness & Care",
      description: "Cultivating mutual empathy, polite conduct, and inclusive friendship from the earliest years.",
    },
    {
      icon: BookOpen,
      title: "Foundational Focus",
      description: "Prioritizing strong basic literacy and numeracy fundamentals over superficial rote memory.",
    },
    {
      icon: ShieldCheck,
      title: "Discipline & Respect",
      description: "Instilling thoughtful habits, respect for elders and peers, and classroom responsibility.",
    },
    {
      icon: Users,
      title: "Community Roots",
      description: "Deeply connected to the families and children of Tekar, Patawa, and neighboring UP regions.",
    },
  ];

  return (
    <div className="w-full flex flex-col">
      <PageHero
        eyebrow="ABOUT SPRING DALES ACADEMY"
        title="A Place Where Learning Begins With Curiosity."
        description="We are a dedicated foundational primary school in Tekar, Patawa, committed to giving every young learner a warm, inspiring, and solid start in life."
        breadcrumbs={[{ label: "About Us" }]}
      />

      <section className="py-16 sm:py-20 bg-canvas">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6">
              <Badge variant="gold" className="mb-4">
                OUR MISSION & PURPOSE
              </Badge>
              <h2 className="font-serif font-semibold text-2xl sm:text-3xl md:text-4xl text-academic-green leading-snug mb-6">
                Laying the Foundations for a Lifetime of Confidence.
              </h2>
              <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed mb-4">
                Primary schooling is not merely about textbooks and examinations—it is the transformative period where a child first develops their attitude toward learning, their sense of curiosity, and their self-worth.
              </p>
              <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed mb-6">
                At <strong className="text-charcoal font-semibold">{SCHOOL_CONFIG.name}</strong>, our focus is on building strong cognitive and moral fundamentals. Located in Tekar, Patawa (Uttar Pradesh 230401), we offer early childhood kindergarten and primary grade classes designed to nurture curious, happy, and disciplined learners.
              </p>

              <div className="p-4 rounded-2xl bg-canvas-alt border border-academic-green/10 space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-academic-green">
                  <CheckCircle2 className="w-4 h-4 text-saffron-gold-dark shrink-0" />
                  <span>Foundational Early Childhood & Primary Education</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-academic-green">
                  <CheckCircle2 className="w-4 h-4 text-saffron-gold-dark shrink-0" />
                  <span>Tekar, Patawa, UP (230401) • Mon–Sat: 9 AM–1 PM</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-card border border-academic-green/15 bg-academic-green/5">
                <Image
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
                  alt="Students engaged in collaborative primary classroom study"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[10px] text-white/90">
                  Representational
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 bg-canvas-alt border-y border-academic-green/8">
        <Container size="default">
          <SectionHeading
            eyebrow="CORE CHARACTER VALUES"
            title="The Values That Guide Our School"
            description="Education at Spring Dales Academy combines academic fundamentals with positive character development."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="p-6 rounded-2xl bg-canvas-surface border border-academic-green/10 shadow-subtle flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-saffron-gold-dark mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg text-academic-green mb-2">
                    {v.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 bg-canvas">
        <Container size="default">
          <div className="relative rounded-3xl overflow-hidden p-8 sm:p-14 text-center bg-academic-green text-canvas shadow-card">
            <p className="font-serif italic text-lg sm:text-2xl max-w-2xl mx-auto leading-relaxed text-amber-100">
              “Every child’s first school experiences shape how they feel about learning for years to come.”
            </p>
            <p className="text-xs sm:text-sm text-canvas/70 mt-4 tracking-wider uppercase">
              {SCHOOL_CONFIG.name} • Tekar, Patawa
            </p>
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="TAKE THE FIRST STEP"
        title="Discover How Your Child Can Begin The Journey"
        description="Admissions are open for early kindergarten and primary stages. Connect with our school office in Patawa today."
        primaryCtaText="Enquire for Admission"
        primaryCtaHref="/admissions"
        secondaryCtaText="Contact School Office"
        secondaryCtaHref="/contact"
        variant="dark"
      />
    </div>
  );
}
