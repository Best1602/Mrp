import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import { TreeView, TreeItem } from "@mui/x-tree-view";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import PurchaseOrders from "../Pagememu/Operation/PurchaseOrders";
import HouseIcon from "@mui/icons-material/House";
//import Link from "@mui/material/Link";
import Home from "../Page/Home";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [showInquiryTreeView, setShowInquiryTreeView] = React.useState(false);
  const [showAdministrationTreeView, setshowAdministrationTreeView] =
    React.useState(false);
  const [showOperationTreeView, setShowOperationTreeView] =
    React.useState(false);
  const [showStockmanageTreeView, setShowStockmanageTreeView] =
    React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setShowInquiryTreeView(false);
    setShowOperationTreeView(false);
    setShowStockmanageTreeView(false);
    setshowAdministrationTreeView(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ backgroundColor: "#8EACCD" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Z-MOVE MRP
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            ...(open ? openedMixin(theme) : closedMixin(theme)),
          },
        }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>
          {[
            "HOME",
            "SYSTEM",
            "INQUIRY",
            "OPERATION",
            "STOCK MANAGE",
            "REPORT",
            "ADMINSTRATION",
          ].map((text, index) => (
            <React.Fragment key={text}>
              <ListItem
                key={text}
                disablePadding
                sx={{ display: "block" }}
                onClick={() => {
                  //  ไม่ใช้ router อะ
                  if (text === "HOME") {
                    window.location.href = "/Home";
                    return; // ไม่ต้องดำเนินการต่อ
                  }
                  // console.log(text);
                  if (text === "INQUIRY") {
                    setOpen(true);
                    setShowInquiryTreeView(!showInquiryTreeView);
                    setShowOperationTreeView(false);
                  } else if (text === "OPERATION") {
                    setOpen(true);
                    setShowOperationTreeView(!showOperationTreeView);
                    setShowInquiryTreeView(false);
                    if (window.location.pathname === "/purchase-orders-entry") {
                      // หาก path ตรงกับ "/purchase-orders-entry" ให้เปิดแสดง PurchaseOrders
                      setShowOperationTreeView(true);
                    } else {
                      // ถ้า path ไม่ตรงกับ "/purchase-orders-entry" ให้ปิด
                      setShowOperationTreeView(true);
                    }
                  } else if (text === "STOCK MANAGE") {
                    setOpen(true);
                    setShowStockmanageTreeView(!showStockmanageTreeView);
                    setShowInquiryTreeView(false);
                  } else if (text === "ADMINSTRATION") {
                    setOpen(true);
                    setshowAdministrationTreeView(!showAdministrationTreeView);
                    setShowInquiryTreeView(false);
                  } else {
                    setShowInquiryTreeView(false);
                    setShowOperationTreeView(false);
                    setShowStockmanageTreeView(false);
                  }
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>

                {showInquiryTreeView && text === "HOME" && <Box></Box>}

                {showInquiryTreeView && text === "INQUIRY" && (
                  <TreeView
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                  >
                    <TreeItem
                      nodeId="inbound"
                      label="Inbound"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <TreeItem
                        nodeId="purchaseOrdersQuery"
                        label="Purchase Orders Query"
                        onClick={(e) => e.stopPropagation()}
                      />
                      <TreeItem
                        nodeId="receiptOrdersQuery"
                        label="Receipt Orders Query"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </TreeItem>
                    <TreeItem
                      nodeId="outbound"
                      label="Outbound"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <TreeItem
                        nodeId="DeliveryOrdersQuery"
                        label="Delivery Orders Query"
                        onClick={(e) => e.stopPropagation()}
                      />
                      <TreeItem
                        nodeId="SalesOrdersQuery"
                        label="Sales Orders Query"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </TreeItem>
                    <TreeItem
                      nodeId="stockStatus"
                      label="Stock Status"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <TreeItem
                        nodeId="item"
                        label="Item Inventory Query"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </TreeItem>
                  </TreeView>
                )}
                {showOperationTreeView && text === "OPERATION" && (
                  <TreeView
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                  >
                    <TreeItem
                      nodeId="inbound"
                      label="Inbound"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <TreeItem
                        nodeId="purchase"
                        label={
                          <Link
                            to="/purchase-orders-entry"
                            // onClick={() => window.location.reload()}
                            style={{
                              color: "rgb( 65 ,65 ,65)",
                              textDecoration: "none",
                            }}
                          >
                            Purchase Orders Entry
                          </Link>
                        }
                        onClick={(e) => e.stopPropagation()}
                      />
                      <TreeItem
                        nodeId="receipt"
                        label="Receipt Check-In"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </TreeItem>
                    <TreeItem
                      nodeId="Other"
                      label="Other"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <TreeItem
                        nodeId="fulfillment"
                        label="Fulfillment Billing"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </TreeItem>
                    <TreeItem
                      nodeId="outbound"
                      label="Outbound"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <TreeItem
                        nodeId="Sale"
                        label="Sale Orders Entry"
                        onClick={(e) => e.stopPropagation()}
                      />
                      <TreeItem
                        nodeId="Pickorder"
                        label="Pickorder Summary"
                        onClick={(e) => e.stopPropagation()}
                      />

                      <TreeItem
                        nodeId="Packing"
                        label="Packing Entry"
                        onClick={(e) => e.stopPropagation()}
                      />
                      <TreeItem
                        nodeId="DeliveryOrders"
                        label="Delivery Orders"
                        onClick={(e) => e.stopPropagation()}
                      />
                      <TreeItem
                        nodeId="DeliveryConfirmation"
                        label="Delivery Confirmation"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </TreeItem>
                  </TreeView>
                )}

                {showStockmanageTreeView && text === "STOCK MANAGE" && (
                  <TreeView
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                  >
                    <TreeItem
                      nodeId="Stock"
                      label="Stock Management"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <TreeItem
                        nodeId="Items"
                        label="Items Relocation"
                        onClick={(e) => e.stopPropagation()}
                      />
                      <TreeItem
                        nodeId="Pallet"
                        label="Pallet Relocation"
                        onClick={(e) => e.stopPropagation()}
                      />
                      <TreeItem
                        nodeId="ChangeGrade"
                        label="Stock ChangeGrade"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </TreeItem>
                  </TreeView>
                )}

                {showAdministrationTreeView && text === "ADMINSTRATION" && (
                  <TreeView
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                  >
                    <TreeItem
                      nodeId="ClientEntities"
                      label="Client Entities"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <TreeItem
                        nodeId="Client Profile"
                        label="Client Profile"
                        onClick={(e) => e.stopPropagation()}
                      />
                      <TreeItem
                        nodeId="Customer Profiles"
                        label="Customer Profiles"
                        onClick={(e) => e.stopPropagation()}
                      />
                      <TreeItem
                        nodeId="Fulfillment Rate"
                        label="Fulfillment Rate"
                        onClick={(e) => e.stopPropagation()}
                      />
                      <TreeItem
                        nodeId="Supplier Profile"
                        label="Supplier Profile"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </TreeItem>
                    <TreeItem
                      nodeId="Products"
                      label="Products"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <TreeItem
                        nodeId="Box Property"
                        label="Box Property"
                        onClick={(e) => e.stopPropagation()}
                      />
                      <TreeItem
                        nodeId="Product/Item Definition"
                        label="Product/Item Definition"
                        onClick={(e) => e.stopPropagation()}
                      />
                      <TreeItem
                        nodeId="Unit of Measure"
                        label="Unit of Measure"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </TreeItem>
                    <TreeItem
                      nodeId="System"
                      label="System"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <TreeItem
                        nodeId="Miscellaneous Maintenance Tools"
                        label="Miscellaneous Maintenance Tools"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </TreeItem>
                    <TreeItem
                      nodeId="Users"
                      label="Users"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <TreeItem
                        nodeId="User Group"
                        label="User Group"
                        onClick={(e) => e.stopPropagation()}
                      />
                      <TreeItem
                        nodeId="User Profiles"
                        label="User Profiles"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </TreeItem>
                    <TreeItem
                      nodeId="Warehouse"
                      label="Warehouse"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <TreeItem
                        nodeId="Station Management"
                        label="Station Management"
                        onClick={(e) => e.stopPropagation()}
                      />
                      <TreeItem
                        nodeId="Zone Management"
                        label="Zone Management"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </TreeItem>
                  </TreeView>
                )}
              </ListItem>
            </React.Fragment>
          ))}
        </List>

        <Divider />
      </Drawer>{" "}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        {/* <Home /> */}
      </Box>
    </Box>
  );
}
