# PissPot — DESIGN.md

> Design system for **pisspot.com** and the **PissPot** React Native app.
> **v2 — black & orange, gamified‑modern.**
> Format inspired by [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md).

---

## 1. Visual Theme & Atmosphere

PissPot is a **dark, gamified night‑out tracker** — closer to a high‑end sports tracker than a party app. Think **Whoop meets Strava meets a good bar at midnight**: charcoal surfaces, a single molten orange accent, stats that mean something, zero cheese.

- **Mood**: **all‑night dark**. One ambient canvas, subtle tonal shifts between sections, no light/dark flipping.
- **Density**: medium. Confident stat tiles, clear hierarchy, short copy.
- **Rhythm**: sections are **all on the same dark base**; separation comes from hairlines, inset wells, and subtle noise — not from switching backgrounds.
- **Personality**: playful but dry; lowercase headlines, wry micro‑copy, no emoji, no stock glassware.
- **Gamified surfaces**: level chips, XP bars, streaks, rank badges, leaderboard rows. These are **first‑class components**, not decorations.
- **Glow**: restrained. One soft ember behind the hero, a faint orange rim around the primary CTA. Never "web3 neon."
- **Motion**: fade‑ups, one marquee, a pulsing streak dot. No parallax, no scroll‑jack, no autoplay video.

Design philosophy in one line: **a stat line for your night — dark, precise, and a little cocky.**

---

## 2. Color Palette & Roles

Two hues do the heavy lifting: **deep black** and **molten orange**. Everything else is tonal.

### 2.1 Brand

| Token | Hex | Role |
|---|---|---|
| `--pp-orange` | `#FF6B1A` | Primary brand, primary CTA, links, focus ring |
| `--pp-orange-hi` | `#FF8A3D` | Hover / pressed highlights |
| `--pp-orange-deep` | `#B8430F` | Depth (borders, inset wells, pressed states) |
| `--pp-ember` | `#FFC36B` | Accent for streaks, progress bars, highlights |
| `--pp-mint` | `#7ED0A0` | Success ("you're in", streak held) — muted on purpose |
| `--pp-red` | `#F25C4F` | Errors / destructive |

### 2.2 Neutrals (black‑first)

| Token | Hex | Role |
|---|---|---|
| `--pp-ink` | `#050505` | Page background |
| `--pp-surface` | `#0C0B0D` | Section background (subtly lifted) |
| `--pp-surface-2` | `#151318` | Card background |
| `--pp-surface-3` | `#1D1A20` | Elevated card, inputs |
| `--pp-border` | `rgba(255,255,255,0.07)` | Hairlines, card borders |
| `--pp-border-strong` | `rgba(255,255,255,0.12)` | Inputs, dividers |
| `--pp-text` | `#F5F1EA` | Primary text (warm off‑white, never pure white) |
| `--pp-muted` | `#8A8680` | Secondary text |
| `--pp-muted-2` | `#5A5650` | Captions, watermarks |

### 2.3 Effects (restrained)

- **`gradient-ember`**: `linear-gradient(135deg, #FF6B1A 0%, #FFA552 100%)` — primary CTA, level chips, one accent word per headline.
- **`gradient-coal`**: `radial-gradient(60% 40% at 50% -10%, rgba(255,107,26,0.18), transparent 60%)` — single ambient hero backdrop.
- **`grain`**: a 2% opacity noise overlay on all dark surfaces (reduces banding, adds texture).
- **`glow-ember`**: `0 0 28px -12px rgba(255,107,26,0.40)` — applied only to the primary CTA and one hero prop. **Much softer than v1.**

**Rules**
- One hero viewport = **one** orange focal point (the CTA or a level chip, not both at 100%).
- Never pair orange with a second bright hue. Ember supports orange; everything else stays neutral.

---

## 3. Typography Rules

Two fonts. No third.

- **Display**: **Bricolage Grotesque** — variable, tight, slightly eccentric. Same role as Ginto Nord.
- **Body / UI**: **Inter** — neutral and reliable.
- **Numerics (stats, XP, times)**: Inter with `font-variant-numeric: tabular-nums;`, weight **600**.

### 3.1 Hierarchy

