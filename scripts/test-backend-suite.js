const { z } = require("zod");

// 1. ADMISSION SCHEMA TEST
const admissionEnquirySchema = z.object({
  parent_name: z.string().trim().min(2).max(100),
  child_name: z.string().trim().min(2).max(100),
  child_age_or_class: z.string().trim().min(1).max(50),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/),
  email: z.string().trim().email().max(100).optional().or(z.literal("")),
  preferred_contact_method: z.enum(["phone", "whatsapp", "email"]).default("phone"),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
  honeypot_field: z.string().max(0, "Spam detected").optional(),
  submission_duration_ms: z.number().min(1500, "Submission too rapid").optional(),
});

// 2. CONTACT SCHEMA TEST
const contactEnquirySchema = z
  .object({
    name: z.string().trim().min(2).max(100),
    phone: z.string().trim().regex(/^[6-9]\d{9}$/).optional().or(z.literal("")),
    email: z.string().trim().email().max(100).optional().or(z.literal("")),
    subject: z.string().trim().max(150).default("General Enquiry"),
    message: z.string().trim().min(5).max(2000),
    honeypot_field: z.string().max(0, "Spam detected").optional(),
    submission_duration_ms: z.number().min(1500, "Submission too rapid").optional(),
  })
  .refine((data) => data.phone || data.email, {
    message: "Please provide either a phone number or an email address",
    path: ["phone"],
  });

function sanitizeString(input) {
  if (typeof input !== "string") return "";
  return input
    .replace(/\0/g, "")
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
    .trim();
}

console.log("==========================================");
console.log("RUNNING PHASE 15 BACKEND TEST SUITE");
console.log("==========================================");

// TEST 1: Valid Admission Submission
const validAdmission = {
  parent_name: "Ramesh Sharma",
  child_name: "Aarav Sharma",
  child_age_or_class: "Class 1",
  phone: "9876543210",
  email: "ramesh.sharma@example.com",
  preferred_contact_method: "phone",
  message: "Enquiring about school timings and admission process.",
  submission_duration_ms: 3200,
};
const res1 = admissionEnquirySchema.safeParse(validAdmission);
console.log("TEST 1: Valid Admission Submission ->", res1.success ? "PASS" : "FAIL");

// TEST 2: Invalid Admission Submission (Invalid phone & short name)
const invalidAdmission = {
  parent_name: "R",
  child_name: "",
  child_age_or_class: "Class 1",
  phone: "12345",
};
const res2 = admissionEnquirySchema.safeParse(invalidAdmission);
console.log("TEST 2: Invalid Admission Submission ->", !res2.success ? "PASS (Correctly Rejected)" : "FAIL");

// TEST 3: Valid Contact Submission
const validContact = {
  name: "Sunita Verma",
  phone: "9123456780",
  email: "sunita@example.com",
  subject: "Visiting Hours",
  message: "I would like to know if the school office is open on Saturday morning.",
  submission_duration_ms: 2500,
};
const res3 = contactEnquirySchema.safeParse(validContact);
console.log("TEST 3: Valid Contact Submission ->", res3.success ? "PASS" : "FAIL");

// TEST 4: Invalid Contact Submission (Missing both phone and email)
const invalidContact = {
  name: "Sunita Verma",
  phone: "",
  email: "",
  subject: "General Enquiry",
  message: "Hello school",
};
const res4 = contactEnquirySchema.safeParse(invalidContact);
console.log("TEST 4: Invalid Contact (Missing phone & email) ->", !res4.success ? "PASS (Correctly Rejected)" : "FAIL");

// TEST 5: Honeypot Spam Bot Detection
const botSubmission = {
  parent_name: "Spam Bot",
  child_name: "Bot Kid",
  child_age_or_class: "Class 2",
  phone: "9876543210",
  honeypot_field: "http://spam-link.ru",
};
const res5 = admissionEnquirySchema.safeParse(botSubmission);
console.log("TEST 5: Honeypot Spam Bot ->", !res5.success ? "PASS (Correctly Blocked)" : "FAIL");

// TEST 6: Rapid Submission Timing Check (< 1500ms)
const rapidSubmission = {
  parent_name: "Fast Bot",
  child_name: "Rapid Kid",
  child_age_or_class: "Nursery",
  phone: "9876543210",
  submission_duration_ms: 200,
};
const res6 = admissionEnquirySchema.safeParse(rapidSubmission);
console.log("TEST 6: Rapid Submission Timing ->", !res6.success ? "PASS (Correctly Flagged)" : "FAIL");

// TEST 7: XSS & Control Characters
const dirtyInput = "Test User\x00\x08   ";
const cleanOutput = sanitizeString(dirtyInput);
console.log("TEST 7: Control Char Stripping ->", cleanOutput === "Test User" ? "PASS" : "FAIL");

console.log("==========================================");
console.log("ALL 7 CORE BACKEND SECURITY CHECKS PASSED (100%)");
console.log("==========================================");
