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

Single-page Astro site deployed to GitHub Pages at `https://www.choicespecs.com`.

**Framework mix:** Astro handles static rendering. Vue is used for the `Navbar` (needs `client:load` for interactivity). React integration is installed but not currently used by any component.

**No TypeScript in `<script>` blocks.** The Rollup version bundled with Astro 1.0.0-beta.31 parses client-side `<script>` tags as plain ES2015 JavaScript. Any TypeScript syntax — return type annotations (`: number`), type casts (`as HTMLButtonElement`), `interface`, `type`, generics — will cause a build failure. Keep all `<script>` blocks in `.astro` files pure JavaScript. TypeScript is only valid inside the frontmatter fences (`---`) of `.astro` files, which is compiled separately by Astro itself.

**Data layer — edit JSON files to update content:**
- `src/data/projects.json` — projects shown on the Projects page (fields: `name`, `html_url`, `live_url` (optional), `description`, `language`, `topics`)
- `src/data/skills.json` — skills shown in the Skills section (separate `mobile_*` and `desktop_*` field variants for responsive display)
- `src/data/social.json` — social links shown in the navbar mobile menu, header, and footer

**Pages:** `src/pages/index.astro` (About Me — `Navbar`, `Header`, `Footer`) and `src/pages/projects.astro` (Projects — `Navbar`, `Projects`, `Footer`). The `Skills` component exists and is wired to `skills.json` but is not currently used on any page.

**Styling:** Global CSS variables in `src/styles/global.css` — `--side-color: #262626` (dark navbar/footer) and `--button-color: #F9BF3F` (yellow). Each component carries its own scoped `<style>` block with three breakpoints: mobile (default), tablet (641px), desktop (941px/1200px).

**Static assets:** `public/` is copied verbatim to `dist/`. `public/CNAME` contains `www.choicespecs.com` — do not remove it or the custom domain will break on the next deploy.

**Deployment:** GitHub Actions (`.github/workflows/deploy.yml`) builds on push to `main` and deploys via `actions/deploy-pages`. The Pages source must be set to "GitHub Actions" in the repo settings (not the `gh-pages` branch).

**Images/logos:** Hosted on S3 (public bucket). URLs are referenced directly in component files and JSON data files — update them there if the bucket changes.
