# SEO & AI Search Optimization — Design Spec

**Date:** 2026-05-23  
**Branch:** feat/cv-generator (to be merged or continued on a new branch)  
**Approach:** C — Meta tags + JSON-LD + noscript + Vite SSR pre-rendering  

---

## Goal

When someone searches "Etienne Chevrollier", "data engineer Barcelona", or asks an AI (ChatGPT, Perplexity, Brave AI) "find me a data engineer", the site surfaces immediately and clearly communicates who Etienne is professionally: Data Engineer at papernest, Barcelona, GCP certified, strong software engineering background.

## Target Audience

- International (EN primary) and French (FR secondary) — equal weight
- Search queries: "Etienne Chevrollier", "data engineer Barcelona", dbt/GCP skill searches
- AI search: Brave AI, Perplexity, ChatGPT web browsing — via structured data

---

## Architecture

### 5 deliverables

| # | What | Files |
|---|------|-------|
| 1 | Meta tags + JSON-LD + noscript | `index.html` |
| 2 | Static crawling files | `public/robots.txt`, `public/sitemap.xml` |
| 3 | SSR guard | `src/lib/lang.tsx` |
| 4 | SSR entry point | `src/entry-server.tsx` |
| 5 | Pre-render script + build update | `scripts/prerender.mjs`, `package.json` |

---

## Section 1 — `index.html` enrichment

### 1a. Meta tags

```html
<!-- Primary SEO -->
<title>Etienne Chevrollier — Data Engineer | papernest · Barcelona</title>
<meta name="description" content="Data Engineer at papernest (Barcelona). GCP certified. dbt, Python, BigQuery, ETL pipelines, data contracts, AI-powered internal tools. Strong software engineering background." />
<meta name="author" content="Etienne Chevrollier" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://wabfall.github.io/" />

<!-- Open Graph -->
<meta property="og:type" content="profile" />
<meta property="og:url" content="https://wabfall.github.io/" />
<meta property="og:title" content="Etienne Chevrollier — Data Engineer" />
<meta property="og:description" content="Data Engineer at papernest (Barcelona). GCP certified. Building reliable data pipelines, data contracts, and AI-powered internal tools." />
<meta property="og:site_name" content="Etienne Chevrollier" />
<meta property="og:locale" content="en_US" />
<meta property="og:locale:alternate" content="fr_FR" />
<meta property="profile:first_name" content="Etienne" />
<meta property="profile:last_name" content="Chevrollier" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="Etienne Chevrollier — Data Engineer" />
<meta name="twitter:description" content="Data Engineer at papernest (Barcelona). GCP certified. dbt, Python, BigQuery, data contracts, AI-powered tools." />
```

### 1b. JSON-LD (Schema.org)

Three types in a single `<script type="application/ld+json">` block. This block is read by all AI crawlers (ChatGPT, Perplexity, Brave AI) without executing JavaScript — it is the single most impactful element for AI search.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://wabfall.github.io/#person",
      "name": "Etienne Chevrollier",
      "givenName": "Etienne",
      "familyName": "Chevrollier",
      "jobTitle": "Data Engineer",
      "description": "Data Engineer with a strong Software Engineering background, currently at papernest in Barcelona. GCP certified. Specialised in dbt pipelines, data contracts, ETL/ELT development, and AI-powered internal tools. Bridges the gap between data infrastructure and business teams.",
      "url": "https://wabfall.github.io/",
      "email": "etiennechevrollier@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Barcelona",
        "addressRegion": "Catalonia",
        "addressCountry": "ES"
      },
      "worksFor": {
        "@type": "Organization",
        "name": "papernest",
        "url": "https://www.papernest.com"
      },
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "ESIEA – Graduate School of Engineering",
          "address": { "addressLocality": "Laval", "addressCountry": "FR" }
        }
      ],
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "certification",
        "name": "Google Cloud Digital Leader",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Google Cloud"
        }
      },
      "knowsAbout": [
        "Data Engineering", "ETL/ELT", "dbt", "Data Contracts", "Apache Flink",
        "BigQuery", "Google Cloud Platform", "Python", "SQL",
        "React", "Next.js", "TypeScript", "Spring Boot",
        "AI-powered internal tools", "LLM integration", "ElasticSearch"
      ],
      "nationality": { "@type": "Country", "name": "France" },
      "sameAs": [
        "https://www.linkedin.com/in/etienne-chevrollier",
        "https://github.com/Wabfall/"
      ]
    },
    {
      "@type": "ProfilePage",
      "@id": "https://wabfall.github.io/#profilepage",
      "url": "https://wabfall.github.io/",
      "name": "Etienne Chevrollier — Data Engineer Portfolio",
      "description": "Portfolio of Etienne Chevrollier, Data Engineer at papernest, Barcelona.",
      "inLanguage": ["en", "fr"],
      "about": { "@id": "https://wabfall.github.io/#person" },
      "mainEntity": { "@id": "https://wabfall.github.io/#person" }
    },
    {
      "@type": "WebSite",
      "@id": "https://wabfall.github.io/#website",
      "name": "Etienne Chevrollier",
      "url": "https://wabfall.github.io/",
      "inLanguage": ["en", "fr"],
      "author": { "@id": "https://wabfall.github.io/#person" }
    }
  ]
}
```

### 1c. `<noscript>` static content

A `<noscript>` block placed inside `<body>` containing key text visible to non-JS crawlers:
- Full name and job title
- Current company and location
- Professional summary (tagline in English)
- Key skills list
- Top 2 experiences (papernest, Bouygues Telecom)
- Certifications
- LinkedIn and GitHub links

This ensures Brave and any crawler that skips JS sees the essential profile.

---

## Section 2 — Static crawling files

### `public/robots.txt`

```
User-agent: *
Allow: /
Sitemap: https://wabfall.github.io/sitemap.xml
```

### `public/sitemap.xml`

All public routes with `lastmod`, `changefreq`, and `priority`:

| URL | Priority | Freq |
|-----|----------|------|
| `/` | 1.0 | monthly |
| `/projects/yaml-configuration-editor` | 0.8 | monthly |
| `/projects/log-data-visualization-platform` | 0.8 | monthly |
| `/projects/sql-streaming-module` | 0.7 | monthly |
| `/projects/escobaddictions` | 0.7 | monthly |
| `/projects/bank-web-app-uqac` | 0.6 | yearly |
| `/projects/erp-configuration-app` | 0.6 | yearly |
| `/projects/linkedin-image-generator-api` | 0.7 | monthly |

---

## Section 3 — SSR guard (`src/lib/lang.tsx`)

Add a `typeof window === 'undefined'` guard at the top of the `useState` initializer in `LangProvider`. When running in Node.js (pre-render), there is no `localStorage` or `navigator` — the guard returns `'en'` immediately.

```ts
const [lang, setLang] = useState<Lang>(() => {
  if (typeof window === 'undefined') return 'en'; // SSR/pre-render fallback
  const stored = localStorage.getItem("lang");
  if (stored === "fr" || stored === "en") return stored;
  return navigator.language.startsWith("fr") ? "fr" : "en";
});
```

The pre-rendered HTML is in English. This is correct: English is the primary language for international indexing, and the client hydration will switch to the user's preferred language on first load.

---

## Section 4 — SSR entry point (`src/entry-server.tsx`)

A new file that:
- Uses `StaticRouter` from `react-router-dom/server` instead of `BrowserRouter`
- Exports a single `render(url: string): string` function
- Does NOT include `ScrollToTop` (uses `window.scrollTo`, breaks in Node.js)
- Returns `renderToString(...)` output — the full HTML string for a given URL

```tsx
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { LangProvider } from './lib/lang'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import { Routes, Route } from 'react-router-dom'
import './index.css' // Vite handles CSS in SSR mode

