# CV Generator Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a `/cv` route to the portfolio that generates a bilingual (FR/EN), downloadable PDF résumé from the existing `portfolio.ts` data, with an on-page preview on desktop.

**Architecture:** A lazy-loaded PDF chunk keeps `@react-pdf/renderer` out of the main bundle. `CvDocument` describes the A4 layout with react-pdf primitives, driven entirely by the `lang` prop and the data module. `CvPdfClient` wraps the viewer + download link; `CvPage` is the route shell with responsive logic.

**Tech Stack:** React 19, Vite 8, react-router-dom 7, Tailwind 4, `@react-pdf/renderer` v4.

**Branch:** `feat/cv-generator` (already created from `origin/main`, design spec committed).

**Note on TDD:** PDF visual output has no meaningful unit tests (acknowledged in the spec). Verification per task is `npm run build` + `npm run lint` + a manual visual check on `npm run dev`. These are the "test" steps below.

---

## File Structure

| File | Responsibility |
|------|----------------|
| `package.json` | adds `@react-pdf/renderer` dependency |
| `src/data/portfolio.ts` | adds `cvExtra` export (phone, languages, hobbies) |
| `src/data/ui.ts` | adds `ui.nav.cv` and `ui.cv.*` bilingual labels |
| `src/lib/cv/cvStyles.ts` | react-pdf `StyleSheet` + accent constant |
| `src/lib/cv/CvDocument.tsx` | the `<Document>` A4 layout, prop `lang` |
| `src/lib/cv/CvPdfClient.tsx` | `PDFViewer` + `PDFDownloadLink` wrapper (the lazy chunk) |
| `src/pages/CvPage.tsx` | `/cv` route shell, lang + responsive viewer gating |
| `src/App.tsx` | registers `<Route path="/cv">` |
| `src/components/Navbar.tsx` | adds "CV" link to desktop + mobile menus |

---

### Task 1: Add the `@react-pdf/renderer` dependency and confirm a clean baseline

**Files:**
- Modify: `package.json` (dependencies)

- [ ] **Step 1: Confirm baseline build is green before changes**

Run: `npm install && npm run build`
Expected: build succeeds (this is the untouched `origin/main` baseline).

- [ ] **Step 2: Install the PDF library**

Run: `npm install @react-pdf/renderer@^4`
Expected: `package.json` now lists `@react-pdf/renderer` under `dependencies`; `npm install` exits 0.

- [ ] **Step 3: Verify build still succeeds with the new dependency present**

Run: `npm run build`
Expected: build succeeds.

If the build fails with a Node-polyfill error (e.g. `process is not defined` / `Buffer is not defined`) coming from `@react-pdf/renderer`, this is the known Vite bundling risk from the spec. Fix it by adding to `vite.config.ts` a `define: { global: "globalThis" }` and, only if still failing, `optimizeDeps: { include: ["@react-pdf/renderer"] }`. Re-run `npm run build` until green. Do not proceed until the build passes.

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json vite.config.ts
git commit -m "build: add @react-pdf/renderer dependency

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

(Include `vite.config.ts` only if it was modified in Step 3.)

---

### Task 2: Add `cvExtra` data to `portfolio.ts`

**Files:**
- Modify: `src/data/portfolio.ts` (append a new export at end of file)

- [ ] **Step 1: Append the `cvExtra` export**

Add at the end of `src/data/portfolio.ts`:

```ts
// ─── CV-only extra data ───────────────────────────────────────────────────────

export const cvExtra = {
  phone: "+33 6 19 18 49 32",
  languages: [
    { name: { en: "French", fr: "Français" } as Bil, level: { en: "Native", fr: "Natif" } as Bil },
    { name: { en: "English", fr: "Anglais" } as Bil, level: { en: "B2", fr: "B2" } as Bil },
  ],
  hobbies: [
    {
      category: { en: "Travel & Cultural Discovery", fr: "Voyage & découverte culturelle" } as Bil,
      text: {
        en: "Explored Europe (Nordics, Portugal, Cyprus, Czech Republic, Greece) and North America (Canada)",
        fr: "Europe (pays nordiques, Portugal, Chypre, République tchèque, Grèce) et Amérique du Nord (Canada)",
      } as Bil,
    },
    {
      category: { en: "Music & Production", fr: "Musique & production" } as Bil,
      text: {
        en: "Guitarist and bassist, studio recording, host of a music podcast",
        fr: "Guitariste et bassiste, enregistrement studio, animateur d'un podcast musical",
      } as Bil,
    },
    {
      category: { en: "Sports & Wellness", fr: "Sport & bien-être" } as Bil,
      text: {
        en: "Soccer, running, and strength training",
        fr: "Football, course à pied et musculation",
      } as Bil,
    },
  ],
};
```

