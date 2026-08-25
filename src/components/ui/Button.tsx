import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "text";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant = "primary",
  size = "md",
  disabled = false,
  href,
  isExternal = false,
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-gold focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100";

  const variantStyles = {
    primary:
      "bg-saffron-gold hover:bg-saffron-gold-dark text-white shadow-card hover:shadow-elevated",
    secondary:
      "bg-academic-green hover:bg-academic-green-dark text-white shadow-card hover:shadow-elevated",
    outline:
      "bg-transparent border border-academic-green text-academic-green hover:bg-academic-green hover:text-white",
    ghost:
      "bg-transparent hover:bg-academic-green/10 text-academic-green",
    text:
      "bg-transparent text-academic-green hover:text-saffron-gold-dark p-0 h-auto underline-offset-4 hover:underline rounded-none active:scale-100",
  };

  const sizeStyles = {
    sm: "text-xs px-4 py-2 min-h-[36px] gap-1.5",
    md: "text-sm px-5 sm:px-6 py-2.5 sm:py-3 min-h-[44px] gap-2",
    lg: "text-base px-6 sm:px-8 py-3.5 sm:py-4 min-h-[50px] gap-2.5",
  };

  const combinedClassName = cn(
    baseStyles,
    variantStyles[variant],
    variant !== "text" && sizeStyles[size],
    className
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          className={combinedClassName}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={combinedClassName} {...props}>
      {children}
    </button>
  );
};
