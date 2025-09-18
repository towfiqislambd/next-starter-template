export async function useServerApi<T = any>(
  endpoint: string,
  revalidate = 3600
): Promise<T> {
  const baseURL = `${process.env.NEXT_PUBLIC_SITE_URL}${endpoint}`;
  const res = await fetch(baseURL, {
    cache: "force-cache", // SSR cache
    next: { revalidate }, // ISR: revalidate every 1 hour
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint} — ${res.status}`);
  }

  return res.json();
}
