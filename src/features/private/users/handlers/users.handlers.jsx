// Vendors
import axios from "@/core/config/axios";
import { toast } from "sonner";
// Constants
import AdminConstants from "../constants/users.constants";
import constants from "./constants/users.handlers.constants";
// Libs
import { setFormErrors } from "@/core/lib/utils";

const createHandler = ({ setOpenDialog }) => {
  setOpenDialog(true);
};

const deleteHandler = async ({ row, setSelectedRow, setOpenAlert }) => {
  setSelectedRow(row);
  setOpenAlert(true);
};

const deleteMultipleHandler = async ({
  rows,
  setSelectedRows,
  setOpenAlert,
}) => {
  setSelectedRows(rows);
  setOpenAlert(true);
};

const editHandler = async ({ form, row, setSelectedRow, setOpenDialog }) => {
  form.reset(row);
  setSelectedRow(row);
  setOpenDialog(true);
};

const fetchHandler = async ({ setData, setLoading }) => {
  setLoading(true);
  try {
    const { data } = await axios.get(constants.PATH, { withCredentials: true });
    setData(data);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

const resetFormHandler = ({ form, openAlert, openDialog, setSelectedRow }) => {
  if (openAlert || openDialog) {
    return;
  }
  setSelectedRow(null);
  form.reset(AdminConstants.DEFAULT_FORM_VALUES);
};

const submitHandler = async ({
  selectedRow,
  form,
  setData,
  setLoading,
  setOpenDialog,
  values,
}) => {
  if (selectedRow) {
    submitHandlerEdit({
      selectedRow,
      form,
      setData,
      setLoading,
      setOpenDialog,
      values,
    });
  } else {
    submitHandlerCreate({
      form,
      setData,
      setLoading,
      setOpenDialog,
      values,
    });
  }
};

const submitHandlerCreate = async ({
  form,
  setData,
  setLoading,
  setOpenDialog,
  values,
}) => {
  setLoading(true);

  try {
    const { data } = await axios.post(constants.PATH, values, {
      withCredentials: true,
    });
    setOpenDialog(false);
    setData((prev) => [...prev, data.user]);
    toast.success(data.message);
  } catch (error) {
    if (error.response.data.errors) {
      setFormErrors(form, error);
    }
  } finally {
    setLoading(false);
  }
};

const submitHandlerEdit = async ({
  selectedRow,
  form,
  setData,
  setLoading,
  setOpenDialog,
  values,
}) => {
  setLoading(true);

  try {
    const { data } = await axios.put(
      `${constants.PATH}/${selectedRow._id}`,
      values,
      {
        withCredentials: true,
      }
    );
    setOpenDialog(false);
    setData((prev) =>
      prev.map((item) => (item._id === selectedRow._id ? data.user : item))
    );
    toast.success(data.message);
  } catch (error) {
    if (error.response.data.errors) {
      setFormErrors(form, error);
    }
  } finally {
    setLoading(false);
  }
};

const submitHandlerDelete = async ({ selectedRow, setData, setLoading }) => {
  setLoading(true);
  try {
    const { data } = await axios.delete(
      `${constants.PATH}/${selectedRow._id}`,
      {
        withCredentials: true,
      }
    );
    setData((prev) => prev.filter((item) => item._id !== selectedRow._id));
    toast.success(data.message);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

const submitHandlerDeleteMultiple = async ({
  selectedRows,
  setData,
  setLoading,
  setSelectedRows,
}) => {
  setLoading(true);
  try {
    const { data } = await axios.delete(constants.PATH, {
      data: { ids: selectedRows.map((row) => row._id) },
      withCredentials: true,
    });
    setData((prev) => prev.filter((item) => !selectedRows.includes(item)));
    setSelectedRows([]);
    toast.success(data.message);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

const toggleShowPasswordHandler = ({ setShowPassword, showPassword }) => {
  setShowPassword(!showPassword);
};

const UsersHandlers = ({
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
  setShowPassword,
  showPassword,
}) => {
  return {
    handleCreate: () => createHandler({ form, setOpenDialog }),
    handleDelete: (row) => deleteHandler({ row, setSelectedRow, setOpenAlert }),
    handleDeleteMultiple: (rows) =>
      deleteMultipleHandler({ rows, setSelectedRows, setOpenAlert }),
    handleEdit: (row) =>
      editHandler({
        form,
        row,
        setSelectedRow,
        setOpenDialog,
      }),
    handleFetch: () => fetchHandler({ setData, setLoading }),
    handleResetForm: () =>
      resetFormHandler({
        form,
        openAlert,
        openDialog,
        setSelectedRow,
      }),
    handleSubmit: (values) =>
      submitHandler({
        selectedRow,
        form,
        setData,
        setLoading,
        setOpenDialog,
        values,
      }),
    handleSubmitDelete: () =>
      submitHandlerDelete({ selectedRow, setData, setLoading }),
    handleSubmitDeleteMultiple: () =>
      submitHandlerDeleteMultiple({
        selectedRows,
        setData,
        setLoading,
        setSelectedRows,
      }),
    handleToggleShowPassword: () =>
      toggleShowPasswordHandler({ setShowPassword, showPassword }),
  };
};

export default UsersHandlers;
