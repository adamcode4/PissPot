"use client";

import { useActionState } from "react";
import { Button } from "@pisspot/design-system";
import { joinWaitlist, type WaitlistState } from "@/app/actions/waitlist";

const initial: WaitlistState = { status: "idle" };

export function WaitlistForm({ id = "waitlist-email" }: { id?: string }) {
  const [state, formAction, pending] = useActionState(joinWaitlist, initial);

  if (state.status === "success") {
    return (
      <div
        className="rounded-2xl border border-pp-accent/30 bg-pp-surface/80 px-5 py-4 text-center shadow-card backdrop-blur"
        role="status"
      >
        <p className="font-display text-lg font-semibold text-pp-text">
          You are on the list
        </p>
        <p className="mt-1 text-sm text-pp-muted">
          We will email you when early access opens. Night well spent.
        </p>
      </div>
    );
  }

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
          className="h-12 flex-1 rounded-xl border border-pp-border bg-pp-elevated/90 px-4 text-sm text-pp-text placeholder:text-pp-muted outline-none ring-pp-accent2/0 transition focus:border-pp-accent/50 focus:ring-2 focus:ring-pp-accent2/30"
          disabled={pending}
        />
        <Button type="submit" disabled={pending} className="h-12 shrink-0 px-8">
          {pending ? "Joining…" : "Join waitlist"}
        </Button>
      </div>
      {state.status === "error" ? (
        <p className="text-center text-sm text-red-400 sm:text-left" role="alert">
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
