// Vendors
import { useEffect, useState } from "react";
// Handlers
import AuthHandlers from "../handlers/auth.handlers";
// Stores
import { useAuthStore } from "@/core/stores/auth.store";

const AuthHook = () => {
  const [loading, setLoading] = useState(true);

  const { user, setUser } = useAuthStore();

  const { handlerVerifyAuth } = AuthHandlers({
    setUser,
    setLoading,
  });

  useEffect(() => {
    handlerVerifyAuth();
  }, []);

  return {
    user,
    loading,
  };
};

export default AuthHook;
