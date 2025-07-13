"use client";
import { useEffect } from "react";

const UseSiteSettings = () => {
  useEffect(() => {
    const fetchSiteSettings = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SITE_URL}/api/site-settings`
        );
        const formattedData = await res.json();

        if (formattedData?.data) {
          const { favicon } = formattedData.data;

          // Update favicon
          const link =
            (document.querySelector("link[rel~='icon']") as HTMLLinkElement) ||
            document.createElement("link");

          link.rel = "icon";
          link.href = `${process.env.NEXT_PUBLIC_SITE_URL}/${favicon}`;
          document.head.appendChild(link);
        }
      } catch (err) {
        console.error("Error fetching site settings:", err);
      }
    };

    fetchSiteSettings();
  }, []);

  return null;
};

export default UseSiteSettings;
