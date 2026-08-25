# Spring Dales Academy — Premium School Website

Official web application for **Spring Dales Academy**, a dedicated primary school (Nursery to Class 5) located in **Tekar, Patawa, Uttar Pradesh 230401, India**.

---

## 🏛️ Project Architecture & Tech Stack

* **Framework:** Next.js 16.3 (App Router)
* **Language:** TypeScript 5.7 (Strict Mode)
* **Styling:** Tailwind CSS with custom design system tokens
* **3D Visuals:** Three.js procedural WebGL book scene with zero-CLS fallback & reduced-motion detection
* **Database & Auth:** Supabase PostgreSQL with Row Level Security (RLS)
* **Validation:** Zod client & server-side schema verification
* **Security:** Next.js HTTP Security Headers, rate limiting, and honeypot spam protection

---

## 🚀 Getting Started (Local Development)

### 1. Prerequisites
* Node.js 18.18+ or Node.js 20+
* npm or pnpm

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/example/spring-dales-academy.git
cd spring-dales-academy

# Install dependencies
npm install
```

### 3. Environment Configuration
Create a `.env.local` file by copying `.env.example`:
```bash
cp .env.example .env.local
```
Fill in your Supabase credentials:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### 4. Running the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build & Testing

```bash
# Run TypeScript compilation check
npm run type-check

# Run ESLint check
npm run lint

# Build optimized production bundle
npm run build

# Start production server
npm run start
```

---

## 🗄️ Database Migrations

Apply SQL migrations directly in your Supabase project dashboard:
* 📁 `supabase/migrations/20260825000001_create_enquiries_tables.sql`

Tables created:
1. `admission_enquiries` (Enquiries from prospective parents)
2. `contact_enquiries` (General messages and school queries)

Both tables enforce strict Row Level Security (RLS) and auto-updating timestamps.

---

## 📄 Documentation Manifest

* [CLIENT_HANDOFF.md](./CLIENT_HANDOFF.md) — Comprehensive technical handover manual & operations guide.
* [CLIENT_CONTENT_REQUIRED.md](./CLIENT_CONTENT_REQUIRED.md) — Checklist of official assets to be provided by the school administration prior to launch.