| Step | Use | Font | Weight | Size (mobile → desktop) | Tracking | Case |
|---|---|---|---|---|---|---|
| Display XL | Hero H1 | Bricolage | 800 | 44 → 84 px | -0.03em | lowercase |
| Display L | Section H2 | Bricolage | 800 | 30 → 52 px | -0.025em | lowercase |
| Display M | Card H3 | Bricolage | 700 | 20 → 28 px | -0.02em | lowercase |
| Eyebrow | Section kicker | Bricolage | 700 | 12 → 13 px | 0.24em | UPPERCASE |
| Stat | XP / numbers | Inter | 700 | 22 → 32 px | -0.01em | tabular |
| Body L | Hero subcopy | Inter | 400 | 17 → 19 px | 0 | sentence |
| Body M | Default text | Inter | 400 | 15 → 16 px | 0 | sentence |
| Mono meta | Timestamps, IDs | Inter | 500 | 12 → 13 px | 0.02em | tabular |
| Button | CTA label | Inter | 600 | 15 px | 0.01em | sentence |

### 3.2 Rules

- Headlines are **lowercase** and short; **one** word per headline may use `gradient-ember`.
- Line‑height: headlines **1.02–1.06**, body **1.55–1.65**.
- Max measure: **60ch** for body, **16ch** for hero headlines on desktop.

---

## 4. Component Stylings

### 4.1 Buttons

| Variant | Background | Text | Border | Shadow | Radius |
|---|---|---|---|---|---|
| Primary | `gradient-ember` | `#050505` | none | `glow-ember` | 999px |
| Secondary | `--pp-surface-3` | `--pp-text` | 1px `--pp-border-strong` | none | 999px |
| Ghost | transparent | `--pp-muted` → `--pp-text` on hover | none | none | 999px |
| Icon | `--pp-surface-2` | `--pp-text` | 1px `--pp-border` | none | 999px |

- **Height**: 52px desktop, 48px mobile. Padding-x 28px.
- **Hover**: `translateY(-1px)` + 4% brightness up. Active: `scale(0.98)`.
- **Focus**: 2px offset outline in `--pp-orange`.
- **Shape**: fully rounded pill — brand signature.
- **Icon buttons**: 40×40 square on small screens, pill with icon+label ≥ md.

### 4.2 Cards & surfaces

- **Card**: `--pp-surface-2`, 1px `--pp-border`, radius **20px**, padding 20–28px, subtle inner top highlight `inset 0 1px 0 rgba(255,255,255,0.04)`. **No heavy drop shadow.**
- **Stat tile**: card + orange vertical tick on the left (3px × 100%) OR a small `--pp-ember` dot top‑right.
- **Well / input**: `--pp-surface-3` background, 1px `--pp-border-strong`, radius 14px.

### 4.3 Gamified elements

- **Level chip**: pill, `gradient-ember` 1px border + `--pp-surface-2` background, label `lvl 12 · regular`. Height 26px.
- **Rank chip**: pill, `#050505` background, 1px `--pp-border-strong`, gold dot on left (`--pp-ember`). Label `#03 this month`.
- **XP bar**: height 6px, background `--pp-surface-3`, fill `gradient-ember`, radius 999px, trailing hairline at 100% for scale.
- **Streak dot**: 8px circle, `--pp-ember`, `animate-pulse-dot` — paired with "5 wk streak" stat.
- **Leaderboard row**: grid of `[rank 40px] [avatar 32px] [name 1fr] [score 56px]`, rank bg `--pp-surface-3`, selected row gets a 2px left border in `--pp-orange`.

### 4.4 Inputs (text)

- Height 52px, radius 14px, background `--pp-surface-3`, border 1px `--pp-border-strong`.
- Focus: border → `--pp-orange` at 70%; 3px ring at 18% alpha. No drop shadow.

### 4.5 Navigation

- Sticky. Background `--pp-ink` at 70% + `backdrop-blur(14px)`. Bottom 1px `--pp-border`.
- Links in Body M, `--pp-muted` → `--pp-text` on hover.
- Always shows the primary CTA pill on the right at `≥ sm`.

### 4.6 Marquee

- Full‑bleed horizontal word band, dividers are `--pp-ember` dots. Uses `animate-marquee` (32s linear).
- **Height 56–72px**. Background `--pp-surface`, top/bottom hairlines only.
- Copy examples: `pints · crawls · crews · karaoke · kebabs · shots · dancefloor · afters`.

