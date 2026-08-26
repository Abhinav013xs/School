import React from "react";
import Image from "next/image";
import { Compass, FileText, PhoneCall } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const AdmissionJourneySection: React.FC = () => {
  const steps = [
    {
      icon: Compass,
      step: "01",
      title: "Explore the School",
      description:
        "Learn about our foundational approach, academic stages, and caring learning environment in Tekar, Patawa.",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: FileText,
      step: "02",
      title: "Submit an Enquiry",
      description:
        "Fill out our simple online enquiry form or visit our school office during operating hours (Mon–Sat, 9 AM–1 PM).",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop",
    },
    {
      icon: PhoneCall,
      step: "03",
      title: "Connect & Visit",
      description:
        "Our school administration connects with your family to discuss admission guidelines and arrange a campus visit.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop",
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-canvas-alt border-y border-academic-green/8">
      <Container size="default">
        <SectionHeading
          eyebrow="ADMISSIONS OPEN"
          title="Start Your Child's Learning Journey"
          description="We welcome families to connect with us for early childhood and primary grade admissions."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative mb-12">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="group relative rounded-3xl bg-canvas-surface border border-academic-green/10 shadow-subtle hover:-translate-y-1.5 hover:shadow-elevated transition-all duration-300 flex flex-col overflow-hidden items-center sm:items-start text-center sm:text-left"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-academic-green/5">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-academic-green-dark/60 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm text-white font-serif font-bold text-xs flex items-center justify-center">
                    {s.step}
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[10px] text-white/90">
                    Representational
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex flex-col flex-1 items-center sm:items-start text-center sm:text-left justify-between w-full">
                  <div>
                    <div className="w-11 h-11 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-saffron-gold-dark mb-4 shadow-sm shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="font-serif font-bold text-xl text-academic-green mb-2.5 leading-snug">
                      {s.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                      {s.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-academic-green/8 text-xs text-charcoal-subtle w-full text-center sm:text-left">
                    Step {idx + 1} of 3
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            variant="primary"
            size="lg"
            href="/admissions"
            className="shadow-card"
          >
            Enquire for Admission Online
          </Button>
        </div>
      </Container>
    </section>
  );
};
