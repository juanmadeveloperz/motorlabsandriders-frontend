// Vendors
import { Navigate, Outlet } from "react-router-dom";
// Components
import { Loading } from "@/components/loading/loading.component";
// Constants
import constants from "./constants/auth.constants";
// Hooks
import AuthHook from "./hooks/auth.hook";

const AuthGuard = () => {
  const { user, loading } = AuthHook();

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return <Navigate to={constants.REDIRECT_PATH} />;
  }

  return <Outlet />;
};

export default AuthGuard;
