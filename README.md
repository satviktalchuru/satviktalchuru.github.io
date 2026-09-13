# satviktalchuru.github.io

Personal portfolio built with React 19, TypeScript, Tailwind CSS v4, and Vite.
Minimal single column design.

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

Before the first deploy, set **Settings → Pages → Source** to **GitHub Actions**
in the repo settings on GitHub.

## Structure

```
public/
├── headshot.jpg
├── logos/               company logos
└── docs/                files linked from the page (poster, reports, models)
src/
├── data/portfolio.ts    ← all editable content (single source of truth)
├── components/
│   ├── Header.tsx       headshot / name / tagline
│   ├── Section.tsx      section label wrapper
│   ├── ExperienceRow.tsx
│   ├── ProjectRow.tsx
│   ├── ThoughtRow.tsx
│   ├── MiscRow.tsx
│   ├── InlineLinks.tsx  small links next to a title (e.g. Poster, Report)
│   ├── Dock.tsx         floating social bar (LinkedIn/GitHub + "Let's chat")
│   ├── LogoSquare.tsx / BadgePill.tsx / icons.tsx
├── App.tsx
├── main.tsx
└── index.css            ← design tokens (colors, fonts)
```
