// Vendors
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Handlers
import LoginHandlers from "../handlers/login.handlers";
// Schemas
import { LoginSchema } from "../schemas/login.schema";
// Stores
import { useAuthStore } from "@/core/stores/auth.store";

const LoginHook = () => {
  const [message, setMessage] = useState({
    text: "",
    type: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { setUser } = useAuthStore();
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();
  const { handleSubmit, handleToggleShowPassword } = LoginHandlers({
    form,
    navigate,
    setMessage,
    setLoading,
    setShowPassword,
    setUser,
    showPassword,
  });

  return {
    message,
    form,
    handleSubmit,
    handleToggleShowPassword,
    loading,
    showPassword,
  };
};

export default LoginHook;
