# skill.md — Engineering Precision Design System

> Full design token reference for the portfolio project. Treat this as the single source of truth for all styling decisions. Every value here maps directly to a Tailwind config extension or a CSS custom property.

---

## Design Philosophy

**Codename:** Engineering Precision
**Aesthetic direction:** Modern Minimalism × Technical Documentation. "The IDE as a Canvas."
**Target audience:** Technical recruiters and engineering leads who value precision and clean code.
**Core rule:** Every element exists for a reason. Decoration is a bug.

---

## Color Palette

### Base Tokens

| Token | Hex | Tailwind Key | Usage |
|---|---|---|---|
| `--color-bg` | `#0f172a` | `bg-slate-900` | Page background, deepest surface |
| `--color-surface` | `#1e293b` | `bg-slate-800` | Card backgrounds, panel bodies |
| `--color-surface-raised` | `#ffffff` | `bg-white` | Elevated containers, modal bodies |
| `--color-outline` | `#334155` | `border-slate-700` | Grid lines, default borders |
| `--color-outline-subtle` | `#E2E8F0` | `border-slate-200` | Light mode dividers |
| `--color-text-primary` | `#f8fafc` | `text-slate-50` | Primary body text (on dark) |
| `--color-text-secondary` | `#94a3b8` | `text-slate-400` | Muted labels, metadata |
| `--color-text-ink` | `#0f172a` | `text-slate-900` | Primary text (on light surfaces) |
| `--color-accent` | `#38bdf8` | `text-sky-400` | Active states, CTAs, highlights |
| `--color-accent-dim` | `#0284c7` | `text-sky-600` | Hover states on light bg |
| `--color-navy` | `#0f172a` | `bg-slate-900` | Card header bars, primary button bg |

### Dark Mode Layering (depth via tone, not shadow)

```
Level 0 (background):   #0f172a  ← outermost, page bg
Level 1 (surface):      #1e293b  ← panels, cards, sidebar
Level 2 (raised):       #ffffff  ← modals, hover highlights on light variant
```

### Accent Usage Rules

Sky blue (`#38bdf8`) is used **only** for:
- Active sidebar/nav indicator (`border-l-2` or `border-b-2`)
- Hovered/active border on cards and buttons
- Skill bar fill color
- Pulsing availability dot
- `>` terminal prefix in stack lists
- Status indicators (`STATUS: READY_FOR_HIRE`)

Sky blue is **never** used for:
- Background fills (except `bg-opacity-10` tint on active sidebar item)
- Decorative underlines
- Section headings or body text

---

## Typography

### Font Stack

```css
--font-sans: 'Geist', sans-serif;
--font-mono: 'Geist Mono', 'JetBrains Mono', monospace;
```

Load via `next/font/google`:
```typescript
import { Geist, Geist_Mono } from 'next/font/google';
const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono' });
```

### Type Scale

| Style token | Font | Size | Weight | Line height | Letter spacing | Usage |
|---|---|---|---|---|---|---|
| `headline-lg` | Geist Sans | 48px / `text-5xl` | 700 | 1.05 | `-0.02em` | Hero name, major titles |
| `headline-lg-mobile` | Geist Sans | 32px / `text-3xl` | 700 | 1.2 | `-0.01em` | Hero on mobile |
| `headline-md` | Geist Sans | 24px / `text-2xl` | 600 | 1.3 | `-0.01em` | Project titles, panel headers |
| `body-lg` | Geist Sans | 18px / `text-lg` | 400 | 1.6 | `0` | Bio, project descriptions |
| `body-md` | Geist Sans | 16px / `text-base` | 400 | 1.5 | `0` | General body copy |
| `code-sm` | Geist Mono | 14px / `text-sm` | 400 | 1.5 | `0` | Code blocks, stack lists |
| `label-caps` | Geist Mono | 12px / `text-xs` | 600 | 1 | `0.1em` | All nav, labels, dates, tags |

### Tailwind Typography Classes (quick ref)

```
Headings:   font-bold tracking-tighter uppercase (Geist Sans)
Body:       font-mono text-sm leading-relaxed   (Geist Mono)
Labels:     font-mono text-xs tracking-widest uppercase
Tags:       font-mono text-xs bg-slate-100 text-slate-700 px-2 py-1
```

### Alignment Rule

**Left-align all content.** Never center-align text in content areas. Center-align is only acceptable for avatar initials or icon-only buttons.

---

## Spacing

Built on a **4px base grid**. All values are multiples of 4px.

| Token | Value | Tailwind |
|---|---|---|
| `--space-base` | 4px | `p-1` |
| `--space-sm` | 8px | `p-2` |
| `--space-md` | 16px | `p-4` |
| `--space-gutter` | 24px | `p-6` |
| `--space-margin` | 32px | `p-8` |
| `--space-section` | 96px | `py-24` |
| `--container-max` | 1200px | `max-w-[1200px]` |

---

## Shape & Borders

### Border Radius

```
border-radius: 0px on ALL components.
```

Exceptions:
- Avatar/initials circles: `rounded-full`
- Radio buttons: `rounded-full` (native browser)

No cards, buttons, inputs, modals, tags, or panels may have any border-radius.

### Border Style

```css
/* Default border */
border: 1px solid #334155;   /* --color-outline */

/* Hover / Active border */
border: 1px solid #38bdf8;   /* --color-accent */

/* Subtle border (light surfaces) */
border: 1px solid #E2E8F0;   /* --color-outline-subtle */
```

**No `box-shadow` anywhere.** Depth = tonal layering + border color change only.

---

## Grid Background

Apply to panel bodies and the main content area:

