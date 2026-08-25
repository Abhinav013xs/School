import React from "react";
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

export interface ErrorStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  onRetry?: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  className,
  title = "Something went wrong",
  description = "We were unable to complete this request. Please try again or contact the school office directly.",
  onRetry,
  ...props
}) => {
  return (
    <div
      className={cn(
        "p-6 sm:p-8 rounded-2xl bg-red-50/70 border border-red-200 text-center max-w-lg mx-auto my-6",
        className
      )}
      role="alert"
      {...props}
    >
      <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mx-auto text-red-600 mb-4">
        <AlertCircle className="w-6 h-6" />
      </div>

      <h3 className="font-serif font-semibold text-lg text-red-950 mb-2">{title}</h3>
      <p className="text-sm text-red-800/80 mb-6 leading-relaxed">{description}</p>

      {onRetry && (
        <Button
          variant="outline"
          size="sm"
          onClick={onRetry}
          className="border-red-300 text-red-900 hover:bg-red-100"
        >
          Try Again
        </Button>
      )}
    </div>
  );
};
