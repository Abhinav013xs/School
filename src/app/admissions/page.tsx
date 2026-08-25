import type { Metadata } from "next";
import { SCHOOL_CONFIG } from "@/config/school-info";
import { HOMEPAGE_FAQS } from "@/config/faqs";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AdmissionFormUI } from "@/components/forms/AdmissionFormUI";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/ui/CTASection";
import { MapPin, Clock, Compass, FileText, PhoneCall } from "lucide-react";

export const metadata: Metadata = {
  title: "Admissions & Online Enquiry | Spring Dales Academy",
  description: "Enquire for Nursery, Kindergarten (LKG, UKG), and Primary (Class 1-5) admissions at Spring Dales Academy in Tekar, Patawa (230401).",
};

export default function AdmissionsPage() {
  const steps = [
    {
      icon: Compass,
      step: "01",
      title: "Explore the School",
      description: "Learn about our foundational curriculum, caring learning environment, and class offerings.",
    },
    {
      icon: FileText,
      step: "02",
      title: "Submit an Enquiry",
      description: "Fill out the online enquiry form below or visit our school office during operating hours.",
    },
    {
      icon: PhoneCall,
      step: "03",
      title: "Connect & Campus Visit",
      description: "Our school administration will connect with your family to discuss admission guidance and arrange a visit.",
    },
  ];

  return (
    <div className="w-full flex flex-col">
      <PageHero
        eyebrow="ADMISSIONS OPEN"
        title="Begin The Journey With Spring Dales Academy."
        description="We welcome families to enquire for early childhood kindergarten (Nursery, LKG, UKG) and primary classes (Class 1 to 5) in Tekar, Patawa."
        breadcrumbs={[{ label: "Admissions" }]}
      />

      <section className="py-16 sm:py-20 bg-canvas">
        <Container size="default">
          <SectionHeading
            eyebrow="ADMISSION PATHWAY"
            title="How To Enquire For Admission"
            description="Our simple 3-step process connects your family directly with the school administration."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.step}
                  className="p-6 sm:p-8 rounded-3xl bg-canvas-surface border border-academic-green/10 shadow-subtle flex flex-col justify-between"
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

          <div className="p-6 sm:p-8 rounded-3xl bg-canvas-alt border border-academic-green/15 max-w-3xl mx-auto mb-16">
            <div className="grid sm:grid-cols-2 gap-6 text-sm text-charcoal">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-academic-green shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-academic-green">Campus Location:</p>
                  <p className="text-charcoal-muted">{SCHOOL_CONFIG.location.fullAddress}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-academic-green shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-academic-green">School Office Hours:</p>
                  <p className="text-charcoal-muted">{SCHOOL_CONFIG.schedule.summary}</p>
                  <p className="text-xs text-amber-800 italic mt-1">{SCHOOL_CONFIG.schedule.holidayNotice}</p>
                </div>
              </div>
            </div>
          </div>

          <div id="enquiry" className="scroll-mt-24">
            <AdmissionFormUI />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 bg-canvas-alt border-y border-academic-green/8">
        <Container size="default">
          <SectionHeading
            eyebrow="ADMISSION FAQS"
            title="Frequently Asked Questions"
            description="Answers to common questions regarding admissions, school hours, and curriculum."
            align="center"
          />

          <FAQAccordion items={[...HOMEPAGE_FAQS]} />
        </Container>
      </section>

      <CTASection
        eyebrow="HAVE QUESTIONS?"
        title="Connect With Our School Administration"
        description="Our team in Tekar, Patawa is available during operating hours to answer your questions."
        primaryCtaText="Contact School Office"
        primaryCtaHref="/contact"
        secondaryCtaText="Back to Homepage"
        secondaryCtaHref="/"
        variant="dark"
      />
    </div>
  );
}
