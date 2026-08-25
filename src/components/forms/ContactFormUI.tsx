"use client";

import React, { useState, useEffect, useRef } from "react";
import { CheckCircle2, AlertCircle, AlertTriangle } from "lucide-react";
import { contactEnquirySchema, ContactEnquiryFormData } from "@/lib/validations/contact";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { FormField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";

export const ContactFormUI: React.FC = () => {
  const [formData, setFormData] = useState<Partial<ContactEnquiryFormData>>({
    name: "",
    phone: "",
    email: "",
    subject: "General Enquiry",
    message: "",
    honeypot_field: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const mountTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    mountTimeRef.current = Date.now();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setServerError(null);

    const submissionDuration = Date.now() - mountTimeRef.current;

    // Client-side validation check
    const clientValidation = contactEnquirySchema.safeParse({
      ...formData,
      submission_duration_ms: submissionDuration,
    });

    if (!clientValidation.success) {
      const fieldErrors: Record<string, string> = {};
      clientValidation.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0].toString()] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          submission_duration_ms: submissionDuration,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        if (result.fieldErrors) {
          setErrors(result.fieldErrors);
        }
        setServerError(
          result.error || "Unable to send message. Please try again or visit our school office."
        );
        setIsSubmitting(false);
        return;
      }

      setIsSubmitted(true);
    } catch {
      setServerError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="p-8 rounded-3xl bg-emerald-50/70 border border-emerald-200 text-center shadow-card">
        <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4 shadow-subtle">
          <CheckCircle2 className="w-7 h-7" />
        </div>

        <h3 className="font-serif font-semibold text-2xl text-academic-green mb-2">
          Message Sent
        </h3>

        <p className="text-sm text-charcoal-muted leading-relaxed mb-6">
          Thank you, <strong className="text-charcoal">{formData.name}</strong>. Your message has been received. The school office will respond during regular operating hours (Mon–Sat, 9 AM–1 PM).
        </p>

        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: "",
              phone: "",
              email: "",
              subject: "General Enquiry",
              message: "",
              honeypot_field: "",
            });
            mountTimeRef.current = Date.now();
          }}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="p-6 sm:p-8 rounded-3xl bg-canvas-surface border border-academic-green/15 shadow-card space-y-5"
    >
      <div className="border-b border-academic-green/8 pb-3 mb-1">
        <h3 className="font-serif font-semibold text-xl text-academic-green">
          Send a Message to the School Office
        </h3>
        <p className="text-xs text-charcoal-muted mt-1">
          Have a question about admissions, timings, or school life? Leave a message below.
        </p>
      </div>

      {serverError && (
        <div className="p-4 rounded-2xl bg-red-50 border border-red-200 flex items-start gap-3 text-sm text-red-800" role="alert">
          <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-medium">{serverError}</p>
          </div>
        </div>
      )}

      {/* Hidden honeypot field for bot detection */}
      <div style={{ display: "none" }} aria-hidden="true">
        <label htmlFor="hp_field_cnt">Do not fill this field</label>
        <input
          id="hp_field_cnt"
          type="text"
          name="honeypot_field"
          value={formData.honeypot_field || ""}
          onChange={(e) => setFormData({ ...formData, honeypot_field: e.target.value })}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <FormField label="Your Full Name" htmlFor="contact_name" required error={errors.name}>
        <Input
          id="contact_name"
          placeholder="e.g. Sunita Devi"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          error={errors.name}
          disabled={isSubmitting}
        />
      </FormField>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField label="Mobile Phone Number" htmlFor="contact_phone" error={errors.phone} helperText="Required if email not provided">
          <Input
            id="contact_phone"
            type="tel"
            placeholder="e.g. 9876543210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            error={errors.phone}
            disabled={isSubmitting}
          />
        </FormField>

        <FormField label="Email Address" htmlFor="contact_email" error={errors.email} helperText="Required if phone not provided">
          <Input
            id="contact_email"
            type="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            error={errors.email}
            disabled={isSubmitting}
          />
        </FormField>
      </div>

      <FormField label="Subject" htmlFor="contact_subject">
        <Input
          id="contact_subject"
          placeholder="e.g. Enquiry regarding Class 1 Admission"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          disabled={isSubmitting}
        />
      </FormField>

      <FormField label="Your Message" htmlFor="contact_message" required error={errors.message}>
        <Textarea
          id="contact_message"
          rows={4}
          placeholder="Write your query or message here..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          error={errors.message}
          disabled={isSubmitting}
        />
      </FormField>

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full justify-center shadow-card"
        >
          {isSubmitting ? "Sending Message..." : "Send Message"}
        </Button>
      </div>

      <div className="flex items-center gap-2 text-xs text-charcoal-subtle pt-1 justify-center">
        <AlertCircle className="w-3.5 h-3.5 text-academic-green shrink-0" />
        <span>We respect your privacy. Inquiries are handled directly by the school office.</span>
      </div>
    </form>
  );
};
