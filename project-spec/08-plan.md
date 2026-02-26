# Implementation Plan — Step by Step

We go **only as per this plan**. Do not skip steps or add backend/DB before the plan says so.

---

## Phase 1 — Frontend only (no backend, no DB)

**Goal:** Full Next.js frontend with static/mock data. One command: `npm run dev`. No MongoDB, no BetterAuth, no real API. Deployable as static/export or with mock API if needed.

### Step 1.1 — Project bootstrap
- Create Next.js app (App Router), TypeScript, Tailwind, ESLint.
- Configure path alias `@/` → `src/`.
- Add dependencies: Framer Motion, clsx, tailwind-merge, Lucide React. Add Shadcn/UI (init with components.json; install button, card, input, label, etc. as needed).
- Ensure `npm run dev` runs and shows default page.
- Add `.env.example` with placeholder keys (no real secrets). Add `.gitignore` for `.env.local`.

### Step 1.2 — Design system and layout
- Implement globals.css: CSS variables (light/dark) per 02-brand and 04-frontend. Tailwind theme extend (colors, font Inter, radius).
- Root layout: Inter font (next/font), body classes, providers (e.g. theme if needed), Toaster/TooltipProvider.
- Add Header and Footer components per 04-frontend and 01-content. Fixed header; footer 4-column content. No dynamic data yet (hardcode copy from 01-content).

### Step 1.3 — Home page
- Build home sections in order: Hero, Trust indicators, About, Why Choose, Specialties, Testimonials (static/mock), Appointment CTA block, Contact & locations (mock list), FAQ, Medical disclaimer.
- Use SectionHeading, cards, buttons. Add Framer Motion for section reveal and smooth scroll behavior. Responsive per 04-frontend.
- Smooth scroll for in-page links; scroll to top on route change.

### Step 1.4 — Public pages
- About: full content from 01-content (bio, education, values, contact block). Static.
- Specialties: grid of 6 specialties; copy from 01-content.
- Testimonials: written testimonials (mock array) + video testimonials (mock: YouTube + Instagram with placeholder thumbnails). Click opens external link.
- Appointments: form UI only; submit shows success message (no API call).
- Contact: locations from mock array; “View on Google Maps” links (mock URL); emergency strip; quick contact cards.
- Blog list: mock array of posts; link to `/blog/[slug]`. Blog post page: mock single post (title, date, image, body).

### Step 1.5 — SEO and polish
- Metadata (title, description) per page from 01-content and 02-brand. One H1 per page.
- Optional: JSON-LD (Physician, FAQPage) on home. robots.txt in public.
- Accessibility: focus visible, labels, landmarks. Optional: accessibility menu (font size, theme) per 04-frontend.
- WhatsApp floating button (link with prefill text). Responsive check on multiple breakpoints.

### Step 1.6 — Admin UI (frontend only)
- Routes: `/admin/login` (static form; no real auth), `/admin` (dashboard placeholder), `/admin/posts`, `/admin/posts/new`, `/admin/posts/[id]`, `/admin/locations`, `/admin/testimonials`, `/admin/settings`.
- Admin layout: sidebar + main. List pages show mock data (posts, locations, testimonials). Forms: create/edit for post (with “featured image” URL input, no upload yet), location (with map_link field), testimonial (written + video URL fields, optional thumbnail URL). No real API calls; form submit can show toast “Saved (mock)”.
- Do not connect to MongoDB or BetterAuth in this phase.

**Exit condition for Phase 1:** Running `npm run dev` shows full site and admin with mock data; no backend or DB required.

---

## Phase 2 — Backend and DB (after Phase 1 is done)

**Goal:** Add MongoDB, BetterAuth, and real API routes. Wire admin and public pages to real data.

### Step 2.1 — Database and auth
- MongoDB: client singleton in `src/lib/db/mongodb.ts`. Collections: users/sessions per BetterAuth; posts, locations, testimonials, settings (and optionally appointments) per 05-backend.
- BetterAuth: install and configure in `src/lib/auth.ts`; mount at `app/api/auth/[...all]/route.ts`. Create admin user (script or seed) with role.
- Protect admin: middleware or layout that checks session and admin role; redirect to `/admin/login` if not authenticated.

### Step 2.2 — API routes
- Implement GET/POST /api/blog, GET/PATCH/DELETE /api/blog/[id]. Implement GET/POST/PATCH/DELETE for locations and testimonials. Implement GET/PATCH for settings. Implement POST /api/upload (e.g. Cloudinary) and return URL.
- Use MongoDB in each handler; validate input (e.g. Zod). Admin-only mutations: verify session + role.

### Step 2.3 — Wire frontend to API
- Replace mock data: fetch posts, locations, testimonials, settings from API in server components or client hooks.
- Admin forms: on submit, call POST/PATCH API; then refetch or redirect. Featured image: upload via POST /api/upload, set URL in post form. Locations: save map_link. Testimonials: save video_url, instagram_reel_url, thumbnail_url (and derive YouTube thumbnail if not provided).
- Blog list and post page: load from API. Home and contact: load locations and settings from API.

### Step 2.4 — Thumbnails and upload
- YouTube: derive thumbnail from video_url (img.youtube.com/vi/ID/hqdefault.jpg); use in public testimonial card.
- Instagram: use stored thumbnail_url if present; else placeholder. Admin can upload thumbnail via same upload API.
- Blog: featured image upload in admin post form → /api/upload → save URL to post.

**Exit condition for Phase 2:** Full CRUD from admin; public site reads from MongoDB; auth works; one command `npm run dev` still runs everything.

---

## Phase 3 — Deploy and optimize (optional, after Phase 2)

- Prepare for Hostinger Coolify: env vars documented; build and start commands. Optional: sitemap, rate limiting, image optimization.
- No step in this plan should require “run backend separately” or “run DB script” for normal `npm run dev`; DB is external (e.g. Atlas).

---

## Order reminder

1. **First:** Complete Phase 1 (frontend only). Do not implement Phase 2 until Phase 1 is done and approved.
2. **Then:** Phase 2 (backend, DB, auth, wire-up). Follow steps 2.1 → 2.4.
3. **Reference:** For each step, use 03-structure.md, 04-frontend.md, 05-backend.md, 06-functionality.md, and 07-ai-rules-and-prompts.md. Do not add features or files outside the spec and this plan.
