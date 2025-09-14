"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import "./aos-custom.css";
import React, { useEffect } from "react";

function AosProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
    });

    AOS.refresh();
  }, []);

  return <>{children}</>;
}

export default AosProvider;
