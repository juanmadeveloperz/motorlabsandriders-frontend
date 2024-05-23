// Vendors
import { Outlet } from "react-router-dom";

const PrivateLayout = () => (
  <div className="flex grow py-4 sm:py-6 lg:py-8 w-full">
    <Outlet />
  </div>
);

export default PrivateLayout;
