# Psychology Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-ready bilingual (Czech/English) static website for Holistic Psychology by Marcela Crhonkova, MSc. — a premium psychology practice.

**Architecture:** Pure static HTML/CSS/JS, no build step. Two HTML files share one CSS/JS codebase. Design tokens in `tokens.css`, reset in `base.css`, all components in `style.css`. JS handles nav scroll state, mobile menu, and scroll-reveal via IntersectionObserver.

**Tech Stack:** HTML5, CSS custom properties, vanilla ES6+, Google Fonts CDN (Cormorant Garamond + Inter), Lucide CDN icons.

---

## File Map

| File | Responsibility |
|------|---------------|
| `css/tokens.css` | All CSS custom properties (colors, type scale, spacing, shadows, radii) |
| `css/base.css` | Normalize/reset, `*` box-sizing, body defaults, `::selection`, skip link, focus styles |
| `css/style.css` | Nav, hero, how-i-can-help, about-preview, footer, buttons, utility classes, responsive breakpoints |
| `js/main.js` | Nav scroll class toggle, mobile hamburger toggle, IntersectionObserver scroll reveals |
| `index.html` | Czech homepage — imports all CSS/JS, full page content in Czech |
| `en.html` | English homepage — identical structure, translated English content |

---

### Task 1: CSS Design Tokens

**Files:**
- Create: `css/tokens.css`

- [x] **Step 1: Write tokens.css**

```css
/* css/tokens.css */
:root {
  /* Colors */
  --color-bg:           #F6F3EF;
  --color-bg-secondary: #EAE3DA;
  --color-text:         #13233A;
  --color-text-muted:   #5E6B78;
  --color-accent:       #183A63;
  --color-accent-hover: #244B78;
  --color-sage:         #A8B2A1;
  --color-border:       rgba(19, 35, 58, 0.08);
  --color-dark-bg:      #13233A;
  --color-dark-text:    #F9F7F4;
  --color-terracotta:   #C48A6A;

  /* Typography */
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body:    'Inter', system-ui, sans-serif;

  /* Fluid type scale */
  --text-xs:   clamp(0.75rem,  0.7rem  + 0.25vw, 0.875rem);
  --text-sm:   clamp(0.875rem, 0.8rem  + 0.35vw, 1rem);
  --text-base: clamp(1rem,     0.95rem + 0.25vw, 1.125rem);
  --text-lg:   clamp(1.125rem, 1rem    + 0.75vw, 1.5rem);
  --text-xl:   clamp(1.5rem,   1.2rem  + 1.25vw, 2.25rem);
  --text-2xl:  clamp(2rem,     1.2rem  + 2.5vw,  3.5rem);
  --text-3xl:  clamp(2.5rem,   1rem    + 4vw,    5rem);
  --text-hero: clamp(3rem,     0.5rem  + 7vw,    8rem);

  /* 4px spacing scale */
  --space-1:  0.25rem;
  --space-2:  0.5rem;
  --space-3:  0.75rem;
  --space-4:  1rem;
  --space-6:  1.5rem;
  --space-8:  2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;

  /* Radius */
  --radius-sm:   0.375rem;
  --radius-md:   0.5rem;
  --radius-lg:   0.75rem;
  --radius-xl:   1rem;
  --radius-btn:  0.75rem;

  /* Transitions */
  --transition: 180ms cubic-bezier(0.16, 1, 0.3, 1);

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(19, 35, 58, 0.06);
  --shadow-md: 0 4px 16px rgba(19, 35, 58, 0.08);
  --shadow-lg: 0 12px 32px rgba(19, 35, 58, 0.12);

  /* Content widths */
  --content-narrow:  640px;
  --content-default: 960px;
  --content-wide:    1200px;
}
```

- [x] **Step 2: Commit**
```bash
git add css/tokens.css && git commit -m "feat: add CSS design tokens"
```

---

### Task 2: CSS Base / Reset

