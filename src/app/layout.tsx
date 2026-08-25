import type { Metadata } from "next";
import { Lora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_METADATA } from "@/config/site-metadata";
import { SCHOOL_CONFIG } from "@/config/school-info";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  weight: ["500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_METADATA.siteUrl),
  title: {
    default: SITE_METADATA.titleDefault,
    template: SITE_METADATA.titleTemplate,
  },
  description: SITE_METADATA.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_METADATA.titleDefault,
    description: SITE_METADATA.description,
    url: SITE_METADATA.siteUrl,
    siteName: SITE_METADATA.schoolName,
    locale: SITE_METADATA.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_METADATA.titleDefault,
    description: SITE_METADATA.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Verified School Schema (No fake reviews or ratings)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SCHOOL_CONFIG.name,
    description: "Primary School in Tekar, Patawa, Uttar Pradesh providing early kindergarten and primary foundational education.",
    url: SITE_METADATA.siteUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${SCHOOL_CONFIG.location.street}, ${SCHOOL_CONFIG.location.locality}`,
      addressLocality: SCHOOL_CONFIG.location.locality,
      addressRegion: SCHOOL_CONFIG.location.state,
      postalCode: SCHOOL_CONFIG.location.postalCode,
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "13:00",
      },
    ],
  };

  return (
    <html lang="en" className={`${lora.variable} ${plusJakartaSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-canvas text-charcoal antialiased selection:bg-saffron-gold/20 selection:text-academic-green-dark">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-saffron-gold focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
