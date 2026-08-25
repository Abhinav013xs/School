import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { GalleryViewer } from "@/components/gallery/GalleryViewer";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Photo Gallery | Spring Dales Academy",
  description: "View photos of classrooms, activities, celebrations, and school life at Spring Dales Academy in Tekar, Patawa.",
};

export default function GalleryPage() {
  return (
    <div className="w-full flex flex-col">
      <PageHero
        eyebrow="PHOTO GALLERY"
        title="A Glimpse Into The School Experience."
        description="Explore moments of everyday learning, creative workshops, outdoor recreation, and school life at Spring Dales Academy."
        breadcrumbs={[{ label: "Gallery" }]}
      />

      <section className="py-16 sm:py-20 bg-canvas">
        <Container size="default">
          <GalleryViewer />
        </Container>
      </section>

      <CTASection
        eyebrow="ADMISSIONS OPEN"
        title="Ready to Begin Your Child's Journey?"
        description="Connect with the Spring Dales Academy team to start your admission enquiry."
        primaryCtaText="Enquire for Admission"
        primaryCtaHref="/admissions"
        secondaryCtaText="Contact School Office"
        secondaryCtaHref="/contact"
        variant="dark"
      />
    </div>
  );
}