`Bil` is already imported at the top of `portfolio.ts` (`import type { Bil, BilArr } from "../lib/lang";`). No new import needed.

- [ ] **Step 2: Type-check**

Run: `npx tsc -b`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/data/portfolio.ts
git commit -m "feat(cv): add cvExtra data (phone, languages, hobbies)

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

### Task 3: Add bilingual UI labels for the CV page

**Files:**
- Modify: `src/data/ui.ts`

- [ ] **Step 1: Add the `cv` nav label**

In `src/data/ui.ts`, inside the `nav:` object, add after the `testimonials` line:

```ts
    cv:           { en: "CV",           fr: "CV"           } as Bil,
```

- [ ] **Step 2: Add the `cv` section block**

In `src/data/ui.ts`, add a new top-level key in the `ui` object (place it right after the `nav:` block, before `hero:`):

```ts
  cv: {
    pageTitle:          { en: "Résumé",  fr: "CV" } as Bil,
    pageSubtitle:       {
      en: "Generated from this site's data — download it as a PDF.",
      fr: "Généré depuis les données de ce site — téléchargeable en PDF.",
    } as Bil,
    download:           { en: "Download CV",      fr: "Télécharger le CV" } as Bil,
    generating:         { en: "Generating PDF…",  fr: "Génération du PDF…" } as Bil,
    previewDesktopOnly: {
      en: "Preview available on desktop. Use the button above to download.",
      fr: "Aperçu disponible sur ordinateur. Utilisez le bouton ci-dessus pour télécharger.",
    } as Bil,
  },
```

- [ ] **Step 3: Type-check**

Run: `npx tsc -b`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/data/ui.ts
git commit -m "feat(cv): add CV page UI labels

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

### Task 4: Create the PDF stylesheet

**Files:**
- Create: `src/lib/cv/cvStyles.ts`

- [ ] **Step 1: Create the stylesheet**

Create `src/lib/cv/cvStyles.ts`:

```ts
import { StyleSheet } from "@react-pdf/renderer";

export const ACCENT = "#2563eb"; // Tailwind blue-600, the site accent

export const cvStyles = StyleSheet.create({
  page: {
    paddingVertical: 36,
    paddingHorizontal: 40,
    fontSize: 9,
    fontFamily: "Helvetica",
    color: "#1e293b",
    lineHeight: 1.4,
  },
  name: { fontSize: 22, fontFamily: "Helvetica-Bold", color: "#0f172a" },
  title: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: ACCENT,
    marginTop: 2,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  summary: { marginTop: 6, fontSize: 9, color: "#475569" },
  section: { marginTop: 14 },
  sectionTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: "#0f172a",
    borderBottomWidth: 1,
    borderBottomColor: ACCENT,
    paddingBottom: 3,
    marginBottom: 6,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  infoRow: { flexDirection: "row", flexWrap: "wrap", marginBottom: 2 },
  infoItem: { fontSize: 9, color: "#475569", marginRight: 14 },
  infoLabel: { fontFamily: "Helvetica-Bold", color: "#0f172a" },
  entry: { marginBottom: 9 },
  entryHeader: { flexDirection: "row", justifyContent: "space-between" },
  entryRole: { fontSize: 10, fontFamily: "Helvetica-Bold", color: "#0f172a" },
  entryMeta: { fontSize: 9, color: ACCENT, fontFamily: "Helvetica-Bold" },
  entrySub: { fontSize: 9, color: "#64748b", marginBottom: 2 },
  bullet: { flexDirection: "row", marginBottom: 1.5 },
  bulletDot: { width: 8, fontSize: 9, color: ACCENT },
  bulletText: { flex: 1, fontSize: 9, color: "#475569" },
  skillGroup: { marginBottom: 5 },
  skillName: { fontSize: 9, fontFamily: "Helvetica-Bold", color: "#0f172a" },
  skillText: { fontSize: 9, color: "#475569" },
  link: { color: ACCENT, textDecoration: "none" },
});
```

- [ ] **Step 2: Type-check**

