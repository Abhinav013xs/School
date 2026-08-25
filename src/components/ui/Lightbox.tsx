"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryItem } from "@/types/gallery";

export interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  const isOpen = currentIndex !== null && items[currentIndex] !== undefined;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen) return null;

  const currentItem = items[currentIndex!];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-academic-green-dark/95 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label="Gallery photo preview"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        aria-label="Close preview (Escape)"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-gold"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Left */}
      {items.length > 1 && (
        <button
          onClick={onPrev}
          aria-label="Previous photo (ArrowLeft)"
          className="absolute left-3 sm:left-6 z-20 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-gold"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Navigation Right */}
      {items.length > 1 && (
        <button
          onClick={onNext}
          aria-label="Next photo (ArrowRight)"
          className="absolute right-3 sm:right-6 z-20 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-gold"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Image and Caption Container */}
      <div className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center">
        <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={currentItem.imageUrl}
            alt={currentItem.altText}
            fill
            sizes="90vw"
            className="object-contain"
            priority
          />
        </div>

        <div className="mt-4 text-center text-canvas max-w-2xl px-4">
          <h3 className="font-serif font-semibold text-lg sm:text-xl text-amber-200">
            {currentItem.title}
          </h3>
          {currentItem.description && (
            <p className="text-xs sm:text-sm text-canvas/80 mt-1">{currentItem.description}</p>
          )}
          <span className="text-[11px] text-canvas/60 block mt-2">
            {currentIndex! + 1} of {items.length}
          </span>
        </div>
      </div>
    </div>
  );
};
