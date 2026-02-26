# Master Prompt — Paste This in Cursor IDE

Copy the block below into Cursor when starting the new project. The AI must follow it exactly.

---

```
You are building a new project from spec. You MUST:

1. **Visit and read these MD files first** (in this order) before writing any code:
   - project-spec/07-ai-rules-and-prompts.md   (rules: no hallucination, no changes until told, no extra MD files)
   - project-spec/08-plan.md                   (step-by-step plan; we do frontend only first)
   - project-spec/03-structure.md              (folder and file structure)
   - project-spec/01-content.md                (content and copy)
   - project-spec/02-brand.md                  (brand, colors, typography)
   - project-spec/04-frontend.md               (Next.js, Tailwind, Framer Motion, SEO, responsive)
   - project-spec/06-functionality.md          (admin CRUD: blog, locations, testimonials)
   - project-spec/05-backend.md                (read only when we reach Phase 2 — API, MongoDB, BetterAuth)

2. **Work step by step according to 08-plan.md.** Do not skip steps. Do not add backend or database until the plan says so. Right now we are doing **Phase 1 — frontend only** (no backend, no DB).

3. **Follow 07-ai-rules-and-prompts.md:** Do not make changes until told to make a change. Do not hallucinate features or files. Do not create extra MD files. The whole app must run with a single command: `npm run dev`.

4. **When implementing:** Use 03-structure.md for file layout, 04-frontend.md for UI and tech stack, 01-content.md and 02-brand.md for copy and design. For admin behavior use 06-functionality.md. Do not implement anything that is not in these specs or the current plan step.

Start by confirming you have read the spec files, then ask which step of 08-plan.md to implement first (e.g. Step 1.1 — project bootstrap), or begin with Step 1.1 if the user says "start."
```

---

## How to use

1. Create a **new folder** for the new project (outside this repo or as a new repo).
2. Copy the entire **project-spec** folder (all 01–09 MD files) into that new folder.
3. Open the new folder in Cursor.
4. Paste the **Master Prompt** (the code block above) into Cursor chat.
5. Tell the AI to start with **Step 1.1** (or “start from the plan”). The AI will read the specs and implement only the current step.
6. After each step, ask for the next step (e.g. “Do Step 1.2”) until Phase 1 is complete. Then proceed to Phase 2 using 08-plan.md.

Do not paste this file into the AI repeatedly for every small task; use it once at project start and then refer to “next step in 08-plan” or “implement step X.”
