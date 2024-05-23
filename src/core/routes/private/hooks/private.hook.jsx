// Vendors
import { useEffect, useState } from "react";
// Handlers
import PrivateHandlers from "../handlers/private.handlers";
// Stores
import { useAuthStore } from "@/core/stores/auth.store";

const PrivateHook = () => {
  const [loading, setLoading] = useState(true);

  const { user, setUser } = useAuthStore();

  const { handlerVerifyAuth } = PrivateHandlers({
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

export default PrivateHook;
