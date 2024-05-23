// Vendors
import axios from "@/core/config/axios";
// Libs
import { setFormErrors } from "@/core/lib/utils";

const submitHandler = async ({
  form,
  navigate,
  setMessage,
  setLoading,
  setUser,
  values,
}) => {
  setMessage({ text: "", type: "" });
  setLoading(true);

  try {
    const { data } = await axios.post("/auth/login", values, {
      withCredentials: true,
    });
    form.reset();
    setUser(data);
    navigate("/reserva");
  } catch (error) {
    if (error.response.data.errors) {
      setFormErrors(form, error);
    }
    if (error.response.data.message) {
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

const LoginHandlers = ({
  form,
  navigate,
  setMessage,
  setShowPassword,
  setLoading,
  setUser,
  showPassword,
}) => {
  return {
    handleSubmit: (values) =>
      submitHandler({
        form,
        navigate,
        setMessage,
        setLoading,
        setUser,
        values,
      }),
    handleToggleShowPassword: () =>
      toggleShowPasswordHandler({ setShowPassword, showPassword }),
  };
};

export default LoginHandlers;
