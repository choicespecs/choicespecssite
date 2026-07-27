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
- `src/pages/projects.astro` — Repo Index. A personal reference tool (not a portfolio showcase) for finding repos on `github.com/choicespecs` by category, language, or search. Fetches live repo data at build time and renders `Navbar`, `CategorySidebar`, `RepoLedger`, `Footer`.

**Data layer — edit JSON files to update content:**
- `src/data/categories.json` — hand-maintained. `repoCategories` maps `repo-name` → one category name (one category per repo). `categoryOrder` is the ordered list of valid categories with a hex `color` each, used for the sidebar dot/left-bar color and rendered in that order. Any repo missing from `repoCategories` falls into an "Uncategorized" bucket automatically — check this bucket after adding new GitHub repos, since they won't be categorized until added here.
- `src/data/repos-cache.json` — auto-written fallback snapshot, do not hand-edit. `src/lib/fetchRepos.js` overwrites it after every successful build-time GitHub API fetch and reads from it only if that fetch fails (e.g. CI has no network access), so a build never breaks on a flaky API call.
- `src/data/social.json` — social links shown in the navbar mobile menu, header, and footer.

**Repo fetching (`src/lib/fetchRepos.js`):** Build-time-only, called from `projects.astro` frontmatter. Hits the unauthenticated GitHub REST API (`api.github.com/users/choicespecs/repos`) — public repos only, no token needed. Excludes forks. Maps `homepage` → `live_url`. Resolves the cache path via `process.cwd()`, not `import.meta.url` — the latter breaks once Astro bundles this module into `dist/entry.mjs`, since the bundled file's location no longer matches its source location.

**Repo Index layout (`CategorySidebar.astro` + `RepoLedger.astro`):**
- `CategorySidebar` renders category filter buttons with live repo counts; collapses from a vertical sidebar to a horizontal scrollable chip strip below 641px via a `max-width: 640px` media query in the same component (no separate mobile markup).
- `RepoLedger` renders the search input, language filter chips, and the dense monospace row list; owns the single client `<script>` that combines active category (read from `CategorySidebar`'s DOM via `#category-sidebar .category-item`) + active language + search substring (matched against repo name and description) with AND logic, toggling a `hidden` attribute per row.
- No pagination/carousel — all matching rows render at once, since the page's purpose is fast lookup, not a showcase.

**Styling:** Global CSS variables in `src/styles/global.css` — `--side-color: #262626` (dark navbar/footer) and `--button-color: #F9BF3F` (yellow). Each component carries its own scoped `<style>` block. Breakpoints used across the site: 641px (tablet), 941px (desktop), 1200px (wide desktop).

**Static assets:** `public/` is copied verbatim to `dist/`. `public/CNAME` contains `www.choicespecs.com` — do not remove it or the custom domain will reset on the next deploy. `dist/` is gitignored; it is built by CI and never committed.

**Deployment:** GitHub Actions (`.github/workflows/deploy.yml`) builds on push to `main` and deploys via `actions/deploy-pages`. In the GitHub repo settings, Pages source must be set to "GitHub Actions" (not the `gh-pages` branch).

**Images/logos:** Hosted on S3 (public bucket). URLs are referenced directly in component files and JSON data files — update them there if the bucket changes.
