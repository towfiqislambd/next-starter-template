import { AuthContextProvider } from "@/Provider/AuthProvider/AuthProvider";
import { useContext } from "react";

const useAuth = () => {
  const context = useContext(AuthContextProvider);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default useAuth;
