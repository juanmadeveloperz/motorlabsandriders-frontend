// Pages
import ErrorPage from "@/features/error/error.page";
import LandingPage from "@/features/public/landing/landing.page";

export const publicRoutes = [
  {
    path: "/*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: <LandingPage />
  },
];
