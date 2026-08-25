"use client";

import React, { useState, useEffect, useRef } from "react";
import { CheckCircle2, AlertCircle, AlertTriangle } from "lucide-react";
import { SCHOOL_CONFIG } from "@/config/school-info";
import { admissionEnquirySchema, AdmissionEnquiryFormData } from "@/lib/validations/admission";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { FormField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";

export const AdmissionFormUI: React.FC = () => {
  const [formData, setFormData] = useState<Partial<AdmissionEnquiryFormData>>({
    parent_name: "",
    child_name: "",
    child_age_or_class: "",
    phone: "",
    email: "",
    preferred_contact_method: "phone",
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

  const gradeOptions = [
    { value: "Nursery", label: "Nursery" },
    { value: "LKG", label: "LKG (Lower Kindergarten)" },
    { value: "UKG", label: "UKG (Upper Kindergarten)" },
    { value: "Class 1", label: "Class 1" },
    { value: "Class 2", label: "Class 2" },
    { value: "Class 3", label: "Class 3" },
    { value: "Class 4", label: "Class 4" },
    { value: "Class 5", label: "Class 5" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setServerError(null);

    const submissionDuration = Date.now() - mountTimeRef.current;

    // Client-side UX validation check
    const clientValidation = admissionEnquirySchema.safeParse({
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
      const response = await fetch("/api/admissions", {
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
          result.error || "Unable to submit enquiry. Please try again or contact the school office."
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
      <div className="p-8 sm:p-12 rounded-3xl bg-emerald-50/70 border border-emerald-200 text-center max-w-xl mx-auto shadow-card">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-5 shadow-subtle">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <h3 className="font-serif font-semibold text-2xl sm:text-3xl text-academic-green mb-3">
          Admission Enquiry Received
        </h3>

        <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed mb-6">
          Thank you, <strong className="text-charcoal">{formData.parent_name}</strong>. We have received your preliminary enquiry for <strong className="text-charcoal">{formData.child_name}</strong>. Our school office will connect with you via your preferred method ({formData.preferred_contact_method}) during operating hours (Mon–Sat, 9 AM–1 PM).
        </p>

        <div className="p-4 rounded-2xl bg-white border border-emerald-200/80 text-xs text-charcoal-muted text-left mb-6 space-y-1">
          <p><strong>Campus Location:</strong> {SCHOOL_CONFIG.location.fullAddress}</p>
          <p><strong>Office Hours:</strong> {SCHOOL_CONFIG.schedule.summary}</p>
        </div>

        <Button
          variant="outline"
          size="md"
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              parent_name: "",
              child_name: "",
              child_age_or_class: "",
              phone: "",
              email: "",
              preferred_contact_method: "phone",
              message: "",
              honeypot_field: "",
            });
            mountTimeRef.current = Date.now();
          }}
        >
          Submit Another Enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="p-6 sm:p-10 rounded-3xl bg-canvas-surface border border-academic-green/15 shadow-card max-w-2xl mx-auto space-y-6"
    >
      <div className="border-b border-academic-green/8 pb-4 mb-2">
        <h3 className="font-serif font-semibold text-xl sm:text-2xl text-academic-green">
          Admission Enquiry Form
        </h3>
        <p className="text-xs sm:text-sm text-charcoal-muted mt-1">
          Please provide the basic details below to begin your admission enquiry.
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
        <label htmlFor="hp_field_adm">Do not fill this field</label>
        <input
          id="hp_field_adm"
          type="text"
          name="honeypot_field"
          value={formData.honeypot_field || ""}
          onChange={(e) => setFormData({ ...formData, honeypot_field: e.target.value })}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Parent / Guardian Name" htmlFor="parent_name" required error={errors.parent_name}>
          <Input
            id="parent_name"
            name="parent_name"
            placeholder="e.g. Ramesh Kumar"
            value={formData.parent_name}
            onChange={(e) => setFormData({ ...formData, parent_name: e.target.value })}
            error={errors.parent_name}
            disabled={isSubmitting}
          />
        </FormField>

        <FormField label="Child's Full Name" htmlFor="child_name" required error={errors.child_name}>
          <Input
            id="child_name"
            name="child_name"
            placeholder="e.g. Aarav Kumar"
            value={formData.child_name}
            onChange={(e) => setFormData({ ...formData, child_name: e.target.value })}
            error={errors.child_name}
            disabled={isSubmitting}
          />
        </FormField>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Class / Grade Applying For" htmlFor="child_age_or_class" required error={errors.child_age_or_class}>
          <Select
            id="child_age_or_class"
            name="child_age_or_class"
            placeholder="Select Class Grade"
            options={gradeOptions}
            value={formData.child_age_or_class}
            onChange={(e) => setFormData({ ...formData, child_age_or_class: e.target.value })}
            error={errors.child_age_or_class}
            disabled={isSubmitting}
          />
        </FormField>

        <FormField label="Mobile Phone Number" htmlFor="phone" required error={errors.phone} helperText="10-digit Indian mobile number">
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="e.g. 9876543210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            error={errors.phone}
            disabled={isSubmitting}
          />
        </FormField>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Email Address (Optional)" htmlFor="email" error={errors.email}>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="parent@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            error={errors.email}
            disabled={isSubmitting}
          />
        </FormField>

        <FormField label="Preferred Contact Method" htmlFor="preferred_contact_method">
          <Select
            id="preferred_contact_method"
            name="preferred_contact_method"
            options={[
              { value: "phone", label: "Phone Call" },
              { value: "whatsapp", label: "WhatsApp Message" },
              { value: "email", label: "Email" },
            ]}
            value={formData.preferred_contact_method}
            onChange={(e) =>
              setFormData({
                ...formData,
                preferred_contact_method: e.target.value as "phone" | "whatsapp" | "email",
              })
            }
            disabled={isSubmitting}
          />
        </FormField>
      </div>

      <FormField label="Any Questions or Special Note (Optional)" htmlFor="message">
        <Textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Feel free to share any specific queries regarding campus visits, class timings, or curriculum..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
          {isSubmitting ? "Submitting Enquiry..." : "Submit Admission Enquiry"}
        </Button>
      </div>

      <div className="flex items-center gap-2 text-xs text-charcoal-subtle pt-1 justify-center">
        <AlertCircle className="w-3.5 h-3.5 text-academic-green shrink-0" />
        <span>Your contact details are kept private and used solely for admission guidance.</span>
      </div>
    </form>
  );
};
