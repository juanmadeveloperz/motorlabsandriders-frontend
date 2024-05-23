// Vendors
import { Outlet } from "react-router-dom";
// Components
import { Loading } from "@/components/loading/loading.component";
// Hooks
import PublichHook from "./hooks/public.hook";

const PublichGuard = () => {
  const { loading } = PublichHook();

  if (loading) {
    return <Loading />;
  }

  return <Outlet />;
};

export default PublichGuard;
