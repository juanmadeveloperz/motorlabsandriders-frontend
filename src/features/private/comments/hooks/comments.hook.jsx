// Vendors
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Handlers
import CommentsHandlers from "../handlers/comments.handlers";
// Schemas
import { CommentSchema } from "../schemas/comment.schema";

const CommentsHook = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);
  const [threads, setThreads] = useState([]);
  const [users, setUsers] = useState([]);

  const form = useForm({
    resolver: zodResolver(CommentSchema),
  });

  const {
    handleCreate,
    handleDelete,
    handleDeleteMultiple,
    handleEdit,
    handleFetch,
    handleFetchThreads,
    handleFetchUsers,
    handleResetForm,
    handleSubmit,
    handleSubmitDelete,
    handleSubmitDeleteMultiple,
  } = CommentsHandlers({
    form,
    openAlert,
    openDialog,
    selectedRow,
    selectedRows,
    setData,
    setLoading,
    setOpenAlert,
    setOpenDialog,
    setSelectedRow,
    setSelectedRows,
    setThreads,
    setUsers,
  });

  useEffect(() => {
    handleFetch();
    handleFetchThreads();
    handleFetchUsers();
  }, []);

  useEffect(() => {
    handleResetForm();
  }, [openDialog, openAlert]);

  return {
    data,
    form,
    handleCreate,
    handleDelete,
    handleDeleteMultiple,
    handleEdit,
    handleSubmit,
    handleSubmitDelete,
    handleSubmitDeleteMultiple,
    loading,
    openAlert,
    openDialog,
    selectedRow,
    selectedRows,
    setOpenAlert,
    setOpenDialog,
    threads,
    users,
  };
};

export default CommentsHook;
