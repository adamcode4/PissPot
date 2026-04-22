"use client";

import { useActionState } from "react";
import { Button } from "@pisspot/design-system";
import { joinWaitlist, type WaitlistState } from "@/app/actions/waitlist";

const initial: WaitlistState = { status: "idle" };

type Tone = "dark" | "cream";

export function WaitlistForm({
  id = "waitlist-email",
  tone = "dark",
}: {
  id?: string;
  tone?: Tone;
}) {
  const [state, formAction, pending] = useActionState(joinWaitlist, initial);

  if (state.status === "success") {
    return (
      <div
        className={
          tone === "cream"
            ? "rounded-card border border-pp-creamInk/10 bg-white/60 p-5 text-center shadow-cream"
            : "rounded-card border border-pp-mint/30 bg-pp-surface/80 p-5 text-center shadow-card backdrop-blur"
        }
        role="status"
      >
        <p
          className={`font-display text-lg font-bold lowercase ${tone === "cream" ? "text-pp-creamInk" : "text-pp-text"}`}
        >
          you&apos;re on the list
        </p>
        <p
          className={`mt-1 text-sm ${tone === "cream" ? "text-pp-creamMuted" : "text-pp-muted"}`}
        >
          we&apos;ll email you when early access opens. night well spent.
        </p>
      </div>
    );
  }

  const inputBase =
    tone === "cream"
      ? "bg-white/80 border-pp-creamInk/15 text-pp-creamInk placeholder:text-pp-creamMuted focus:border-pp-grape/60"
      : "bg-pp-surface2 border-pp-border text-pp-text placeholder:text-pp-muted focus:border-pp-grape/60";

  return (
    <form action={formAction} className="flex w-full flex-col gap-3">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
        <label htmlFor={id} className="sr-only">
          Email for waitlist
        </label>
        <input
          id={id}
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@example.com"
          disabled={pending}
          className={`h-[52px] flex-1 rounded-pill border px-5 text-[15px] outline-none transition focus:ring-4 focus:ring-pp-grape/20 ${inputBase}`}
        />
        <Button
          type="submit"
          variant={tone === "cream" ? "onCream" : "primary"}
          size="lg"
          disabled={pending}
          className="shrink-0"
        >
          {pending ? "joining…" : "join the waitlist"}
        </Button>
      </div>
      {state.status === "error" ? (
        <p
          className={`text-sm ${tone === "cream" ? "text-pp-red" : "text-pp-red"}`}
          role="alert"
        >
          {state.message.toLowerCase()}
        </p>
      ) : null}
    </form>
  );
}
