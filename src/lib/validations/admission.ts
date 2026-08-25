import { z } from "zod";

export const admissionEnquirySchema = z.object({
  parent_name: z
    .string()
    .trim()
    .min(2, "Parent / Guardian name must be at least 2 characters")
    .max(100, "Parent name cannot exceed 100 characters"),
  child_name: z
    .string()
    .trim()
    .min(2, "Child full name must be at least 2 characters")
    .max(100, "Child name cannot exceed 100 characters"),
  child_age_or_class: z
    .string()
    .trim()
    .min(1, "Please select or enter the class / age grade")
    .max(50),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(100)
    .optional()
    .or(z.literal("")),
  preferred_contact_method: z
    .enum(["phone", "whatsapp", "email"])
    .default("phone"),
  message: z
    .string()
    .trim()
    .max(1000, "Message cannot exceed 1000 characters")
    .optional()
    .or(z.literal("")),
  honeypot_field: z.string().max(0, "Spam detected").optional(),
  submission_duration_ms: z.number().min(1500, "Submission too rapid").optional(),
});

export type AdmissionEnquiryFormData = z.infer<typeof admissionEnquirySchema>;
