import type { Metadata } from "next";
import Image from "next/image";
import { SCHOOL_CONFIG } from "@/config/school-info";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";
import { Shield, SunMedium, Droplets, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Campus & Learning Environment | Spring Dales Academy",
  description: "A safe, clean, and child-friendly primary school learning environment in Tekar, Patawa, UP (230401).",
};

export default function CampusPage() {
  const commitments = [
    {
      icon: Shield,
      title: "Child Safety & Security",
      desc: "Supervised campus premises with focused care during classroom hours and recreation times.",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: SunMedium,
      title: "Ventilated, Bright Classrooms",
      desc: "Well-lit and ventilated spaces arranged with child-appropriate desks and learning corners.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: Droplets,
      title: "Clean Drinking Water & Hygiene",
      desc: "Maintained sanitation facilities and clean, potable drinking water for all students.",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: HeartHandshake,
      title: "Caring & Attentive Staff",
      desc: "Educators and staff dedicated to creating a warm, supportive atmosphere every day.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop",
    },
  ];

  return (
    <div className="w-full flex flex-col">
      <PageHero
        eyebrow="OUR CAMPUS"
        title="A Safe, Inspiring Place To Learn."
        description="Our campus in Tekar, Patawa is designed with child safety, hygiene, and joyful learning at the center."
        breadcrumbs={[{ label: "Campus" }]}
      />

      <section className="py-16 sm:py-20 bg-canvas">
        <Container size="default">
          <SectionHeading
            eyebrow="CAMPUS STANDARDS"
            title="Built for the Well-Being of Young Children"
            description="We maintain clean, secure, and encouraging physical learning spaces."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {commitments.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="group rounded-3xl bg-canvas-surface border border-academic-green/10 shadow-subtle hover:-translate-y-1.5 hover:shadow-elevated transition-all duration-300 flex flex-col overflow-hidden items-center sm:items-start text-center sm:text-left"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-academic-green/5">
                    <Image
                      src={c.image}
                      alt={c.title}
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
                    <div className="w-11 h-11 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-saffron-gold-dark mb-4 shadow-sm shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif font-bold text-lg text-academic-green mb-2 leading-snug">
                      {c.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-card border border-academic-green/15 bg-academic-green/5">
              <Image
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop"
                alt="Quiet reading and study space in school"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[10px] text-white/90">
                Representational
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-canvas-alt border border-academic-green/10 space-y-4 text-center sm:text-left">
              <h3 className="font-serif font-bold text-2xl text-academic-green">
                Visiting Our Campus
              </h3>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                Parents are warmly invited to visit our school campus in Tekar, Patawa to see our learning environment, meet our teachers, and discuss admission details.
              </p>
              <div className="text-xs text-charcoal space-y-1.5 pt-2 border-t border-academic-green/8 text-center sm:text-left">
                <p><strong>Campus Location:</strong> {SCHOOL_CONFIG.location.fullAddress}</p>
                <p><strong>Visiting Hours:</strong> {SCHOOL_CONFIG.schedule.summary}</p>
                <p className="text-amber-800 italic">{SCHOOL_CONFIG.schedule.holidayNotice}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="ADMISSIONS OPEN"
        title="Schedule a Visit to Spring Dales Academy"
        description="Connect with our office in Tekar, Patawa to learn more and arrange a campus visit."
        primaryCtaText="Enquire for Admission"
        primaryCtaHref="/admissions"
        secondaryCtaText="Contact School Office"
        secondaryCtaHref="/contact"
        variant="dark"
      />
    </div>
  );
}
