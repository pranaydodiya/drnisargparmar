# Project Structure

Industry-grade, real-world layout. Single repo; **one command to run everything: `npm run dev`** (Next.js dev server; no separate backend process). Deployment target: **Hostinger Coolify**.

---

## Repo root (high level)

```
project-root/
├── .env.local              # Local env (never commit)
├── .env.example             # Example env keys (no secrets)
├── .gitignore
├── next.config.js           # Next.js config
├── package.json             # Single package; scripts: dev, build, start, lint
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── public/                  # Static assets
│   ├── favicon.ico
│   ├── robots.txt
│   └── ...
├── src/
│   ├── app/                 # Next.js App Router
│   ├── components/
│   ├── lib/
│   ├── hooks/
│   ├── types/
│   ├── content/             # Optional static content/JSON
│   └── styles/
└── project-spec/            # These MD specs (optional; can live outside repo)
```

- **No** separate `server/` or `backend/` folder for runtime; API lives in Next.js Route Handlers / App Router.
- **No** monorepo or extra workspaces unless specified later. One `package.json`, one `npm run dev`.

---

## src/ layout (detailed)

```
src/
├── app/
│   ├── layout.tsx              # Root layout (fonts, providers, global UI)
│   ├── page.tsx                # Home
│   ├── globals.css
│   ├── not-found.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── specialties/
│   │   └── page.tsx
│   ├── testimonials/
│   │   └── page.tsx
│   ├── appointments/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── admin/
│   │   ├── layout.tsx          # Admin layout (sidebar, auth guard)
│   │   ├── page.tsx            # Dashboard
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── posts/
│   │   │   ├── page.tsx
│   │   │   ├── new/
│   │   │   │   └── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── locations/
│   │   │   └── page.tsx
│   │   ├── testimonials/
│   │   │   └── page.tsx
│   │   ├── settings/
│   │   │   └── page.tsx
│   │   └── ...
│   └── api/                    # Next.js API (Route Handlers)
│       ├── auth/
│       │   └── [...all]/
│       │       └── route.ts    # BetterAuth catch-all
│       ├── blog/
│       │   ├── route.ts        # GET list, POST create
│       │   └── [id]/
│       │       └── route.ts    # GET, PATCH, DELETE
│       ├── locations/
│       │   └── route.ts
│       ├── testimonials/
│       │   └── route.ts
│       ├── upload/             # Image upload (blog featured image)
│       │   └── route.ts
│       ├── settings/
│       │   └── route.ts
│       └── ...
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── TrustIndicators.tsx
│   │   ├── SpecialtiesSection.tsx
│   │   └── ...
│   ├── ui/                     # Shadcn + shared primitives
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── admin/
│   │   ├── AdminSidebar.tsx
│   │   ├── ProtectedAdmin.tsx
│   │   └── ...
│   └── shared/
│       ├── SectionHeading.tsx
│       ├── AccessibilityMenu.tsx
│       └── ...
│
├── lib/
│   ├── db/
│   │   ├── mongodb.ts          # Mongo client (singleton)
│   │   ├── models/            # Optional schema helpers
│   │   └── ...
│   ├── auth.ts                # BetterAuth config & export
│   ├── utils.ts               # cn(), etc.
│   └── ...
│
├── hooks/
│   ├── use-locations.ts
│   ├── use-settings.ts
│   ├── use-testimonials.ts
│   └── ...
│
├── types/
│   ├── blog.ts
│   ├── location.ts
│   ├── testimonial.ts
│   └── index.ts
│
├── content/                    # Optional: static JSON/content
│   └── ...
│
└── styles/
    └── (if any extra)
```

---

## Conventions

- **Naming:** PascalCase for components; kebab-case for files in `app/` routes; camelCase for hooks/utils.
- **Colocation:** Page-specific components can live under `components/<feature>/` (e.g. `components/home/`).
- **API routes:** Under `app/api/`; one folder per resource (e.g. `blog`, `locations`, `testimonials`); use `route.ts` for GET/POST and `[id]/route.ts` for GET/PATCH/DELETE.
- **Env:** All secrets and DB URLs in `.env.local`; document keys in `.env.example`. No secrets in code.
- **Path alias:** Use `@/` for `src/` (e.g. `@/components`, `@/lib`). Configure in `tsconfig.json` and Tailwind.

---

## Deployment (Hostinger Coolify)

- **Build:** Single Next.js app. `npm run build` produces standalone or default output.
- **Run:** `npm run start` (or `node .next/standalone/server.js` if using standalone).
- **Env:** Set in Coolify: `MONGODB_URI`, `BETTER_AUTH_*`, upload storage keys (e.g. Cloudinary), `NEXTAUTH_URL` / app URL.
- **Single process:** Coolify runs one Node process; Next.js serves both frontend and API. No separate backend container unless you add workers later.
- **Static assets:** Served by Next.js from `public/` and built assets.

Keep structure flat enough for Coolify; avoid multi-service setup unless you explicitly add it later.

Reference 04-frontend.md for app routes and 05-backend.md for API and DB.
