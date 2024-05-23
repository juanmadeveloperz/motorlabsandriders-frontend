// Vendors
import axios from "@/core/config/axios";

const logoutHandler = async ({ navigate }) => {
  try {
    await axios("/auth/logout", {
      withCredentials: true,
    });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

const LogoutHandlers = ({ navigate }) => {
  return {
    handleLogout: () => logoutHandler({ navigate }),
  };
};

export default LogoutHandlers;
