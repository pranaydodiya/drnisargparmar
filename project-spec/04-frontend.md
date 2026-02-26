# Frontend Specification — Next.js, Tailwind, Framer Motion

Pure Next.js (App Router), Tailwind CSS, Shadcn/UI, Framer Motion. Highly SEO-optimized, fast, responsive, smooth scrolling. One app; `npm run dev` only.

---

## Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3, PostCSS
- **Components:** Shadcn/UI (Radix primitives), Lucide icons
- **Animation:** Framer Motion
- **Utilities:** clsx, tailwind-merge → `cn()` in `@/lib/utils`
- **Path alias:** `@/` → `src/`

---

## Design system

### Colors (CSS variables in globals.css)
- Semantic: `--background`, `--foreground`, `--primary`, `--primary-foreground`, `--secondary`, `--secondary-foreground`, `--muted`, `--muted-foreground`, `--accent`, `--destructive`, `--card`, `--border`, `--input`, `--ring`
- Brand: `--navy`, `--teal` (align with 02-brand.md)
- Light and `.dark` theme; optional `.high-contrast` and color-blind modes (see Accessibility)
- Use `hsl(var(--name))` in Tailwind theme extend

### Typography
- Font: Inter (next/font/google). Weights 300–800 as needed.
- Apply in root layout; no FOUT (font-display optional).
- Scale: hero 4xl–6xl, section titles 3xl–4xl, body sm–base, small xs.

### Spacing & layout
- Container: centered, padding, max-widths (sm/md/lg/xl/2xl)
- Sections: `py-16 md:py-24`; hero with top padding for fixed header (~28–36)
- Grids: responsive 1/2/3/4 columns; gap 4–8

### Component patterns
- **Cards:** `.medical-card` or Card component: rounded, border, padding, hover shadow
- **Section heading:** Reusable component: title (h2) + optional subtitle; centered or left
- **Buttons:** Primary (secondary color), outline, destructive (emergency); sizes sm/default/lg/icon
- **Forms:** Label above input; `space-y-2`; required indicator; semantic focus ring

---

## SEO (high priority)

- **Metadata:** Every page has `metadata` export or generateMetadata: title, description, openGraph. Base from 02-brand + 01-content.
- **One H1 per page;** logical heading hierarchy (H1 → H2 → H3).
- **Structured data:** JSON-LD where applicable: Physician (home/about), FAQPage (FAQ), Organization. Output in layout or page.
- **Canonical:** Use correct canonical URL (production domain).
- **Robots:** `public/robots.txt`; sitemap via Next.js or static (see 05-backend if dynamic sitemap).
- **Performance:** Next/Image for images (sizes, priority for LCP); lazy below fold. Minimize blocking JS.

---

## Smooth scrolling & motion

- **Scroll behavior:** `scroll-behavior: smooth` in global CSS; respect `prefers-reduced-motion` (disable or shorten animations).
- **Framer Motion:** Use for section reveal (e.g. fade-in, slight Y), list stagger, button/card hover. No heavy layout animations; keep < 300ms where possible.
- **Scroll-triggered:** Optional: animate sections on scroll (e.g. use InView + animate). Keep subtle.
- **Route change:** Scroll to top on navigation (Next.js default or small client component).
- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` — set animation duration to 0.01ms or skip Framer animations.

---

## Responsive (any device)

- Mobile-first Tailwind; breakpoints sm/md/lg/xl/2xl.
- **Header:** Desktop horizontal nav + CTAs; mobile hamburger → full-screen or drawer menu. Touch targets ≥ 44px.
- **Footer:** Stack on mobile; 2–4 columns on desktop.
- **Images:** Responsive (Next/Image + sizes); avoid overflow (object-cover/contain as needed).
- **Tables (admin):** Horizontal scroll or card layout on small screens.
- **Forms:** Single column on mobile; two columns where it fits (e.g. name + phone).

---

## Core pages (routes)

| Route | Purpose |
|-------|--------|
| `/` | Home: hero, trust, about, why choose, specialties, testimonials, appointment CTA, contact block, FAQ, disclaimer |
| `/about` | Full about: bio, education, achievements, values, contact block |
| `/specialties` | Grid of 6 specialties with short copy; link to appointments |
| `/testimonials` | Written testimonials + video testimonials (YouTube/Instagram thumbnails, link out) |
| `/appointments` | Booking form + emergency banner + clinic hours sidebar |
| `/contact` | Contact & locations (from DB), emergency strip, quick contact cards |
| `/blog` | List: title, excerpt, image, date → link to `/blog/[slug]` |
| `/blog/[slug]` | Single post: title, date, featured image, body (rich HTML) |
| `/admin/*` | Protected admin: dashboard, posts CRUD, locations, testimonials, settings (see 06-functionality) |
| 404 | not-found.tsx: simple message + link home |

---

## Global layout

- **Root layout:** HTML lang, body class (bg, text, font), providers (theme, auth, query if used), Toaster, TooltipProvider.
- **Header:** Fixed; top bar (hours, phone) + main nav + CTAs; mobile menu. Same on all public pages.
- **Footer:** Same on all public pages; 4-column content per 01-content.
- **Floating:** WhatsApp button (fixed bottom-right); optional accessibility widget (font size, theme).

---

## Performance & scale (many users)

- **Static where possible:** Use static generation for home, about, specialties; ISR or revalidate for blog list/post.
- **Dynamic:** Contact/locations, testimonials, settings — fetch in server components or with short cache.
- **Images:** Next/Image; consider CDN/Cloudinary for blog uploads (see 05-backend, 06-functionality).
- **Bundle:** Code-split; lazy load admin routes or heavy client components.
- **No extra runtimes:** Single Next.js app; no separate Node server for frontend.

---

## Accessibility

- Focus visible on all interactive elements (ring-2 ring-ring).
- Labels for all form controls; aria-label for icon-only buttons.
- Landmarks: header, main, footer, nav; one h1 per page.
- Optional: Accessibility menu (font size 80–150%, theme: normal/dark/high-contrast; persist in localStorage).
- Color not sole indicator (e.g. emergency = icon + text + color).

---

## Implementation notes

- Use Server Components by default; Client Components only where needed (forms, auth state, Framer Motion, interactivity).
- Fetch data in server components or via server actions; keep client minimal for first load.
- Align component names and file locations with 03-structure.md. Do not add extra MD files beyond project-spec.

Reference: 01-content.md (copy), 02-brand.md (colors, font), 03-structure.md (folders), 06-functionality.md (admin UI).
