import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { useUserName } from "../contexts/state/hooks";
import Protected from "./Protected";
import IndexPage from "../Page/IndexPage";
import Home from "../Page/Home";
import PurchaseOrders from "../Pagememu/Operation/PurchaseOrders";

export default function Routes() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Home",
      element: <Home />,
    },
    {
      path: "/purchase-orders-entry",
      element: <PurchaseOrders />,
    },
  ]);

  return routes;
}
