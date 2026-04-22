import Link from "next/link";
import { Button, Marquee } from "@pisspot/design-system";
import { WaitlistForm } from "@/components/WaitlistForm";

const marqueeWords = [
  "pints",
  "crawls",
  "crews",
  "karaoke",
  "kebabs",
  "shots",
  "dancefloor",
  "afters",
];

const features = [
  {
    kicker: "the night",
    title: "track the night",
    body: "log drinks, venues, and moments on one scrollable timeline. built for messy, brilliant evenings — not spreadsheets.",
  },
  {
    kicker: "the route",
    title: "map the crawl",
    body: "turn any pub crawl, festival or wander into a route you can replay, share, and quietly flex about in the morning.",
  },
  {
    kicker: "the crew",
    title: "bring your people",
    body: "crews, invites, reactions, afters. the group chat energy you already have — just with a map and a leaderboard.",
  },
  {
    kicker: "the glory",
    title: "play the leaderboard",
    body: "unlock badges for new venues, finished crawls, and streaks worth keeping. gamified on purpose, not to push drinks.",
  },
] as const;

const stops = [
  { name: "the anchor", meta: "9:14pm · pint", tone: "grape" },
  { name: "kitty's", meta: "10:02pm · round", tone: "pink" },
  { name: "basement 28", meta: "11:47pm · dancing", tone: "gold" },
  { name: "kebab king", meta: "2:31am · legendary", tone: "mint" },
] as const;

export default function HomePage() {
  return (
    <div className="relative">
      <SiteHeader />

      <main>
        <Hero />

        <Marquee items={marqueeWords} tone="dark" />

        <Features />

        <NightPreview />

        <WaitlistCTA />
      </main>

      <SiteFooter />
    </div>
  );
}

