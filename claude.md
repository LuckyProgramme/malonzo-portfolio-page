# claude.md — Portfolio AI Context

> This file gives Claude (or any AI assistant) full context about this project so it can generate consistent, on-spec code without needing re-explanation every session.

---

## Project Identity

**Project name:** Personal Developer Portfolio
**Type:** Static/SSR web application (Next.js App Router)
**Purpose:** Software engineering job portfolio — interactive, developer-centric, designed to impress technical recruiters and engineering leads.
**Design codename:** Engineering Precision

---

## Core Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js (App Router) | Use `app/` directory structure, RSC where possible |
| Styling | Tailwind CSS | Use the token map in `skill.md`. No arbitrary values unless noted. |
| Motion | Framer Motion | `AnimatePresence` for panel add/remove. See animation specs. |
| Icons | Lucide React | Outline style only. No filled variants. |
| Fonts | Geist Sans + Geist Mono | Load via `next/font/google` or Vercel font CDN |
| Language | TypeScript | Strict mode. No `any`. |

---

## Design System Summary

> Full token reference lives in `skill.md`. This section is the quick mental model.

**Aesthetic:** "The IDE as a Canvas." Think VS Code meets a premium technical résumé. Every element is structural, not decorative. Whitespace is used to separate concerns, not for breathing room alone.

**Color philosophy:** Sparse. Deep navy background, off-white text, sky blue accent used *only* for interactive states, active indicators, and CTAs. Never use sky blue decoratively.

**Shape language:** `border-radius: 0` on everything except native circular UI (radio buttons, avatars). Strict rectangles. Architectural blocks.

**Typography rule:** Two voices only.
- `Geist Sans` = human content (bio, descriptions, project summaries)
- `Geist Mono` = machine data (labels, dates, tags, nav items, metadata)

**Elevation rule:** No `box-shadow`. Depth is communicated through tonal layering (`#0f172a` → `#1e293b` → `#ffffff`) and `1px solid` borders only. On hover/active, border transitions to sky blue.

---

## Layout Architecture

```
┌─────────────────────────────────────────────────────────┐
│  TopNav: secondary nav + DOWNLOAD_CV CTA                │
├──────────────┬──────────────────────────────────────────┤
│              │                                          │
│   Sidebar    │   StackManager (main content area)       │
│   (fixed)    │   Panels stack vertically here           │
│              │   Each panel has grid bg + [X] close     │
│   ROOT       │                                          │
│   SRC        │   ┌──────────────────────────────────┐  │
│   LIB        │   │ Panel: ROOT (always present)     │  │
│   LOGS       │   └──────────────────────────────────┘  │
│   FAQ        │   ┌──────────────────────────────────┐  │
│              │   │ Panel: STACK (injected)           │  │
│   ──────     │   └──────────────────────────────────┘  │
│   REPOS      │                                          │
│   STATUS     │                                          │
└──────────────┴──────────────────────────────────────────┘
│  Footer: copyright + socials                            │
└─────────────────────────────────────────────────────────┘
```

---

## Component Architecture

### `Sidebar.tsx`
- Fixed left column
- Brand ID at top: `DEV_PORTFOLIO_v1.0` in `font-mono text-xs tracking-widest`
- User block: avatar square + `SYS_USER` + version string
- Primary nav links: `ROOT`, `SRC`, `LIB`, `LOGS`, `FAQ`
- Active state: left `2px` border in sky blue + sky blue tint background
- Bottom section: `REPOS`, `STATUS` with icons
- On mobile: converts to bottom-fixed tab bar

### `TopNav.tsx`
- Full-width top bar, `1px border-b`
- Left: `DEV_PORTFOLIO_v1.0` site ID
- Center: nav links — `EXPERIENCE`, `STACK`, `PROJECTS`, `CONTACT`
  - Active link has `2px border-b` in sky blue
- Right: `DOWNLOAD_CV` button — solid navy bg, white mono text, 0px radius

### `StackManager.tsx`
- Manages `activeStack: string[]` via `useState` or `useReducer`
- Initial state: `['ROOT']`
- **Push:** Clicking a sidebar/nav link adds ID to *front* of array (renders at top)
- **Remove:** `[X]` on a panel filters that ID out
- **Clear:** Resets to `['ROOT']`
- Wraps children in Framer Motion `AnimatePresence`

### `Panel.tsx`
- Generic content wrapper
- Props: `id`, `title`, `onClose`, `children`
- Header bar: navy background, mono title left-aligned, `[X]` button right
- Body: grid background overlay (see CSS spec in `skill.md`)
- Use `panelVariants` from animation spec (see below)

### `Footer.tsx`
- Single `1px border-t` row
- Left: copyright in `font-mono text-xs text-muted`
- Right: GitHub, LinkedIn icon links

