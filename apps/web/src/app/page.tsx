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
    body: "log drinks, venues, and moments on one timeline. lightweight inputs, zero spreadsheet energy.",
    stat: "avg 42s to log a round",
  },
  {
    kicker: "the route",
    title: "map the crawl",
    body: "pub crawls, festivals, wanders — all stitched into a route you can replay in the morning.",
    stat: "4 stops · 6h 12m",
  },
  {
    kicker: "the crew",
    title: "bring your people",
    body: "crews, invites, reactions, afters. your group chat with a map and a leaderboard.",
    stat: "12 crew · 3 live",
  },
  {
    kicker: "the glory",
    title: "climb the ranks",
    body: "badges for new venues, completed crawls, and streaks worth keeping.",
    stat: "lvl 12 · #03 local",
  },
] as const;

const stops = [
  { name: "the anchor", meta: "9:14pm", detail: "pint · round 1" },
  { name: "kitty's", meta: "10:02pm", detail: "round 2 · crew +2" },
  { name: "basement 28", meta: "11:47pm", detail: "dancefloor · 64m" },
  { name: "kebab king", meta: "2:31am", detail: "legendary · mvp" },
] as const;

type LeaderRow = {
  rank: number;
  name: string;
  crew: string;
  xp: number;
  me?: boolean;
};

const leaderboard: LeaderRow[] = [
  { rank: 1, name: "maya k.", crew: "the anchors", xp: 3820 },
  { rank: 2, name: "jordan r.", crew: "basement boys", xp: 3640 },
  { rank: 3, name: "you", crew: "the anchors", xp: 3412, me: true },
  { rank: 4, name: "sam w.", crew: "office pints", xp: 3204 },
  { rank: 5, name: "priya n.", crew: "the anchors", xp: 2988 },
];

export default function HomePage() {
  return (
    <div className="relative">
      <SiteHeader />
      <main>
        <Hero />
        <Marquee items={marqueeWords} />
        <Features />
        <NightRecap />
        <Leaderboard />
        <WaitlistCTA />
      </main>
      <SiteFooter />
    </div>
  );
}

/* ---------- header / footer ---------- */

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-pp-border bg-pp-ink/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between px-5 py-4 sm:px-8">
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
          <a href="#recap" className="transition hover:text-pp-text">
            the night
          </a>
          <a href="#leaderboard" className="transition hover:text-pp-text">
            leaderboard
          </a>
        </nav>
        <Link href="#waitlist" className="hidden sm:inline-flex">
          <Button size="md">early access</Button>
        </Link>
      </div>
    </header>
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

