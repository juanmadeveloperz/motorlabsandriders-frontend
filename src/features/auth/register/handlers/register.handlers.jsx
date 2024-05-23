// Vendors
import axios from "@/core/config/axios";
// Libs
import { setFormErrors } from "@/core/lib/utils";

const submitHandler = async ({ form, setMessage, setLoading, values }) => {
  setMessage({ text: "", type: "" });
  setLoading(true);

  try {
    const response = await axios.post("/auth/register", values, {
      withCredentials: true,
    });
    setMessage({
      text: response.data.message.text,
      type: response.data.message.type,
    });

    form.reset();
  } catch (error) {
    if (error.response.data.errors) {
      setFormErrors(form, error);
    }
    if (error.response?.data.message) {
      setMessage({
        text: error.response.data.message.text,
        type: error.response.data.message.type,
      });
    }
  } finally {
    setLoading(false);
  }
};

const toggleShowPasswordHandler = ({ setShowPassword, showPassword }) => {
  setShowPassword(!showPassword);
};

const RegisterHandlers = ({
  form,
  setMessage,
  setShowPassword,
  setLoading,
  showPassword,
}) => {
  return {
    handleSubmit: (values) =>
      submitHandler({
        form,
        setMessage,
        setLoading,
        values,
      }),
    handleToggleShowPassword: () =>
      toggleShowPasswordHandler({ setShowPassword, showPassword }),
  };
};

export default RegisterHandlers;
