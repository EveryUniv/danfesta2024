import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GetTicket from "./pages/GetTicket";
import MyTicket from "./pages/MyTicket";
import CheckTicket from "./pages/CheckTicket";
import Layout from "./components/common/Layout";
import SignIn from "./pages/SignIn";

const router = createBrowserRouter([
  {
    path: "/get-ticket",
    element: <GetTicket />,
  },
  {
    path: "/my-ticket",
    element: <MyTicket />,
  },
  {
    path: "/check-ticket",
    element: <CheckTicket />,
  },{
    path:"/signin"
    element: <SignIn/>
  }
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
);
