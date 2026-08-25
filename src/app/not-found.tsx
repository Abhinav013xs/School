import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center p-6 text-center max-w-xl mx-auto my-16">
      <span className="text-5xl font-serif font-bold text-saffron-gold mb-2">404</span>
      <h1 className="text-2xl md:text-3xl font-serif font-semibold text-academic-green mb-4">
        Page Not Found
      </h1>
      <p className="text-charcoal-muted mb-8 leading-relaxed">
        The page you are looking for might have been moved or does not exist. Please use the links below to return to Spring Dales Academy.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/"
          className="px-6 py-2.5 bg-academic-green hover:bg-academic-green-dark text-white font-medium rounded-full transition-all"
        >
          Return to Homepage
        </Link>
        <Link
          href="/admissions"
          className="px-6 py-2.5 bg-saffron-gold hover:bg-saffron-gold-dark text-white font-medium rounded-full transition-all"
        >
          Admissions Info
        </Link>
      </div>
    </main>
  );
}
