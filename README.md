# Choice Specs — Portfolio Website

Personal portfolio website for Christopher Lee (Choice Specs), a full stack developer and software engineer.

**Live site:** [www.choicespecs.com](https://www.choicespecs.com)

---

## Pages

### About Me
Introduction, a featured YouTube video, resume download, and links to GitHub, YouTube, and LinkedIn.

### Projects
A filterable, paginated showcase of projects. Filter by language using the buttons at the top of the section. Each card links to the GitHub repo and live demo where available.

The layout adapts per device:

| Device | Layout |
|---|---|
| Desktop | 3 cards per row |
| iPad / Tablet | 2×2 grid (4 cards) |
| Mobile | 1 card at a time with navigation arrows |

When there are more projects than fit on one page, prev/next arrows and dot indicators appear automatically.

To add a project, edit [`src/data/projects.json`](src/data/projects.json):

```json
{
  "name": "my-project",
  "html_url": "https://github.com/choicespecs/my-project",
  "live_url": "https://choicespecs.github.io/my-project/",
  "description": "What it does.",
  "language": "TypeScript",
  "topics": ["tag1", "tag2"]
}
```

`live_url` is optional — omit it if there is no live demo. Language filter buttons are generated automatically from the `language` field.

---

## Built With

- [Astro](https://astro.build) — static site framework
- [Vue](https://vuejs.org) — navbar component
- Deployed via GitHub Actions → GitHub Pages

---

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Contact

Connect on [LinkedIn](https://www.linkedin.com/in/christophermlee2) or find more projects on [GitHub](https://github.com/choicespecs).
