"use client";
import { createContext, useEffect, useState } from "react";
import { useGetUserData } from "@/Hooks/auth.mutation";
import useLocalStorage from "@/Hooks/useLocalStorage";

interface User {
  id: number;
  name: string;
  role: "user" | "admin";
}

interface AuthContextValue {
  loading: boolean;
  user: User | null;
  token: string | null;
  setToken: (token: string | null) => void;
  clearToken: () => void;
}

export const AuthContextProvider = createContext<AuthContextValue | null>(null);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken, clearToken] = useLocalStorage("token", null);
  const { data: userData, isLoading: loadingUserData } = useGetUserData(token);

  useEffect(() => {
    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }
    setLoading(loadingUserData);

    if (userData?.data) {
      setUser(userData.data);
    } else {
      setUser(null);
    }
  }, [token, userData, loadingUserData]);

  const contextValue: AuthContextValue = {
    loading,
    user,
    token,
    setToken,
    clearToken,
  };

  return (
    <AuthContextProvider.Provider value={contextValue}>
      {children}
    </AuthContextProvider.Provider>
  );
}
