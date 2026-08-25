import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { StudentAchieversMarquee } from "@/components/sections/StudentAchieversMarquee";
import { IntroSection } from "@/components/sections/IntroSection";
import { LearningPhilosophySection } from "@/components/sections/LearningPhilosophySection";
import { WhySchoolSection } from "@/components/sections/WhySchoolSection";
import { AcademicsPreviewSection } from "@/components/sections/AcademicsPreviewSection";
import { ActivitiesPreviewSection } from "@/components/sections/ActivitiesPreviewSection";
import { EnvironmentSection } from "@/components/sections/EnvironmentSection";
import { GalleryPreviewSection } from "@/components/sections/GalleryPreviewSection";
import { AdmissionJourneySection } from "@/components/sections/AdmissionJourneySection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/ui/CTASection";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. High-Impact Editorial Hero */}
      <HeroSection />

      {/* 2. Trust & Foundational Tenets Strip */}
      <TrustStrip />

      {/* 3. Student Position Holders / Academic Achievers Marquee */}
      <StudentAchieversMarquee />

      {/* 4. School Purpose & Introduction */}
      <IntroSection />

      {/* 5. Learning Philosophy & Core Pillars */}
      <LearningPhilosophySection />

      {/* 6. Why Choose Spring Dales Academy */}
      <WhySchoolSection />

      {/* 7. Academics & Foundational Stages */}
      <AcademicsPreviewSection />

      {/* 8. Co-Curricular & Student Development */}
      <ActivitiesPreviewSection />

      {/* 9. Campus Environment & Safety Standards */}
      <EnvironmentSection />

      {/* 10. Visual Gallery Preview */}
      <GalleryPreviewSection />

      {/* 11. 3-Step Admission Enquiry Pathway */}
      <AdmissionJourneySection />

      {/* 12. Parent FAQ Accordion */}
      <FAQSection />

      {/* 13. Final High-Intent Admission Callout */}
      <CTASection
        eyebrow="ADMISSIONS OPEN"
        title="A Strong Beginning Starts Here"
        description="Give your child the foundation they deserve. Connect with the Spring Dales Academy office in Tekar, Patawa to learn more and arrange a campus visit."
        primaryCtaText="Enquire for Admission"
        primaryCtaHref="/admissions"
        secondaryCtaText="Contact School Office"
        secondaryCtaHref="/contact"
        variant="dark"
      />
    </div>
  );
}
