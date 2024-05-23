// Vendors
import { Outlet } from "react-router-dom";

const AuthLayout = () => (
  <div className="flex sm:items-center justify-center grow py-4 sm:py-6 lg:py-8 w-full">
    <Outlet />
  </div>
);

export default AuthLayout;