export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <LangProvider>
        <div className="min-h-screen bg-slate-50 text-slate-900">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/:slug" element={<ProjectPage />} />
          </Routes>
          <Footer />
        </div>
      </LangProvider>
    </StaticRouter>
  )
}
```

**Note on lazy components:** `CvDownloadLink` is loaded with `React.lazy` + `Suspense`. `renderToString` does not await lazy components — it renders the `fallback` (the plain Download CV button). This is correct behavior: the download button appears in the pre-rendered HTML, the actual PDF logic loads client-side.

**Note on window usage:** `Navbar` reads `window.scrollY` and `ScrollToTop` calls `window.scrollTo()`, but both are inside `useEffect` hooks. `renderToString` does not execute `useEffect` — these components are safe in SSR without any mock. The only component that reads browser globals during render (not in an effect) is `LangProvider`, which is handled by the SSR guard in Section 3.

---

## Section 5 — Pre-render script (`scripts/prerender.mjs`)

Post-build Node.js ESM script. Runs after `vite build`.

**Flow:**
1. Start a Vite dev server in SSR mode (handles TypeScript/TSX transforms without a separate SSR build)
2. Set up minimal browser global mocks before loading the SSR module
3. Load `src/entry-server.tsx` via `vite.ssrLoadModule()`
4. Read `dist/index.html` as the HTML template
5. For each route: call `render(url)`, inject into template at `<div id="root"></div>`, write the file
6. Write `/` → `dist/index.html` (overwrite)
7. Write `/projects/:slug` → `dist/projects/:slug/index.html` (create directories)
8. Close the Vite server

**Routes pre-rendered:**
- `/`
- `/projects/yaml-configuration-editor`
- `/projects/log-data-visualization-platform`
- `/projects/sql-streaming-module`
- `/projects/escobaddictions`
- `/projects/bank-web-app-uqac`
- `/projects/erp-configuration-app`
- `/projects/linkedin-image-generator-api`

**Browser globals mocked:**
- `global.window` — minimal object (`{ scrollTo: () => {} }`)
- `global.localStorage` — `{ getItem: () => null, setItem: () => {} }`
- `global.navigator` — `{ language: 'en-US' }`
- `global.document` — not needed (React handles DOM via renderToString)

### Updated `package.json` build script

```json
"build": "tsc -b && vite build && node scripts/prerender.mjs"
```

No changes to the GitHub Actions workflow — it already runs `npm run build` and uploads `dist/`.

---

## Out of scope

- OG image (1200×630 PNG) — would require a separate image generation step; not included in this spec. The meta tag for `og:image` is omitted for now.
- French-language pre-rendering — the site has a single URL with client-side language switching; Google will index the EN version and crawl the FR content via JS execution.
- Google Search Console setup — manual step, not automatable in code.

---

## Success criteria

- `https://wabfall.github.io/` returns full HTML content (not just `<div id="root"></div>`) when fetched with `curl` (no JS)
- `https://wabfall.github.io/robots.txt` returns 200
- `https://wabfall.github.io/sitemap.xml` returns 200 with all 8 URLs
- JSON-LD block validates on [schema.org/validator](https://validator.schema.org/)
- Google Rich Results Test passes for the Person type
- `dist/projects/yaml-configuration-editor/index.html` exists after build
