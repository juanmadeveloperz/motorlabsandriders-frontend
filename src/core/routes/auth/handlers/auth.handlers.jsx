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

const logoutHandler = async ({ setUser }) => {
  try {
    await axios.post("/auth/logout", {}, {
      withCredentials: true,
    });
    setUser(false);
    // Opcionalmente, redirigir al usuario después del logout
    window.location.href = '/login';
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
  }
};

const AuthHandlers = ({ setUser, setLoading }) => {
  return {
    handlerVerifyAuth: () => verifyAuthHandler({ setUser, setLoading }),
    handlerLogout: () => logoutHandler({ setUser }), // Añadido handler para el logout
  };
};

export default AuthHandlers;
