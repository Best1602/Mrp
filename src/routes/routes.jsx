import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { useUserName } from "../contexts/state/hooks";
import Protected from "./Protected";
import IndexPage from "../Page/IndexPage";
import Home from "../Page/Home";
import PurchaseOrders from "../Pagememu/Operation/Inbound/Purchase_Orders_Entry/PurchaseOrders";
import PurchaseOrdersQuery from "../Pagememu/Inquiry/Inbound/PurchaseOrdersQuery";
import ReceiptCheck from '../Pagememu/Operation/Inbound/Receipt_Check/Receipt_Check'
import FulfillmentBilling from "../Pagememu/Operation/Inbound/Other/FulfillmentBilling";
import SaleOrdersEntry from "../Pagememu/Operation/Inbound/Outbound/SaleOrdersEntry";
import PickorderSummary from "../Pagememu/Operation/Inbound/Outbound/PickorderSummary";
import PackingEntry from "../Pagememu/Operation/Inbound/Outbound/PackingEntry";
import DeliveryOrders from "../Pagememu/Operation/Inbound/Outbound/DeliveryOrders";
import DeliveryConfirmation from "../Pagememu/Operation/Inbound/Outbound/DeliveryConfirmation";
import Receipt_Qr from "../Pagememu/Inquiry/Receipt_Check/Receipt_Qr";
import DeliveyOrdersQuery from "../Pagememu/Inquiry/Outbound/DeliveyOrdersQuery";
import SalesOrdersQuery from "../Pagememu/Inquiry/Outbound/SalesOrdersQuery/SalesOrdersQuery";
import ItemInventoryQuery from '../Pagememu/Inquiry/Stockstatus/ItemInventoryQuery'
import ClientProfile from "../Pagememu/ADMINSTRATION/ClientProfile/ClientProfile";
import CustomerProfiles from '../Pagememu/ADMINSTRATION/CustomerProfiles/CustomerProfiles'
import SupplierProfile from '../Pagememu/ADMINSTRATION/Supplier Profile/SupplierProfile'
import Fulfillment_Rate from "../Pagememu/ADMINSTRATION/Fulfillment Rate/fulfillment_Rate";
import BoxProerty from "../Pagememu/ADMINSTRATION/Box Property/BoxProerty";
import Product_item from "../Pagememu/ADMINSTRATION/Product_item/Product_item";




export default function Routes() {
  const [open, setOpen] = React.useState(false);
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
    {
      path: "/Receipt-Check-In",
      element: <ReceiptCheck />,

    },
    {
      path: "/Purchase-Orders-Query",
      element: <PurchaseOrdersQuery />,
    },
    {
      path: "/Fulfillment-Billing",
      element: <FulfillmentBilling />,
    },
    {
      path: "/SaleOrders-Entry",
      element: <SaleOrdersEntry />,
    },
    {
      path: "/Pickorder-Summary",
      element: <PickorderSummary />,
    },
    {
      path: "/PackingEntry",
      element: <PackingEntry />,
    },
    {
      path: "/DeliveryOrders",
      element: <DeliveryOrders />,
    },
    {
      path: "/Delivery-Confirmation",
      element: <DeliveryConfirmation />,
    },
    {
      path: "/Receipt-Check-Qr",
      element: <Receipt_Qr open={open} />,
    },
    {
      path: "/Delivery-Orders-Query",
      element: <DeliveyOrdersQuery />,
    },
    {
      path: "/Sales-Orders-Query",
      element: <SalesOrdersQuery />,
    },
    {
      path: "/Item-Inventory-Query",
      element: <ItemInventoryQuery />,
    },
    {
      path: "/Client-Profile",
      element: <ClientProfile />,
    },
    {
      path: "/Customer-Profiles",
      element: <CustomerProfiles />,
    },
    {
      path: "/Supplier-Profile",
      element: <SupplierProfile />,
    },
    {
      path: "/Fulfillment-rate",
      element: <Fulfillment_Rate />,
    },
    {
      path: "/BoxProerty",
      element: <BoxProerty />,
    },
    {
      path: "/ProductItem",
      element: <Product_item />,
    },

  ]);

  return routes;
}
