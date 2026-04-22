import Link from "next/link";
import { WaitlistForm } from "@/components/WaitlistForm";

const features = [
  {
    title: "Track the night",
    body: "Log drinks, venues, and your crawl in one flowing timeline — built for messy, brilliant evenings.",
  },
  {
    title: "Map the crawl",
    body: "Turn a pub crawl or festival wander into a route you can replay, share, or flex quietly about later.",
  },
  {
    title: "Play together",
    body: "Crews, challenges, and leaderboards that reward the night out — not spreadsheets.",
  },
  {
    title: "Social by default",
    body: "Tag mates, react to stops, and turn every outing into something worth opening the app for.",
  },
] as const;

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] opacity-90"
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-b from-pp-accent2/15 via-transparent to-transparent" />
      </div>

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight text-pp-text"
        >
          PissPot
        </Link>
        <nav className="flex items-center gap-6 text-sm text-pp-muted">
          <a href="#features" className="transition hover:text-pp-text">
            Features
          </a>
          <a href="#waitlist" className="transition hover:text-pp-text">
            Waitlist
          </a>
        </nav>
      </header>

      <main>
        <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-6 lg:px-8 lg:pt-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="animate-fade-up font-display text-sm font-semibold uppercase tracking-[0.2em] text-pp-accent">
              Strava energy, night-out chaos
            </p>
            <h1 className="animate-fade-up mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight text-pp-text sm:text-5xl lg:text-6xl [animation-delay:80ms]">
              Gamify nights out —{" "}
              <span className="bg-gradient-to-r from-pp-accent via-amber-300 to-pp-accent2 bg-clip-text text-transparent">
                not spreadsheets
              </span>
            </h1>
            <p className="animate-fade-up mx-auto mt-6 max-w-xl text-lg text-pp-muted [animation-delay:140ms]">
              PissPot is the social app for drinks, crawls, and leaderboards
              with your crew. Join the waitlist for early access.
            </p>
          </div>

          <div className="animate-fade-up mx-auto mt-12 max-w-xl [animation-delay:200ms]">
            <div className="rounded-2xl border border-pp-border bg-pp-surface/60 p-2 shadow-card backdrop-blur-md">
              <div className="rounded-xl bg-pp-elevated/50 p-4 sm:p-5">
                <WaitlistForm id="hero-email" />
                <p className="mt-3 text-center text-xs text-pp-muted sm:text-left">
                  No spam. Unsubscribe anytime. 18+ where alcohol is involved.
                </p>
              </div>
            </div>
          </div>

          <div className="animate-fade-up mx-auto mt-16 flex flex-wrap items-center justify-center gap-3 text-xs text-pp-muted [animation-delay:260ms]">
            <span className="rounded-full border border-pp-border bg-pp-surface/50 px-3 py-1">
              React Native app
            </span>
            <span className="rounded-full border border-pp-border bg-pp-surface/50 px-3 py-1">
              Supabase backend
            </span>
            <span className="rounded-full border border-pp-border bg-pp-surface/50 px-3 py-1">
              Built for mates
            </span>
          </div>
        </section>

        <section
          id="features"
          className="relative z-10 border-t border-pp-border bg-pp-bg/40 py-20"
        >
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-pp-text sm:text-4xl">
                Everything you need for a legendary night
              </h2>
              <p className="mt-4 text-pp-muted">
                We are building the home for nights out: lightweight logging,
                maps that feel alive, and social hooks that actually match how
                people go out.
              </p>
            </div>
            <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((f) => (
                <li
                  key={f.title}
                  className="group rounded-2xl border border-pp-border bg-pp-surface/40 p-6 shadow-card transition hover:border-pp-accent/25 hover:bg-pp-surface/70"
                >
                  <div className="mb-4 h-1 w-10 rounded-full bg-gradient-to-r from-pp-accent to-pp-accent2 opacity-80 transition group-hover:w-14" />
                  <h3 className="font-display text-lg font-semibold text-pp-text">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-pp-muted">
                    {f.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="waitlist"
          className="relative z-10 py-24"
          aria-labelledby="waitlist-heading"
        >
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-pp-border bg-gradient-to-br from-pp-surface/80 via-pp-elevated/90 to-pp-bg p-10 shadow-glow sm:p-14">
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-pp-accent2/20 blur-3xl"
                aria-hidden
              />
              <div className="relative mx-auto max-w-xl text-center">
                <h2
                  id="waitlist-heading"
                  className="font-display text-3xl font-bold tracking-tight text-pp-text sm:text-4xl"
                >
                  Get early access
                </h2>
                <p className="mt-4 text-pp-muted">
                  Be first to try crawls, crews, and the leaderboard when we
                  open the doors. Drop your email — we will handle the rest.
                </p>
                <div className="mt-8 text-left">
                  <WaitlistForm id="footer-email" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-pp-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-sm text-pp-muted sm:flex-row lg:px-8">
          <p className="font-display font-semibold text-pp-text">PissPot</p>
          <p className="text-center sm:text-right">
            © {new Date().getFullYear()} PissPot. Drink responsibly.
          </p>
        </div>
      </footer>
    </div>
  );
}
