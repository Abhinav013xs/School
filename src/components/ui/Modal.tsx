"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl";
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  maxWidth = "lg",
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const maxWidthClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-2xl",
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "modal-title" : undefined}
      aria-describedby={description ? "modal-description" : undefined}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-academic-green-dark/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Dialog Box */}
      <div
        className={cn(
          "relative w-full bg-canvas-surface border border-academic-green/15 rounded-3xl p-6 sm:p-8 shadow-elevated z-10 animate-in fade-in zoom-in-95 duration-200 overflow-hidden",
          maxWidthClasses[maxWidth]
        )}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full text-charcoal-muted hover:text-academic-green hover:bg-academic-green/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-gold"
        >
          <X className="w-5 h-5" />
        </button>

        {title && (
          <h2 id="modal-title" className="font-serif font-semibold text-2xl text-academic-green mb-2 pr-8">
            {title}
          </h2>
        )}

        {description && (
          <p id="modal-description" className="text-sm text-charcoal-muted mb-6">
            {description}
          </p>
        )}

        <div>{children}</div>
      </div>
    </div>
  );
};
