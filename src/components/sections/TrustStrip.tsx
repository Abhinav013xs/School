import React from "react";
import { Container } from "@/components/ui/Container";

export const TrustStrip: React.FC = () => {
  const tenets = [
    {
      number: "01",
      title: "Strong Foundations",
      description: "Focus on fundamental early literacy, numeracy, and cognitive readiness.",
    },
    {
      number: "02",
      title: "Curious Minds",
      description: "Encouraging children to ask questions, explore ideas, and enjoy learning.",
    },
    {
      number: "03",
      title: "Confident Expression",
      description: "A supportive environment helping each young learner build self-belief.",
    },
  ];

  return (
    <section className="w-full bg-academic-green text-canvas py-10 sm:py-12 border-y border-academic-green-dark">
      <Container size="default">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10 divide-y md:divide-y-0 md:divide-x divide-canvas/15">
          {tenets.map((tenet, idx) => (
            <div
              key={tenet.title}
              className={`flex flex-col text-center md:text-left items-center md:items-start ${
                idx !== 0 ? "pt-6 md:pt-0 md:pl-6 lg:pl-10" : ""
              }`}
            >
              <span className="font-serif font-bold text-amber-300 text-sm tracking-wider mb-2">
                {tenet.number} • TENET
              </span>
              <h3 className="font-serif font-semibold text-lg sm:text-xl text-canvas mb-2">
                {tenet.title}
              </h3>
              <p className="text-sm text-canvas/80 leading-relaxed max-w-sm md:max-w-none">
                {tenet.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
