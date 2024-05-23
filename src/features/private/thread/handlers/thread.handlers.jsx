// Vendors
import axios from "@/core/config/axios";
import { toast } from "sonner";
// Libs
import { setFormErrors } from "@/core/lib/utils";

const fetchCommentsHandler = async ({ setComments, setLoading, threadId }) => {
  setLoading(true);
  try {
    const { data } = await axios.get(`/comments/thread/${threadId}`, {
      withCredentials: true,
    });
    setComments(data);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

const fetchThreadHandler = async ({ setThread, setLoading, threadId }) => {
  setLoading(true);
  try {
    const { data } = await axios.get(`/threads/${threadId}`, {
      withCredentials: true,
    });
    setThread(data);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

const submitHandler = async ({
  form,
  setComments,
  setLoading,
  setOpenDialog,
  threadId,
  user,
  values,
}) => {
  setLoading(true);

  const newValues = {
    ...values,
    userId: user._id,
    threadId,
  };

  try {
    const { data } = await axios.post("/comments", newValues, {
      withCredentials: true,
    });
    setOpenDialog(false);
    setComments((prev) => [...prev, data.comment]);
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
    content: "",
    threadId: "",
    userId: "",
  });
};

const ForumHandlers = ({
  form,
  openDialog,
  setComments,
  setLoading,
  setOpenDialog,
  setThread,
  threadId,
  user,
}) => {
  return {
    handleFetchComments: () =>
      fetchCommentsHandler({ setLoading, setComments, threadId }),
    handleFetchThread: () =>
      fetchThreadHandler({ setThread, setLoading, threadId }),
    handleSubmit: (values) =>
      submitHandler({
        form,
        setComments,
        setLoading,
        setOpenDialog,
        threadId,
        user,
        values,
      }),
    handleCreate: () => createHandler({ setOpenDialog }),
    handleResetForm: () => resetFormHandler({ form, openDialog }),
  };
};

export default ForumHandlers;
