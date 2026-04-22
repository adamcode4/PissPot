import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/** Shared Supabase browser / anon client for web and React Native. */
export function createSupabaseAnonClient(
  url: string,
  anonKey: string,
): SupabaseClient {
  return createClient(url, anonKey);
}

export type { SupabaseClient } from "@supabase/supabase-js";
