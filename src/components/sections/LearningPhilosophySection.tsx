import React from "react";
import { BookOpen, Lightbulb, HeartHandshake } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";

export const LearningPhilosophySection: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-canvas-alt border-y border-academic-green/8">
      <Container size="default">
        <SectionHeading
          eyebrow="HOW WE APPROACH LEARNING"
          title="Learning Beyond Rote Memorization"
          description="We emphasize conceptual understanding, personal confidence, and joyful discovery across every foundational stage."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <FeatureCard
            icon={<BookOpen className="w-6 h-6" />}
            number="01"
            eyebrow="CORE FOUNDATION"
            title="Foundational Literacy & Numeracy"
            description="Building strong, intuitive language reading habits and core arithmetic readiness through structured, step-by-step guidance."
            ctaText="Learn about academics"
            ctaHref="/academics"
          />
          <FeatureCard
            icon={<Lightbulb className="w-6 h-6" />}
            number="02"
            eyebrow="ACTIVE INQUIRY"
            title="Curiosity & Conceptual Thinking"
            description="Encouraging young learners to observe, ask thoughtful questions, and connect concepts to the world around them."
            ctaText="Explore activities"
            ctaHref="/activities"
          />
          <FeatureCard
            icon={<HeartHandshake className="w-6 h-6" />}
            number="03"
            eyebrow="CHARACTER ROOTS"
            title="Values, Respect & Discipline"
            description="Nurturing kindness, mutual respect, classroom discipline, and social cooperation from the very earliest grades."
            ctaText="Read our philosophy"
            ctaHref="/about"
          />
        </div>
      </Container>
    </section>
  );
};
