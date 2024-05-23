// Vendors
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Handlers
import RegisterHandlers from "../handlers/register.handlers";
// Schemas
import { RegisterSchema } from "../schemas/register.schema";

const RegisterHook = () => {
  const [message, setMessage] = useState({
    text: "",
    type: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const { handleSubmit, handleToggleShowPassword } = RegisterHandlers({
    form,
    setMessage,
    setLoading,
    setShowPassword,
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

export default RegisterHook;
