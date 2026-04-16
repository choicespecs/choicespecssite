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

**Data layer — edit JSON files to update content:**
- `src/data/projects.json` — projects shown in the Projects section (fields: `name`, `html_url`, `description`, `created_at`, `updated_at`, `language`, `topics`)
- `src/data/skills.json` — skills shown in the Skills section (separate `mobile_*` and `desktop_*` field variants for responsive display)
- `src/data/social.json` — social links shown in the navbar mobile menu, header, and footer

**Page structure (`src/pages/index.astro`):** Single route. Renders `Navbar` (Vue, client-side), `Header` (about me + YouTube embed), and `Footer`. `Skills` and `Projects` components exist and are wired to their JSON data files but are currently commented out of the page — uncomment their imports and add them to the template to re-enable them.

**Styling:** Global CSS variables in `src/styles/global.css` — `--side-color: #262626` (dark navbar/footer) and `--button-color: #F9BF3F` (yellow). Each component carries its own scoped `<style>` block with three breakpoints: mobile (default), tablet (641px), desktop (941px/1200px).

**Static assets:** `public/` is copied verbatim to `dist/`. `public/CNAME` contains `www.choicespecs.com` — do not remove it or the custom domain will break on the next deploy.

**Deployment:** GitHub Actions (`.github/workflows/deploy.yml`) builds on push to `main` and deploys via `actions/deploy-pages`. The Pages source must be set to "GitHub Actions" in the repo settings (not the `gh-pages` branch).

**Images/logos:** Hosted on S3 (public bucket). URLs are referenced directly in component files and JSON data files — update them there if the bucket changes.
