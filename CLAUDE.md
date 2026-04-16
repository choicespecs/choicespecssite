# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start local dev server (localhost:3000)
npm run build    # production build → ./dist
npm run preview  # preview the production build locally
```

There are no tests or linting configured.

## Architecture

Two-page Astro site deployed to GitHub Pages at `https://www.choicespecs.com`.

**Framework mix:** Astro handles static rendering. Vue is used for the `Navbar` (needs `client:load` for interactivity). React integration is installed but unused — do not add React components without confirming the integration still works.

**No TypeScript in `<script>` blocks.** The Rollup version bundled with Astro 1.0.0-beta.31 parses client-side `<script>` tags as plain ES2015 JavaScript. Any TypeScript syntax — return type annotations (`: number`), type casts (`as HTMLButtonElement`), `interface`, `type`, generics — will cause a build failure. Additionally, avoid `const`/`let` inside loop closures; use `var` and IIFEs instead. TypeScript is only valid inside the frontmatter fences (`---`) of `.astro` files, which Astro compiles separately.

**Pages:**
- `src/pages/index.astro` — About Me. Renders `Navbar`, `Header`, `Footer`.
- `src/pages/projects.astro` — Projects. Renders `Navbar`, `Projects`, `Footer`.

**Data layer — edit JSON files to update content:**
- `src/data/projects.json` — all projects shown on the Projects page. Fields: `name`, `html_url`, `live_url` (optional — omit if no live demo), `description`, `language`, `topics`. Adding a project here is all that's needed — filter buttons and carousel update automatically.
- `src/data/social.json` — social links shown in the navbar mobile menu, header, and footer.

**Projects component (`src/components/Projects.astro`):**
- Language filter buttons are derived at build time from the unique `language` values in `projects.json` — no code changes needed when adding a new language.
- Carousel pages: 1 per page on mobile (< 641px), 4 per page on tablet (641–940px, 2-column grid), 3 per page on desktop (941px+, 3-column grid).
- Nav arrows and dots only appear when the total filtered results exceed the per-page limit.
- Cards beyond index 2 have `data-hidden` set in the static HTML to prevent a flash before JS runs.

**Styling:** Global CSS variables in `src/styles/global.css` — `--side-color: #262626` (dark navbar/footer) and `--button-color: #F9BF3F` (yellow). Each component carries its own scoped `<style>` block. Breakpoints used across the site: 641px (tablet), 941px (desktop), 1200px (wide desktop).

**Static assets:** `public/` is copied verbatim to `dist/`. `public/CNAME` contains `www.choicespecs.com` — do not remove it or the custom domain will reset on the next deploy. `dist/` is gitignored; it is built by CI and never committed.

**Deployment:** GitHub Actions (`.github/workflows/deploy.yml`) builds on push to `main` and deploys via `actions/deploy-pages`. In the GitHub repo settings, Pages source must be set to "GitHub Actions" (not the `gh-pages` branch).

**Images/logos:** Hosted on S3 (public bucket). URLs are referenced directly in component files and JSON data files — update them there if the bucket changes.
