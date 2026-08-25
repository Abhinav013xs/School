"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log sanitized error
    console.error("[Application Error]", error);
  }, [error]);

  return (
    <main className="flex-1 flex flex-col items-center justify-center p-6 text-center max-w-xl mx-auto my-16">
      <h1 className="text-2xl md:text-3xl font-serif font-semibold text-academic-green mb-4">
        Something went wrong
      </h1>
      <p className="text-charcoal-muted mb-8 leading-relaxed">
        We encountered an unexpected error while loading this page. Please try refreshing or return to the homepage.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={() => reset()}
          className="px-6 py-2.5 bg-academic-green hover:bg-academic-green-dark text-white font-medium rounded-full transition-all"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="px-6 py-2.5 border border-academic-green text-academic-green hover:bg-academic-green hover:text-white font-medium rounded-full transition-all"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
