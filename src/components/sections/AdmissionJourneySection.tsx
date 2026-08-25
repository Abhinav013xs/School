import React from "react";
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
    },
    {
      icon: FileText,
      step: "02",
      title: "Submit an Enquiry",
      description:
        "Fill out our simple online enquiry form or visit our school office during operating hours (Mon–Sat, 9 AM–1 PM).",
    },
    {
      icon: PhoneCall,
      step: "03",
      title: "Connect & Visit",
      description:
        "Our school administration connects with your family to discuss admission guidelines and arrange a campus visit.",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-12">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="relative p-6 sm:p-8 rounded-3xl bg-canvas-surface border border-academic-green/10 shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-saffron-gold-dark">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-serif font-bold text-3xl text-academic-green/15">
                      {s.step}
                    </span>
                  </div>

                  <h3 className="font-serif font-semibold text-xl text-academic-green mb-3">
                    {s.title}
                  </h3>

                  <p className="text-sm text-charcoal-muted leading-relaxed">
                    {s.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-academic-green/8 text-xs text-charcoal-subtle">
                  Step {idx + 1} of 3
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
