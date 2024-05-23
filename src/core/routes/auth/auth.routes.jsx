// Pages
import LoginPage from "@/features/auth/login/login.page";
import RegisterPage from "@/features/auth/register/register.page";

export const authRoutes = [
  // {
  //   path: "/",
  //   element: <LoginPage />,
  // },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/registro",
    element: <RegisterPage />,
  },
];
