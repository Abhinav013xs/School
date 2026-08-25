export interface AdmissionEnquiry {
  id?: string;
  parent_name: string;
  child_name: string;
  child_age_or_class: string;
  phone: string;
  email?: string;
  preferred_contact_method?: "phone" | "whatsapp" | "email";
  message?: string;
  status?: "new" | "contacted" | "follow_up" | "completed" | "closed";
  created_at?: string;
  updated_at?: string;
}
