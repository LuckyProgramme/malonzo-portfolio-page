---
name: Engineering Precision
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#00668a'
  on-secondary: '#ffffff'
  secondary-container: '#40c2fd'
  on-secondary-container: '#004d6a'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#271901'
  on-tertiary-container: '#98805d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#c4e7ff'
  secondary-fixed-dim: '#7bd0ff'
  on-secondary-fixed: '#001e2c'
  on-secondary-fixed-variant: '#004c69'
  tertiary-fixed: '#fcdeb5'
  tertiary-fixed-dim: '#dec29a'
  on-tertiary-fixed: '#271901'
  on-tertiary-fixed-variant: '#574425'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
spacing:
  base: 4px
  gutter: 24px
  margin: 32px
  container-max: 1200px
  section-gap: 96px
---

## Brand & Style

This design system is built for the high-end developer portfolio, emphasizing technical rigor and architectural clarity. The aesthetic is rooted in **Modern Minimalism** with a strong influence from **Technical Documentation**. It prioritizes information density and structural honesty over decorative elements.

The target audience consists of technical recruiters and engineering leads who value precision, performance, and clean code. The UI should evoke a sense of "The IDE as a Canvas"—professional, highly functional, and unmistakably digital. Every element exists for a reason, utilizing whitespace not just for breathing room, but as a deliberate structural tool to separate concerns.

## Colors

The palette is anchored by a sterile, off-white foundation that mimics high-quality digital paper. 

- **Primary (#0F172A):** A deep, authoritative navy used for typography and structural anchors. It provides the "ink" that defines the layout.
- **Secondary (#38BDF8):** A vibrant sky blue reserved for interactive highlights, status indicators, and syntax-style accents. 
- **Neutral (#F8FAFC):** The primary canvas color. It is cool-toned to maintain the technical feel.
- **Stroke/Dividers:** A subtle grey (#E2E8F0) is used to create the "grid" that contains the content.

The color application should be sparse. High contrast is used primarily for readability, while the sky blue is used as a laser-focused call to action or to denote active states in code blocks.

## Typography

The typography strategy employs a "Human-Machine" hybrid approach. 

**Geist** is used for all primary communication. Its geometric, slightly technical curves feel modern and professional without being cold. It handles the narrative sections of the portfolio.

**JetBrains Mono** is the "Machine" layer. It is used for all metadata, labels, tags, and code snippets. This font signals to the user that the information is data-driven or technical. 

- Use **headline-lg** for project titles and major section headers.
- Use **label-caps** for categories, dates, and small UI signifiers.
- All code blocks must use **code-sm** with a slightly reduced line-height for higher information density.

## Layout & Spacing

This design system utilizes a **12-column Fixed Grid** for desktop and a **4-column Fluid Grid** for mobile. 

The layout is built on a 4px baseline grid to ensure mathematical precision in all component sizing. 
- **Gutters:** 24px fixed on desktop to provide clear separation between technical modules.
- **Section Gaps:** Large vertical gaps (96px+) are used to separate major portfolio pieces, allowing each project to feel like its own "module."
- **Alignment:** Content should be strictly left-aligned. Avoid center-alignment to maintain the "documentation" feel. Elements should often "snap" to the grid lines, which can be visually represented by subtle 1px dividers.

## Elevation & Depth

In line with the engineering focus, this design system avoids traditional drop shadows. Depth is communicated through **Low-Contrast Outlines** and **Tonal Layering**.

- **Level 0 (Background):** #F8FAFC. The foundation.
- **Level 1 (Cards/Containers):** White (#FFFFFF) with a 1px solid border (#E2E8F0). No shadow.
- **Level 2 (Interaction):** When an element is hovered or active, replace the border with the secondary sky blue (#38BDF8) or a slightly darker navy.

Use a "Blue-on-White" translucent overlay for modals to maintain the glass-like precision without the blur of typical glassmorphism—think "Blueprint" overlays rather than frosted glass.

## Shapes

The shape language is **strictly sharp (0px)**. 

Curvature is avoided entirely to reinforce the engineering and architectural metaphors. Every button, input field, and card is a perfect rectangle. This creates a sense of "blocks" of code and structural components. 

The only exceptions are small, functional iconography where circles for radio buttons is required for standard UI recognition. All other containers must maintain 90-degree corners.

## Components

### Buttons
Primary buttons use a solid Navy background with White text and 0px border-radius. Secondary buttons use a 1px Navy outline. The sky blue highlight is reserved for "Action Success" or "External Link" signifiers. Hover states should involve a slight background color shift or a thin 1px offset "ghost" border.

### Input Fields
Inputs are defined by a 1px bottom-border only in the default state, becoming a full rectangle on focus. Labels use the `label-caps` typography style and sit directly above the input.

### Cards
Cards are simple white boxes with 1px borders. To differentiate project cards, use a "Header" bar in the card that uses the Primary Navy color, housing the project name in Monospace type.

### Chips / Tags
Tags use the `code-sm` font. They should look like terminal commands (e.g., `--tag-name`). They are styled with a light grey background (#F1F5F9) and no border.

### Progress Indicators
Linear bars only. No circles. Use the sky blue for the fill color to represent "loading" or "skill proficiency" against the off-white background.
