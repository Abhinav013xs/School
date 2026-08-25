"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { FAQItem } from "@/types/faq";

export interface FAQAccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items: FAQItem[];
  allowMultiple?: boolean;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  className,
  items,
  allowMultiple = false,
  ...props
}) => {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn("space-y-3 sm:space-y-4 max-w-3xl mx-auto w-full", className)} {...props}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);

        return (
          <div
            key={item.id}
            className={cn(
              "rounded-2xl border transition-all duration-200 overflow-hidden bg-canvas-surface",
              isOpen
                ? "border-amber-300 shadow-card bg-gradient-to-b from-canvas-surface to-amber-50/20"
                : "border-academic-green/10 shadow-subtle hover:border-academic-green/25"
            )}
          >
            <button
              type="button"
              id={`faq-btn-${item.id}`}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${item.id}`}
              onClick={() => toggleItem(item.id)}
              className="flex items-center justify-between w-full p-5 sm:p-6 text-left font-serif font-semibold text-base sm:text-lg text-academic-green gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-gold"
            >
              <span>{item.question}</span>
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300",
                  isOpen
                    ? "bg-saffron-gold text-white border-saffron-gold rotate-180"
                    : "bg-academic-green/5 text-academic-green border-academic-green/10"
                )}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            <div
              id={`faq-panel-${item.id}`}
              role="region"
              aria-labelledby={`faq-btn-${item.id}`}
              className={cn(
                "transition-all duration-300 ease-in-out px-5 sm:px-6",
                isOpen ? "max-h-96 pb-5 sm:pb-6 opacity-100" : "max-h-0 pb-0 opacity-0 pointer-events-none"
              )}
            >
              <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed border-t border-academic-green/8 pt-3 sm:pt-4">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
