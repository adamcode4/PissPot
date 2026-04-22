# PissPot — DESIGN.md

> Design system for **pisspot.com** and the **PissPot** React Native app.
> Inspired by **discord.com** (Imagine a Place, 2021+ rebrand): playful, expressive, confident, unapologetically fun — but re‑tuned for **nights out**, not gaming. This document is the Source of Truth for humans and AI agents building PissPot surfaces.
> Format inspired by [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md).

---

## 1. Visual Theme & Atmosphere

PissPot feels like **the group chat at 11pm**: loud, warm, unserious, and a little chaotic — but still legible and brand-safe. Discord taught the world that a tech product could be **playful without being childish**; PissPot borrows that tone and points it at drinks, crawls, and crews.

- **Mood**: neon-lit bar window at night, not a dashboard.
- **Density**: low. Big type, generous padding, breathable sections.
- **Rhythm**: sections alternate between **deep night surfaces** and **bright bar-light surfaces** (Discord uses the same dark/light trick to keep scroll momentum).
- **Personality**: copy is lowercase-leaning, short, slightly rude; never lectures; never hustles "maximize your night."
- **Illustration over photo**: sticker-like, thick outlines, optical curves, soft 3D shadows. Zero stock photography.
- **Motion**: small, rewarding, cheap — fade-ups, tiny bobs, a rotating word marquee. Never parallax heavy, never scroll-jacked.

Design philosophy in one line: **a night out UI — never a productivity UI.**

---

## 2. Color Palette & Roles

Discord is anchored on one colour (Blurple). PissPot is anchored on **Grape** with a **Gold** accent for the product's drink/energy metaphor and **Hot Pink** for social/celebratory moments. All roles are semantic; agents should use role names, not raw hex.

### 2.1 Brand

| Token | Hex | Role |
|---|---|---|
| `--pp-grape` | `#7C5CFF` | Primary brand, primary CTA, links, focus rings |
| `--pp-grape-hover` | `#8E72FF` | Primary hover/active |
| `--pp-grape-soft` | `#1F1636` | Brand-tinted surfaces, chips on dark |
| `--pp-gold` | `#F4B942` | Accent 1 — energy, streaks, badges, highlights |
| `--pp-pink` | `#FF4F9A` | Accent 2 — social, reactions, celebratory states |
| `--pp-mint` | `#5BE0B3` | Success / "you're in" / positive confirmations |
| `--pp-red` | `#FF5C5C` | Errors, destructive |

### 2.2 Neutrals (dark-first)

| Token | Hex | Role |
|---|---|---|
| `--pp-ink` | `#07060A` | Page background (deep night) |
| `--pp-surface` | `#0F0E14` | Raised surface / card back |
| `--pp-surface-2` | `#16141F` | Elevated surface / form wells |
| `--pp-border` | `rgba(255,255,255,0.08)` | Hairline dividers |
| `--pp-text` | `#F4F2FF` | Primary text on dark |
| `--pp-muted` | `#9D96B8` | Secondary text, captions |

### 2.3 Bright surfaces (for alternating sections)

| Token | Hex | Role |
|---|---|---|
| `--pp-cream` | `#FFF6E6` | Warm light section (bar-light feel) |
| `--pp-cream-ink` | `#1A0B2E` | Text on cream |
| `--pp-cream-muted` | `#5A4A76` | Secondary text on cream |

### 2.4 Gradients & effects

- **`gradient-brand`**: `linear-gradient(135deg, #7C5CFF 0%, #FF4F9A 100%)` — hero CTA emphasis, wordmark sweeps.
- **`gradient-late-night`**: `radial-gradient(60% 50% at 50% 0%, rgba(124,92,255,0.35), transparent 60%)` — hero ambient glow.
- **`gradient-golden-hour`**: `linear-gradient(135deg, #F4B942 0%, #FF4F9A 60%, #7C5CFF 100%)` — marketing moments only.
- **`glow-grape`**: `0 0 80px -12px rgba(124,92,255,0.55)` — pinned on primary CTA.

**Rule**: never more than two brand colors in the same viewport. Grape leads, Gold or Pink supports. Mint is reserved for "you're on the list" style confirmations.

---

## 3. Typography Rules

Discord commissioned **Ginto Nord** (tight, expressive, lowercase-friendly display) paired with **ABC Ginto Normal** for body. PissPot uses free substitutes that mirror those characteristics.