**Files:**
- Create: `css/base.css`

- [x] **Step 1: Write base.css** (normalize, box-sizing, body, typography defaults, skip link, focus styles, selection, scroll behavior)

- [x] **Step 2: Commit**
```bash
git add css/base.css && git commit -m "feat: add CSS reset and base styles"
```

---

### Task 3: CSS Components + Layout

**Files:**
- Create: `css/style.css`

Components to implement (in order):
1. `.skip-link` — keyboard accessibility jump link
2. `.nav` — transparent → scrolled state, logo, links, lang switcher, mobile hamburger
3. `.hero` — asymmetric 2-col grid, `.hero__content`, `.hero__image`, `.hero__name`
4. `.btn`, `.btn--primary`, `.btn--ghost-dark` — button variants
5. `.services` — "How I Can Help" 4-col horizontal list with thin separators
6. `.about` — 2-col grid, `.about__image`, `.about__panel` (dark navy)
7. `.footer` — editorial footer, dark background
8. `[data-reveal]` — scroll reveal (opacity + translateY)
9. Responsive breakpoints (`768px` tablet, `1024px` desktop)

- [x] **Step 3: Commit**
```bash
git add css/style.css && git commit -m "feat: add component and layout styles"
```

---

### Task 4: JavaScript (Nav + Animations)

**Files:**
- Create: `js/main.js`

- [x] **Step 1: Write main.js** with:
  - Nav scroll class toggle (`--scrolled` at 60px)
  - Mobile hamburger toggle (`.nav--open`)
  - IntersectionObserver scroll reveal (`[data-reveal]` → `.is-visible`)
  - Close mobile menu on link click

- [x] **Step 2: Commit**
```bash
git add js/main.js && git commit -m "feat: add nav scroll behavior and scroll reveal JS"
```

---

### Task 5: Czech Homepage (index.html)

**Files:**
- Create: `index.html`

Sections:
- `<header>` with nav (logo, Czech links, EN switcher, hamburger)
- `<main>`
  - Hero: headline "Jasnost. Rovnováha. Pohoda.", subhead, name, CTA button
  - Services "Jak mohu pomoci" with 4 service items + Lucide icons
  - About preview with dark panel "Odborná péče. Osobní propojení. Smysluplné výsledky."
- `<footer>` with contact info, links, copyright
- All assets, Google Fonts preconnect, Lucide CDN, deferred JS

- [x] **Step 2: Commit**
```bash
git add index.html && git commit -m "feat: add Czech homepage"
```

---

### Task 6: English Homepage (en.html)

**Files:**
- Create: `en.html`

Identical structure to `index.html`, with:
- `<html lang="en">`
- All copy translated to English
- Nav lang switcher: links back to `index.html`
- Hero: "Clarity. Balance. Well-being."
- Services: "How I Can Help" heading
- About panel: "Professional care. Personal connection. Meaningful results."

- [x] **Step 2: Commit**
```bash
git add en.html && git commit -m "feat: add English homepage"
```

---

### Task 7: Final QA + CLAUDE.md Update

- [x] Open `index.html` in browser and verify:
  - [ ] Nav scrolls correctly (transparent → frosted)
  - [ ] Mobile menu toggles
  - [ ] Scroll reveals fire
  - [ ] All three sections render correctly
  - [ ] Typography hierarchy correct
- [x] Check `en.html` renders with English content
- [x] Update `CLAUDE.md` with any corrections
- [x] Final commit

```bash
git add -A && git commit -m "chore: final QA pass and CLAUDE.md update"
```

---

## Status

| Task | Status |
|------|--------|
| 1. tokens.css | ✅ Complete |
| 2. base.css | ✅ Complete |
| 3. style.css | ✅ Complete |
| 4. main.js | ✅ Complete |
| 5. index.html | ✅ Complete |
| 6. en.html | ✅ Complete |
| 7. QA | ⬜ Pending |
