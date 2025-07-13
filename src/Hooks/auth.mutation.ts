"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { GetUserDataFunc, LoginFunc, RegisterFunc } from "./auth.api";
import useAuth from "./useAuth";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

// get user data:
export const useGetUserData = (token: any) => {
  return useQuery({
    queryKey: ["user", token],
    queryFn: GetUserDataFunc,
    enabled: !!token, // Only run the query if token is truthy
    refetchInterval: 1000 * 60 * 60, // refetch every hour
  });
};

// Login:
export const useLogin = () => {
  const router = useRouter();
  const { setToken } = useAuth();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: payload => LoginFunc(payload),
    onSuccess: data => {
      toast.success("Login Successful");
      if (data?.success) {
        if (data?.data?.token) {
          setToken(data?.data?.token);
        }
        router.push("/dashboard");
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Register:
export const useRegister = () => {
  const router = useRouter();

  return useMutation({
    mutationKey: ["register"],
    mutationFn: payload => RegisterFunc(payload),
    onSuccess: data => {
      toast.success("Registration Successful");
      if (data?.token) {
        router.push("/auth/login");
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};