- **Display**: **Bricolage Grotesque** (variable, optical size + width). Playful, slightly eccentric, tightly set — same energy as Ginto Nord.
- **Body / UI**: **Inter**. Neutral, reliable, excellent at small sizes.
- **Numeric / stat tiles**: Inter `tabular-nums`, weight 600.

### 3.1 Hierarchy

| Step | Use | Font | Weight | Size (mobile → desktop) | Tracking | Case |
|---|---|---|---|---|---|---|
| Display XL | Hero H1 | Bricolage Grotesque | 800 | 44 → 88 px | -0.03em | lowercase |
| Display L | Section H2 | Bricolage Grotesque | 800 | 32 → 56 px | -0.025em | lowercase |
| Display M | Card H3, marquee | Bricolage Grotesque | 700 | 22 → 32 px | -0.02em | lowercase |
| Eyebrow | Section kicker | Bricolage Grotesque | 700 | 12 → 13 px | 0.22em | UPPERCASE |
| Body L | Hero subcopy | Inter | 400 | 17 → 19 px | 0 | sentence |
| Body M | Default text | Inter | 400 | 15 → 16 px | 0 | sentence |
| Caption | Legal, meta | Inter | 500 | 12 → 13 px | 0.01em | sentence |
| Button | CTA label | Inter | 600 | 15 → 15 px | 0.01em | sentence |

### 3.2 Rules

- Headlines are **lowercase**, short, and playful. "gamify nights out — not spreadsheets" is on-brand; "Optimize Your Evening Experience" is not.
- Allow **one mixed-font word per headline** using `gradient-brand` to create a focal point.
- Line-height: headlines **1.02–1.08**, body **1.55–1.65**.
- Max measure: **60ch** for body, **18ch** for hero headlines on desktop.

---

## 4. Component Stylings

### 4.1 Buttons

| Variant | Background | Text | Border | Shadow | Radius |
|---|---|---|---|---|---|
| Primary | `gradient-brand` | `#FFFFFF` | none | `glow-grape` | 999px |
| Secondary | `--pp-surface-2` | `--pp-text` | 1px `--pp-border` | none | 999px |
| Ghost | transparent | `--pp-muted` → `--pp-text` on hover | none | none | 999px |
| On-cream primary | `#1A0B2E` | `#FFF6E6` | none | `0 10px 30px -10px rgba(26,11,46,0.5)` | 999px |

- **Height**: 52px desktop, 48px mobile. Horizontal padding 28px.
- **Hover**: `translateY(-1px)` + 4% brightness up. Active: `scale(0.98)`.
- **Focus**: 2px offset outline in `--pp-grape`, always visible for keyboard.
- **Shape**: fully rounded ("pill"). This is a strong brand cue — do not square buttons.

### 4.2 Cards

- **Dark surface card**: `--pp-surface` background, 1px `--pp-border`, radius **24px**, padding 24–32px, shadow `0 24px 80px -32px rgba(0,0,0,0.65)`.
- **Feature card**: dark surface card + a 1px top accent line with `gradient-brand`, 40px wide, transitioning to 56px on hover.
- **Cream card**: `--pp-cream` background, radius 24px, shadow `0 20px 60px -24px rgba(26,11,46,0.25)`.

### 4.3 Inputs (text)

- Height 52px, radius 16px, background `--pp-surface-2`, border 1px `--pp-border`.
- Focus: border becomes `--pp-grape` at 50% alpha; ring 3px `--pp-grape` at 20%.
- Placeholder uses `--pp-muted`. Disabled opacity 0.5.

### 4.4 Chips / Badges

- Pill shape, 28px tall, 1px border `--pp-border`, background `--pp-surface` at 60% alpha.
- On cream: background `#1A0B2E` at 6%, text `--pp-cream-ink`.
- For "live" or "new" flags, prefix with a 6px pulsing dot in `--pp-gold` (energy) or `--pp-pink` (social).

### 4.5 Navigation

- Top nav is transparent on hero, becomes `--pp-ink` at 80% alpha + `backdrop-blur(14px)` once scrolled.
- Links use Body M, `--pp-muted` → `--pp-text` on hover with underline that animates left-to-right.

### 4.6 Marquee (Discord homage)

A horizontal, infinitely-scrolling band of single words separated by a sticker-style dot, e.g. **`pints · crawls · crews · karaoke · pints · crawls · crews · karaoke`**. This is the PissPot equivalent of Discord's "talk · play · chat · hang out." It is **required** on the landing page.

