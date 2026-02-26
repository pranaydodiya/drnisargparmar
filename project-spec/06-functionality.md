# Functionality Specification — Admin CRUD & Features

Admin can perform CRUD on: blog, locations (with Google Maps redirect), patient testimonials (written + video: YouTube and Instagram Reel with thumbnail). Blog featured image via upload. All behind BetterAuth admin role.

---

## Admin access

- **Login:** `/admin/login` — email + password (or configured BetterAuth method). Redirect to `/admin` on success.
- **Protection:** All `/admin/*` routes (except login) require valid session and admin role. Otherwise redirect to `/admin/login`.
- **Layout:** Shared admin layout: sidebar (Dashboard, Posts, Locations, Testimonials, Settings) + main content area.

---

## 1. Blog (CRUD)

- **List:** `/admin/posts` — table or cards: title, date, status (draft/published), actions (Edit, Delete).
- **Create:** `/admin/posts/new` — form: Title, Slug (optional; auto from title), Excerpt, Body (rich text editor), Featured image (upload), Category, Tags, Publish date. Submit → POST /api/blog.
- **Edit:** `/admin/posts/[id]` — same form pre-filled; PATCH on save, DELETE button to remove.
- **Featured image:** Upload control → POST /api/upload → receive URL → set in form as featured_image_url. Store URL in post document (MongoDB). Use same image storage as in 05-backend (e.g. Cloudinary).

---

## 2. Locations (CRUD + Google Maps redirect)

- **List:** `/admin/locations` — name, address, phone, order, active; actions Edit, Delete, “View map”.
- **Create/Edit form:** Name, Address, City, State, Phone, Timing (text), Display order (number), **Redirect link to Google Maps** (URL). Save as `map_link` in DB. Optional: is_active.
- **Public site:** Each location card shows “View on Google Maps” (or similar) linking to this `map_link` (opens in new tab). No iframe required; redirect link is enough for “industry” and keeps responsibility on Google.

---

## 3. Patient testimonials

### Written testimonials
- **Fields:** Patient name, Location (text), Rating (1–5), Quote (text), Date. Optional: approved, display_order.
- **Admin:** List all; add/edit/delete. Public site shows only approved (or all if no approval flag).

### Video testimonials (YouTube + Instagram Reel)
- **YouTube:** Admin enters **YouTube URL**. Backend or frontend derives thumbnail: `https://img.youtube.com/vi/<VIDEO_ID>/hqdefault.jpg`. Store in testimonial: video_url, thumbnail_url (optional; can be derived on read if not stored). Public page shows thumbnail; click opens YouTube link.
- **Instagram Reel:** Admin enters **Instagram Reel URL**. Thumbnail: no official API. Options: (1) Admin uploads a thumbnail image (reuse upload API) and we store thumbnail_url. (2) Placeholder image for “Instagram Reel” until thumbnail uploaded. Store: instagram_reel_url, thumbnail_url (optional). Public page: show thumbnail or placeholder; click opens Reel link.
- **Unified model:** One testimonial document can have: written fields only, or video_url only, or instagram_reel_url only, or both written + one video type. Optional shared fields: patient_name, condition (e.g. “Spine surgery”), display_order.
- **Admin UI:** List testimonials (type: written / YouTube / Instagram). Add/Edit: choose type; for video, paste URL; for Instagram, optional thumbnail upload. Save → POST/PATCH /api/testimonials.

---

## 4. Site settings (optional CRUD)

- **Page:** `/admin/settings`. Form: Site title, Tagline, Contact phone, Emergency phone, “Also available at” (list of hospital names). PATCH /api/settings. Used in header, footer, contact page.

---

## 5. Rich text & upload

- **Blog body:** Rich text editor (e.g. Tiptap, Lexical, or simple textarea for MVP). Store HTML or Markdown in MongoDB; render safely on frontend (sanitize if HTML).
- **Featured image (blog):** File input → upload to Cloudinary (or configured provider) via POST /api/upload → display preview and save URL to post.
- **Testimonial thumbnail (Instagram):** Same upload API; save URL to testimonial.thumbnail_url.

---

## 6. Public-facing behavior

- **Blog:** Homepage or `/blog` lists posts (title, excerpt, featured image, date) → link to `/blog/[slug]`. Single post shows featured image, title, date, body.
- **Locations:** Home and `/contact` show location cards; each has “View on Google Maps” (or similar) → open `map_link`.
- **Testimonials:** `/testimonials` (and optional home section): written cards + video grid. Video cards: thumbnail (from YouTube or stored/placeholder for Instagram), title/patient name; click → open video_url or instagram_reel_url in new tab.

---

## Implementation order

Follow 08-plan.md. Frontend-only phase: use mock data or static content; no real API or DB. Backend phase: implement API and DB as in 05-backend.md and wire admin forms to these endpoints. Do not add extra MD files; implement only what is in the plan and these specs.
