---
layout: ../../../../layouts/JournalPostLayout.astro
title: "Hello World"
date: 2026-04-19
description: "First entry in the journal — a quick intro to what I'll be writing about."
---

Welcome to the journal section of my portfolio. I'll be using this space to write about things I'm building, things I'm learning, and whatever else seems worth sharing.

## What to expect

Entries here will mostly be technical — notes on side projects, writeups on problems I ran into and how I solved them, and occasional thoughts on tools or workflows I find useful.

## How this works

Entries are organized by date in `src/pages/journal/YYYY/MM/`. To publish a new entry, create a `.md` file in the appropriate year/month folder with this frontmatter:

```markdown
---
layout: ../../../../layouts/JournalPostLayout.astro
title: "Your Entry Title"
date: 2026-04-19
description: "Optional short description shown on the listing page."
---

Your content here.
```

The listing page groups entries by year and month automatically — no other files need to change.
