import { NavItem } from "@/types/navigation";

export const MAIN_NAV_ITEMS: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Activities", href: "/activities" },
  { label: "Campus", href: "/campus" },
  { label: "Gallery", href: "/gallery" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_NAV_ITEMS = {
  about: [
    { label: "Our Philosophy", href: "/about" },
    { label: "Foundational Pillars", href: "/about#pillars" },
    { label: "Academic Stages", href: "/academics" },
    { label: "Campus Environment", href: "/campus" },
  ],
  admissions: [
    { label: "Admission Process", href: "/admissions" },
    { label: "Age Guidelines", href: "/admissions#eligibility" },
    { label: "Enquire Online", href: "/admissions#enquire" },
    { label: "Parent FAQs", href: "/admissions#faqs" },
  ],
  quickLinks: [
    { label: "Activities & Arts", href: "/activities" },
    { label: "Photo Gallery", href: "/gallery" },
    { label: "Location & Timings", href: "/contact" },
    { label: "Contact School Office", href: "/contact#message" },
  ],
} as const;
