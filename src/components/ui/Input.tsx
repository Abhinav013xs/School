import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, helperText, type = "text", ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          type={type}
          ref={ref}
          className={cn(
            "w-full px-4 py-3 rounded-xl bg-canvas-surface border text-charcoal text-sm sm:text-base",
            "transition-all duration-200 placeholder:text-charcoal-subtle/60",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-gold focus-visible:border-saffron-gold",
            "disabled:opacity-50 disabled:bg-gray-100 disabled:cursor-not-allowed",
            error
              ? "border-red-500 focus-visible:ring-red-500 bg-red-50/20"
              : "border-academic-green/15 hover:border-academic-green/30",
            className
          )}
          {...props}
        />
        {error ? (
          <p className="mt-1.5 text-xs text-red-600 font-medium">{error}</p>
        ) : helperText ? (
          <p className="mt-1.5 text-xs text-charcoal-subtle">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";
