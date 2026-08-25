import React from "react";
import { Inbox } from "lucide-react";
import { cn } from "@/lib/utils";

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  className,
  icon,
  title,
  description,
  action,
  ...props
}) => {
  return (
    <div
      className={cn(
        "p-8 sm:p-12 rounded-2xl bg-canvas-alt border border-academic-green/10 text-center max-w-md mx-auto my-8",
        className
      )}
      {...props}
    >
      <div className="w-12 h-12 rounded-full bg-academic-green/5 text-academic-green flex items-center justify-center mx-auto mb-4">
        {icon || <Inbox className="w-6 h-6" />}
      </div>

      <h3 className="font-serif font-semibold text-lg text-academic-green mb-2">{title}</h3>
      {description && <p className="text-sm text-charcoal-muted mb-6 leading-relaxed">{description}</p>}

      {action && <div className="mt-4">{action}</div>}
    </div>
  );
};
