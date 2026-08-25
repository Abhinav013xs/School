import { FAQItem } from "@/types/faq";
import { SCHOOL_CONFIG } from "./school-info";

export const HOMEPAGE_FAQS: readonly FAQItem[] = [
  {
    id: "faq-location",
    question: "Where is Spring Dales Academy located?",
    answer: `Spring Dales Academy is located at ${SCHOOL_CONFIG.location.fullAddress}. The school is situated in Patawa and easily accessible from surrounding local communities in the region.`,
    category: "general",
  },
  {
    id: "faq-grades",
    question: "What grades and age groups does the school cater to?",
    answer: `We offer foundational early childhood and primary education spanning Nursery, Lower Kindergarten (LKG), Upper Kindergarten (UKG), and Primary Classes 1 through 5.`,
    category: "academics",
  },
  {
    id: "faq-timings",
    question: "What are the school's daily operating hours?",
    answer: `Our operating hours are Monday through Saturday from 9:00 AM to 1:00 PM. The school office is closed on Sundays. ${SCHOOL_CONFIG.schedule.holidayNotice}`,
    category: "timings",
  },
  {
    id: "faq-admission-process",
    question: "How can parents apply or enquire for admission?",
    answer: `Parents can initiate an admission enquiry by submitting the online form on this website or by visiting the school office during operating hours (9:00 AM – 1:00 PM, Mon–Sat) for direct guidance.`,
    category: "admissions",
  },
  {
    id: "faq-approach",
    question: "What is the educational philosophy at Spring Dales Academy?",
    answer: `Our focus is on strong foundational literacy, numeracy, active curiosity, character building, and individual confidence in a safe, caring, and joyful learning environment.`,
    category: "general",
  },
] as const;
