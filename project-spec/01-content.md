# Content Specification

Use this file as the single source for all copy, content structure, and SEO content. Do not invent new sections or copy unless told to change.

---

## Site identity
- **Site name:** Dr. Nisarg Parmar (or as per BRAND.md)
- **Tagline:** Neurosurgeon | Brain & Spine Specialist
- **One-liner:** NIMHANS (Bangalore) trained Neurosurgeon providing expert neurological care in Gujarat.

## Global content blocks

### Hero (home)
- **Eyebrow:** Alumni of NIMHANS, Bangalore • India's Top Neurosurgical Institution
- **Headline:** Dr. Nisarg Parmar
- **Subheadline:** Neurosurgeon | Brain & Spine Specialist
- **Intro (short):** Welcome to the forefront of neurological care excellence. Providing expert care in Gujarat with over 8 years of experience in complex brain and spine surgeries.
- **CTAs:** Book Appointment | Emergency: [phone]

### Trust stats (home)
- 5+ Years Experience
- 5000+ Successful Surgeries
- 24/7 Emergency Available
- NIMHANS Trained (Bangalore)

### Specialties (6)
1. **Brain Tumor Surgery** — Advanced surgical treatment for brain tumors with precision and care.
2. **Spine Surgery** — Comprehensive spine solutions for disc, deformity, and trauma cases.
3. **Neurotrauma Care** — Emergency neurosurgical care for head and spine injuries.
4. **Pediatric Neurosurgery** — Specialized care for children with neurological conditions.
5. **Vascular Neurosurgery** — Treatment of aneurysms, AVMs, and vascular brain conditions.
6. **Minimally Invasive Surgery** — Advanced techniques for faster recovery and minimal scarring.

### About (short)
- **Qualifications:** MBBS, MS (General Surgery), MCh (Neurosurgery) - NIMHANS, Bangalore
- **Bio (2–3 paras):** Expert neurosurgeon, NIMHANS-trained, 15+ years, 5000+ surgeries, trusted in Gujarat.
- **Philosophy quote:** "Every patient deserves not just the best medical treatment, but also compassion, clear communication, and hope. I believe in treating the whole person, not just the condition." — Dr. Nisarg Parmar

### Why choose (bullets)
- NIMHANS (Bangalore) Trained Neurosurgeon
- 8+ Years of Experience
- 2000+ Successful Surgeries
- 24/7 Emergency Availability
- Advanced Surgical Techniques
- Patient-Centered Care

### Contact & legal
- **Emergency:** 24/7 Emergency Neurosurgery — Head injuries, spinal trauma, stroke - immediate care available
- **Emergency phone:** +91 99741 11089 (9974111089)
- **Disclaimer:** The information provided on this website is for educational purposes only and should not be considered as medical advice. Always consult a qualified healthcare provider for proper diagnosis and treatment.
- **Copyright:** © [Year] Dr. Nisarg Parmar. All rights reserved.

## Page-level content

### Home
- Sections (in order): Hero → Trust indicators → About → Why Choose → Specialties → Testimonials → Book Appointment → Contact & Locations → FAQ → Medical Disclaimer
- FAQ items: Use 4–6 questions (e.g. best neurosurgeon in Surat, spine conditions treated, 24/7 emergency, how to book, cost, pediatric neurosurgery). Answers must be factual and SEO-friendly; store in CMS or static for now.

### About
- Full bio, education list (MCh NIMHANS highlighted), achievements list, specializations list, core values (4), contact info block (locations, emergency phone, email).

### Specialties
- One block per specialty: title, short description, optional expandable (procedures, benefits, recovery). Link to appointments.

### Testimonials
- **Written:** Name, location, rating (1–5), quote, date. Source: DB/CMS.
- **Video:** YouTube link or Instagram Reel URL; show thumbnail; click opens link. Fields: patient name, condition (optional), video_url or instagram_reel_url, thumbnail_url (optional, can be derived for YouTube).

### Blog
- **List:** Title, excerpt, featured image, publish date, category/tags, link to post.
- **Post:** Title, date, featured image, body (rich text/HTML), optional author, SEO meta (title, description).

### Contact
- Page title: Contact & Locations
- Subtitle: Reach out for appointments, inquiries, or emergency consultations.
- Blocks: Emergency strip, locations grid (from DB), “Also available at” hospitals (editable list), quick contact cards (Primary, Emergency, Location).

### Appointments
- Page title: Book an Appointment
- Subtitle: Schedule a consultation. We'll confirm within 2 hours.
- Form fields: Full Name*, Phone*, Email, Preferred Date*, Preferred Time, Condition/Reason, Additional message.
- Success message: Thank you, [Name]. We have received your request for [Date]. We will contact you at [Phone] within 2 hours.

## SEO content rules
- One H1 per page; match primary keyword.
- Meta title and description per page (from BRAND + page title).
- Use structured data (Physician, FAQPage, Organization) where defined in FRONTEND/functionality.
- No duplicate H1s; heading hierarchy H1 → H2 → H3.
- Alt text for all images (descriptive, not keyword-stuffed).

## Content sources (for implementation)
- **Static:** Hero, trust stats, specialties copy, about bullets, disclaimer, default FAQ — can live in code or JSON in `/content` until CMS.
- **Dynamic (DB/CMS):** Blog posts, testimonials (written + video), locations, site settings (title, tagline, phone, emergency phone), “Also available at” list.
- **Admin-editable:** All dynamic content; static can be moved to admin later.

Reference BRAND.md for voice and STRUCTURE.md for where content is stored.
