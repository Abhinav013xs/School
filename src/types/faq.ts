export interface FAQItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
  readonly category?: "general" | "admissions" | "academics" | "timings";
}
