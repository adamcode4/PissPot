-- Waitlist for marketing site. Run via Supabase SQL editor or `supabase db push`.
create table if not exists public.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  created_at timestamptz not null default now()
);

create unique index if not exists waitlist_signups_email_lower_idx
  on public.waitlist_signups (lower(email));

alter table public.waitlist_signups enable row level security;

drop policy if exists "Allow public insert for waitlist" on public.waitlist_signups;

create policy "Allow public insert for waitlist"
  on public.waitlist_signups
  for insert
  to anon, authenticated
  with check (true);

comment on table public.waitlist_signups is 'Marketing waitlist emails';
