import React from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

export interface ImageWrapperProps extends Omit<ImageProps, "className"> {
  wrapperClassName?: string;
  imageClassName?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "3/2" | "auto";
  rounded?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | "none";
  overlay?: boolean;
}

export const ImageWrapper: React.FC<ImageWrapperProps> = ({
  wrapperClassName,
  imageClassName,
  aspectRatio = "4/3",
  rounded = "2xl",
  overlay = false,
  alt,
  ...imageProps
}) => {
  const aspectClasses = {
    "16/9": "aspect-[16/9]",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
    "3/2": "aspect-[3/2]",
    auto: "",
  };

  const roundedClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    full: "rounded-full",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-academic-green/5 border border-academic-green/10",
        aspectClasses[aspectRatio],
        roundedClasses[rounded],
        wrapperClassName
      )}
    >
      <Image
        alt={alt}
        className={cn("object-cover transition-transform duration-500", imageClassName)}
        {...imageProps}
      />
      {overlay && <div className="absolute inset-0 bg-academic-green/15" />}
    </div>
  );
};
