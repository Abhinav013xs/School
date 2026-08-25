import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  className,
  items,
  ...props
}) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center space-x-1.5 text-xs sm:text-sm text-charcoal-muted", className)}
      {...props}
    >
      <Link
        href="/"
        className="inline-flex items-center text-charcoal-muted hover:text-academic-green transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-saffron-gold rounded"
      >
        <Home className="w-3.5 h-3.5 mr-1" />
        <span>Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={item.label}>
            <ChevronRight className="w-3.5 h-3.5 text-charcoal-subtle shrink-0" />
            {isLast || !item.href ? (
              <span className="font-semibold text-academic-green truncate" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="text-charcoal-muted hover:text-academic-green transition-colors truncate focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-saffron-gold rounded"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