/* ---------- sections ---------- */

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-pp-ink/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between px-5 py-5 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-xl font-extrabold lowercase tracking-tightest text-pp-text"
        >
          <LogoMark className="h-7 w-7" />
          pisspot
        </Link>
        <nav className="hidden items-center gap-8 text-[15px] text-pp-muted sm:flex">
          <a href="#features" className="transition hover:text-pp-text">
            features
          </a>
          <a href="#preview" className="transition hover:text-pp-text">
            the night
          </a>
          <a href="#waitlist" className="transition hover:text-pp-text">
            waitlist
          </a>
        </nav>
        <Link href="#waitlist" className="sm:contents">
          <Button size="md" className="hidden sm:inline-flex">
            get early access
          </Button>
        </Link>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-pp-late-night"
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1120px] px-5 pb-24 pt-16 sm:px-8 sm:pt-24 lg:pb-32 lg:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate-fade-up">
            <LiveChip />
          </div>
          <h1 className="pp-headline animate-fade-up mt-6 text-[44px] sm:text-6xl lg:text-[88px] [animation-delay:80ms]">
            gamify your nights out —{" "}
            <span className="pp-grad-word">not spreadsheets.</span>
          </h1>
          <p className="animate-fade-up mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-pp-muted sm:text-[19px] [animation-delay:140ms]">
            pisspot is the social app for drinks, crawls, and crews. track the
            night, map the chaos, then replay it with your mates.
          </p>
          <div className="animate-fade-up mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center [animation-delay:200ms]">
            <Link href="#waitlist">
              <Button size="lg" className="w-full sm:w-auto">
                join the waitlist
              </Button>
            </Link>
            <Link href="#preview">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                see how a night looks
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-[13px] text-pp-muted/80">
            no spam. 18+ where alcohol is involved. drink responsibly.
          </p>
        </div>

        <div className="animate-fade-up relative mx-auto mt-20 max-w-4xl [animation-delay:260ms]">
          <HeroCard />
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-pp-cream py-24 text-pp-creamInk sm:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-pp-cream-glow opacity-70"
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1120px] px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="pp-eyebrow text-pp-grape">everything for a legendary night</p>
          <h2 className="pp-headline mt-4 text-4xl sm:text-5xl lg:text-6xl">
            a phone app that <span className="pp-grad-word">actually matches</span>{" "}
            how you go out.
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-pp-creamMuted">
            we&apos;re building the home for nights out. lightweight logging,
            maps that feel alive, and social hooks that match how people
            actually hang.
          </p>
        </div>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <li
              key={f.title}
              className="group rounded-card border border-pp-creamInk/10 bg-white/70 p-6 shadow-cream transition hover:-translate-y-1 hover:bg-white/90"
            >
              <div className="h-1 w-10 rounded-pill bg-pp-brand opacity-90 transition-[width] group-hover:w-14" />
              <p className="pp-eyebrow mt-6 text-pp-grape">{f.kicker}</p>
              <h3 className="pp-headline mt-2 text-[22px] sm:text-[26px]">
                {f.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-pp-creamMuted">
                {f.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function NightPreview() {
  return (
    <section id="preview" className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-pp-late-night opacity-60"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-[1120px] gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="pp-eyebrow text-pp-gold">one tap in, four stops deep</p>
          <h2 className="pp-headline mt-4 text-4xl sm:text-5xl lg:text-6xl">
            your night, <span className="pp-grad-word">playable back</span> in
            the morning.
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-pp-muted">
            every stop, every round, every detour. pisspot stitches it all
            together so you wake up to a story — not a hangover mystery.
          </p>
          <ul className="mt-8 space-y-3 text-[15px] text-pp-muted">
            {[
              "quick check-in at every venue",
              "live pin-drops for the crew",
              "photos + moments per stop",
              "auto-recap when you get home",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-pp-gold" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <NightTimelineCard />
      </div>
    </section>
  );
}

function WaitlistCTA() {
  return (
    <section id="waitlist" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[32px] border border-pp-border bg-pp-surface p-8 shadow-floating sm:p-14">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-pp-pink/25 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-pp-grape/30 blur-3xl"
            aria-hidden
          />
          <div className="relative mx-auto max-w-xl text-center">
            <p className="pp-eyebrow text-pp-gold">early access</p>
            <h2 className="pp-headline mt-3 text-4xl sm:text-5xl">
              get in before{" "}
              <span className="pp-grad-word">the doors open.</span>
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-pp-muted">
              first crawls, first crews, first leaderboards. drop your email —
              we&apos;ll handle the rest.
            </p>
            <div className="mt-8 text-left">
              <WaitlistForm id="cta-email" />
            </div>
            <p className="mt-4 text-center text-[13px] text-pp-muted/80">
              no spam. unsubscribe anytime. 18+ where alcohol is involved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-pp-border py-10">
      <div className="mx-auto flex max-w-[1120px] flex-col items-center justify-between gap-6 px-5 text-[13px] text-pp-muted sm:flex-row sm:px-8">
        <div className="flex items-center gap-2 font-display text-base font-bold lowercase text-pp-text">
          <LogoMark className="h-5 w-5" />
          pisspot
        </div>
        <p className="text-center sm:text-right">
          © {new Date().getFullYear()} pisspot. drink responsibly.
        </p>
      </div>
    </footer>
  );
}

/* ---------- bits ---------- */

function LiveChip() {
  return (
    <span className="inline-flex items-center gap-2 rounded-pill border border-pp-border bg-pp-surface/60 px-3 py-1.5 text-[12px] text-pp-muted backdrop-blur">
      <span className="relative inline-flex h-1.5 w-1.5">
        <span className="absolute inset-0 animate-pulse-dot rounded-full bg-pp-gold" />
      </span>
      strava energy · night-out chaos
    </span>
  );
}

function HeroCard() {
  return (
    <div className="relative rounded-[32px] border border-pp-border bg-pp-surface/80 p-4 shadow-floating backdrop-blur sm:p-6">
      <div className="flex items-center justify-between rounded-card bg-pp-surface2 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-pp-brand" />
          <div className="text-left">
            <p className="font-display text-[15px] font-bold lowercase tracking-tightest text-pp-text">
              saturday · the big one
            </p>
            <p className="text-[12px] text-pp-muted">4 mates · 4 stops · 6h 12m</p>
          </div>
        </div>
        <span className="rounded-pill border border-pp-gold/40 bg-pp-gold/10 px-3 py-1 text-[11px] font-semibold text-pp-gold">
          live
        </span>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-3">
        {stops.map((s) => (
          <div
            key={s.name}
            className="rounded-card border border-pp-border bg-pp-surface p-3 text-left"
          >
            <div
              className={`h-1 w-8 rounded-pill ${toneToBar(s.tone)}`}
              aria-hidden
            />
            <p className="mt-3 font-display text-[14px] font-bold lowercase text-pp-text">
              {s.name}
            </p>
            <p className="text-[11px] text-pp-muted">{s.meta}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between rounded-card bg-pp-surface2 px-5 py-4">
        <p className="text-[13px] text-pp-muted">
          <span className="font-semibold text-pp-text">legend unlocked</span> —
          4 new venues, 1 completed crawl.
        </p>
        <span className="rounded-pill bg-pp-brand px-3 py-1 text-[11px] font-semibold text-white">
          +240 xp
        </span>
      </div>
    </div>
  );
}

function NightTimelineCard() {
  return (
    <div className="relative rounded-[32px] border border-pp-border bg-pp-surface/80 p-5 shadow-card backdrop-blur sm:p-7">
      <div className="flex items-center justify-between">
        <div>
          <p className="pp-eyebrow text-pp-muted">the night</p>
          <p className="font-display text-[22px] font-bold lowercase tracking-tightest text-pp-text">
            saturday, 09:00pm → 03:12am
          </p>
        </div>
        <span className="rounded-pill border border-pp-mint/30 bg-pp-mint/10 px-3 py-1 text-[11px] font-semibold text-pp-mint">
          recap ready
        </span>
      </div>

      <ol className="mt-6 space-y-4">
        {stops.map((s, i) => (
          <li
            key={s.name}
            className="flex items-center gap-4 rounded-card border border-pp-border bg-pp-surface p-4"
          >
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-display text-[13px] font-bold ${toneToBg(s.tone)}`}
            >
              {i + 1}
            </span>
            <div className="flex-1">
              <p className="font-display text-[15px] font-bold lowercase tracking-tightest text-pp-text">
                {s.name}
              </p>
              <p className="text-[12px] text-pp-muted">{s.meta}</p>
            </div>
            <span className="text-[12px] text-pp-muted">
              {i === 0 ? "start" : i === 3 ? "end" : "stop"}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function toneToBar(tone: "grape" | "pink" | "gold" | "mint") {
  switch (tone) {
    case "grape":
      return "bg-pp-grape";
    case "pink":
      return "bg-pp-pink";
    case "gold":
      return "bg-pp-gold";
    case "mint":
      return "bg-pp-mint";
  }
}

function toneToBg(tone: "grape" | "pink" | "gold" | "mint") {
  switch (tone) {
    case "grape":
      return "bg-pp-grape/15 text-pp-grape";
    case "pink":
      return "bg-pp-pink/15 text-pp-pink";
    case "gold":
      return "bg-pp-gold/15 text-pp-gold";
    case "mint":
      return "bg-pp-mint/15 text-pp-mint";
  }
}

function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <defs>
        <linearGradient id="pp-logo" x1="0" y1="0" x2="32" y2="32">
          <stop offset="0" stopColor="#7c5cff" />
          <stop offset="1" stopColor="#ff4f9a" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill="url(#pp-logo)" />
      <path
        d="M9 22c3.5-5.5 3.5-12 7-12s3.5 6.5 7 12"
        stroke="#fff"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
