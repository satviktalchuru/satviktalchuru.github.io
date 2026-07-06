# satviktalchuru.github.io

Personal portfolio — React 19, TypeScript, Tailwind CSS v4, Vite.
Minimal single-column design (alexkehr.com style).

## Editing content

**Everything on the page lives in [`src/data/portfolio.ts`](src/data/portfolio.ts).**
Edit that one file to change your name, tagline, experience rows, project rows,
misc items, and social links — no component changes needed.

- **Add a role/project**: copy an existing object in the `experience` /
  `projects` array and edit the fields. Types are enforced, so `npm run build`
  will tell you if a field is missing.
- **Logos**: the `logo` field takes a single letter (companies) or an emoji
  (projects), shown in the small rounded square.
- **Badges**: add `badge: { text: 'Current', color: 'green' }` to any
  experience or project row (`green`, `yellow`, or `gray`).

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # typecheck + production build (outputs to dist/)
npm run preview  # preview the production build
```

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site
and publishes `dist/` to GitHub Pages.

One-time setup: in the repo settings on GitHub, set
**Settings → Pages → Source** to **GitHub Actions**.

## Structure

```
src/
├── data/portfolio.ts    ← all editable content (single source of truth)
├── components/
│   ├── Header.tsx       name / tagline / bio
│   ├── Section.tsx      section label wrapper
│   ├── ExperienceRow.tsx
│   ├── ProjectRow.tsx
│   ├── MiscRow.tsx
│   ├── Dock.tsx         floating social bar (LinkedIn/GitHub + "Let's chat")
│   ├── LogoSquare.tsx / BadgePill.tsx / icons.tsx
├── App.tsx
├── main.tsx
└── index.css            ← design tokens (colors, fonts)
```
