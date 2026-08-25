import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

export interface ImageCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description?: string;
  category?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "3/2";
  href?: string;
  isPlaceholder?: boolean;
}

export const ImageCard: React.FC<ImageCardProps> = ({
  className,
  imageSrc,
  imageAlt,
  title,
  description,
  category,
  aspectRatio = "4/3",
  href,
  isPlaceholder = false,
  ...props
}) => {
  const aspectClasses = {
    "16/9": "aspect-[16/9]",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
    "3/2": "aspect-[3/2]",
  };

  const cardContent = (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl bg-canvas-surface border border-academic-green/10 shadow-subtle transition-all duration-300 hover:-translate-y-1 hover:shadow-card hover:border-academic-green/25",
        className
      )}
      {...props}
    >
      {/* Image Container */}
      <div className={cn("relative w-full overflow-hidden bg-academic-green/5", aspectClasses[aspectRatio])}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-academic-green/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {category && (
          <div className="absolute top-3 left-3 z-10">
            <Badge variant="gold" size="sm">
              {category}
            </Badge>
          </div>
        )}

        {isPlaceholder && (
          <div className="absolute bottom-2 right-2 z-10 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[10px] text-white/90">
            Representational
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <h3 className="font-serif font-semibold text-lg sm:text-xl text-academic-green group-hover:text-saffron-gold-dark transition-colors mb-2 leading-snug">
          {title}
        </h3>
        {description && (
          <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};
