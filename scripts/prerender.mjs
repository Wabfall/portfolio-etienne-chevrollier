import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const routes = [
  "/",
  "/projects/yaml-configuration-editor",
  "/projects/log-data-visualization-platform",
  "/projects/sql-streaming-module",
  "/projects/escobaddictions",
  "/projects/bank-web-app-uqac",
  "/projects/erp-configuration-app",
  "/projects/linkedin-image-generator-api",
];

// Build the SSR bundle into a temporary directory
const ssrOutDir = path.join(root, "dist-ssr");

await build({
  root,
  logLevel: "warn",
  build: {
    ssr: path.join(root, "src", "entry-server.tsx"),
    outDir: ssrOutDir,
    rolldownOptions: {
      external: ["@react-pdf/renderer"],
    },
  },
});

try {
  const ssrEntry = path.join(ssrOutDir, "entry-server.js");
  const { render } = await import(pathToFileURL(ssrEntry).href);

  const template = fs.readFileSync(
    path.join(root, "dist", "index.html"),
    "utf-8"
  );

  for (const url of routes) {
    const appHtml = render(url);
    let html = template.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );
    if (url !== "/") {
      html = html.replace(
        /href="https:\/\/chevrollier\.dev\/"/g,
        `href="https://chevrollier.dev${url}/"`
      );
    }

    let outPath;
    if (url === "/") {
      outPath = path.join(root, "dist", "index.html");
    } else {
      const segments = url.split("/").filter(Boolean);
      const dir = path.join(root, "dist", ...segments);
      fs.mkdirSync(dir, { recursive: true });
      outPath = path.join(dir, "index.html");
    }

    fs.writeFileSync(outPath, html, "utf-8");
    console.log(`  ✓ ${url} → dist${url === "/" ? "/index.html" : url + "/index.html"}`);
  }

  console.log(`\nPre-rendered ${routes.length} routes.`);
} finally {
  // Clean up SSR build artifacts
  fs.rmSync(ssrOutDir, { recursive: true, force: true });
}
