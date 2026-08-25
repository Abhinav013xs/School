-- ============================================================================
-- SPRING DALES ACADEMY - DATABASE MIGRATION
-- File: 20260825000001_create_enquiries_tables.sql
-- Description: Creates admission_enquiries and contact_enquiries tables
--              with strict constraints, timestamps, indexes, RLS, and security policies.
-- ============================================================================

-- 1. Helper function for automated updated_at timestamp triggers
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================================================
-- 2. TABLE: admission_enquiries
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.admission_enquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_name TEXT NOT NULL,
  child_name TEXT NOT NULL,
  child_age_or_class TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  preferred_contact_method TEXT DEFAULT 'phone' CHECK (preferred_contact_method IN ('phone', 'whatsapp', 'email')),
  message TEXT,
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'follow_up', 'completed', 'closed')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Comments on admission_enquiries
COMMENT ON TABLE public.admission_enquiries IS 'Stores admission and enrolment enquiries from parents/guardians.';
COMMENT ON COLUMN public.admission_enquiries.status IS 'Enquiry status: new, contacted, follow_up, completed, closed';

-- Indexes on admission_enquiries
CREATE INDEX IF NOT EXISTS idx_admission_enquiries_status ON public.admission_enquiries(status);
CREATE INDEX IF NOT EXISTS idx_admission_enquiries_created_at ON public.admission_enquiries(created_at DESC);

-- Updated_at Trigger for admission_enquiries
DROP TRIGGER IF EXISTS set_admission_enquiries_updated_at ON public.admission_enquiries;
CREATE TRIGGER set_admission_enquiries_updated_at
BEFORE UPDATE ON public.admission_enquiries
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();

-- Enable Row Level Security (RLS)
ALTER TABLE public.admission_enquiries ENABLE ROW LEVEL SECURITY;

-- RLS Policies for admission_enquiries
-- Policy: Service role has full unrestricted access for server-side processing
CREATE POLICY "Service role full access on admission_enquiries"
  ON public.admission_enquiries
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- ============================================================================
-- 3. TABLE: contact_enquiries
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.contact_enquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  phone TEXT,
  email TEXT,
  subject TEXT DEFAULT 'General Enquiry',
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'completed', 'closed')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Comments on contact_enquiries
COMMENT ON TABLE public.contact_enquiries IS 'Stores general queries submitted via the contact form.';
COMMENT ON COLUMN public.contact_enquiries.status IS 'Contact status: new, contacted, completed, closed';

-- Indexes on contact_enquiries
CREATE INDEX IF NOT EXISTS idx_contact_enquiries_status ON public.contact_enquiries(status);
CREATE INDEX IF NOT EXISTS idx_contact_enquiries_created_at ON public.contact_enquiries(created_at DESC);

-- Updated_at Trigger for contact_enquiries
DROP TRIGGER IF EXISTS set_contact_enquiries_updated_at ON public.contact_enquiries;
CREATE TRIGGER set_contact_enquiries_updated_at
BEFORE UPDATE ON public.contact_enquiries
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();

-- Enable Row Level Security (RLS)
ALTER TABLE public.contact_enquiries ENABLE ROW LEVEL SECURITY;

-- RLS Policies for contact_enquiries
-- Policy: Service role has full unrestricted access for server-side processing
CREATE POLICY "Service role full access on contact_enquiries"
  ON public.contact_enquiries
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);