/* ---------- sections ---------- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-pp-ink">
      <div
        className="pointer-events-none absolute inset-0 bg-pp-coal"
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1120px] px-5 pb-24 pt-14 sm:px-8 sm:pt-20 lg:pb-32 lg:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate-fade-up flex justify-center">
            <LevelBadge />
          </div>
          <h1 className="pp-headline animate-fade-up mt-6 text-[44px] sm:text-6xl lg:text-[84px] [animation-delay:80ms]">
            gamify your night —{" "}
            <span className="pp-grad-word">win the morning.</span>
          </h1>
          <p className="animate-fade-up mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-pp-muted sm:text-[19px] [animation-delay:140ms]">
            track drinks, map your crawl, climb the leaderboard. a stat line
            for your night out — with your crew, not against them.
          </p>
          <div className="animate-fade-up mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center [animation-delay:200ms]">
            <Link href="#waitlist">
              <Button size="lg" className="w-full sm:w-auto">
                join the waitlist
              </Button>
            </Link>
            <Link href="#recap">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                see a night recap
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-[13px] text-pp-muted2">
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
      className="relative bg-pp-ink py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="pp-eyebrow text-pp-orange">what you get</p>
          <h2 className="pp-headline mt-4 text-4xl sm:text-5xl lg:text-[56px]">
            a phone app that{" "}
            <span className="pp-grad-word">matches how you go out.</span>
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-pp-muted">
            lightweight logging, maps that feel alive, and a light ranking
            system that rewards exploration — not intake.
          </p>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <li
              key={f.title}
              className="group relative overflow-hidden rounded-card border border-pp-border bg-pp-surface2 p-6 shadow-card transition hover:-translate-y-1 hover:border-pp-borderStrong"
            >
              <span
                className="absolute left-0 top-6 h-10 w-[3px] rounded-r-pill bg-pp-ember-soft bg-pp-ember"
                aria-hidden
              />
              <p className="pp-eyebrow text-pp-muted">{f.kicker}</p>
              <h3 className="pp-headline mt-3 text-[22px] sm:text-[26px] text-pp-text">
                {f.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-pp-muted">
                {f.body}
              </p>
              <div className="mt-6 flex items-center gap-2 text-[12px] text-pp-muted2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-pp-ember" />
                <span className="pp-tabular">{f.stat}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function NightRecap() {
  return (
    <section
      id="recap"
      className="relative border-t border-pp-border bg-pp-surface py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-[1120px] gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="pp-eyebrow text-pp-ember">one tap in, four stops deep</p>
          <h2 className="pp-headline mt-4 text-4xl sm:text-5xl lg:text-[56px]">
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
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-pp-orange" />
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

function Leaderboard() {
  return (
    <section
      id="leaderboard"
      className="relative border-t border-pp-border bg-pp-ink py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-[1120px] gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_minmax(0,520px)] lg:items-center">
        <LeaderboardCard />
        <div className="order-first lg:order-none">
          <p className="pp-eyebrow text-pp-orange">earn it</p>
          <h2 className="pp-headline mt-4 text-4xl sm:text-5xl lg:text-[56px]">
            climb the <span className="pp-grad-word">local rank.</span>
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-pp-muted">
            xp for exploration, not intake. visit new venues, finish crawls,
            keep streaks. weekly and monthly boards, per crew and per city.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:max-w-sm">
            <Stat label="this month" value="+212 xp" />
            <Stat label="crew rank" value="#03" />
            <Stat label="streak" value="5 wk" dot />
            <Stat label="new venues" value="08" />
          </div>
        </div>
      </div>
    </section>
  );
}

function WaitlistCTA() {
  return (
    <section
      id="waitlist"
      className="relative border-t border-pp-border bg-pp-surface py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1120px] px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[28px] border border-pp-border bg-pp-surface2 p-8 shadow-card sm:p-14">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-pp-orange/10 blur-3xl"
            aria-hidden
          />
          <div className="relative mx-auto max-w-xl text-center">
            <p className="pp-eyebrow text-pp-ember">early access</p>
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
            <p className="mt-4 text-center text-[13px] text-pp-muted2">
              no spam. unsubscribe anytime. 18+ where alcohol is involved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- gamified primitives ---------- */

function LevelBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-pill border border-pp-orange/35 bg-pp-surface2 px-3 py-1.5 text-[12px] text-pp-ember shadow-insetTop">
      <span className="relative inline-flex h-1.5 w-1.5">
        <span className="absolute inset-0 animate-pulse-dot rounded-full bg-pp-ember" />
      </span>
      <span className="font-semibold uppercase tracking-eyebrow">
        lvl 12 · regular
      </span>
    </span>
  );
}

function Stat({
  label,
  value,
  dot,
}: {
  label: string;
  value: string;
  dot?: boolean;
}) {
  return (
    <div className="relative overflow-hidden rounded-card border border-pp-border bg-pp-surface2 px-4 py-3 shadow-insetTop">
      <p className="pp-eyebrow text-pp-muted2">{label}</p>
      <p className="pp-tabular mt-1 flex items-center gap-2 font-display text-[22px] font-extrabold lowercase text-pp-text">
        {dot ? (
          <span className="inline-block h-2 w-2 animate-pulse-dot rounded-full bg-pp-ember" />
        ) : null}
        {value}
      </p>
    </div>
  );
}

function XPBar({ pct }: { pct: number }) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-pill bg-pp-surface3">
      <div
        className="h-full rounded-pill bg-pp-ember-soft"
        style={{ width: `${Math.min(100, Math.max(0, pct))}%` }}
      />
    </div>
  );
}

/* ---------- hero mock ---------- */

