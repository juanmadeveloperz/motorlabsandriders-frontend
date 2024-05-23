// Vendors
import axios from "@/core/config/axios";

const verifyAuthHandler = async ({ setUser, setLoading }) => {
  setLoading(true);

  try {
    const { data } = await axios.get("/auth/verify", {
      withCredentials: true,
    });
    setUser(data);
  } catch (error) {
    setUser(false);
  } finally {
    setLoading(false);
  }
};

const AuthHandlers = ({ setUser, setLoading }) => {
  return {
    handlerVerifyAuth: () => verifyAuthHandler({ setUser, setLoading }),
  };
};

export default AuthHandlers;
