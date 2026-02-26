# Brand Specification

Use for visual identity, voice, and naming. Do not invent new brand elements unless told to change.

---

## Brand name & domain
- **Primary name:** Dr. Nisarg Parmar
- **Site title (meta):** Dr. Nisarg Parmar - Neurosurgeon | Brain & Spine Specialist
- **Short:** Dr. Nisarg Parmar or Dr. Parmar
- **Domain (example):** drnisargparmar.com (use actual domain when set)

## Voice & tone
- **Professional, calm, trustworthy.** Medical authority without being cold.
- **Clear and concise.** Avoid jargon; explain when needed.
- **Patient-first.** Emphasize care, clarity, and accessibility (e.g. 24/7 emergency, easy booking).
- **Confident but not boastful.** Lead with credentials (NIMHANS) and outcomes (experience, surgeries).

## Visual identity

### Primary palette (CSS variables — align with FRONTEND)
- **Primary (Navy):** Main brand, headers, primary buttons. `hsl(210 50% 25%)` (light) / adjust for dark.
- **Secondary (Teal):** CTAs, highlights, links, accents. `hsl(175 70% 35%)`.
- **Neutral:** Background, card, muted text — use semantic tokens (background, foreground, muted, border) from design system.
- **Semantic:** Success (green), warning (amber), destructive/emergency (red). Use for alerts and status.

### Typography
- **Font family:** Inter (primary). Weights: 300, 400, 500, 600, 700, 800.
- **Usage:** Sans for UI and body; no second decorative font unless specified later.

### Logo / wordmark
- **Primary:** Text-only “Dr. Nisarg Parmar” (bold) + one-line tagline below (e.g. “Neurosurgeon | Brain & Spine Specialist”) in brand font.
- **Favicon:** Use initials or simple icon; ensure clarity at 32px.

### Imagery
- **Doctor photo:** Professional, approachable. Use consistent aspect ratio (e.g. portrait 3:4) and alt text “Dr. Nisarg Parmar - Neurosurgeon”.
- **Stock/placeholders:** Prefer clean, medical/clinical feel; avoid generic “hospital” clichés. Prefer real clinic/team photos when available.

## UI personality
- **Buttons:** Clear primary (Book Appointment, Submit) and secondary (Emergency) — use secondary color for main CTA, destructive for emergency.
- **Cards:** Subtle border, soft shadow on hover; rounded corners (e.g. 0.5rem).
- **Motion:** Smooth, minimal (Framer Motion). No flashy or distracting animations; respect reduced motion.

## Legal & trust
- **Footer:** Copyright, medical disclaimer (see 01-content.md). Keep visible and readable.
- **Credentials:** NIMHANS, MBBS, MS, MCh — use consistently in About and meta.

Reference 01-content.md for copy and 04-frontend.md for implementation of colors and typography.