```css
.grid-bg {
  background-image:
    linear-gradient(#334155 1px, transparent 1px),
    linear-gradient(90deg, #334155 1px, transparent 1px);
  background-size: 24px 24px;
  opacity: 0.35;
  position: absolute;
  inset: 0;
  pointer-events: none;
}
```

In Tailwind (via arbitrary values in globals or a custom class):
```css
/* globals.css */
.panel-grid {
  background-image:
    linear-gradient(rgb(51 65 85 / 0.35) 1px, transparent 1px),
    linear-gradient(90deg, rgb(51 65 85 / 0.35) 1px, transparent 1px);
  background-size: 24px 24px;
}
```

---

## Component Specs

### Buttons

**Primary (`DOWNLOAD_CV`, action CTAs)**
```
bg: #0f172a (navy)
text: #f8fafc (off-white), font-mono, text-xs, tracking-widest, uppercase
border: none
border-radius: 0
padding: 8px 16px
hover: bg → #1e293b
active: scale(0.98)
```

**Secondary (outline)**
```
bg: transparent
text: #f8fafc
border: 1px solid #334155
border-radius: 0
hover: border-color → #38bdf8, text-color → #38bdf8
```

**Link buttons (VIEW_GITHUB, READ_CASE_STUDY)**
```
display: flex, align-items: center, gap: 8px
border: 1px solid #334155
bg: transparent
font-mono, text-xs, tracking-widest, uppercase
hover: border-color → #38bdf8
```

### Input Fields

```
Default:   1px bottom border only (#334155). No full border.
Focus:     Full 1px border (#38bdf8) on all sides.
Label:     font-mono text-xs tracking-widest uppercase, above input.
border-radius: 0
```

### Cards

```
bg: #1e293b
border: 1px solid #334155
border-radius: 0
Header bar:
  bg: #0f172a (navy)
  text: #f8fafc, font-mono, text-xs, tracking-widest, uppercase
  layout: flex, justify-between (title left, date/action right)
Body:
  padding: 16px
  position: relative (for grid bg overlay)
```

### Tags / Chips

```
font-family: Geist Mono
font-size: 12px (text-xs)
background: #1e293b (dark) or #F1F5F9 (light surface)
color: #94a3b8 (muted) or #0f172a (on light)
padding: 4px 10px
border-radius: 0
format: --tag-name (terminal flag style, lowercase)
```

### Progress Bars (Skill indicators)

```
Track: 1px height, bg: #334155, width: 100%
Fill:  bg: #38bdf8 (sky blue), animated on mount via CSS transition
Label: font-mono text-xs (skill name left, percentage right)
No circles. Linear bars only.
border-radius: 0
```

### Modal

```
Backdrop: rgba(15, 23, 42, 0.75) — navy translucent, not black
Box:
  bg: #ffffff (raised surface)
  border: 1px solid #E2E8F0
  border-radius: 0
  width: 90%, max-width: 400px
Header bar:
  bg: #0f172a
  title: font-mono text-xs tracking-widest uppercase, white
  close: [ X ] button, font-mono, right-aligned
Body: padding 20px, skill rows with bar + percentage
```

### Sidebar Items

```
Default:
  font-mono text-xs tracking-widest uppercase
  color: #94a3b8
  padding: 6px 16px
  border-left: 2px solid transparent

Active:
  color: #f8fafc
  background: rgba(56, 189, 248, 0.08)
  border-left: 2px solid #38bdf8

Hover:
  color: #f8fafc
  background: rgba(255,255,255,0.04)
```

### Availability Badge

```
display: flex, align-items: center, gap: 8px
border: 1px solid #38bdf8
color: #38bdf8
font-mono text-xs tracking-widest uppercase
padding: 8px 14px
border-radius: 0
Dot: 8px × 8px square (not circle), bg: #38bdf8
     CSS animation: pulse opacity 0.3 → 1 → 0.3, 1.8s infinite
```

---

## Tailwind Config Extension

Add to `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy:    '#0f172a',
        surface: '#1e293b',
        sky:     '#38bdf8',
        'sky-dim': '#0284c7',
        outline: '#334155',
        'outline-subtle': '#E2E8F0',
        ink:     '#f8fafc',
        muted:   '#94a3b8',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '0px',
        none: '0px',
        full: '9999px',
      },
      spacing: {
        'section': '96px',
        'gutter': '24px',
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## CSS Custom Properties (globals.css)

```css
:root {
  --color-bg:             #0f172a;
  --color-surface:        #1e293b;
  --color-surface-raised: #ffffff;
  --color-outline:        #334155;
  --color-outline-subtle: #E2E8F0;
  --color-text-primary:   #f8fafc;
  --color-text-secondary: #94a3b8;
  --color-text-ink:       #0f172a;
  --color-accent:         #38bdf8;
  --color-accent-dim:     #0284c7;
  --font-sans:            'Geist', sans-serif;
  --font-mono:            'Geist Mono', monospace;
}

* {
  box-sizing: border-box;
  border-radius: 0;
}

body {
  background-color: var(--color-bg);
  color: var(--color-text-primary);
  font-family: var(--font-mono);
}
```

---

## Do / Don't Cheatsheet

| Do | Don't |
|---|---|
| `border-radius: 0` on all UI | Add rounded corners to cards, buttons, inputs |
| `1px solid` borders for depth | Use `box-shadow` |
| Sky blue for active/interactive only | Use sky blue decoratively |
| `Geist Mono` for all labels/nav/tags | Use Inter, Roboto, or system fonts |
| Left-align all content | Center-align content blocks |
| Stack injection for navigation | Page routing for panel content |
| `--tag-name` format for chips | Normal word chips without prefix |
| Linear progress bars for skills | Circular/donut charts |
| `font-mono text-xs tracking-widest uppercase` for labels | Mixed case or sans-serif for metadata |
