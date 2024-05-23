// Vendors
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Handlers
import ThreadHandlers from "../handlers/thread.handlers";
// Schemas
import { CommentSchema } from "../schemas/comment.schema";
// Stores
import { useAuthStore } from "@/core/stores/auth.store";

const ForumHook = () => {
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [thread, setThread] = useState(null);
  const [comments, setComments] = useState([]);

  const { user } = useAuthStore();

  const form = useForm({
    resolver: zodResolver(CommentSchema),
  });

  const { id: threadId } = useParams();

  const {
    handleCreate,
    handleFetchComments,
    handleFetchThread,
    handleResetForm,
    handleSubmit,
  } = ThreadHandlers({
    form,
    openDialog,
    setComments,
    setLoading,
    setOpenDialog,
    setThread,
    threadId,
    user,
  });

  useEffect(() => {
    handleFetchComments();
    handleFetchThread();
  }, []);

  useEffect(() => {
    handleResetForm();
  }, [openDialog]);

  return {
    comments,
    form,
    handleCreate,
    handleSubmit,
    loading,
    openDialog,
    setOpenDialog,
    thread,
  };
};

export default ForumHook;
