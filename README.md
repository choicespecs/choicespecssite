# Choice Specs — Portfolio Website

Personal portfolio website for Christopher Lee (Choice Specs), a full stack developer and software engineer.

**Live site:** [www.choicespecs.com](https://www.choicespecs.com)

---

## Pages

### About Me
Introduction, a featured YouTube video, resume download, and links to GitHub, YouTube, and LinkedIn.

### Projects
A browsable showcase of projects, each with a description, tech tags, and links to the GitHub repo and live demo (where available). The layout adapts per device:

- **Desktop** — 3 cards per row
- **iPad / Tablet** — 2×2 grid (4 cards)
- **Mobile** — 1 card at a time with navigation arrows

Adding a new project is done by editing [`src/data/projects.json`](src/data/projects.json).

---

## Projects Featured

| Project | Description | Links |
|---|---|---|
| TypescriptDesignPatterns | Interactive reference covering 21 design patterns (Behavioral, Creational, Structural) implemented in TypeScript | [Demo](https://choicespecs.github.io/TypescriptDesignPatterns/) · [Repo](https://github.com/choicespecs/TypescriptDesignPatterns) |
| xml-toolbox | Browser-based tool for reading and analyzing XML files | [Demo](https://choicespecs.github.io/xml-toolbox/) · [Repo](https://github.com/choicespecs/xml-toolbox) |
| json-toolbox | Fast, browser-based toolkit for working with JSON — compare, visualize, and convert without uploading data | [Repo](https://github.com/choicespecs/json-toolbox) |

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

Reach out through the contact form on the site or connect on [LinkedIn](https://www.linkedin.com/in/christophermlee2).
