"use client";
import useApi from "@/Hooks/api/useApi";
import useAuth from "@/Hooks/useAuth";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

// Get User Data
export const useGetUserData = (token: any) => {
  return useApi({
    method: "get",
    key: ["user", token],
    enabled: !!token,
    endpoint: "/api/users/data",
    isPrivate: true,
    queryOptions: {
      refetchInterval: 1000 * 60 * 60, // refetch every hour
    },
  });
};

// Registration
export const useRegister = () => {
  const router = useRouter();
  return useApi({
    method: "post",
    key: ["register"],
    endpoint: "/api/users/register",
    onSuccess: (data: any) => {
      if (data?.status || data?.success) {
        toast.success(data?.message);
        router.push("/auth/login");
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Login
export const useLogin = () => {
  const router = useRouter();
  const { setToken } = useAuth();

  return useApi({
    method: "post",
    key: ["login"],
    endpoint: "/api/users/login",
    onSuccess: (data: any) => {
      if (data?.status || data?.success) {
        setToken(data?.data?.token);
        toast.success(data?.message);
        router.push("/dashboard");
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};
