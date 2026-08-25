"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GALLERY_ITEMS } from "@/config/gallery";
import { GalleryCategory } from "@/types/gallery";
import { Badge } from "@/components/ui/Badge";
import { Lightbox } from "@/components/ui/Lightbox";
import { cn } from "@/lib/utils";

export const GalleryViewer: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: { key: GalleryCategory; label: string }[] = [
    { key: "all", label: "All Photos" },
    { key: "classrooms", label: "Classrooms" },
    { key: "activities", label: "Activities" },
    { key: "campus", label: "Campus & Spaces" },
    { key: "celebrations", label: "Celebrations" },
  ];

  const filteredItems = selectedCategory === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Category Filter Pills (Responsive scroll on mobile, centered on desktop) */}
      <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 overflow-x-auto no-scrollbar py-2 px-1">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.key;
          return (
            <button
              key={cat.key}
              type="button"
              onClick={() => setSelectedCategory(cat.key)}
              className={cn(
                "whitespace-nowrap px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 shrink-0",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-gold",
                isActive
                  ? "bg-academic-green text-white shadow-card"
                  : "bg-canvas-surface text-charcoal-muted border border-academic-green/10 hover:border-academic-green/25 hover:text-academic-green"
              )}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Masonry / Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setLightboxIndex(index)}
            className="group relative cursor-pointer rounded-2xl overflow-hidden bg-canvas-surface border border-academic-green/10 shadow-subtle hover:-translate-y-1 hover:shadow-elevated transition-all duration-300 flex flex-col"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-academic-green/5">
              <Image
                src={item.imageUrl}
                alt={item.altText}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-academic-green-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-medium">Click to view fullscreen</span>
              </div>

              <div className="absolute top-3 left-3 z-10">
                <Badge variant="gold" size="sm">
                  {item.category}
                </Badge>
              </div>

              {item.isPlaceholder && (
                <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[10px] text-white/90">
                  Representational
                </div>
              )}
            </div>

            <div className="p-4 sm:p-5 flex flex-col flex-1">
              <h3 className="font-serif font-semibold text-base sm:text-lg text-academic-green group-hover:text-saffron-gold-dark transition-colors mb-1 leading-snug">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Component */}
      <Lightbox
        items={[...filteredItems]}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={() =>
          setLightboxIndex((prev) =>
            prev !== null ? (prev === 0 ? filteredItems.length - 1 : prev - 1) : null
          )
        }
        onNext={() =>
          setLightboxIndex((prev) =>
            prev !== null ? (prev === filteredItems.length - 1 ? 0 : prev + 1) : null
          )
        }
      />
    </div>
  );
};
