import { AuthContextProvider } from "@/Provider/AuthProvider/AuthProvider";
import { useContext } from "react";

/**
 * A custom hook to access authentication context.
 * @throws {Error} If used outside AuthProvider.
 */

const useAuth = () => {
  const context = useContext(AuthContextProvider);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export default useAuth;
