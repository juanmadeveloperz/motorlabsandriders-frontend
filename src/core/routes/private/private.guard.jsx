// Vendors
import { matchPath, Navigate, Outlet } from "react-router-dom";
// Components
import { Loading } from "@/components/loading/loading.component";
// Constants
import constants from "./constants/private.constants";
// Hooks
import PrivateHook from "./hooks/private.hook";
// Routes
import { privateRoutes } from "./private.routes";

const PrivateGuard = () => {
  const { user, loading } = PrivateHook();

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to={constants.REDIRECT_PATH} />;
  }

  const routeMatch = privateRoutes.find((route) =>
    matchPath(route, location.pathname)
  );

  if (routeMatch && routeMatch.admin && user.role !== "admin") {
    return <Navigate to={constants.REDIRECT_PATH} />;
  }

  return <Outlet />;
};

export default PrivateGuard;
