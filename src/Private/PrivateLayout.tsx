"use client";
import useAuth from "@/Hooks/useAuth";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { user, token, loading } = useAuth();

  useEffect(() => {
    if (!loading && !token && !user) {
      router.push("/auth/login");
    }
  }, [loading, token, user, router]);

  if (loading) {
    return (
      <div className="h-svh flex justify-center items-center">Loading.....</div>
    );
  }

  if (token || user) {
    return <>{children}</>;
  }

  return null;
};

export default PrivateLayout;
