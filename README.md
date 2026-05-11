# Holistic Psychology — Marcela Crhoňková, MSc.

Bilingual (Czech / English) static website for a premium psychology practice.

## Quick start

No build step. Open any HTML file in a browser, or run a local server:

```bash
python3 -m http.server 8765
# then visit http://localhost:8765/index.html  (Czech, default)
#         or http://localhost:8765/en.html      (English)
```

## Files

| Path | Purpose |
|------|---------|
| `index.html` | Czech homepage (`<html lang="cs">`) |
| `en.html` | English homepage (`<html lang="en">`) |
| `css/tokens.css` | All design tokens (colors, type scale, spacing) |
| `css/base.css` | Reset + global styles + accessibility utilities |
| `css/style.css` | Components and layout |
| `js/main.js` | Nav scroll state, mobile menu, scroll reveals |
| `assets/images/` | Site photography |
| `main_page.png` | Design reference — single source of truth for layout |

## Deployment

This is a static site — drop the directory on any static host (Netlify,
Vercel, GitHub Pages, Apache, Nginx). No environment variables, no build,
no Node.js required.

## Working on the site

See [`CLAUDE.md`](./CLAUDE.md) for the project conventions, design system
notes, image-asset requirements, and the headless-screenshot workflow used
to verify visual changes.

Implementation plan and post-build iteration log live in
[`docs/superpowers/plans/2026-05-11-psychology-website.md`](./docs/superpowers/plans/2026-05-11-psychology-website.md).
