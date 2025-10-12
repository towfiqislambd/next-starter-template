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
  return useServerApi({
    mode: "ISR",
    revalidate: 86400,
    endpoint: "/api/site-settings",
  });
}
