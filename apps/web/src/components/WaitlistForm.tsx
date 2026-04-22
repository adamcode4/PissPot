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
        className="rounded-card border border-pp-mint/25 bg-pp-surface2 px-5 py-5 text-center shadow-card"
        role="status"
      >
        <p className="font-display text-lg font-bold lowercase text-pp-text">
          you&apos;re on the list
        </p>
        <p className="mt-1 text-sm text-pp-muted">
          we&apos;ll email you when early access opens. night well spent.
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
          disabled={pending}
          className="h-[52px] flex-1 rounded-input border border-pp-borderStrong bg-pp-surface3 px-5 text-[15px] text-pp-text placeholder:text-pp-muted outline-none transition focus:border-pp-orange/70 focus:ring-[3px] focus:ring-pp-orange/20"
        />
        <Button type="submit" size="lg" disabled={pending} className="shrink-0">
          {pending ? "joining…" : "join the waitlist"}
        </Button>
      </div>
      {state.status === "error" ? (
        <p className="text-sm text-pp-red" role="alert">
          {state.message.toLowerCase()}
        </p>
      ) : null}
    </form>
  );
}
