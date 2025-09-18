"use client";
import toast from "react-hot-toast";
import useAuth from "@/Hooks/useAuth";
import { useRouter } from "next/navigation";
import useClientApi from "@/Hooks/useClientApi";

// Get User Data
export const useGetUserData = (token: any) => {
  return useClientApi({
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
  return useClientApi({
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

  return useClientApi({
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
