import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosSecure } from "@/Hooks/useAxiosSecure";
import { axiosPublic } from "@/Hooks/useAxiosPublic";

type apiProps = {
  key?: any[];
  endpoint?: string;
  method?: "get" | "post" | "put" | "delete";
  isPrivate?: boolean;
  onSuccess?: any;
  onError?: any;
  queryOptions?: any;
  mutationOptions?: any;
  axiosOptions?: any;
  params?: any;
  headers?: any;
  enabled?: boolean;
};

export default function useClientApi({
  endpoint,
  method = "get",
  isPrivate = false,
  key,
  onSuccess,
  onError,
  params,
  headers,
  queryOptions,
  mutationOptions,
  axiosOptions,
  enabled = true,
}: apiProps): any {
  const axiosInstance = (isPrivate ? axiosSecure : axiosPublic) as any;

  if (method === "get") {
    return useQuery({
      queryKey: key,
      queryFn: async () => {
        const res = await axiosInstance.get(endpoint, { params, headers });
        return res.data;
      },
      enabled,
      ...queryOptions,
    });
  }

  return useMutation({
    mutationKey: key,
    mutationFn: async data => {
      const res = await axiosInstance[method](endpoint, data, {
        headers,
        ...axiosOptions,
      });
      return res?.data;
    },
    onSuccess,
    onError,
    ...mutationOptions,
  });
}
