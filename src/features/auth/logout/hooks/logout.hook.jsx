// Vendors
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Handlers
import LogoutHandlers from "../handlers/logout.handlers";

const LogoutHook = () => {
  const navigate = useNavigate();

  const { handleLogout } = LogoutHandlers({ navigate });

  useEffect(() => {
    handleLogout();
  }, []);
};

export default LogoutHook;
