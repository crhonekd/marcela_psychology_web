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

Images live in `assets/images/`.

| File | Status | Purpose |
|------|--------|---------|
| `assets/images/hands.png` | ✅ committed | Hero image — two hands meeting in cream tones. Native 1095×428 (landscape). The `.hero__image` container uses `aspect-ratio: 1095 / 428` to display the full image without cropping. |
| `assets/images/portrait.jpg` | ⚠️ placeholder | About-section portrait. Currently loaded from an Unsplash URL in `index.html`/`en.html` (`<img src="https://images.unsplash.com/photo-...">`). Replace with a real photo of Marcela before launch and update the `src` attribute. |

When replacing the hero image, keep the same aspect ratio (or update the
`aspect-ratio` in `css/style.css` `.hero__image` to match the new file's
dimensions) so the layout stays correct.

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

## Design System Notes

- **All design tokens** live in `css/tokens.css` — colors, fonts, fluid type
  scale, 4px spacing scale (`--space-1` through `--space-24`), radii, shadows,
  content widths. Edit there first; component files reference these tokens.
- **Spacing scale uses sparse intervals** (1, 2, 3, 4, **5**, 6, 8, 10, 12,
  16, 20, 24). All of `--space-1` through `--space-6` are defined — if you
  add a new step like `--space-7`, define it before using it.
- **The reveal animation system** is opt-in: add `data-reveal` (and optional
  `data-delay="100|200|300|400"`) to any element. CSS hides it at `opacity: 0`,
  and `js/main.js` adds `.is-visible` via IntersectionObserver when it scrolls
  into view. The page has a `class="no-js"` fallback on `<html>` plus an
  `@media print` rule so content always renders without JS/in PDFs.
- **The hero image container** uses `aspect-ratio: 1095 / 428` (native size of
  `hands.png`) so the full image displays at every viewport — don't change
  this without also swapping the image or recomputing the ratio.

## Development Workflow

This project has **no build step**. To preview locally:

```bash
cd /home/dave/Git/20260511_marcela_psychology_web
python3 -m http.server 8765
# Open http://localhost:8765/index.html or /en.html
```

To validate visually across viewport sizes (no real browser needed):

```bash
# Hero at four common laptop heights
for h in 720 810 900 1080; do
  google-chrome --headless --disable-gpu --no-sandbox --hide-scrollbars \
    --window-size=1440,$h --virtual-time-budget=5000 \
    --screenshot=/tmp/hero_$h.png http://localhost:8765/index.html
done

# Full-page render via PDF (renders all sections without scroll)
google-chrome --headless --disable-gpu --no-sandbox \
  --window-size=1440,900 --virtual-time-budget=6000 \
  --print-to-pdf=/tmp/full.pdf --no-pdf-header-footer \
  http://localhost:8765/index.html
pdftoppm -r 65 -png /tmp/full.pdf /tmp/page
```

## Known Pitfalls

- **Undefined CSS custom properties silently break shorthand declarations.**
  If `var(--some-token)` is referenced but missing from `tokens.css`, the
  *entire* shorthand declaration (e.g. `padding: A var(--missing) C`) is
  invalidated and falls back to the initial value (0). Browsers do not warn.
  Confirm tokens exist when editing; debug suspicious "padding is 0" issues
  by reading `getComputedStyle(el)` in DevTools or via headless screenshot
  with injected JS.

## Plans & Progress
See `docs/superpowers/plans/` for implementation plans.
Active plan: `docs/superpowers/plans/2026-05-11-psychology-website.md`
