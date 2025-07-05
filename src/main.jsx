import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import Navbar from "@pjt/pages/Navbar";
import router from "./routes/Routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.config.globalProperties.$axios = axiosInstance;
root.render(
  <div className="grid grid-rows-[auto_1fr] h-screen">
    <Navbar />
    <RouterProvider router={router} />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
