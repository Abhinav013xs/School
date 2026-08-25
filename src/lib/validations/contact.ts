import { z } from "zod";

export const contactEnquirySchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "Name must be at least 2 characters")
      .max(100, "Name cannot exceed 100 characters"),
    phone: z
      .string()
      .trim()
      .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number")
      .optional()
      .or(z.literal("")),
    email: z
      .string()
      .trim()
      .email("Please enter a valid email address")
      .max(100)
      .optional()
      .or(z.literal("")),
    subject: z
      .string()
      .trim()
      .max(150, "Subject cannot exceed 150 characters")
      .default("General Enquiry"),
    message: z
      .string()
      .trim()
      .min(5, "Message must be at least 5 characters")
      .max(2000, "Message cannot exceed 2000 characters"),
    honeypot_field: z.string().max(0, "Spam detected").optional(),
    submission_duration_ms: z.number().min(1500, "Submission too rapid").optional(),
  })
  .refine((data) => data.phone || data.email, {
    message: "Please provide either a phone number or an email address for correspondence",
    path: ["phone"],
  });

export type ContactEnquiryFormData = z.infer<typeof contactEnquirySchema>;
