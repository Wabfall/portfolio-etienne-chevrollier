# chevrollier.dev

My portfolio and CV, live at **[chevrollier.dev](https://chevrollier.dev)**.

I am Etienne Chevrollier, a Data Engineer in Barcelona. This repository is the source of the site: the experience, the projects, and a CV you can download as a PDF generated in the browser.

The repository is still named `WabFall.github.io` because that is what GitHub Pages required before the custom domain. `wabfall.github.io` now redirects here.

## How it works

- **Vite + React + Tailwind**, in TypeScript.
- **Bilingual (EN/FR)** throughout. Every user-facing string is a `{ en, fr }` pair in [`src/data/`](src/data/), so the content lives apart from the components that render it. The chosen language is remembered in `localStorage` where the browser allows it.
- **Pre-rendered to static HTML.** `scripts/prerender.mjs` renders all eight routes through `react-dom/server` and writes real markup into each `index.html`. This is what lets search engines and AI crawlers read the site without executing JavaScript — the same reason there is structured JSON-LD and a `<noscript>` summary in `index.html`.
- **The PDF CV is generated on the fly** with `@react-pdf/renderer` ([`src/lib/cv/`](src/lib/cv/)), in whichever language is selected. There is no PDF checked into the repository to fall out of date.
- **Deployed to GitHub Pages** by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on every push to `main`.

## Content lives in data, not in components

Editing the site rarely means touching JSX:

| File | Holds |
|---|---|
| [`src/data/portfolio.ts`](src/data/portfolio.ts) | Identity, experience, education, skills, projects, testimonials |
| [`src/data/ui.ts`](src/data/ui.ts) | Every label and heading, in both languages |

`portfolio.ts` also carries `liveDemos`, mapping a project slug to a URL when that project is actually running somewhere — which is what puts the "Try it live" button on a project page. The tools it points to are indexed at [tools.chevrollier.dev](https://tools.chevrollier.dev).

Adding a project means adding an entry and, if it deserves its own page, a `slug` plus a line in the `routes` array of `scripts/prerender.mjs` so the page is pre-rendered too.

## Running it locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check, bundle, then pre-render all routes
npm run lint
```

After `npm run build`, check that the output is genuinely pre-rendered rather than an empty shell:

```bash
grep -c "Etienne Chevrollier" dist/index.html   # should be well above zero
```
