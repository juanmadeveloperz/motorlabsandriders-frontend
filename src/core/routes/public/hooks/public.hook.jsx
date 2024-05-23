// Vendors
import { useEffect, useState } from "react";
// Handlers
import PublicHandlers from "../handlers/public.handlers";
// Stores
import { useAuthStore } from "@/core/stores/auth.store";

const PublicHook = () => {
  const [loading, setLoading] = useState(true);

  const { user, setUser } = useAuthStore();

  const { handlerVerifyAuth } = PublicHandlers({
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

export default PublicHook;
