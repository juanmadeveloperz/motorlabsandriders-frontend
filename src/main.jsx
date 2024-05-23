// Vendors
// import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
// Fonts
import "@fontsource-variable/inter";
// Core
import router from "@/core/routes/router";
// Styles
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
