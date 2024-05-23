// Vendors
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import AdminConstants from "../constants/categories.constants";
// Handlers
import CategoriesHandlers from "../handlers/categories.handlers";
// Schemas
import { CategorySchema } from "../schemas/category.schema";

const CategoriesHook = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);

  const form = useForm({
    resolver: zodResolver(CategorySchema),
    defaultValues: AdminConstants.DEFAULT_FORM_VALUES,
  });

  const {
    handleCreate,
    handleDelete,
    handleDeleteMultiple,
    handleEdit,
    handleFetch,
    handleResetForm,
    handleSubmit,
    handleSubmitDelete,
    handleSubmitDeleteMultiple,
  } = CategoriesHandlers({
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
  });

  useEffect(() => {
    handleFetch();
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
  };
};

export default CategoriesHook;
