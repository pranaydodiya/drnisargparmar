# AI Rules and Instructions

**Anyone (human or AI) implementing this project MUST follow these rules.** Read this file before making any changes.

---

## 1. Before doing anything

- **Visit the prompt and spec files first.** Read the relevant MD files in `project-spec/` (01-content, 02-brand, 03-structure, 04-frontend, 05-backend, 06-functionality, 08-plan) before writing or changing code.
- **Do not make changes until told to make changes.** Only implement when the user (or the plan) explicitly asks for implementation of a step. Do not refactor or “improve” things that are not in the current step.
- **Do not hallucinate.** Do not invent features, routes, env vars, or content that are not written in the spec. If something is unclear, ask or stick to what is documented.
- **Follow the plan (08-plan.md) strictly.** Work step by step. Do not skip ahead (e.g. do not add backend or DB when the plan says “frontend only”).

---

## 2. Documentation and files

- **Do not create extra MD files** beyond the ones in `project-spec/`. No additional README sections, design docs, or spec files unless the user explicitly requests them.
- **Do not add changelog or “what I did” MD files** after making code changes unless asked.
- **Keep project-spec as-is** unless the user asks to edit a spec file. Do not auto-edit specs when implementing code.

---

## 3. Code and structure

- **Follow 03-structure.md** for folder and file layout. Do not introduce new top-level folders or rename core directories without being asked.
- **One command to run:** The whole project must run with `npm run dev` only. No separate “run backend” or “run DB” scripts for normal development (DB can be external/cloud).
- **Single Next.js app.** No separate backend repo or server folder; API lives in `app/api/` as per 03-structure and 05-backend.

---

## 4. Prompts to use when implementing

- **For each step:** “Implement step N from 08-plan.md. Follow 03-structure.md, 04-frontend.md (for UI), 05-backend.md (for API/DB when that phase starts), 06-functionality.md for behavior. Do not add features not in the spec.”
- **When in doubt:** Prefer the spec over assumptions. If the spec is silent, implement the minimal thing that matches the described behavior and ask if needed.

---

## 5. Summary

| Rule | Meaning |
|------|--------|
| Visit prompt/spec first | Read relevant project-spec MD files before coding |
| No changes until told | Only implement when user/plan asks for that step |
| No hallucination | Do not add undocumented features, routes, or content |
| Follow 08-plan only | Work in order; do not do backend in frontend-only phase |
| No extra MD files | Do not create new docs/changelogs unless asked |
| One command | `npm run dev` runs the whole app |
| Stick to structure | Use 03-structure.md; single Next.js app, API in app/api |

Reference 09-master-prompt.md for the single Cursor prompt that tells the AI to visit all MD files and go step by step.
