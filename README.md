# PissPot

Monorepo for the PissPot marketing site (Next.js), shared design system, and API helpers. React Native will live under `apps/mobile` when you add it.

## Layout

- `apps/web` — Next.js (App Router), landing page, Supabase waitlist
- `packages/design-system` — `@pisspot/design-system` (tokens, Tailwind preset, shared UI)
- `packages/api-client` — `@pisspot/api-client` (shared Supabase anon client factory for web + mobile)
- `supabase/migrations` — SQL for waitlist table and RLS

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Copy `apps/web/.env.example` to `apps/web/.env.local` and add your Supabase URL and anon key.

## Supabase waitlist

1. Create a project at [supabase.com](https://supabase.com).
2. In the SQL editor, run `supabase/migrations/20260422140000_waitlist_signups.sql`.
3. Confirm **Table editor → waitlist_signups** shows the table and RLS is on with the insert policy for `anon`.

## Deploy on Vercel

1. Import this repo in Vercel.
2. Set **Root Directory** to `apps/web`.
3. Add environment variables `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` (same values as local).

Build command and output directory use Next.js defaults.
