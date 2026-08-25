export interface ContactEnquiry {
  id?: string;
  name: string;
  phone?: string;
  email?: string;
  subject?: string;
  message: string;
  status?: "new" | "contacted" | "completed" | "closed";
  created_at?: string;
  updated_at?: string;
}
