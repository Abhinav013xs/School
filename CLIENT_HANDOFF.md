# Spring Dales Academy — Client Handoff & Technical Operation Manual

**Institution:** Spring Dales Academy  
**Verified Address:** Tekar, Patawa, Uttar Pradesh 230401, India  
**Target Grade Levels:** Early Childhood Kindergarten (Nursery, LKG, UKG) to Primary (Class 1 to 5)  
**Operating Hours:** Monday – Saturday: 9:00 AM – 1:00 PM (Sunday: Closed)  
**Deliverable Version:** 1.0.0 (Production Ready)

---

## 1. Executive Summary & Technology Stack

The Spring Dales Academy website is a modern, high-performance, and secure web application built for parents, prospective families, and institutional operations.

| Layer | Technology | Key Operational Advantage |
| :--- | :--- | :--- |
| **Framework** | **Next.js 16.3 (App Router)** | Instant static page generation, server-rendered API endpoints, zero hydration layout shift |
| **Language** | **TypeScript (Strict Mode)** | 100% type safety across components, form schemas, and database types |
| **Styling & UI** | **Tailwind CSS** | Custom institutional color tokens (Academic Green `#143D2B`, Warm Ivory `#FDFBF7`, Saffron Gold `#D97706`), mobile-first design |
| **Visual 3D** | **Three.js (WebGL)** | Procedural low-poly interactive book scene with zero layout shift fallback and reduced-motion support |
| **Database** | **Supabase PostgreSQL** | Cloud PostgreSQL with Row Level Security (RLS) and automated timestamp triggers |
| **Validation** | **Zod** | Dual-layer client and server-side schema validation for form submissions |
| **Security** | **Next.js Security Headers** | Frame protection (`DENY`), MIME protection (`nosniff`), HSTS, honeypot spam traps, and rate limiting |

---

## 2. Public Pages & Site Architecture

```
/ (Homepage)               -> 12-stage storytelling narrative + Three.js 3D Hero Scene
/about                     -> School identity, 5 moral character values, visual story
/academics                 -> Kindergarten (Nursery–UKG) & Primary (Class 1–5) stages
/activities                -> Co-curricular life (Arts, Physical Play, Story Circles)
/campus                    -> Child safety standards, ventilated rooms, clean drinking water
/gallery                   -> Filterable photo browser + fullscreen keyboard lightbox
/admissions                -> 3-step transparent pathway, schedule, interactive enquiry form
/contact                   -> Verified address, Mon–Sat 9–1 schedule, direct message form
/robots.txt                -> Automated search engine crawl rules
/sitemap.xml               -> Dynamic XML sitemap for Google/Bing indexing
/_not-found                -> Branded custom 404 error page
```

---

## 3. Database Architecture & Migrations

The database is managed via Supabase PostgreSQL migrations located in:  
📁 `supabase/migrations/20260825000001_create_enquiries_tables.sql`

### A. Table: `admission_enquiries`
* `id` (UUID, Primary Key)
* `parent_name` (TEXT, Not Null)
* `child_name` (TEXT, Not Null)
* `child_age_or_class` (TEXT, Not Null)
* `phone` (TEXT, Not Null - 10-digit Indian Mobile)
* `email` (TEXT, Nullable)
* `preferred_contact_method` (TEXT: `phone`, `whatsapp`, `email`)
* `message` (TEXT, Nullable)
* `status` (TEXT: `new`, `contacted`, `follow_up`, `completed`, `closed`)
* `created_at` / `updated_at` (TIMESTAMPTZ, Auto-managed)

### B. Table: `contact_enquiries`
* `id` (UUID, Primary Key)
* `name` (TEXT, Not Null)
* `phone` (TEXT, Nullable)
* `email` (TEXT, Nullable)
* `subject` (TEXT: Default `'General Enquiry'`)
* `message` (TEXT, Not Null)
* `status` (TEXT: `new`, `contacted`, `completed`, `closed`)
* `created_at` / `updated_at` (TIMESTAMPTZ, Auto-managed)

---

## 4. Security & Access Policy (RLS)

1. **Mandatory Row Level Security:** Anonymous visitors cannot run `SELECT`, `UPDATE`, or `DELETE` on enquiry records.
2. **Server-Only API Access:** Submissions pass through Next.js server handlers (`/api/admissions`, `/api/contact`), which use the server-side `SUPABASE_SERVICE_ROLE_KEY` to insert sanitized records.
3. **Zero Leaked Keys:** The service role key is **never** bundled into the client-side JavaScript.
4. **Rate Limiting & Spam Protection:** Sliding window limiter (5 submissions per 10 minutes per IP) + hidden honeypot fields neutralize bot spam.

---

## 5. Deployment & Environment Setup

### Environment Variables (`.env.local` / Vercel Environment Variables)

```env
# Application Base URL
NEXT_PUBLIC_SITE_URL=https://springdalesacademy.edu.in

# Supabase Public Configuration (Safe for Client)
NEXT_PUBLIC_SUPABASE_URL=https://[YOUR_PROJECT_ID].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[YOUR_ANON_KEY]

# Supabase Private Configuration (Server-Side ONLY - NEVER prefix with NEXT_PUBLIC_)
SUPABASE_SERVICE_ROLE_KEY=[YOUR_SERVICE_ROLE_KEY]
```

### Deployment Steps (e.g. Vercel)
1. Push repository to GitHub/GitLab.
2. Link the repository in the Vercel Dashboard.
3. Configure the 3 environment variables above.
4. Trigger the build: Next.js automatically generates the optimized production build (`next build`).
5. Connect your custom domain (e.g., `springdalesacademy.edu.in`) and configure DNS records provided by Vercel.

---

## 6. How to Update Content & Replace Images

1. **Updating School Info & Timings:**  
   Edit `src/config/school-info.ts`. Changes will automatically propagate across the Navbar, Footer, Hero, Admissions, Contact, and JSON-LD schema.
2. **Updating FAQs:**  
   Edit `src/config/faqs.ts`.
3. **Updating Gallery Photos:**  
   Edit `src/config/gallery.ts` and replace image URLs with official school photography.
4. **Replacing Stock Photography:**  
   All temporary Unsplash photos are labeled `"Representational"`. Simply update the image links in the corresponding section files or in `src/config/gallery.ts`.

---

## 7. Rollback & Backup Strategy

1. **Instant Rollback:** In the Vercel/hosting dashboard, navigate to **Deployments** and click **Promote to Production** on any previous successful build for instantaneous zero-downtime rollback.
2. **Database Backups:** Supabase automatically performs daily database backups. In the Supabase Dashboard, navigate to **Database** -> **Backups** to restore any point-in-time snapshot.
