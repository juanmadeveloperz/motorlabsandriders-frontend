// Vendors
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Handlers
import ForumHandlers from "../handlers/forum.handlers";
// Schemas
import { ThreadSchema } from "../schemas/thread.schema";
// Stores
import { useAuthStore } from "@/core/stores/auth.store";

const ForumHook = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [threads, setThreads] = useState([]);

  const { user } = useAuthStore();

  const form = useForm({
    resolver: zodResolver(ThreadSchema),
  });

  const {
    handleCreate,
    handleFetchCategories,
    handleFetchThreads,
    handleResetForm,
    handleSubmit,
  } = ForumHandlers({
    form,
    openDialog,
    setCategories,
    setLoading,
    setOpenDialog,
    setThreads,
    user,
  });

  useEffect(() => {
    handleFetchCategories();
    handleFetchThreads();
  }, []);

  useEffect(() => {
    handleResetForm();
  }, [openDialog]);

  return {
    categories,
    form,
    handleCreate,
    handleSubmit,
    loading,
    openDialog,
    setOpenDialog,
    threads,
  };
};

export default ForumHook;
