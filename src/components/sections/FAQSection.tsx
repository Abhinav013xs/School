import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { HOMEPAGE_FAQS } from "@/config/faqs";

export const FAQSection: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-canvas">
      <Container size="default">
        <SectionHeading
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          title="Everything Parents Need To Know"
          description="Clear, honest answers to common questions about admissions, school hours, and our foundational learning environment."
          align="center"
        />

        <FAQAccordion items={[...HOMEPAGE_FAQS]} />

        <div className="text-center mt-10">
          <p className="text-sm text-charcoal-muted">
            Have a specific question not listed here?{" "}
            <Link
              href="/contact"
              className="text-academic-green font-semibold underline underline-offset-4 hover:text-saffron-gold-dark transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-saffron-gold rounded"
            >
              Contact our school office
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
};
