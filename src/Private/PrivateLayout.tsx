"use client";
import React from "react";
import useAuth from "@/Hooks/useAuth";
import { useRouter } from "next/navigation";

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { user, token, loading } = useAuth();

  if (loading) {
    return (
      <div className="h-svh flex justify-center items-center">Loading....</div>
    );
  }

  if (token || user) {
    return children;
  } else {
    router.push("/auth/login");
    return null;
  }
};

export default PrivateLayout;
