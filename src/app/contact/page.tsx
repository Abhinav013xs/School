import type { Metadata } from "next";
import { SCHOOL_CONFIG } from "@/config/school-info";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { ContactFormUI } from "@/components/forms/ContactFormUI";
import { CTASection } from "@/components/ui/CTASection";
import { MapPin, Clock, Calendar, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Location | Spring Dales Academy",
  description: "Get in touch with Spring Dales Academy in Tekar, Patawa, Uttar Pradesh (230401). View address, operating schedule, and send a message.",
};

export default function ContactPage() {
  return (
    <div className="w-full flex flex-col">
      <PageHero
        eyebrow="CONNECT WITH US"
        title="Let's Start A Conversation."
        description="We welcome parents and guardians to contact us with questions regarding admissions, academic stages, and campus visits."
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      <section className="py-16 sm:py-20 bg-canvas">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-canvas-surface border border-academic-green/15 shadow-subtle space-y-6">
                <div>
                  <h3 className="font-serif font-semibold text-xl sm:text-2xl text-academic-green mb-1">
                    {SCHOOL_CONFIG.name}
                  </h3>
                  <p className="text-xs text-saffron-gold-dark uppercase tracking-wider font-semibold">
                    {SCHOOL_CONFIG.type} • Uttar Pradesh
                  </p>
                </div>

                <div className="space-y-4 text-sm text-charcoal border-t border-academic-green/8 pt-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-academic-green shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-academic-green">Campus Address:</p>
                      <p className="text-charcoal-muted leading-relaxed">
                        {SCHOOL_CONFIG.location.fullAddress}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-academic-green shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-academic-green">Daily Operating Hours:</p>
                      <p className="text-charcoal-muted">{SCHOOL_CONFIG.schedule.summary}</p>
                      <p className="text-xs text-amber-800 italic mt-1">{SCHOOL_CONFIG.schedule.holidayNotice}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-academic-green shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-academic-green">Sunday:</p>
                      <p className="text-charcoal-muted">{SCHOOL_CONFIG.schedule.sunday}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={SCHOOL_CONFIG.location.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-academic-green hover:text-saffron-gold-dark transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-saffron-gold rounded p-1"
                  >
                    <Compass className="w-4 h-4" />
                    <span>Get Directions on Google Maps →</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactFormUI />
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="ADMISSIONS OPEN"
        title="Looking for Admission Guidance?"
        description="Submit your child's preliminary details on our admissions page for direct school guidance."
        primaryCtaText="Enquire for Admission"
        primaryCtaHref="/admissions"
        secondaryCtaText="Back to Homepage"
        secondaryCtaHref="/"
        variant="dark"
      />
    </div>
  );
}
