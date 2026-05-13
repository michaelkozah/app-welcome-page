---
name: Zahle App — Brand Identity & Design System
description: Complete brand + design system for the Zahle App marketing website and mobile app.
type: reference
---

# Zahle App — Brand Identity & Design System

This is the single source of truth for anything visual, verbal, or interactive across Zahle App properties (website, mobile app, social, marketing collateral). Every design decision should trace back to this document. If the code diverges from this spec, update one or the other — never let them drift.

> **Audience:** Designers, front-end engineers, marketers, contributors.
> **Project:** Marketing site for Zahle App ([App Store](https://apps.apple.com/lb/app/zahle/id6760541995)) + business listing sales funnel.
> **Stack:** Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · TypeScript · GSAP · Framer Motion · Lucide React · Deployed on Vercel.

---

## Table of Contents

1. [Brand Essence](#1-brand-essence)
2. [Voice & Tone](#2-voice--tone)
3. [Logo & Wordmark](#3-logo--wordmark)
4. [Color Palette](#4-color-palette)
5. [Typography](#5-typography)
6. [Spacing System](#6-spacing-system)
7. [Border Radius](#7-border-radius)
8. [Shadows & Elevation](#8-shadows--elevation)
9. [Borders & Dividers](#9-borders--dividers)
10. [Glass / Frosted Effects](#10-glass--frosted-effects)
11. [Gradients & Ambient Glows](#11-gradients--ambient-glows)
12. [Physical Materials (Skeuomorphic)](#12-physical-materials-skeuomorphic)
13. [Animations & Transitions](#13-animations--transitions)
14. [Iconography](#14-iconography)
15. [Component Patterns](#15-component-patterns)
16. [Layout Patterns](#16-layout-patterns)
17. [Hero & Section Templates](#17-hero--section-templates)
18. [Phone Mockup Pattern](#18-phone-mockup-pattern)
19. [Film Grain & Texture](#19-film-grain--texture)
20. [Responsive Breakpoints](#20-responsive-breakpoints)
21. [Content Guidelines](#21-content-guidelines)
22. [SEO & Metadata](#22-seo--metadata)
23. [Asset Inventory](#23-asset-inventory)
24. [Do's and Don'ts](#24-dos-and-donts)

---

## 1. Brand Essence

### The Idea
Zahle App is a city guide for **Zahlé, Lebanon** — the third-largest city in the country, a **UNESCO City of Gastronomy**, known as **"The Bride of the Bekaa."** The brand blends Zahlé's two defining textures: **wine heritage** (depth, warmth, craft) and **Mediterranean hospitality** (warmth, openness, generosity).

### Brand Pillars
| Pillar | Meaning |
|---|---|
| **Warm** | Hospitality-first. Cream backgrounds, soft shadows, generous spacing. |
| **Premium** | Boutique wine-label feel — not corporate, not startup. Physical, tactile materials. |
| **Proud** | We love Zahlé. We celebrate it without boasting. |
| **Cinematic** | Scroll is choreographed. Animations have weight and rhythm. |
| **Mobile-first** | Many users will visit on an iPhone. Everything must breathe on a small screen. |

### The One-Liner
> *Your city, one app. The Bride of the Bekaa, in your pocket.*

---

## 2. Voice & Tone

### Voice Attributes
- **Proud, not boastful** — "Zahlé is Lebanon's third-largest city" ✅ · "The best city in the world" ❌
- **Warm, not casual** — "Discover the heart of Zahlé" ✅ · "Yo, check out Zahlé!" ❌
- **Poetic in moments** — Italic gold phrases earn their place: *"of the Bekaa"*, *"in your pocket"*, *"open the app"*.
- **Direct in UI** — Buttons, labels, and CTAs are plain and action-oriented: "Get Listed", "Download on the App Store", "Explore More".
- **Bilingual awareness** — Primary language is English. Audience is Lebanese. Arabic version may come later; don't hard-code English-only idioms.

### Signature Phrases (Reusable)
- "The Bride of the Bekaa"
- "UNESCO City of Gastronomy"
- "Your city, one app."
- "Your pocket guide to Zahlé."
- "The city is watching. Are you listed?"
- "Six reasons to open the app."
- "Discover the heart of Zahlé, Lebanon."

### Name Usage
- **Brand name**: "Zahle App" (no accent — this is the product's proper noun).
- **City name in body copy**: "Zahlé" (with the acute accent).
- **Never** mix — don't write "Zahlé App" or "Zahle" as the city.

### Restaurant / Business Descriptions
When writing listings or marketing copy about a business:
- 2–3 paragraphs, ~150–200 words
- Mention location, cuisine type, standout dishes, atmosphere
- Include practical info: hours, phone, price range
- Honest and balanced — don't oversell

---

## 3. Logo & Wordmark

### Primary Logo
`/public/Zahleapp logo new.jpg` — the app icon. Always use the official file; never recreate.

### Logo Usage
| Context | Treatment |
|---|---|
| Navbar | 28×28px, `rounded-full` |
| Footer | 32×32px, `rounded-lg`, paired with "Zahle App" wordmark |
| Favicon | `src/app/favicon.ico` |
| Hero (cinematic) | No logo — the `ZAHLÉ` wordmark is set in Playfair Display Black, uppercase, with a gold→cream gradient clip ("text-card-gold-matte") |

### Wordmark Recipe (Hero)
```tsx
<h2 className="text-6xl md:text-[6rem] lg:text-[8rem] font-black uppercase tracking-tighter text-card-gold-matte">
  Zahlé
</h2>
```
Where `.text-card-gold-matte` applies a `linear-gradient(180deg, #D4A957 0%, #E8C97A 100%)` clipped to the text, with a deep drop-shadow for "metallic" depth.

### Clearspace
- Minimum padding around the logo: 0.5× the logo's shortest edge.
- Never crop, rotate, recolor, or outline the JPG.

---

## 4. Color Palette

### Source of Truth
Colors are declared as CSS custom properties inside `@theme inline { ... }` in `src/app/globals.css`. Tailwind v4 picks these up automatically — **there is no `tailwind.config.ts`** in this project.

```css
@theme inline {
  --color-background: #FDF8F0;
  --color-foreground: #3A3632;
  --color-muted-foreground: #8A8580;
  --color-wine: #6B1D3A;
  --color-wine-light: #8B2D52;
  --color-wine-dark: #4A1228;
  --color-gold: #D4A957;
  --color-gold-light: #E8C97A;
  --color-cream: #FDF8F0;
  --color-cream-dark: #F5EDE0;
  --color-stone: #3A3632;
  --color-stone-light: #5A5550;
  --color-stone-muted: #8A8580;
  --color-primary: #6B1D3A;
  --color-primary-foreground: #FFFFFF;
  --color-ring: #D4A957;
}
```

### Primary — Wine
The brand's core color. Use for primary actions, dark heroes, emphasis.

| Token | Hex | Usage |
|-------|-----|-------|
| `wine` | `#6B1D3A` | Primary buttons, headings, active states, hero backgrounds |
| `wine-light` | `#8B2D52` | Hover states, gradient starts, lighter accents |
| `wine-dark` | `#4A1228` | Button text on gold, deep gradient ends, pressed states |

### Accent — Gold
The highlight color. Use for CTAs, badges, shimmer text, premium moments.

| Token | Hex | Usage |
|-------|-----|-------|
| `gold` | `#D4A957` | CTA buttons, badges, check marks, accent text, progress rings |
| `gold-light` | `#E8C97A` | Gradient ends, hover states, lighter accents |

### Neutrals
| Token | Hex | Usage |
|-------|-----|-------|
| `cream` | `#FDF8F0` | Page backgrounds, light sections |
| `cream-dark` | `#F5EDE0` | Alternate section bg, input fills, CTA section bg |
| `stone` | `#3A3632` | Body text, headings, primary foreground |
| `stone-light` | `#5A5550` | Secondary text, descriptions |
| `stone-muted` | `#8A8580` | Placeholder text, labels, tertiary info |

### Deep Wine (Hero Card)
The skeuomorphic hero card uses a deeper gradient not in the token list:
`linear-gradient(145deg, #6B1D3A 0%, #2A0C17 100%)` — reference as `#2A0C17` inline only; do not add it to the token set.

### Usage Rules
- **Light sections** → cream or white backgrounds, stone text.
- **Dark sections** → wine gradient backgrounds, white/gold text.
- **Never** use pure black `#000` for text — use `stone` `#3A3632`.
- **Never** use pure white `#FFF` for page backgrounds — use `cream` `#FDF8F0`. (Pure white IS fine inside cards to create contrast against cream.)
- **Gold** is always the CTA color on light backgrounds.
- On wine backgrounds, white text uses opacity levels:
  - `text-white` → hero headlines
  - `text-white/60` → body copy
  - `text-white/50` → small labels, subtle accents
  - `text-white/35` or `/30` → tertiary info, fine print
  - `text-white/10` → decorative quote marks, ghost elements
- **Gold on wine** uses opacity too: `text-gold/60` for body labels, `text-gold/30` for dividers, `text-gold/10` for huge decorative type.
- Do **not** put gold text on gold backgrounds. Do **not** put wine text on wine backgrounds.

---

## 5. Typography

### Fonts
Loaded via `next/font/google` in `src/app/layout.tsx` and exposed as CSS variables:

| Role | Font | CSS Var | Weight Range | Fallback |
|---|---|---|---|---|
| Display (h1–h3) | **Playfair Display** | `--font-playfair` → `--font-display` | 700 (Bold), 900 (Black) | Georgia, serif |
| Body (everything else) | **DM Sans** | `--font-dm-sans` → `--font-body` | 400–700 | system-ui, sans-serif |

`body` defaults to `--font-body`; `h1, h2, h3` default to `--font-display` via `globals.css`.

### Size Scale (Responsive via `clamp()`)
All hero and section titles use `clamp()` for fluid scaling. Don't invent new sizes — reuse these.

| Element | Size | Example |
|---|---|---|
| Hero display (giant) | `text-6xl md:text-[6rem] lg:text-[8rem]` | "ZAHLÉ" wordmark |
| Hero headline | `clamp(34px, 5.5vw, 64px)` | "The city is watching." |
| Hero secondary | `clamp(32px, 5vw, 56px)` | "Your pocket guide to Zahlé." |
| Section title | `clamp(28px, 4vw, 42px)` | "A City Worth Discovering" |
| Large section title | `clamp(32px, 5vw, 56px)` | "Six reasons to open the app." |
| Pricing H1 | `clamp(34px, 5.5vw, 58px)` | "Get your business in front of Zahlé." |
| Card title | `text-xl` → `text-3xl` (18–30px) | "Local News" |
| Body text | `text-base` to `text-lg` (15–18px) | Paragraphs |
| Small body | `text-sm` / `text-[15px]` (13–15px) | Feature descriptions |
| Button text | `text-sm` to `text-base` (13–16px) | "Get Listed" |
| Label / badge | `text-[10px]` to `text-xs` uppercase | "POPULAR", "FOR BUSINESSES" |
| Phone UI micro | `text-[8px]` to `text-[10px]` | Inside phone mockups |

### Font Weights
| Weight | Name | Use |
|---|---|---|
| 900 | Black | Big numbers (150K, $65), hero wordmark, decorative ghost numerals |
| 700–800 | Bold / Extrabold | Section titles, card headings, footer brand |
| 600 | Semibold | Uppercase labels, CTA buttons, emphasized body |
| 500 | Medium | Nav links, form labels, general emphasis |
| 400 | Regular | Body paragraphs, descriptions |

### Line Heights
| Context | Value |
|---|---|
| Giant display | `leading-none` (1) |
| Hero headlines | `leading-[1.02]` – `leading-[1.1]` |
| Section titles | `leading-[1.05]` – `leading-tight` |
| Body copy | `leading-relaxed` (1.625) to `leading-[1.9]` (generous) |
| UI elements | `leading-tight` – `leading-normal` |

### Letter Spacing
| Context | Value |
|---|---|
| Hero / giant display | `tracking-tighter` (-0.05em) or `tracking-tight` (-0.025em) |
| Card headings | `tracking-tight` |
| Uppercase labels | `tracking-[1.5px]` – `tracking-[2.5px]` |
| Body | default (0) |

### Signature Styles
**Italic gold accent** — used for the memorable half of a headline:
```tsx
<h2>The Bride<br/><span className="italic text-gold">of the Bekaa.</span></h2>
<h1>Discover the heart of<br/><span className="text-wine italic">Zahlé, Lebanon.</span></h1>
```

**Shimmer gold gradient text** — for premium hero moments. The gradient has 4 stops to create a moving shine:
```css
background: linear-gradient(90deg, #D4A957 0%, #E8C97A 30%, #D4A957 60%, #E8C97A 100%);
background-size: 200% auto;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
animation: shimmer 4s linear infinite;

@keyframes shimmer {
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
}
```

**Ghost numerals** — giant translucent type behind section content, for editorial/magazine feel:
```tsx
<span className="font-display text-[8rem] sm:text-[12rem] lg:text-[16rem] font-black text-stone/[0.03] leading-none absolute -top-8 sm:-top-14 lg:-top-20 -left-2 select-none pointer-events-none">
  Features
</span>
```
Opacity stays between 3–6%; never use this decoratively in a way that interferes with readability.

---

## 6. Spacing System

### Section Padding (Vertical)
| Size | Classes | Usage |
|---|---|---|
| Small | `py-12 sm:py-16` | Compact sections, pricing header |
| Medium | `py-16 sm:py-24` | Standard sections |
| Large | `py-20 sm:py-28 lg:py-36` | Hero sections, major CTAs |
| Extra large | `py-24 sm:py-32 lg:py-44` | Statement sections (BusinessCTA) |
| Full-viewport | `h-screen` | Cinematic hero, StatsGallery |

### Container
- Standard max width: `max-w-5xl` (for narrow editorial sections)
- Wide max width: `max-w-7xl` (for feature grids, hero interior)
- Horizontal padding: `px-4 sm:px-6 lg:px-8`

### Component Internal Padding
| Element | Padding |
|---|---|
| Card (standard) | `p-6 sm:p-8` |
| Card (large) | `p-8 sm:p-10 lg:p-12` |
| Card (hero-scale) | `px-8 sm:px-14 lg:px-20 py-14 sm:py-20 lg:py-24` |
| Button (standard) | `px-4 py-2` → `px-5 py-2.5` |
| Button (large CTA) | `px-8 py-3.5` → `px-10 py-4` |
| Pill button (nav) | `pl-4 pr-1.5 py-1` |
| Pill (animated icon) | `h-14 p-1 ps-8 pe-16` (space reserved for sliding icon) |
| Badge / pill | `px-3 py-1` → `px-5 py-2` |
| Input | `px-4 py-3` |

### Gap Values
| Context | Gap |
|---|---|
| Icon + text | `gap-1.5` – `gap-2` |
| Standard inline | `gap-3` – `gap-4` |
| Cards in grid | `gap-4 sm:gap-5` |
| Section elements | `gap-6` – `gap-8` |
| Split layouts | `gap-12 lg:gap-20` |
| Zigzag rows | `space-y-16 sm:space-y-20 lg:space-y-32` |

---

## 7. Border Radius

| Token | Value | Usage |
|---|---|---|
| `rounded-full` | 9999px | Pills, badges, nav bar, buttons, avatars, circular icons |
| `rounded-[2rem]` | 32px | Hero interactive cards (BusinessCTA) |
| `rounded-3xl` | 24px | Major cards, pricing cards, form cards |
| `rounded-2xl` | 16px | Standard cards, feature items, inputs, badges |
| `rounded-xl` | 12px | Buttons, small cards, icon containers |
| `rounded-lg` | 8px | Small elements, logo image |

### Rule of Thumb
- Outer containers: `rounded-2xl sm:rounded-3xl`
- Inner elements: `rounded-xl`
- Pills & badges: `rounded-full`
- **Never** use sharp corners anywhere — minimum `rounded-lg`.
- The iPhone mockup uses `rounded-[3rem]` for the bezel and `rounded-[2.5rem]` for the inner screen.

---

## 8. Shadows & Elevation

### Cards on Light Backgrounds
```css
/* Standard resting card */
box-shadow: 0 4px 24px -4px rgba(0,0,0,0.04);

/* Hover */
box-shadow:
  0 20px 60px -15px rgba(0,0,0,0.06),
  0 4px  20px -4px  rgba(0,0,0,0.03);

/* Elevated (popular pricing tier) */
box-shadow:
  0 30px 60px -15px rgba(74,18,40,0.2),
  0 10px 20px -10px rgba(0,0,0,0.15);
```

### Cards on Dark Backgrounds
```css
/* Premium wine card (BusinessCTA) */
box-shadow:
  0 50px 100px -30px rgba(74,18,40,0.6),
  0 20px 40px  -20px rgba(0,0,0,0.4),
  inset 0 1px 0 rgba(255,255,255,0.08);

/* Deep physical card (hero) */
box-shadow:
  0 40px 100px -20px rgba(0, 0, 0, 0.9),
  0 20px 40px  -20px rgba(0, 0, 0, 0.8),
  inset 0 1px  2px   rgba(255, 255, 255, 0.15),
  inset 0 -2px 4px   rgba(0, 0, 0, 0.8);

/* Glass card on wine */
box-shadow:
  0 25px 60px -15px rgba(0,0,0,0.5),
  0 10px 20px -10px rgba(0,0,0,0.3),
  inset 0 1px 1px rgba(255,255,255,0.06);
```

### Gold CTA Button
```css
/* Resting */
box-shadow:
  0 0 40px -5px rgba(212,169,87,0.4),
  0 15px 30px -10px rgba(0,0,0,0.3);

/* Hover (lift + brighter glow) */
box-shadow:
  0 0 40px -5px rgba(212,169,87,0.5),
  0 12px 40px -4px rgba(0,0,0,0.4);
```

### Navbar on Scroll
```css
box-shadow: 0 10px 15px -3px rgba(0,0,0,0.04);
```

### iPhone Mockup
```css
box-shadow:
  inset 0 0 0 2px #52525B,          /* bezel inner ring */
  inset 0 0 0 7px #000,              /* inner black bezel */
  0 40px 80px -15px rgba(0,0,0,0.9), /* drop */
  0 15px 25px -5px rgba(0,0,0,0.7);  /* near drop */
```

### Elevation Scale (mental model)
1. **Ground** — no shadow, sits on background (labels, dividers).
2. **Resting** — `0 4px 24px -4px rgba(0,0,0,0.04)` (cards, inputs).
3. **Hover** — ~5× y-offset, slightly larger blur.
4. **Interactive hero** — dramatic multi-layer shadow with inset highlight.
5. **Phone mockup** — extreme depth with inset bezel + outer drop.

---

## 9. Borders & Dividers

| Context | Border |
|---|---|
| Card on light bg | `border border-stone/[0.06]` (nearly invisible) |
| Card on dark bg | `border border-white/[0.06]` – `border-white/[0.08]` |
| Highlighted card | Gradient border wrapper (see technique below) |
| Input field | `border border-stone/[0.06]` → `focus:border-wine/20` |
| Divider (horizontal) | `h-px bg-gradient-to-r from-transparent via-stone/10 to-transparent` |
| Gold top accent | `h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent` |
| Navbar outline | `border border-stone/[0.08]` on scroll; transparent at rest |
| Vertical nav divider | `w-px h-5 bg-stone/10` |

### Gradient Border Technique (featured cards)
```tsx
{/* Outer wrapper = gradient background */}
<div className="rounded-3xl p-[1px] bg-gradient-to-b from-gold/50 via-gold/15 to-transparent">
  {/* Inner = solid bg */}
  <div className="rounded-3xl bg-white">
    …
  </div>
</div>
```
Used for the "Most Popular" pricing tier and other elevated cards.

### Interactive Glowing Border (BusinessCTA)
The outer border of the BusinessCTA card responds to the cursor by painting a radial gradient onto a sibling div that sits inside a `rounded-[2rem] p-[1px]` wrapper:
```js
border.style.background = `radial-gradient(350px circle at ${x}px ${y}px,
  rgba(212,169,87,0.5), rgba(212,169,87,0.06) 45%, transparent 65%)`;
```

---

## 10. Glass / Frosted Effects

### Light Glass (Navbar, Mobile Menu)
```css
background: rgba(255, 255, 255, 0.92);
backdrop-filter: blur(20px) saturate(180%);
-webkit-backdrop-filter: blur(20px) saturate(180%);
border: 1px solid rgba(58, 54, 50, 0.08);
```
Rest state at 0.7 opacity, scrolled state at 0.92.

### Dark Glass (Floating badges over wine / dark bg)
```css
background: rgba(255, 255, 255, 0.06);
backdrop-filter: blur(24px);
-webkit-backdrop-filter: blur(24px);
border: 1px solid rgba(255, 255, 255, 0.08);
```

### Subtle Glass (Content cards on dark bg — AboutOption1)
```css
background: rgba(255, 255, 255, 0.07);
backdrop-filter: blur(4px);
border: 1px solid rgba(255, 255, 255, 0.08);
box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
```

### Floating UI Badge (tinted wine glass on hero)
Reusable class `.floating-ui-badge`:
```css
background: linear-gradient(135deg, rgba(107, 29, 58, 0.3) 0%, rgba(74, 18, 40, 0.15) 100%);
backdrop-filter: blur(24px);
box-shadow:
  0 0 0 1px rgba(212, 169, 87, 0.15),
  0 25px 50px -12px rgba(0, 0, 0, 0.8),
  inset 0 1px 1px rgba(255,255,255,0.15),
  inset 0 -1px 1px rgba(0,0,0,0.5);
```

---

## 11. Gradients & Ambient Glows

### Wine Gradients
```css
/* Standard wine section */
background: linear-gradient(to bottom-right, #8B2D52, #6B1D3A, #4A1228);
/* Tailwind:  bg-gradient-to-br from-wine-light via-wine to-wine-dark  */

/* Deeper "crushed velvet" card */
background: linear-gradient(145deg, #8B2D52 0%, #6B1D3A 40%, #4A1228 100%);

/* Hero interactive card (premium-depth-card) */
background: linear-gradient(145deg, #6B1D3A 0%, #2A0C17 100%);

/* Feature dots */
background: linear-gradient(135deg, #6B1D3A 0%, #8B2D52 100%);
```

### Gold Gradients
```css
/* Standard CTA */
background: linear-gradient(to right, #D4A957, #E8C97A);
/* Tailwind: bg-gradient-to-r from-gold to-gold-light */

/* Vertical metallic (wordmark) */
background: linear-gradient(180deg, #D4A957 0%, #E8C97A 100%);

/* Shimmer (animated) */
background: linear-gradient(90deg, #D4A957 0%, #E8C97A 30%, #D4A957 60%, #E8C97A 100%);
background-size: 200% auto;
```

### Ambient Glow Orbs
Place large, blurred, low-opacity circles behind content to create "atmosphere":
```css
/* Gold glow */
background: rgba(212, 169, 87, 0.04);
border-radius: 50%;
filter: blur(120px);

/* Wine glow */
background: rgba(107, 29, 58, 0.06);
border-radius: 50%;
filter: blur(150px);
```
Typical sizes: 400–800px. Always `pointer-events-none`.

### Mouse-Following Spotlight (BusinessCTA card)
```js
glow.style.background = `
  radial-gradient(500px circle at ${x}px ${y}px, rgba(212,169,87,0.15), transparent 40%),
  radial-gradient(800px circle at ${x}px ${y}px, rgba(107,29,58,0.08),  transparent 50%)
`;
```
Layer gold (inner, tighter) + wine (outer, broader). Reset with a 600ms ease-out transition on mouse-leave.

### Background Grid (Hero)
Faint 60×60 grid with a radial mask — only visible near the edges:
```css
background-size: 60px 60px;
background-image:
  linear-gradient(to right, color-mix(in srgb, var(--color-foreground) 5%, transparent) 1px, transparent 1px),
  linear-gradient(to bottom, color-mix(in srgb, var(--color-foreground) 5%, transparent) 1px, transparent 1px);
mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
```

---

## 12. Physical Materials (Skeuomorphic)

The hero and key CTA sections use **tactile, physical materials** — not flat UI. These classes live inline in `cinematic-landing-hero.tsx` as an injected `<style>` block. They are the "wow" moments of the brand.

### `.premium-depth-card` — Wine leather card
Wine gradient bg, heavy outer shadow + inner highlight + inner shadow for depth, hairline gold border.

### `.card-sheen` — Moving light on card
Radial gradient that follows the mouse (`--mouse-x`, `--mouse-y`), `mix-blend-mode: screen`, very subtle gold light.

### `.text-3d-matte` — Matte ink headline
Foreground color text with layered text-shadow (20% + 10%) for "embossed print" depth on cream.

### `.text-silver-matte` — Silvery headline
Vertical foreground-to-transparent gradient clipped to text, with two drop-shadows (15% + 10%) for brushed-metal look.

### `.text-card-gold-matte` — Metallic gold wordmark
Gold-to-gold-light vertical gradient clipped to text, with heavy black drop-shadows (80% + 60%) for gilded lettering on a wine card.

### `.iphone-bezel` — Realistic iPhone frame
Double-inset box-shadow mimics the titanium ring + inner black bezel + drop shadow.

### `.hardware-btn` — Side buttons of iPhone mockup
Vertical metallic gradient with left/right inner highlights/shadows.

### `.screen-glare` — Glass reflection
Diagonal white gradient at 110° with 8% peak opacity, overlaid on the phone screen.

### `.widget-depth` — Inset widget inside phone
Very subtle white gradient bg, inset highlight top + shadow bottom — makes widgets feel pressed into the dark screen.

### `.btn-modern-gold` / `.btn-modern-light` — Tactile buttons
Vertical surface gradient, hairline border, drop shadow + inner highlight (top) + inner shadow (bottom). Hover lifts 3px + deepens shadow. Active presses down 1px + flips inner shadow to top.

### `.progress-ring` — Gold completion ring
SVG circle rotated -90°, stroke-dasharray = circumference (402), animated via GSAP to fill as the counter counts up.

---

## 13. Animations & Transitions

### Animation Libraries
- **GSAP + ScrollTrigger** (`gsap`) — the cinematic hero's scroll timeline. Use for complex, choreographed sequences.
- **Motion / Framer Motion** (`motion`) — for component-level motion (hero gallery scroll).
- **Native CSS + vanilla IntersectionObserver-style scroll handlers** — for straightforward scroll reveals on sections like `FeaturesSection`, `AboutOption1`, `BusinessCTA`, `DownloadCTA`.

### Transition Defaults
| Context | Duration | Easing |
|---|---|---|
| Color / opacity | `200ms` | `ease` |
| Hover states | `300ms` | `ease` |
| Layout shifts | `500ms` | `cubic-bezier(0.25, 1, 0.5, 1)` |
| Scroll reveal content | `700–800ms` | `ease-out` |
| Complex morph (mockup enter) | `1000–1500ms` | `cubic-bezier(0.25, 1, 0.5, 1)` |
| GSAP intro | `1.4–1.8s` | `expo.out`, `power4.inOut` |
| Mouse-leave reset | `800ms` | `cubic-bezier(0.25, 1, 0.5, 1)` |

### Hover Effects (default recipes)
- **Cards (light)** — `hover:shadow-lg hover:-translate-y-0.5`
- **Cards (interactive)** — 3D tilt up to ±3deg, scale 1.01, mouse-following spotlight
- **Buttons (gold CTA)** — `hover:scale-[1.02]` or physical lift via `transform: translateY(-3px)`
- **Buttons (animated icon)** — text slides left while circular icon slides right + rotates 45deg (500ms)
- **Links** — color to `wine`
- **Icon containers** — background opacity +5–10%

### Scroll-Entry Recipes
1. **Fade-up** (most common):
   ```css
   opacity: 0 → 1;
   translateY: 30px → 0;
   /* 0.8s ease-out, triggers at 60–65% viewport */
   ```
2. **Scale-in (spring)**:
   ```css
   scale: 0 → 1;
   /* 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) */
   ```
3. **Stagger** — each child delays 150–300ms after the previous.
4. **SVG line draw** — `stroke-dasharray: totalLength; stroke-dashoffset: totalLength * (1 - progress)`, progress driven by scroll position (see `FeaturesSection`, `AboutOption1`).

### Keyframes (define once, reuse)
```css
@keyframes shimmer {
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes floatParticle {
  0%, 100% { transform: translate(0, 0); }
  25%      { transform: translate(15px, -20px); }
  50%      { transform: translate(-10px, -35px); }
  75%      { transform: translate(20px, -15px); }
}
/* Duration: 8–20s random, ease-in-out, infinite */
```

### Floating Particles (BusinessCTA)
20 small gold dots (1–4px, opacity 3–18%) randomly placed, each with `floatParticle` animation at a random 8–20s duration and random negative delay. Creates ambient drift without being distracting.

### Cinematic Hero Timeline (reference order)
The hero's scroll-pinned GSAP timeline, for anyone extending it:
1. **Intro** — taglines fade + clip-reveal.
2. **Scroll 0** — background text blurs + scales, main wine card rises from bottom of screen.
3. **Scroll 1** — card expands to fill viewport, becomes square-cornered.
4. **Scroll 2** — iPhone mockup emerges (3D rotate + scale), widgets stagger in, progress ring fills, counter counts to 150.
5. **Scroll 3** — floating badges spring in, left/right text slide in.
6. **Scroll 4** — card pulls back, CTA ("Explore Zahlé today.") becomes visible.
7. **Scroll 5** — card exits upward, user continues to `FeaturesSection`.

**Important:** pin duration is `+=4000` (pixels of scroll) with `scrub: 1`. Don't shorten without re-pacing the beats.

---

## 14. Iconography

### Library: Lucide React
`lucide-react` is the ONLY icon library used. Never mix in Heroicons, Font Awesome, React Icons, etc.

### Icons in the Current Site
| Icon | Used In | Purpose |
|---|---|---|
| `Newspaper` | FeaturesSection | Local News |
| `UtensilsCrossed` | FeaturesSection | Restaurants & Cafés |
| `CalendarDays` | FeaturesSection | Events |
| `MapPin` | FeaturesSection, StatsGallery | Explore Places / Listings |
| `Landmark` | FeaturesSection, StatsGallery | City Info / UNESCO |
| `Star` | FeaturesSection, StatsGallery | Curated Picks / Ratings |
| `Users` | StatsGallery | Residents count |
| `ArrowUpRight` | BusinessCTA | Primary CTA icon |
| `Check` | pricing page | Feature list |
| `Mail` | Footer | Email link |
| `ExternalLink` | Footer | External links |
| `Menu` / `X` | Navbar | Mobile menu toggle |

### Icon Sizes
| Context | Size |
|---|---|
| Navbar / inline micro | 12–14 |
| Feature list check | 14–16 |
| Standard UI icon | 16–18 |
| Large feature icon | 20–24 |

### Icon Containers

**Small (inline)** — 40×40 rounded-xl, subtle wine tint:
```tsx
<div className="w-10 h-10 rounded-xl bg-wine/[0.05] flex items-center justify-center">
  <Icon size={16} className="text-wine" />
</div>
```

**Large (feature)** — 56–64px rounded-2xl, wine or gold-gradient bg:
```tsx
<div
  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-lg"
  style={{
    background: "linear-gradient(135deg, #6B1D3A 0%, #8B2D52 100%)",
    boxShadow: "0 8px 32px rgba(107,29,58,0.3)",
  }}
>
  <Icon size={24} className="text-gold" />
</div>
```

**Inside phone mockup** — 40×40 `rounded-xl`, gold-tint gradient with gold/20 border, inner shadow.

### Icon-in-Pill CTA (Navbar "Get Listed")
```tsx
<Link className="flex items-center gap-1.5 bg-wine text-white pl-4 pr-1.5 py-1 rounded-full">
  Get Listed
  <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center">
    <ArrowIcon size={12} />
  </span>
</Link>
```

---

## 15. Component Patterns

### Buttons

**Primary — Gold CTA (gradient)**
```tsx
<button className="bg-gradient-to-r from-gold to-gold-light text-wine-dark font-semibold rounded-xl px-8 py-3.5 shadow-[0_0_40px_-5px_rgba(212,169,87,0.4),0_15px_30px_-10px_rgba(0,0,0,0.3)] hover:scale-[1.02] transition-transform">
  Get Your Business Listed
</button>
```

**Primary — Animated Icon Pill** (BusinessCTA)
```tsx
<Button className="relative rounded-full h-14 p-1 ps-8 pe-16 group overflow-hidden
  bg-gradient-to-r from-gold to-gold-light text-wine-dark
  transition-all duration-500 hover:ps-16 hover:pe-8">
  <span className="relative z-10 transition-all duration-500">
    Get Your Business Listed
  </span>
  <div className="absolute right-1.5 w-11 h-11 bg-wine-dark text-gold rounded-full
    flex items-center justify-center transition-all duration-500
    group-hover:right-[calc(100%-48px)] group-hover:rotate-45">
    <ArrowUpRight size={18} />
  </div>
</Button>
```
On hover: text slides left, icon circle slides right + rotates 45°. 500ms, `duration-500`.

**Secondary — Ghost/Stone**
```tsx
<button className="bg-stone/[0.04] border border-stone/[0.08] text-stone font-semibold rounded-xl px-5 py-2.5 hover:bg-stone hover:text-white hover:border-stone transition-colors">
  Secondary
</button>
```

**Nav CTA — Wine Pill** (with trailing arrow circle) — see Iconography section.

**App Store Button (hero skeuomorphic)** — `.btn-modern-gold`. See Physical Materials.

**App Store Button (flat, on dark bg)** — DownloadCTA:
```tsx
<a className="inline-flex items-center gap-3 bg-white text-stone px-6 py-3.5 rounded-2xl hover:scale-105 transition-all"
   style={{boxShadow: "0 8px 30px -4px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)"}}>
  <svg ...apple logo.../>
  <div className="text-left">
    <div className="text-[10px] font-medium tracking-wider text-stone-muted uppercase leading-none">Download on the</div>
    <div className="text-lg font-bold leading-tight tracking-tight">App Store</div>
  </div>
</a>
```

### Cards

**Standard Card (Light)**
```
bg-white
rounded-2xl sm:rounded-3xl
border border-stone/[0.06]
p-6 sm:p-8
shadow: 0 4px 24px -4px rgba(0,0,0,0.04)
hover: shadow-lg -translate-y-0.5
```

**Featured Card (gradient border)** — see §9 Gradient Border Technique. Used for "Most Popular" pricing.

**Interactive 3D Card** (BusinessCTA) — wine gradient, 3D tilt on mouse move, layered spotlight glow, animated border, floating particles. Reset smoothly on mouse-leave.

**Glass Card on Dark** (AboutOption1)
```
bg-white/[0.07] backdrop-blur-sm
rounded-2xl
border border-white/[0.08]
+ inset shadow
+ top edge gold gradient line
```

**Phone widget card (inside iPhone)** — `.widget-depth` class. See Physical Materials.

**Pricing Card (Popular variant)**
- Outer wrapper: `rounded-3xl p-[1px] bg-gradient-to-b from-gold/50 via-gold/15 to-transparent md:-translate-y-4`
- Inner: `rounded-3xl bg-white`
- Gold "POPULAR" badge floated above

### Badges & Pills

**Status Pill with Pulsing Dot** (used on every major CTA)
```tsx
<div className="inline-flex items-center gap-2.5 bg-white/[0.03] border border-white/[0.06] rounded-full px-5 py-2 backdrop-blur-sm">
  <div className="relative">
    <div className="w-2 h-2 rounded-full bg-gold" />
    <div className="absolute inset-0 w-2 h-2 rounded-full bg-gold animate-ping opacity-40" />
  </div>
  <span className="text-white/50 text-xs font-medium tracking-wide">
    Accepting new listings
  </span>
</div>
```

Reusable labels:
- "Accepting new listings" — BusinessCTA
- "Available on iOS" — DownloadCTA
- Always gold dot + ping, always `text-white/50` label on dark.

**Label Badge** (section eyebrow)
```tsx
<span className="text-gold text-xs uppercase tracking-[2.5px] font-semibold">
  What's Inside
</span>
```
Reusable eyebrows: "What's Inside", "About Zahlé", "For Businesses", "Zahlé at a Glance", "Est. centuries ago".

**Rating Strip**
```tsx
<div className="flex items-center gap-3">
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => <StarIcon className="text-gold fill-gold" />)}
  </div>
  <span className="text-white/30 text-xs">5.0 on the App Store</span>
</div>
```

### Form Inputs
```
bg-cream/60
border border-stone/[0.06]
rounded-xl px-4 py-3
text-sm text-stone
placeholder: text-stone-muted/40
focus: ring-2 ring-wine/15 border-wine/20
```

### Navbar (see `src/components/Navbar.tsx`)
- **Pill-shaped** — `h-12 rounded-full` floating glass bar, centered horizontally, `top-0 px-4 pt-4`.
- **Hidden during cinematic hero** — only becomes visible once the hero's `.cinematic-hero-boundary` has scrolled past. Enters with `translate-y-0 duration-500`.
- **Scrolled state** — opacity 0.92 + shadow + hairline border. Rest state 0.7 opacity, no border.
- **Active link** — `text-wine bg-wine/[0.07]`.
- **Inactive link** — `text-stone-muted hover:text-stone hover:bg-stone/[0.04]`.
- **CTA** — wine pill with trailing white-circle arrow.
- **Mobile** — hamburger → dropdown pill card with same glass effect.

### Footer (see `src/components/Footer.tsx`)
- **Framed card layout** — `bg-white rounded-3xl` card inside a max-w-5xl container, with **decorative gold "tape" SVGs** pinned at `-top-4 -left-8` (rotated) and `-top-4 -right-8` (rotated 90°). The tape is the signature detail of the footer and should never be removed.
- Column headers: `uppercase font-display text-xs text-stone-muted tracking-[2px] font-semibold`.
- Link color: `text-stone-muted hover:text-wine transition-colors`.
- Bottom bar: copyright + legal + Mail icon email link. Always `© <currentYear> Progressive SARL. All rights reserved.`

---

## 16. Layout Patterns

### Section Structure (standard)
```
Label (gold, xs, uppercase, tracked)
  ↓
Title (Playfair, bold, clamped, often with <br/> + italic gold second line)
  ↓
Subtitle (stone-muted, base-lg, generous leading)
  ↓
Content
```

### Split Layout (sticky left, scrolling right)
```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
  <div className="lg:sticky lg:top-28 lg:self-start">Left</div>
  <div>Right content (scrollable)</div>
</div>
```

### Magazine Spread (AboutOption1)
```tsx
<section className="bg-gradient-to-br from-wine-dark via-wine to-wine-dark">
  {/* gold "vine" SVG line draws across the top as you scroll */}
  <svg viewBox="0 0 1200 100">
    <path d="M 0 55 C 100 25, ..." stroke="#D4A957" strokeWidth="3" opacity="0.4"/>
  </svg>
  <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
    <div>{/* giant translucent gold quote mark + pull-quote headline + hairline divider */}</div>
    <div>{/* glass card with body copy */}</div>
  </div>
</section>
```
Signature elements: `&ldquo;` at `text-gold/10 text-[10rem]+ font-display font-black` behind the left column; a `h-px w-16 bg-gold/30` hairline beside the date/eyebrow; body copy uses `text-white/60` with `text-gold font-medium` for emphasis words.

### Zigzag Layout (FeaturesSection)
```
Row 1 — left text, right dot icon (on-line)
Row 2 — right text, left dot icon
Row 3 — left text, right dot icon
...
```
An SVG **zigzag path** is drawn in the background (pale ghost + animated wine line). Each row's icon dot animates in (`scale-0 opacity-0` → `scale-100 opacity-100`) when the drawn line reaches it. Each row also has a huge translucent numeral (`01`, `02`, …) behind the text.

### Bento Grid (StatsGallery)
Variable-span cells in a grid that transform from a grid view into a centered card on scroll (uses `motion` / scroll progress):
```
grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4
auto-rows-[140px] sm:auto-rows-[180px]
```
Cells rotate between white, cream, wine, stone backgrounds for visual rhythm.

### Cinematic Hero Boundary
```tsx
<div className="cinematic-hero-boundary">
  <CinematicHero ... />
</div>
```
This class is **meaningful** — the Navbar uses it as the scroll sentinel to decide when to appear. Don't rename it without updating `Navbar.tsx`.

---

## 17. Hero & Section Templates

### Cinematic Hero (landing page, above the fold)
`src/components/ui/cinematic-landing-hero.tsx`. Wrap in `.cinematic-hero-boundary` on the page. Props:
```tsx
<CinematicHero
  brandName="Zahlé"
  tagline1="Discover the heart of"
  tagline2="Zahlé, Lebanon."
  cardHeading="Your city, one app."
  cardDescription={/* React node with gold-highlighted brand mention */}
  metricValue={150}
  metricLabel="Places to Explore"
  ctaHeading="Explore Zahlé today."
  ctaDescription="Download Zahle App and discover..."
  appStoreUrl="https://apps.apple.com/lb/app/zahle/id6760541995"
/>
```
- Fixed `h-screen w-screen`, `overflow-hidden`, `perspective: 1500px`.
- Film grain + grid mask overlays.
- GSAP timeline pinned for 4000px of scroll with `scrub: 1`.

### Features — Zigzag (FeaturesSection)
- 6 features, zigzagging.
- Section header uses the giant "Features" ghost word behind a gold eyebrow + italic-ending title.
- Each feature icon uses a different color/container treatment (wine solid, gold gradient, stone solid, wine-light solid, cream-dark with border, wine gradient). This variety is intentional — do not normalize.

### About — Magazine Spread (AboutOption1)
Dark wine bg, full-width gold vine drawing across the top, giant translucent quote mark, pull-quote headline, glass content card with gold-emphasized phrases ("third-largest city", "UNESCO-designated City of Gastronomy", "150,000 residents", "world-class arak").

### Business CTA (BusinessCTA)
- Cream-dark section.
- Ambient glow orbs + film grain + floating gold particles.
- Interactive wine card (3D tilt + layered spotlight + animated gold border).
- Status pill → huge split headline ("The city is watching." + shimmering gold "Are you listed?") → subdued body → animated-icon gold pill CTA.

### Download CTA (DownloadCTA)
- Full wine bg.
- Left: status pill + split headline ("Your pocket guide" + shimmering gold "to Zahlé.") + white App Store button + 5-star rating row.
- Right: skeuomorphic iPhone mockup floating at `rotate(-3deg)`, with a left floating glass badge ("150+ Places").

### Pricing Page (`/pricing`)
- `bg-cream-dark`.
- Centered header with italic gold headline fragment.
- Three-column grid of cards; middle "Spotlight" card uses gradient border wrapper + `md:-translate-y-4` lift + "POPULAR" badge.
- Features list with gold check icons.
- No contracts / cancel-anytime messaging.

### Legal Pages (`/privacy`, `/terms`)
Narrow (`max-w-3xl`) cream bg, stone body text, Playfair h1, DM Sans body, generous `leading-[1.8]`. Last-updated date visible near top.

---

## 18. Phone Mockup Pattern

Two variants exist — **hero iPhone** (photoreal skeuomorphic) and **DownloadCTA iPhone** (simpler flat-depth). Keep both, use whichever fits the depth of the surrounding section.

### Dimensions
- Hero: `w-[280px] h-[580px] rounded-[3rem]` bezel; `inset-[7px] rounded-[2.5rem]` screen.
- DownloadCTA: `w-[260px] sm:w-[280px] h-[520px] sm:h-[560px] rounded-[3rem]` bezel; `inset-[7px] rounded-[2.5rem]` screen.

### Required Elements
- **Bezel** — `#111` base with `.iphone-bezel` inset shadows (hero) or inline `inset 0 0 0 2px #52525B, inset 0 0 0 7px #000` (simple).
- **Hardware buttons** (hero only) — three left (silent + volume up + volume down) + one right (power).
- **Screen** — dark wine gradient `from-[#1a0a12] to-[#0d0508]`.
- **Screen glare** — diagonal white gradient overlay, `z-30`.
- **Dynamic Island** — `w-[100px] h-[28px] bg-black rounded-full`, top center, `z-40`, with optional pulsing gold dot.
- **Home indicator** — `w-[100-120px] h-[4px] bg-white/15-20 rounded-full`, absolute bottom-center.

### Required App UI (inside the screen)
- **Header row** — "EXPLORE" eyebrow + "Zahlé" title + circular search icon button.
- **Featured content** — either the animated progress ring with counter (hero) or a rating-starred featured card (DownloadCTA).
- **List items** — 2–3 rows of bone/skeleton widgets with tiny colored tiles + placeholder bars.
- **Bottom tab bar** — 4 small squares, first highlighted gold.

### Floating Glass Badges (hero)
Two `.floating-ui-badge` pills placed off the phone's edges:
- **Top-left** — UNESCO City / City of Gastronomy (map pin icon, gold).
- **Bottom-right** — 5.0 Rating / App Store (star icon, gold-light).

---

## 19. Film Grain & Texture

Applied to **dark sections only** to add premium, tactile feel. Never on cream backgrounds.

```tsx
<div
  className="absolute inset-0 opacity-[0.025] pointer-events-none mix-blend-mode-overlay"
  style={{
    backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23n)"/></svg>')`,
  }}
/>
```

Opacity scale:
- Hero card: `0.05` (most prominent)
- Dark section overlays: `0.025` – `0.03`
- Subtle accent: `0.02`

---

## 20. Responsive Breakpoints

Tailwind defaults:

| Breakpoint | Width | Usage |
|---|---|---|
| default | < 640px | Mobile-first base |
| `sm:` | ≥ 640px | Small tablets |
| `md:` | ≥ 768px | Tablets, show desktop navbar |
| `lg:` | ≥ 1024px | Desktop split layouts |
| `xl:` | ≥ 1280px | Rarely used — prefer `lg:` as the widest target |

### Key Responsive Rules
- All hero/section titles use `clamp()` — no fixed px.
- Grids collapse: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`.
- Padding increases by tier: `p-6 sm:p-8 lg:p-10`.
- Giant wordmarks shrink: `text-6xl md:text-[6rem] lg:text-[8rem]`.
- Desktop-only decorations: `hidden md:block` (footer tape, vertical nav dividers).
- Zigzag features go from stacked on mobile to left/right on `lg:`.
- Hero card radius shrinks on mobile: `rounded-[32px] md:rounded-[40px]`.
- Phone mockup scale: `scale-[0.65] md:scale-85 lg:scale-100`.

---

## 21. Content Guidelines

### Copy Principles
- **Lead with the benefit**, not the feature. "Discover the best of Zahlé" > "A directory app".
- **Use short, clean sentences**. Fragment sentences are OK in hero copy ("150,000 residents. Tourists every week. One app.").
- **Italicize the emotional half** of a headline — use the gold italic treatment (§5 Signature Styles).
- **Specific numbers > vague adjectives**. "150K+ residents" > "Lots of people".

### Numbers & Claims (accurate as of April 2026)
- Zahlé population: ~**150,000** (use "150K+" or "150,000").
- App rating: **5.0 on the App Store**.
- Listings: **100+** (aspirational/growing; be honest — don't inflate).
- **UNESCO City of Gastronomy** — always capitalize "City of Gastronomy".
- **Third-largest city in Lebanon** — factual, repeatable.
- **The Bride of the Bekaa** — quote it or italicize on first use; poetic.
- **Berdawni River, Mount Sannine, Bekaa Valley** — real geographic anchors to use in copy.

### Don't Claim
- ❌ Large user numbers — the app launched in March 2026. Say "new app" if the context requires honesty.
- ❌ "Best app in Lebanon" / "#1 app" — no basis.
- ❌ "Free plan" for businesses — there isn't one. Tiers start at $35/month.

### Legal / Entity
- Developer entity: **Progressive SARL**.
- Developer website: **https://progressivelb.com**.
- Contact email: **info@zahleapp.com**.
- Copyright line: **`© <year> Progressive SARL. All rights reserved.`**

---

## 22. SEO & Metadata

### Defaults (layout.tsx)
```ts
title: "Zahle App — Discover Zahlé, Lebanon",
description: "Your city guide to Zahlé. Local news, restaurants, events, and places — all in one app.",
openGraph: {
  title: "Zahle App — Discover Zahlé, Lebanon",
  description: "Your city guide to Zahlé. Local news, restaurants, events, and places — all in one app.",
  type: "website",
}
```

### Per-Page Titles
| Page | Title |
|---|---|
| `/` | Zahle App — Discover Zahlé, Lebanon |
| `/pricing` | List Your Business on Zahle App — Pricing |
| `/about` | About Zahle App — Built for Zahlé |
| `/privacy` | Privacy Policy — Zahle App |
| `/contact` | Contact Us — Zahle App |

### OG Image
1200×630 branded image using wine gradient bg, gold wordmark, tagline. Not yet in repo — TODO.

---

## 23. Asset Inventory

### In Repo
| Path | Purpose |
|---|---|
| `/public/Zahleapp logo new.jpg` | App icon / favicon source |
| `src/app/favicon.ico` | Browser tab icon |

### Source of Truth
| File | Role |
|---|---|
| `src/app/globals.css` | Color tokens, font vars, base styles, `fadeUp` keyframe |
| `src/app/layout.tsx` | Font loading, root metadata, Navbar/Footer shell |
| `src/components/ui/cinematic-landing-hero.tsx` | All skeuomorphic material classes (as injected `<style>`) |
| `src/components/Navbar.tsx` | Navbar behavior + scroll-triggered visibility |
| `src/components/Footer.tsx` | Footer layout + gold tape SVG |
| `CLAUDE.md` | AI/collaborator brief (summarized version of this doc) |

### Dependencies (design-relevant)
- `next` 16.2.1 · `react` 19 · `tailwindcss` 4 (no config file; `@theme inline`)
- `gsap` 3.14 + ScrollTrigger — cinematic hero only
- `motion` 12 (Framer Motion) — scroll gallery
- `lucide-react` — icons
- `class-variance-authority` + `clsx` + `tailwind-merge` — className utilities (`cn()` lives in `src/lib/utils`)
- `@radix-ui/react-slot` — shadcn-style Button

---

## 24. Do's and Don'ts

### Do
- ✅ Use Playfair Display for all headings, DM Sans for everything else.
- ✅ Use wine as the primary brand color, gold as the CTA/accent.
- ✅ Use generous whitespace — cream backgrounds, spacious padding.
- ✅ Use subtle animations — fade-up, hover lift, scroll reveals.
- ✅ Use rounded corners everywhere (minimum `rounded-lg`).
- ✅ Use glass effects on overlapping elements.
- ✅ Use italic gold text for signature phrases.
- ✅ Use gradient borders for featured/elevated elements.
- ✅ Use film grain + ambient glow orbs on dark sections.
- ✅ Use ghost numerals (`01`, `02`) behind editorial content.
- ✅ Use status pills with pulsing gold dots on every major CTA section.
- ✅ Write "Zahlé" (with accent) in body copy; "Zahle App" (no accent) as the brand.

### Don't
- ❌ Don't use pure black (`#000`) or pure white (`#FFF`) for text/page bg.
- ❌ Don't use sharp corners anywhere.
- ❌ Don't use flashy, bouncy, or cartoonish animations — elegance first.
- ❌ Don't use more than 2 font families.
- ❌ Don't put gold text on gold backgrounds, or wine on wine.
- ❌ Don't skip the label → title → subtitle pattern.
- ❌ Don't use shadows heavier than specified on light backgrounds.
- ❌ Don't invent new colors — if you need a variant, derive from wine/gold/stone with opacity.
- ❌ Don't remove the gold tape from the footer — it's a signature detail.
- ❌ Don't rename `.cinematic-hero-boundary` without updating `Navbar.tsx`.
- ❌ Don't claim large user numbers — the app launched March 2026.
- ❌ Don't mix icon libraries (Lucide only).
- ❌ Don't add a `tailwind.config.ts` — this project uses Tailwind v4 with `@theme inline`.