Run: `npx tsc -b`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/lib/cv/cvStyles.ts
git commit -m "feat(cv): add react-pdf stylesheet

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

### Task 5: Create the `CvDocument` component

**Files:**
- Create: `src/lib/cv/CvDocument.tsx`

- [ ] **Step 1: Create the document component**

Create `src/lib/cv/CvDocument.tsx`:

```tsx
import { Document, Page, View, Text, Link } from "@react-pdf/renderer";
import type { Lang } from "../lang";
import { personal, experiences, education, skills, cvExtra } from "../../data/portfolio";
import { cvStyles as s } from "./cvStyles";

const labels = {
  personalInfo: { en: "Personal Info", fr: "Informations" },
  work: { en: "Work History", fr: "Expérience" },
  education: { en: "Education", fr: "Formation" },
  skills: { en: "Skills", fr: "Compétences" },
  languages: { en: "Languages", fr: "Langues" },
  hobbies: { en: "Hobby / Interest", fr: "Loisirs / Intérêts" },
} as const;

function Bullet({ children }: { children: string }) {
  return (
    <View style={s.bullet}>
      <Text style={s.bulletDot}>›</Text>
      <Text style={s.bulletText}>{children}</Text>
    </View>
  );
}

export default function CvDocument({ lang }: { lang: Lang }) {
  return (
    <Document title={`CV ${personal.name}`} author={personal.name}>
      <Page size="A4" style={s.page}>
        <Text style={s.name}>{personal.name}</Text>
        <Text style={s.title}>{personal.title[lang]}</Text>
        <Text style={s.summary}>{personal.tagline[lang]}</Text>

        <View style={s.section}>
          <Text style={s.sectionTitle}>{labels.personalInfo[lang]}</Text>
          <View style={s.infoRow}>
            <Text style={s.infoItem}>
              <Text style={s.infoLabel}>Email: </Text>
              {personal.email}
            </Text>
            <Text style={s.infoItem}>
              <Text style={s.infoLabel}>Tel: </Text>
              {cvExtra.phone}
            </Text>
            <Text style={s.infoItem}>
              <Text style={s.infoLabel}>Location: </Text>
              {personal.location}
            </Text>
          </View>
          <View style={s.infoRow}>
            <Text style={s.infoItem}>
              <Text style={s.infoLabel}>LinkedIn: </Text>
              <Link src={personal.linkedin} style={s.link}>
                {personal.linkedin}
              </Link>
            </Text>
          </View>
          <View style={s.infoRow}>
            <Text style={s.infoItem}>
              <Text style={s.infoLabel}>GitHub: </Text>
              <Link src={personal.github} style={s.link}>
                {personal.github}
              </Link>
            </Text>
            <Text style={s.infoItem}>{personal.badge[lang]}</Text>
          </View>
        </View>

        <View style={s.section}>
          <Text style={s.sectionTitle}>{labels.work[lang]}</Text>
          {experiences.map((e) => (
            <View style={s.entry} key={e.company + e.period} wrap={false}>
              <View style={s.entryHeader}>
                <Text style={s.entryRole}>
                  {e.role[lang]} — {e.company}
                </Text>
                <Text style={s.entryMeta}>{e.period}</Text>
              </View>
              <Text style={s.entrySub}>
                {e.type[lang]} · {e.location}
              </Text>
              {e.highlights[lang].map((h, i) => (
                <Bullet key={i}>{h}</Bullet>
              ))}
            </View>
          ))}
        </View>

        <View style={s.section}>
          <Text style={s.sectionTitle}>{labels.education[lang]}</Text>
          {education.map((ed) => (
            <View style={s.entry} key={ed.school[lang] + ed.period} wrap={false}>
              <View style={s.entryHeader}>
                <Text style={s.entryRole}>{ed.degree[lang]}</Text>
                <Text style={s.entryMeta}>{ed.period}</Text>
              </View>
              <Text style={s.entrySub}>{ed.school[lang]}</Text>
              {ed.details[lang].map((d, i) => (
                <Bullet key={i}>{d}</Bullet>
              ))}
            </View>
          ))}
        </View>

        <View style={s.section}>
          <Text style={s.sectionTitle}>{labels.skills[lang]}</Text>
          {skills.map((sk) => (
            <View style={s.skillGroup} key={sk.name[lang]}>
              <Text style={s.skillName}>{sk.name[lang]}</Text>
              <Text style={s.skillText}>{sk.capabilities[lang].join(" · ")}</Text>
              <Text style={s.skillText}>{sk.tools.join(", ")}</Text>
            </View>
          ))}
        </View>

        <View style={s.section}>
          <Text style={s.sectionTitle}>{labels.languages[lang]}</Text>
          {cvExtra.languages.map((l) => (
            <Text style={s.skillText} key={l.name.en}>
              {l.name[lang]} — {l.level[lang]}
            </Text>
          ))}
        </View>

        <View style={s.section}>
          <Text style={s.sectionTitle}>{labels.hobbies[lang]}</Text>
          {cvExtra.hobbies.map((h) => (
            <Text style={s.skillText} key={h.category.en}>
              <Text style={s.skillName}>{h.category[lang]}: </Text>
              {h.text[lang]}
            </Text>
          ))}
        </View>
      </Page>
    </Document>
  );
}
```

