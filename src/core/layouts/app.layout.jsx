// Vendors
import { Outlet } from "react-router-dom";
// Components
import { Header } from "@/components/header/header.component";
import { Container } from "@/components/container/container.component";
import { Toaster } from "@/components/ui/sonner";

const AppLayout = () => {
  return (
    <div className="flex grow flex-col w-full">
      <Header />

      <main className="flex grow w-full">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Toaster />
    </div>
  );
};

export default AppLayout;
