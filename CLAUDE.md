# CLAUDE.md — Holistic Psychology by Marcela Crhonkova

## Project Overview
Bilingual (Czech/English) static website for a premium psychology practice.

- **Czech version:** `index.html` (default, `lang="cs"`)
- **English version:** `en.html` (`lang="en"`)
- **No build step** — all files run directly in the browser (no npm, no bundler, no Node.js)

## File Structure
```
/
├── index.html          ← Czech homepage
├── en.html             ← English homepage
├── css/
│   ├── tokens.css      ← All CSS custom properties (design tokens)
│   ├── base.css        ← Reset + base styles
│   └── style.css       ← Components and layout
├── js/
│   └── main.js         ← Nav scroll, mobile menu, scroll reveal
├── assets/
│   └── images/         ← Site photography
└── docs/
    └── superpowers/
        └── plans/      ← Implementation plans
```

## Tech Stack
- **HTML5** — semantic, accessible markup
- **CSS** — custom properties (tokens), no preprocessor
- **JS** — vanilla ES6+, no frameworks
- **Fonts:** `Cormorant Garamond` + `Inter` via Google Fonts CDN
- **Icons:** Lucide via CDN (`https://unpkg.com/lucide@latest`)
- **Deployment:** Any static host (Netlify, GitHub Pages, Apache/Nginx)

## Design System
- All design tokens live in `css/tokens.css` — edit there first
- Brand: warm cream `#F6F3EF` bg, deep navy `#13233A` accent, sage green `#A8B2A1`
- Display font: Cormorant Garamond (editorial serif headings)
- Body font: Inter (clean, modern body text)
- See `main_page.png` for the primary design reference

## Content Rules
- `index.html` — Czech copy (authentic, warm, professional)
- `en.html` — English copy (same structure, translated)
- Language switcher in nav links between the two files
- Do **not** use JS-based i18n — content strings live directly in HTML

## Image Assets
Images are referenced from `assets/images/`. Placeholder Unsplash URLs are provided
as `data-src-unsplash` attributes on `<img>` tags and loaded as `src` if the local
file is absent. Replace with real photographs before final deployment.

Required images:
- `assets/images/hero.jpg` — Two hands gently meeting (warm neutral tones, soft daylight)
- `assets/images/portrait.jpg` — Marcela Crhonkova portrait (calm interior, warm light, professional)

## Accessibility
- WCAG AA contrast minimum on all text
- One `<h1>` per page, logical heading hierarchy
- All `<img>` must have meaningful `alt` text (or `alt=""` for decorative)
- Skip link as first focusable element
- All interactive elements keyboard-navigable with visible `:focus-visible`

## Performance
- Hero image: `loading="eager"`; all others: `loading="lazy"`
- Always include `width` + `height` on `<img>` to prevent layout shift
- All `<script>` at end of `<body>` or `defer`
- Google Fonts loaded with `preconnect` + `display=swap`

## Plans & Progress
See `docs/superpowers/plans/` for implementation plans.
Active plan: `docs/superpowers/plans/2026-05-11-psychology-website.md`
