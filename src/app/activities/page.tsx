import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";
import { Palette, Trophy, BookOpen, Music } from "lucide-react";

export const metadata: Metadata = {
  title: "Co-Curricular Activities | Spring Dales Academy",
  description: "Explore arts, outdoor play, storytelling circles, and cultural celebrations at Spring Dales Academy in Tekar, Patawa.",
};

export default function ActivitiesPage() {
  const domains = [
    {
      icon: Palette,
      title: "Art, Craft & Creative Expression",
      desc: "Coloring, drawing, clay modeling, and paper craft encouraging imagination and motor skills.",
      image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=800&auto=format&fit=crop",
    },
    {
      icon: Trophy,
      title: "Physical Play & Outdoor Games",
      desc: "Supervised games, running exercises, and agility play promoting healthy physical habits.",
      image: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=800&auto=format&fit=crop",
    },
    {
      icon: BookOpen,
      title: "Guided Story Circles & Reading",
      desc: "Interactive listening sessions that expand children's vocabulary, empathy, and listening discipline.",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
    },
    {
      icon: Music,
      title: "Cultural Events & Celebrations",
      desc: "National days, seasonal festivals, and stage recitals fostering community harmony and confidence.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="w-full flex flex-col">
      <PageHero
        eyebrow="CO-CURRICULAR LIFE"
        title="Learning Should Feel Like Discovery."
        description="Co-curricular activities at Spring Dales Academy give young children opportunities to express themselves, collaborate, and build physical confidence."
        breadcrumbs={[{ label: "Activities" }]}
      />

      <section className="py-16 sm:py-20 bg-canvas">
        <Container size="default">
          <SectionHeading
            eyebrow="DEVELOPMENT DOMAINS"
            title="Growth Beyond Textbooks"
            description="We balance academic foundations with active, creative, and social discovery."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {domains.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-3xl bg-canvas-surface border border-academic-green/10 shadow-subtle overflow-hidden flex flex-col hover:-translate-y-1.5 hover:shadow-elevated transition-all duration-300 items-center sm:items-start text-center sm:text-left"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-academic-green/5">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-academic-green-dark/60 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[10px] text-white/90">
                      Representational
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 flex flex-col flex-1 items-center sm:items-start text-center sm:text-left">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-saffron-gold-dark mb-4 shadow-sm shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif font-bold text-xl text-academic-green mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-charcoal-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="ADMISSIONS OPEN"
        title="Give Your Child a Joyful School Experience"
        description="Connect with our school office in Tekar, Patawa to learn more about admissions and classroom activities."
        primaryCtaText="Enquire for Admission"
        primaryCtaHref="/admissions"
        secondaryCtaText="View School Gallery"
        secondaryCtaHref="/gallery"
        variant="dark"
      />
    </div>
  );
}
