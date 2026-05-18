# CV Generator Page — Design

**Date:** 2026-05-18
**Branch:** `feat/cv-generator` (based on `origin/main`)
**Status:** Approved (design), pending spec review

## Goal

Add a dedicated `/cv` page to the portfolio site that generates a clean,
downloadable PDF résumé from the existing portfolio data. The generated CV
resembles the layout the user provided (header → Personal Info → Work History →
Education → Skills → Languages → Hobby/Interest) and follows the site's
bilingual FR/EN behavior.

## Decisions (locked)

- **PDF engine:** `@react-pdf/renderer` — real downloadable `.pdf` generated
  client-side. Layout is described with react-pdf primitives (separate from the
  site's Tailwind/HTML — accepted consequence).
- **Bilingual:** reuse the existing `LangProvider` / `useLang()`. The CV renders
  in the currently selected language and the downloaded file name reflects it.
- **Data source:** single source of truth in `src/data/portfolio.ts`. Existing
  `personal / about / experiences / education / skills` are reused; a new
  `cvExtra` export adds CV-only fields (phone, languages, hobbies).
- **Placement:** dedicated route `/cv` with a Navbar entry, on-page preview
  (desktop) + download button, with automatic download-only fallback on small
  screens.

## Architecture & Components

| File | Change | Responsibility |
|------|--------|----------------|
| `src/data/portfolio.ts` | add `export const cvExtra` | CV-only bilingual data: `phone: string`, `languages: { name: Bil; level: Bil }[]`, `hobbies: { category: Bil; text: Bil }[]`. A short CV summary is derived from existing `personal.tagline` (no new field needed). |
| `src/lib/cv/cvStyles.ts` | new | `StyleSheet.create({...})` for the PDF: A4, single column, fonts, the site accent color (`#2563eb`, Tailwind `blue-600`). |
| `src/lib/cv/CvDocument.tsx` | new | `<Document>` component. Prop: `lang: Lang`. Reads `personal/about/experiences/education/skills/cvExtra` and renders the A4 layout. No site state, fully driven by props + data module. |
| `src/pages/CvPage.tsx` | new | Route page: heading, uses global lang, renders `PDFViewer` (desktop ≥ `md`) and a `PDFDownloadLink` "Download CV / Télécharger le CV". File name `CV-Etienne-Chevrollier-FR.pdf` / `-EN.pdf`. Small screens: download button only (no `PDFViewer`). |
| `src/App.tsx` | add route | `<Route path="/cv" element={<CvPage />} />`. |
| `src/components/Navbar.tsx` | add link | "CV" entry (desktop list + mobile menu), routing to `/cv` (not an anchor). |
| `src/data/ui.ts` | add labels | `ui.cv` bilingual strings: page title, download button, preview-unavailable note. Reuse existing `ui.hero.downloadCV` wording for consistency. |
| `package.json` | add dep | `@react-pdf/renderer` (v4, React 19 compatible). |

## Data Flow

`LangProvider` (current lang) → `CvPage` reads `useLang()` → passes `lang` to
`<CvDocument lang={lang} />` → `CvDocument` reads `portfolio.ts`, picking the
`lang` side of each `Bil`/`BilArr` → react-pdf renders the document into the
`PDFViewer` (preview) and `PDFDownloadLink` (download blob). 100% client-side,
no server generation.

## CV Content Mapping

- **Header:** `personal.name`, `personal.title[lang]`, summary from
  `personal.tagline[lang]` (single paragraph, trimmed for length).
- **Personal Info:** `personal.email`, `cvExtra.phone`, `personal.linkedin`,
  `personal.location`, optional `personal.badge` (GCP certification line).
- **Work History:** `experiences` — role, company, location, `period`; intro
  sentence + `highlights[lang]` as bullets.
- **Education:** `education` — school, degree, `period`, `details[lang]` bullets.
- **Skills:** `skills` grouped by category `name[lang]`, listing
  `capabilities[lang]` + `tools`.
- **Languages:** `cvExtra.languages`.
- **Hobby/Interest:** `cvExtra.hobbies`.

## Error Handling & Edge Cases

- `@react-pdf/renderer` import is sizeable; `CvPage` lazy-loads the PDF pieces
  (`React.lazy` / dynamic import) so the rest of the site bundle is unaffected.
- `PDFViewer` renders poorly on mobile: gate it behind a `md`+ check; below that,
  show the download button plus a short "preview available on desktop" note.
- `PDFDownloadLink` exposes `{ loading }`: button shows a loading state until the
  blob is ready.

## Testing / Verification

No meaningful automated tests for visual PDF output. Verification:

1. `npm install` then `npm run build` succeeds (TS + Vite bundling, the main
   compatibility risk for `@react-pdf/renderer` + Vite 8).
2. `npm run lint` clean.
3. Manual visual check: `/cv` preview renders; FR/EN toggle switches content;
   downloaded PDF opens with correct file name and all sections present.

## Risks

- `@react-pdf/renderer` v4 + React 19 + Vite 8 bundling can need attention;
  validated by the build step above before declaring done.
- react-pdf layout is maintained separately from the site HTML/CSS (accepted
  trade-off of the chosen engine).

## Out of Scope (YAGNI)

- No in-browser CV editor, no multiple themes/templates.
- No server-side generation.
- The pre-existing static PDF at the repo root and `personal.cv` are left
  untouched. (Re-pointing the existing "Download CV" buttons to `/cv` is a
  possible follow-up, explicitly not part of this work.)
