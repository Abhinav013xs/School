import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const GalleryPreviewSection: React.FC = () => {
  const photos = [
    {
      title: "Classroom Learning & Early Reading",
      category: "Classrooms",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
      aspect: "aspect-[4/3]",
    },
    {
      title: "Creative Arts & Drawing Circle",
      category: "Activities",
      image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=800&auto=format&fit=crop",
      aspect: "aspect-[4/3]",
    },
    {
      title: "Interactive Storytelling & Discovery",
      category: "Learning",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop",
      aspect: "aspect-[4/3]",
    },
    {
      title: "Outdoor Recreation & Play Ground",
      category: "Campus",
      image: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=800&auto=format&fit=crop",
      aspect: "aspect-[4/3]",
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-canvas">
      <Container size="default">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow="CAMPUS SNAPSHOTS"
            title="Moments of Daily Joy & Learning"
            description="A visual glimpse into everyday learning, creative workshops, and school life."
            align="left"
            className="mb-0 max-w-2xl"
          />

          <Button
            variant="outline"
            size="md"
            href="/gallery"
            className="self-start md:self-auto shrink-0"
          >
            View Full Gallery
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((item) => (
            <Link
              key={item.title}
              href="/gallery"
              className="group block relative rounded-2xl overflow-hidden bg-canvas-surface border border-academic-green/10 shadow-subtle hover:-translate-y-1 hover:shadow-card transition-all duration-300"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-academic-green/5">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-academic-green-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 left-3 z-10">
                  <Badge variant="gold" size="sm">
                    {item.category}
                  </Badge>
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[10px] text-white/90">
                  Representational
                </div>
              </div>

              <div className="p-4">
                <p className="font-serif font-semibold text-sm text-academic-green group-hover:text-saffron-gold-dark transition-colors line-clamp-1">
                  {item.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