---

## 5. Layout Principles

- **Page scaffold**: CSS Grid with named lines (`full-start | content-start | content-end | full-end`). Content column max-width **1120px**, gutters `clamp(16px, 4vw, 40px)`.
- **Section rhythm**: vertical padding `clamp(64px, 10vw, 144px)`. Never less than 64px between sections.
- **Alternation**: dark (ink) → cream → dark → cream. Each hand-off uses a subtle gradient mask, not a hard line.
- **Spacing scale** (Tailwind-friendly): 4, 8, 12, 16, 24, 32, 48, 64, 96, 128 px.
- **Breakpoints**: `sm 480`, `md 768`, `lg 1024`, `xl 1280`, `2xl 1440`.
- **Asymmetry**: allow one off-grid element per section (a tilted badge, a rotated sticker) to break the "template" feel. Cap tilt at ±6°.

---

## 6. Depth & Elevation

Four-level surface system — use role, not arbitrary shadow:

| Level | Use | Background | Shadow |
|---|---|---|---|
| 0 | Page | `--pp-ink` | none |
| 1 | Section block | `--pp-ink` | subtle inner ambient glow only |
| 2 | Card / form well | `--pp-surface` / `--pp-surface-2` | `0 24px 80px -32px rgba(0,0,0,0.65)` |
| 3 | Floating CTA, modal, toast | `--pp-surface-2` | `glow-grape` + `0 30px 60px -20px rgba(0,0,0,0.75)` |

No 1px "inset highlight" shadows. No glassmorphism beyond the sticky nav.

---

## 7. Do's and Don'ts

**Do**
- Lead with a single sentence, lowercase, with one gradient word.
- Alternate dark and cream sections to keep scroll alive.
- Use the marquee band, pill buttons, and sticker-style chips — they are brand signatures.
- Write like a mate texting you about the night, not a product manager.
- Keep ages/consent language visible near any CTA that could be read as promoting drinking.

**Don't**
- Use stock photography of people clinking glasses. Ever.
- Add a "drink counter" style hero number — PissPot does not glamourise volume.
- Use Discord's Blurple (`#5865F2`) or Clyde the mascot. We are inspired by, not a clone of, Discord.
- Use more than two brand colours in one viewport.
- Use square buttons or harsh 4px radii on primary surfaces.
- Add scroll-jacking, parallax, or autoplaying video on the marketing site.

---

## 8. Content & Voice

- **Tone**: mate, not marketer. Funny, warm, self-aware.
- **Voice rules**: verbs > adjectives. Short sentences. One joke per section, max.
- **Inclusive defaults**: not everyone drinks. Speak about **nights out**, **crawls**, **crews** — alcohol is optional decoration, not the product.
- **Compliance**: any CTA implying alcohol shows "18+ where alcohol is involved. Drink responsibly." as a caption near it.

---

## 9. Agent Prompt Guide

When asking an AI agent to build a PissPot page, paste this block:

```
Use design.md. PissPot is a "nights out" social app. Dark-first palette, grape (#7C5CFF) primary, gold (#F4B942) and pink (#FF4F9A) accents, mint (#5BE0B3) for success. Typography: Bricolage Grotesque display, Inter body. Headlines lowercase, one gradient word per headline. Pill-shaped buttons (radius 999px), 24px radius cards. Alternate dark (#07060A) and cream (#FFF6E6) sections. Include a horizontal marquee band of words. No stock photos. No Discord Blurple. Max two brand colours per viewport.
```

### Quick reference

- Primary CTA: `background: linear-gradient(135deg,#7C5CFF,#FF4F9A); color:#fff; border-radius:999px; box-shadow:0 0 80px -12px rgba(124,92,255,0.55);`
- Card: `background:#0F0E14; border:1px solid rgba(255,255,255,0.08); border-radius:24px; padding:28px;`
- Hero backdrop: `background:#07060A; overlay radial-gradient(60% 50% at 50% 0%, rgba(124,92,255,0.35), transparent 60%);`
- Cream block: `background:#FFF6E6; color:#1A0B2E;`

---

_Last updated: 2026-04-22. Owner: PissPot brand. Changes to tokens must be mirrored in `packages/design-system/src/tokens.css` and `tailwind-preset.ts`._
