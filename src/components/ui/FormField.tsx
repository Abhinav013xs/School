import React from "react";
import { cn } from "@/lib/utils";

export interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  htmlFor?: string;
  required?: boolean;
  error?: string;
  helperText?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  className,
  label,
  htmlFor,
  required = false,
  error,
  helperText,
  children,
  ...props
}) => {
  return (
    <div className={cn("flex flex-col space-y-1.5 w-full", className)} {...props}>
      <label
        htmlFor={htmlFor}
        className="text-xs sm:text-sm font-medium text-charcoal flex items-center gap-1"
      >
        <span>{label}</span>
        {required && <span className="text-amber-700 font-bold">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-600 font-medium mt-1">{error}</p>}
      {!error && helperText && <p className="text-xs text-charcoal-subtle mt-1">{helperText}</p>}
    </div>
  );
};