- [ ] **Step 2: Type-check**

Run: `npx tsc -b`
Expected: no errors. (`Lang` is exported from `src/lib/lang.tsx`; `personal/experiences/education/skills/cvExtra` from `src/data/portfolio.ts`.)

- [ ] **Step 3: Commit**

```bash
git add src/lib/cv/CvDocument.tsx
git commit -m "feat(cv): add CvDocument react-pdf layout

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

### Task 6: Create the lazy PDF client wrapper

**Files:**
- Create: `src/lib/cv/CvPdfClient.tsx`

- [ ] **Step 1: Create the wrapper**

Create `src/lib/cv/CvPdfClient.tsx`:

```tsx
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import type { Lang } from "../lang";
import { ui } from "../../data/ui";
import CvDocument from "./CvDocument";

export default function CvPdfClient({
  lang,
  showViewer,
}: {
  lang: Lang;
  showViewer: boolean;
}) {
  const fileName = `CV-Etienne-Chevrollier-${lang.toUpperCase()}.pdf`;

  return (
    <div className="flex flex-col items-center gap-6">
      <PDFDownloadLink
        document={<CvDocument lang={lang} />}
        fileName={fileName}
        className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
      >
        {({ loading }) =>
          loading ? ui.cv.generating[lang] : ui.cv.download[lang]
        }
      </PDFDownloadLink>

      {showViewer ? (
        <PDFViewer
          className="w-full max-w-3xl h-[80vh] rounded-lg border border-slate-200"
          showToolbar
        >
          <CvDocument lang={lang} />
        </PDFViewer>
      ) : (
        <p className="text-sm text-slate-500">
          {ui.cv.previewDesktopOnly[lang]}
        </p>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Type-check**

Run: `npx tsc -b`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/lib/cv/CvPdfClient.tsx
git commit -m "feat(cv): add lazy PDF viewer/download wrapper

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

### Task 7: Create the `/cv` page

**Files:**
- Create: `src/pages/CvPage.tsx`

- [ ] **Step 1: Create the page**

Create `src/pages/CvPage.tsx`:

```tsx
import { Suspense, lazy, useEffect, useState } from "react";
import { useLang } from "../lib/lang";
import { ui } from "../data/ui";

const CvPdfClient = lazy(() => import("../lib/cv/CvPdfClient"));

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(min-width: 768px)").matches,
  );
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => setIsDesktop(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return isDesktop;
}

export default function CvPage() {
  const { lang } = useLang();
  const isDesktop = useIsDesktop();

  return (
    <main className="max-w-6xl mx-auto px-6 pt-28 pb-20">
      <h1 className="text-3xl font-bold text-slate-900">
        {ui.cv.pageTitle[lang]}
      </h1>
      <p className="mt-2 mb-10 text-slate-500">{ui.cv.pageSubtitle[lang]}</p>
      <Suspense
        fallback={<p className="text-slate-500">{ui.cv.generating[lang]}</p>}
      >
        <CvPdfClient lang={lang} showViewer={isDesktop} />
      </Suspense>
    </main>
  );
}
```

- [ ] **Step 2: Type-check**

Run: `npx tsc -b`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/pages/CvPage.tsx
git commit -m "feat(cv): add /cv page shell with responsive viewer gating

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

### Task 8: Wire the route and Navbar link

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/components/Navbar.tsx`

- [ ] **Step 1: Register the route in `App.tsx`**

In `src/App.tsx`, add the import next to the other page imports:

```tsx
import CvPage from "./pages/CvPage";
```

And add the route inside `<Routes>`, after the `/projects/:slug` route:

```tsx
          <Route path="/cv" element={<CvPage />} />
```

- [ ] **Step 2: Add the Navbar link (desktop list)**

In `src/components/Navbar.tsx`, the desktop links are rendered from the `links` array (anchor hrefs). The CV link is a real route, not a hash, so add it as a distinct `<li>` rendered right after the `links.map(...)` `<ul>` items. Replace the desktop `<ul>` block:

```tsx
          <ul className="flex gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-slate-500 hover:text-slate-900 transition-colors font-medium">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
```

with:

```tsx
          <ul className="flex gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-slate-500 hover:text-slate-900 transition-colors font-medium">
                  {l.label}
                </a>
              </li>
            ))}
            <li key="/cv">
              <a href="/cv" className="text-sm text-blue-600 hover:text-blue-700 transition-colors font-semibold">
                {ui.nav.cv[lang]}
              </a>
            </li>
          </ul>
```

- [ ] **Step 3: Add the Navbar link (mobile menu)**

In `src/components/Navbar.tsx`, the mobile menu maps `links`. Add the CV link after that map. Replace the mobile menu block:

```tsx
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-slate-500 hover:text-slate-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
```

with:

```tsx
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-slate-500 hover:text-slate-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            key="/cv"
            href="/cv"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-blue-600 hover:text-blue-700 transition-colors font-semibold"
          >
            {ui.nav.cv[lang]}
          </a>
        </div>
      )}
