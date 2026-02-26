# Backend Specification — Next.js API, MongoDB, BetterAuth

All backend logic lives inside the same Next.js app. No separate Express/Fastify server. **Single process: `npm run dev`**. Deploy on Hostinger Coolify as one Node app.

---

## Stack

- **API:** Next.js App Router — Route Handlers under `app/api/`
- **Database:** MongoDB (single cluster; connection string in env)
- **Auth:** BetterAuth (session-based; adapters for MongoDB)
- **File storage (blog images):** External service (e.g. Cloudinary or S3-compatible). API route receives upload and returns URL; store URL in MongoDB.

---

## Environment variables

Document in `.env.example`; use `.env.local` locally. Example keys:

```
# MongoDB
MONGODB_URI=mongodb+srv://...   # or mongodb://localhost:27017 for dev

# BetterAuth (see BetterAuth docs for exact names)
BETTER_AUTH_SECRET=             # long random string
BETTER_AUTH_URL=                # full app URL, e.g. https://yoursite.com
# Database adapter uses MONGODB_URI or BETTER_AUTH_DATABASE_URL

# Optional: upload (e.g. Cloudinary)
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
# Or S3-compatible keys if using S3
```

No secrets in code. All config from env.

---

## MongoDB

- **Client:** Singleton in `src/lib/db/mongodb.ts` — create MongoClient once, reuse across requests (serverless-safe pattern: cache client in global or module scope).
- **Collections (logical):**
  - **users** — BetterAuth will create/use for auth (if using MongoDB adapter).
  - **sessions / accounts** — BetterAuth tables/collections.
  - **posts** — Blog: title, slug, excerpt, body (HTML string), featured_image_url, category, tags[], publish_date, created_at, updated_at, created_by (user id).
  - **locations** — name, address, city, state, phone, timing, display_order, map_link (Google Maps URL), is_active. map_link used for “View on Google Maps” redirect.
  - **testimonials** — Written: name, location, rating, text, date, is_approved?, order. Video: patient_name, video_url (YouTube), instagram_reel_url (optional), thumbnail_url (optional), condition (optional), display_order. One document can be written-only, video-only, or both (e.g. quote + video link).
  - **settings** — Site-wide: site_title, site_description, contact_phone, emergency_phone, “also_available_at” (array of hospital names), etc. Single doc or key-value by key.
  - **appointments** (optional): name, phone, email, preferred_date, preferred_time, condition, message, created_at.

- **Indexes:** slug unique for posts; display_order for locations/testimonials; publish_date for blog listing. Create in DB or via migration script.

---

## BetterAuth

- **Library:** better-auth. Install and configure in `src/lib/auth.ts`.
- **Config:** Secret, base URL, database adapter (MongoDB). Use credentials (email + password) or adapt to your needs (e.g. magic link). Session stored in DB; cookie-based.
- **Route:** Mount at `app/api/auth/[...all]/route.ts` — forward to BetterAuth handler.
- **Admin role:** Store role on user (e.g. `role: "admin"`). In API routes and admin layout, check session + role; reject if not admin.
- **Pages:** Login at `/admin/login`; redirect to `/admin` after success. Protect `/admin/*` with middleware or layout guard that checks auth.

---

## API routes (Next.js Route Handlers)

- **Base path:** `app/api/`
- **Auth:** All admin mutations require valid session + admin role (read from BetterAuth session).

### Blog
- `GET /api/blog` — List published posts (query: limit, offset or page). Return array; include featured_image_url, slug, title, excerpt, publish_date.
- `POST /api/blog` — Create post (auth). Body: title, slug (or generate), excerpt, body, featured_image_url, category, tags, publish_date. Save to MongoDB.
- `GET /api/blog/[id]` — Single post by id or slug (public or admin).
- `PATCH /api/blog/[id]` — Update post (auth).
- `DELETE /api/blog/[id]` — Delete post (auth).

### Locations
- `GET /api/locations` — List active locations (public). Sort by display_order.
- `GET /api/locations?admin=1` — List all for admin (auth).
- `POST /api/locations` — Create (auth). Body: name, address, city, state, phone, timing, display_order, map_link (Google Maps URL), is_active.
- `PATCH /api/locations/[id]` — Update (auth). Same fields; map_link is the redirect link to Google Maps.
- `DELETE /api/locations/[id]` — Soft delete or remove (auth).

### Testimonials
- `GET /api/testimonials` — List approved (written + video) for public. Video items: include thumbnail_url (or derive YouTube thumbnail from video_url if not stored).
- `GET /api/testimonials?admin=1` — List all for admin (auth).
- `POST /api/testimonials` — Create (auth). Body: for written — name, location, rating, text, date; for video — patient_name, video_url (YouTube) and/or instagram_reel_url, thumbnail_url (optional), condition. Store thumbnail_url if provided; for YouTube you can derive from video ID and store or compute on read.
- `PATCH /api/testimonials/[id]` — Update (auth).
- `DELETE /api/testimonials/[id]` — Delete (auth).

### Upload (blog featured image)
- `POST /api/upload` — Auth required. Accept multipart file (image). Upload to Cloudinary (or S3); return { url }. Frontend saves this url into post’s featured_image_url.

### Settings
- `GET /api/settings` — Public or admin; return site_title, contact_phone, emergency_phone, etc.
- `PATCH /api/settings` — Admin only. Update settings document/fields.

### Appointments (optional)
- `POST /api/appointments` — Create appointment request (body: name, phone, email, preferred_date, preferred_time, condition, message). Save to MongoDB; optionally send email later.

---

## Thumbnails for YouTube & Instagram Reel

- **YouTube:** Thumbnail URL format: `https://img.youtube.com/vi/<VIDEO_ID>/hqdefault.jpg`. Extract VIDEO_ID from video_url; store in DB or compute when returning testimonial. Prefer storing thumbnail_url in DB after first compute so admin can override.
- **Instagram Reel:** No official thumbnail API. Options: (1) Admin uploads a thumbnail image and we store thumbnail_url (use same upload API as blog). (2) Use a placeholder or third-party service if you add later. In 06-functionality, admin can set optional thumbnail_url for Instagram.

---

## Security

- Validate all inputs (shape, length). Use Zod or similar in API routes.
- Admin routes: verify session and role before any mutation.
- CORS: Next.js same-origin by default; if you add external frontend later, configure CORS.
- Rate limit: consider rate limiting on auth and public write endpoints (e.g. appointments) for production.

---

## Deployment (Coolify)

- Build: `npm run build`
- Start: `npm run start` (or Coolify’s Node start command)
- Set env in Coolify: MONGODB_URI, BETTER_AUTH_*, upload keys, BETTER_AUTH_URL = production URL
- Single container/process; Next.js serves both frontend and API on one port.

Do not attach DB or implement backend until PLAN phase that says so. This file is the reference when you reach the backend phase. See 08-plan.md.