function HeroCard() {
  return (
    <div className="relative rounded-[24px] border border-pp-border bg-pp-surface2 p-4 shadow-card sm:p-6">
      <div className="flex items-center justify-between rounded-card bg-pp-surface3 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-pp-ember" />
          <div className="text-left">
            <p className="font-display text-[15px] font-bold lowercase tracking-tightest text-pp-text">
              saturday · the big one
            </p>
            <p className="pp-tabular mt-0.5 text-[12px] text-pp-muted">
              4 mates · 4 stops · 06h 12m
            </p>
          </div>
        </div>
        <span className="rounded-pill border border-pp-orange/40 bg-pp-orange/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-eyebrow text-pp-orange">
          live
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stops.map((s) => (
          <div
            key={s.name}
            className="relative overflow-hidden rounded-card border border-pp-border bg-pp-surface px-3 py-3 text-left"
          >
            <span
              className="absolute left-0 top-3 h-8 w-[2px] rounded-r-pill bg-pp-ember"
              aria-hidden
            />
            <p className="pp-tabular text-[11px] text-pp-muted2">{s.meta}</p>
            <p className="font-display text-[14px] font-bold lowercase text-pp-text">
              {s.name}
            </p>
            <p className="mt-0.5 text-[11px] text-pp-muted">{s.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-card bg-pp-surface3 px-5 py-4">
        <div className="flex items-center justify-between">
          <p className="text-[13px] text-pp-muted">
            <span className="font-semibold text-pp-text">xp this night</span>
          </p>
          <p className="pp-tabular font-display text-[15px] font-extrabold text-pp-text">
            240 / 400
          </p>
        </div>
        <div className="mt-3">
          <XPBar pct={60} />
        </div>
        <div className="pp-tabular mt-3 flex items-center justify-between text-[11px] text-pp-muted2">
          <span>4 new venues · 1 crawl</span>
          <span>next: lvl 13</span>
        </div>
      </div>
    </div>
  );
}

function NightTimelineCard() {
  return (
    <div className="relative rounded-[24px] border border-pp-border bg-pp-surface2 p-5 shadow-card sm:p-7">
      <div className="flex items-center justify-between">
        <div>
          <p className="pp-eyebrow text-pp-muted">the night</p>
          <p className="pp-tabular mt-1 font-display text-[20px] font-bold lowercase tracking-tightest text-pp-text">
            saturday, 09:00pm → 03:12am
          </p>
        </div>
        <span className="rounded-pill border border-pp-mint/30 bg-pp-mint/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-eyebrow text-pp-mint">
          recap
        </span>
      </div>

      <ol className="mt-6 space-y-3">
        {stops.map((s, i) => (
          <li
            key={s.name}
            className="flex items-center gap-4 rounded-card border border-pp-border bg-pp-surface px-4 py-3"
          >
            <span className="pp-tabular flex h-9 w-9 shrink-0 items-center justify-center rounded-pill bg-pp-surface3 font-display text-[13px] font-bold text-pp-ember">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex-1">
              <p className="font-display text-[15px] font-bold lowercase tracking-tightest text-pp-text">
                {s.name}
              </p>
              <p className="pp-tabular text-[11px] text-pp-muted">
                {s.meta} · {s.detail}
              </p>
            </div>
            <span className="pp-tabular text-[11px] text-pp-muted2">
              {i === 0 ? "start" : i === 3 ? "end" : "stop"}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function LeaderboardCard() {
  return (
    <div className="relative rounded-[24px] border border-pp-border bg-pp-surface2 p-5 shadow-card sm:p-7">
      <div className="flex items-center justify-between">
        <div>
          <p className="pp-eyebrow text-pp-muted">local board · this month</p>
          <p className="mt-1 font-display text-[20px] font-bold lowercase tracking-tightest text-pp-text">
            east london
          </p>
        </div>
        <span className="rounded-pill border border-pp-borderStrong bg-pp-surface3 px-3 py-1 text-[11px] font-semibold uppercase tracking-eyebrow text-pp-muted">
          top 50
        </span>
      </div>

      <ul className="mt-6 divide-y divide-pp-border overflow-hidden rounded-card border border-pp-border">
        {leaderboard.map((row) => (
          <li
            key={row.rank}
            className={`relative grid grid-cols-[48px_1fr_auto] items-center gap-4 px-4 py-3 ${
              row.me ? "bg-pp-surface3" : "bg-pp-surface"
            }`}
          >
            {row.me ? (
              <span
                className="absolute left-0 top-0 h-full w-[2px] bg-pp-orange"
                aria-hidden
              />
            ) : null}
            <span className="pp-tabular text-center font-display text-[15px] font-extrabold text-pp-ember">
              #{String(row.rank).padStart(2, "0")}
            </span>
            <div className="min-w-0">
              <p className="truncate font-display text-[15px] font-bold lowercase tracking-tightest text-pp-text">
                {row.name}
              </p>
              <p className="truncate text-[12px] text-pp-muted">{row.crew}</p>
            </div>
            <span className="pp-tabular font-display text-[15px] font-extrabold text-pp-text">
              {row.xp.toLocaleString()}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center justify-between text-[12px] text-pp-muted2">
        <span className="pp-tabular">last update · 04:12</span>
        <span className="pp-tabular">+142 xp since fri</span>
      </div>
    </div>
  );
}

function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <defs>
        <linearGradient id="pp-logo" x1="0" y1="0" x2="32" y2="32">
          <stop offset="0" stopColor="#ff6b1a" />
          <stop offset="1" stopColor="#ffc36b" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill="url(#pp-logo)" />
      <path
        d="M9 22c3.5-5.5 3.5-12 7-12s3.5 6.5 7 12"
        stroke="#050505"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