```

(`ui` and `lang` are already imported/in scope in `Navbar.tsx`.)

- [ ] **Step 4: Type-check and lint**

Run: `npx tsc -b && npm run lint`
Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/App.tsx src/components/Navbar.tsx
git commit -m "feat(cv): wire /cv route and Navbar link

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

---

### Task 9: Full build + manual visual verification

**Files:** none (verification only)

- [ ] **Step 1: Production build**

Run: `npm run build`
Expected: build succeeds. Confirm a separate JS chunk is emitted for the lazy PDF client (the `@react-pdf/renderer` code should not be in the main entry chunk).

- [ ] **Step 2: Lint**

Run: `npm run lint`
Expected: clean.

- [ ] **Step 3: Manual visual check**

Run: `npm run dev`, open the local URL, then:
- Navigate to `/cv` via the Navbar "CV" link.
- Confirm the preview renders an A4 CV with all sections: header (name, title, summary), Personal Info, Work History (papernest first), Education, Skills, Languages, Hobby/Interest.
- Toggle EN/FR in the Navbar: CV content language switches.
- Click "Download CV / Télécharger le CV": a file `CV-Etienne-Chevrollier-EN.pdf` (or `-FR.pdf`) downloads and opens correctly.
- Resize to a narrow (<768px) viewport: the preview is replaced by the "preview available on desktop" note; the download button still works.

- [ ] **Step 4: Final commit (only if Step 3 required tweaks)**

If visual issues required style/layout fixes, commit them:

```bash
git add -A
git commit -m "fix(cv): visual adjustments after manual review

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

If no tweaks were needed, skip this step.

---

## Self-Review

**Spec coverage:**
- PDF engine `@react-pdf/renderer`, client-side → Tasks 1, 5, 6 ✓
- Bilingual via `LangProvider` → `lang` threaded through Tasks 5–7 ✓
- `cvExtra` single source of truth → Task 2 ✓
- Dedicated `/cv` route + Navbar entry → Tasks 7, 8 ✓
- Preview on desktop, download-only fallback on mobile → Tasks 6, 7 ✓
- Lazy-loaded PDF chunk → Task 7 (`lazy(() => import(...))`) ✓
- File name reflects language → Task 6 ✓
- Build/lint/visual verification → Tasks 1, 8, 9 ✓
- Bundling risk contingency → Task 1 Step 3 ✓
- Out of scope (existing static PDF / `personal.cv` untouched) → not modified by any task ✓

**Placeholder scan:** No TBD/TODO; every code step contains complete code. ✓

**Type consistency:** `Lang` imported from `../lang` consistently; `cvExtra` shape (`phone`, `languages[].name/level`, `hobbies[].category/text`) defined in Task 2 and consumed identically in Task 5; `ui.cv.*` / `ui.nav.cv` defined in Task 3 and consumed in Tasks 6–8; `CvDocument` default export consumed by `CvPdfClient`; `CvPdfClient` default export lazy-imported by `CvPage`. ✓