---

## 5. Layout Principles

- **Scaffold**: CSS Grid, max content width **1120px**, gutters `clamp(16px, 4vw, 40px)`.
- **All‑dark rhythm**: do **not** alternate light/dark. Instead separate sections with:
  1. a hairline divider (`--pp-border`),
  2. a tonal shift (`--pp-ink` ↔ `--pp-surface`),
  3. generous vertical space (`clamp(72px, 10vw, 144px)`).
- **Spacing scale**: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128 px.
- **Breakpoints**: `sm 480`, `md 768`, `lg 1024`, `xl 1280`.
- **Noise**: every dark surface gets the `grain` overlay at 2% opacity to kill banding.

---

## 6. Depth & Elevation

One ambient glow, one card shadow — that's it.

| Level | Use | Background | Shadow |
|---|---|---|---|
| 0 | Page | `--pp-ink` | none |
| 1 | Section | `--pp-surface` | none |
| 2 | Card | `--pp-surface-2` | `inset 0 1px 0 rgba(255,255,255,0.04)` |
| 3 | Primary CTA / hero prop | – | `glow-ember` |

No stacked shadows. No glassmorphism. No multi‑layer blurs.

---

## 7. Do's and Don'ts

**Do**
- Keep it all on a black canvas with tonal shifts only.
- Lean into gamified surfaces: level chips, XP bars, leaderboards, streaks.
- Use one gradient word per headline, one orange CTA per viewport.
- Use tabular numerics for every stat.
- Keep legal/age copy near every CTA that touches alcohol.

**Don't**
- Alternate dark and cream sections.
- Use heavy glows, neon stacks, or multi‑color gradients.
- Add a second bright accent color to compete with orange.
- Use stock photos of people drinking. Ever.
- Use sharp 4px corners on primary surfaces — keep 14/20/999.

---

## 8. Content & Voice

- **Tone**: dry, confident, a little cocky. Short sentences. One joke per section max.
- **Examples**
  - ✅ "track the night. pretend you remember."
  - ✅ "lvl up, not hangovers."
  - ❌ "Supercharge your evenings today!!"
- **Inclusive**: alcohol is optional decoration. Speak about **nights out, crawls, crews**.
- **Compliance**: show "18+ where alcohol is involved. drink responsibly." near any CTA implying drinking.

---

## 9. Agent Prompt Guide

Paste this into an agent when building PissPot surfaces:

```
Use design.md v2. PissPot is a dark, gamified night‑out tracker.
Canvas: all black — #050505 page, #0C0B0D sections, #151318 cards.
One accent: molten orange #FF6B1A with #FFC36B ember support. No second bright color.
Type: Bricolage Grotesque (display, lowercase headlines), Inter (body + tabular stats).
Buttons: pill (radius 999px). Primary = orange gradient on dark text, subtle ember glow.
Cards: 20px radius, hairline border, no heavy shadow. Use inset 1px top highlight instead.
Gamified primitives: level chip, XP bar, rank chip, streak dot, leaderboard row.
Rhythm: no light/dark alternation; separate sections with hairlines and tonal shifts.
Motion: fade‑ups, one marquee. No parallax. No neon.
```

### Quick reference

- Primary CTA: `background: linear-gradient(135deg,#FF6B1A,#FFA552); color:#050505; border-radius:999px; box-shadow:0 0 28px -12px rgba(255,107,26,0.40);`
- Card: `background:#151318; border:1px solid rgba(255,255,255,0.07); border-radius:20px; padding:24px; box-shadow: inset 0 1px 0 rgba(255,255,255,0.04);`
- XP bar: `height:6px; background:#1D1A20; border-radius:999px; fill: linear-gradient(90deg,#FF6B1A,#FFC36B);`
- Level chip: `height:26px; border-radius:999px; padding:0 10px; background:#151318; border:1px solid rgba(255,107,26,0.35); color:#FFC36B; font: 600 12px Inter;`
- Hero backdrop: `background:#050505; overlay: radial-gradient(60% 40% at 50% -10%, rgba(255,107,26,0.18), transparent 60%);`

---

_Last updated: 2026-04-22. Owner: PissPot brand. Any token change must be mirrored in `packages/design-system/src/tokens.css` and `tailwind-preset.ts`._
