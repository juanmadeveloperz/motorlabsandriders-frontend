// Vendors
import { createBrowserRouter } from "react-router-dom";
// Guards
import AuthGuard from "@/core/routes/auth/auth.guard";
import PrivateGuard from "@/core/routes/private/private.guard";
import PublicGuard from "@/core/routes/public/public.guard";
// Layouts
import AppLayout from "@/core/layouts/app.layout";
import AuthLayout from "@/features/auth/auth.layout";
import PrivateLayout from "@/features/private/private.layout";
import PublicLayout from "@/features/public/public.layout";
// Routes
import { authRoutes } from "@/core/routes/auth/auth.routes";
import { privateRoutes } from "@/core/routes/private/private.routes";
import { publicRoutes } from "@/core/routes/public/public.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        element: <PublicGuard />,
        children: [
          {
            element: <PublicLayout />,
            children: [...publicRoutes],
          },
        ],
      },
      {
        element: <AuthGuard />,
        children: [
          {
            element: <AuthLayout />,
            children: [...authRoutes],
          },
        ],
      },
      {
        element: <PrivateGuard />,
        children: [
          {
            element: <PrivateLayout />,
            children: [...privateRoutes],
          },
        ],
      },
    ],
  },
]);

export default router;
