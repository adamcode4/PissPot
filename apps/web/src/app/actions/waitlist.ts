"use server";

import { createSupabaseAnonClient } from "@pisspot/api-client";

export type WaitlistState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function joinWaitlist(
  _prev: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();

  if (!email || !emailRegex.test(email)) {
    return { status: "error", message: "Enter a valid email address." };
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    return {
      status: "error",
      message: "Waitlist is not configured. Add Supabase env vars.",
    };
  }

  const supabase = createSupabaseAnonClient(url, key);

  const { error } = await supabase.from("waitlist_signups").insert({ email });

  if (error) {
    if (error.code === "23505") {
      return {
        status: "error",
        message: "You are already on the list. We will be in touch.",
      };
    }
    return {
      status: "error",
      message: "Something went wrong. Please try again in a moment.",
    };
  }

  return { status: "success" };
}
