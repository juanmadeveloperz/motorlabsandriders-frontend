// Vendors
import axios from "@/core/config/axios";
import { toast } from "sonner";
// Libs
import { setFormErrors } from "@/core/lib/utils";

const fetchCategoriesHandler = async ({ setCategories, setLoading }) => {
  setLoading(true);
  try {
    const { data } = await axios.get("/categories", { withCredentials: true });
    setCategories(data);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

const fetchThreadsHandler = async ({ setThreads, setLoading }) => {
  setLoading(true);
  try {
    const { data } = await axios.get("/threads", { withCredentials: true });
    setThreads(data);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

const submitHandler = async ({
  form,
  setThreads,
  setLoading,
  setOpenDialog,
  values,
  user,
}) => {
  setLoading(true);

  const newValues = {
    ...values,
    userId: user._id,
  };
  console.log(newValues);

  try {
    const { data } = await axios.post("/threads", newValues, {
      withCredentials: true,
    });
    setOpenDialog(false);
    setThreads((prev) => [...prev, data.thread]);
    toast.success(data.message);
  } catch (error) {
    if (error.response.data.errors) {
      setFormErrors(form, error);
    }
  } finally {
    setLoading(false);
  }
};

const createHandler = ({ setOpenDialog }) => {
  setOpenDialog(true);
};

const resetFormHandler = ({ form, openDialog }) => {
  if (openDialog) {
    return;
  }
  form.reset({
    title: "",
    content: "",
    categoryId: undefined,
  });
};

const ForumHandlers = ({
  form,
  openDialog,
  setCategories,
  setLoading,
  setOpenDialog,
  setThreads,
  user,
}) => {
  return {
    handleFetchCategories: () =>
      fetchCategoriesHandler({ setLoading, setCategories }),
    handleFetchThreads: () => fetchThreadsHandler({ setLoading, setThreads }),
    handleSubmit: (values) =>
      submitHandler({
        form,
        setThreads,
        setLoading,
        setOpenDialog,
        values,
        user,
      }),
    handleCreate: () => createHandler({ setOpenDialog }),
    handleResetForm: () => resetFormHandler({ form, openDialog }),
  };
};

export default ForumHandlers;
