import { axiosPublic } from "./useAxiosPublic";
import { axiosSecure } from "./useAxiosSecure";

// get user data:
export const GetUserDataFunc = async () => {
  const { data } = await axiosSecure.get("/api/users/data");
  return data;
};

// login:
export const LoginFunc = async (payload: any) => {
  const { data } = await axiosPublic.post("/api/users/login", payload);
  return data;
};

// register:
export const RegisterFunc = async (payload: any) => {
  const { data } = await axiosPublic.post("/api/users/register", payload);
  return data?.data;
};
