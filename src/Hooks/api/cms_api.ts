import { useServerApi } from "@/Hooks/useServerApi";

// =======================================================
//  CSR (Client Side Rendering)
// =======================================================

// All CSR here.....

// =======================================================
//  SSR (Server Side Rendering)
// =======================================================

// Site Settings
export async function getSiteSettings() {
  return useServerApi("/api/site-settings", 3600);
}