---

## Interaction Model: The Vertical Stack

When a user clicks a nav item:
1. The panel ID is pushed to the front of `activeStack`
2. Framer Motion `AnimatePresence` animates the new panel in from the top
3. Previously open panels shift down
4. Clicking `[X]` on any panel removes it with exit animation
5. ROOT panel is always present and cannot be closed

**Key rule:** Do not use page routing for panel navigation. Everything lives on one route (`/`). Panels are injected into the DOM, not navigated to.

---

## Skills Modal Behavior

Minor content (skills breakdown, tool stack, certifications) opens in a **modal overlay**, not a new panel:
- Triggered by clicking a skill category chip (e.g. `--frontend`, `--backend`)
- Modal: navy header bar with title + `[ X ]` close, white body
- Contents: skill rows with `label | linear progress bar | percentage`
- Progress bars: sky blue fill, animated on open via `useEffect` + `transition`
- Backdrop click also closes the modal
- `border-radius: 0` on all modal elements

---

## Animation Specifications

### Panel Entry/Exit (Framer Motion)
```typescript
const panelVariants = {
  initial: { opacity: 0, y: -20, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  exit:    { opacity: 0, y: 10, transition: { duration: 0.2 } }
};
```

### Typing Effect (Panel Headers)
```typescript
// useEffect on mount, stagger character visibility
useEffect(() => {
  let i = 0;
  const interval = setInterval(() => {
    setDisplayed(title.slice(0, i));
    i++;
    if (i > title.length) clearInterval(interval);
  }, 35);
  return () => clearInterval(interval);
}, [title]);
```

### Scanline Overlay (Body)
```css
body::after {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  background: repeating-linear-gradient(
    0deg,
    rgba(0,0,0,0.015) 0px,
    rgba(0,0,0,0.015) 1px,
    transparent 1px,
    transparent 4px
  );
  animation: scanline 8s linear infinite;
  z-index: 9999;
}
@keyframes scanline {
  from { transform: translateY(0); }
  to   { transform: translateY(4px); }
}
```

### Skill Bar Animation
```typescript
// On modal open, after 1 RAF delay:
useEffect(() => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      setAnimated(true); // triggers CSS transition on bar widths
    });
  });
}, [open]);
```

---

## Page Structure (Major Panels)

| Panel ID | Content |
|---|---|
| `ROOT` | Hero (name, role, status), bio card, experience entries |
| `SRC` / `PROJECTS` | Project card grid — navy header bars, tag chips, GitHub/case study links |
| `STACK` | Core competencies — skill bar grid, category chip filters |
| `FAQ` | Q&A pairs in monospace, `//` prefix on questions |
| `CONTACT` | Contact grid (email, GitHub, LinkedIn, location) + availability badge |

---

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (`lg+`) | Sidebar fixed left, stack fills remainder |
| Tablet (`md`) | Sidebar collapses to icon-only rail |
| Mobile (`sm`) | Sidebar becomes bottom-fixed tab bar, stack is standard vertical scroll |

---

## What Claude Should Never Do On This Project

- Add `border-radius` to cards, buttons, inputs, or modals (except avatars/radio buttons)
- Use `box-shadow` for elevation — borders only
- Use sky blue (`#38bdf8`) decoratively — active/interactive states only
- Use `Inter`, `Roboto`, `Arial`, or system sans-serif — Geist only
- Use center-alignment on content — left-align everything
- Add gradient backgrounds or noise textures
- Navigate between pages with Next.js router for panel content — stack injection only

---

## Content Configuration

All user-editable content (name, bio, experience, projects, skills, FAQ, links) lives in one file:

```
config/content.config.ts
```

Components should import from this file — never hardcode personal data inside components. Example:

```typescript
import { personal, projects, skills, faq, contact } from '@/config/content.config';
```

Images go in `public/images/` and the CV PDF goes in `public/files/`. Update the paths in `content.config.ts` to match.

---

## File Conventions

```
app/
  layout.tsx         ← Scanline overlay, font loading, global meta
  page.tsx           ← StackManager + initial ROOT panel
components/
  Sidebar.tsx
  TopNav.tsx
  Panel.tsx
  StackManager.tsx
  Footer.tsx
  modals/
    SkillsModal.tsx
  panels/
    RootPanel.tsx
    ProjectsPanel.tsx
    StackPanel.tsx
    FaqPanel.tsx
    ContactPanel.tsx
config/
  content.config.ts  ← ALL personal content, links, projects — edit here only
styles/
  globals.css        ← Grid bg CSS var, scanline keyframes, base resets
public/
  images/            ← Avatar and project screenshots
  files/             ← resume.pdf
skill.md             ← Full design token reference (see this file)
claude.md            ← This file
```
