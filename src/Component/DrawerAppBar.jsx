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
import PurchaseOrders from "../Pagememu/Operation/Inbound/Purchase_Orders_Entry/PurchaseOrders";
import SystemUpdateAltOutlinedIcon from "@mui/icons-material/SystemUpdateAltOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Tooltip from "@mui/material/Tooltip";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import BoxProerty from "../Pagememu/ADMINSTRATION/Box Property/BoxProerty";
import Product_item from "../Pagememu/ADMINSTRATION/Product_item/Product_item";

const drawerWidth = 338;
// const background = "#0093D8"
const background = {
  background: 'linear-gradient(to bottom right, #00447E, #0081D4, #0093D8)', /* Linear Gradient จากสีแดงไปยังสีเหลือง */
}
const backgroundClose = {
  background: 'linear-gradient(to bottom right, #00447E, #0081D4, #0093D8)',
  // background: 'linear-gradient(to bottom right, #04163A, #19409B, #1D4AA9)', /* Linear Gradient จากสีแดงไปยังสีเหลือง */
}
const fontcolor = "#fff"

const openedMixin = (theme) => ({
  width: drawerWidth,
  backgroundColor: background,
  color: fontcolor,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  backgroundColor: backgroundClose,
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


// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------




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
      {/* <AppBar position="fixed" open={open}>
        <Toolbar sx={{ backgroundColor: "#0093D8" }}>
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
            Similan MRP
          </Typography>
        </Toolbar>
      </AppBar> */}
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
        <IconButton

          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginLeft: 1.5,
            ...(open && { display: "none" }),

            marginTop: 2.5,
            marginBottom: -10,
            backgroundColor: "#9BA3B4",
            width: "40px",
            height: "40px",
            borderRadius: '100%'
          }}
        >
          <img style={{ marginTop: 10, marginRight: 4 }} width={"54px"} height={"54px"} src="./logosimilan.png" alt="image" />
          {/* <MenuIcon /> */}
        </IconButton>
        <DrawerHeader>
          {/* --------------------------------------------------------- */}

          {open &&
            <Box
              sx={{ marginTop: "-5px", marginRight: "88px", fontSize: "22px" }}
            >
              <img style={{ marginBottom: "-27px", width: "54px", height: "54px" }} src="./logosimilan.png" alt="image" />

              Similan MRP
            </Box>
          }

          {open &&
            <IconButton
              sx={{ color: "white" }}
              onClick={handleDrawerClose}>
              {theme.direction === "rtl" ?
                (
                  <ChevronRightIcon />

                ) : (
                  <ChevronLeftIcon />
                )
              }

            </IconButton>
          }
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
              <Tooltip title={text} placement="right">
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
                      setShowStockmanageTreeView(false);
                      setshowAdministrationTreeView(false);

                    } else if (text === "OPERATION") {
                      setOpen(true);
                      setShowOperationTreeView(!showOperationTreeView);
                      setShowInquiryTreeView(false);
                      setShowStockmanageTreeView(false);
                      setshowAdministrationTreeView(false);
                      // if (window.location.pathname === "/purchase-orders-entry") {
                      //   // หาก path ตรงกับ "/purchase-orders-entry" ให้เปิดแสดง PurchaseOrders
                      //   setShowOperationTreeView(true);
                      // } else {
                      //   // ถ้า path ไม่ตรงกับ "/purchase-orders-entry" ให้ปิด
                      //   setShowOperationTreeView(true);
                      // }

                    } else if (text === "STOCK MANAGE") {
                      setOpen(true);
                      setShowStockmanageTreeView(!showStockmanageTreeView);
                      setShowInquiryTreeView(false);
                      setShowOperationTreeView(false);
                      setshowAdministrationTreeView(false);
                    } else if (text === "ADMINSTRATION") {
                      setOpen(true);
                      setshowAdministrationTreeView(!showAdministrationTreeView);
                      setShowInquiryTreeView(false);
                      setShowOperationTreeView(false);
                      setShowStockmanageTreeView(false);
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
                      color: '#fff',
                      margin: 1.5
                    }}


                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        // marginTop: 0,
                        m: 1,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                        color: '#fff',
                      }}
                    >
                      {text === "HOME" ? (
                        <HomeOutlinedIcon />

                      ) : text === "INQUIRY" ? (
                        <img style={{
                          width: '30px',
                          height: '30px',
                        }} src="./Purchase_Order.png" alt="" />
                        // <ArticleOutlinedIcon />
                      ) : text === "SYSTEM" ? (
                        // <SystemUpdateAltOutlinedIcon />
                        <img style={{
                          width: '30px',
                          height: '30px',
                        }} src="./Laptop Settings.png" alt="" />
                      ) : text === "OPERATION" ? (
                        // <SettingsOutlinedIcon />
                        <img style={{
                          width: '30px',
                          height: '30px',
                        }} src="./User.png" alt="" />
                      ) : text === "STOCK MANAGE" ? (
                        <img style={{
                          width: '30px',
                          height: '30px',
                        }} src="./New_Product.png" alt="" />
                        // <Inventory2OutlinedIcon />
                      ) : text === "REPORT" ? (
                        <img style={{
                          width: '30px',
                          height: '30px',
                        }} src="./Reporticon.png" alt="" />
                      ) : text === "ADMINSTRATION" ? (
                        <img style={{
                          width: '30px',
                          height: '30px',
                        }} src="./Admin_Settings Male.png" alt="" />
                        // <AdminPanelSettingsOutlinedIcon />
                      ) : (
                        <HomeOutlinedIcon />
                      )}
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
                        sx={{
                          m: 2,
                          marginLeft: 10
                        }}
                        nodeId="inbound"
                        label="Inbound"
                        // style={{ padding: 5 }}
                        onClick={(e) => e.stopPropagation()}
                      >

                        <TreeItem
                          sx={{
                            m: 2,
                            marginLeft: 0
                          }}
                          nodeId="purchaseOrdersQuery"
                          label={

                            <Link
                              to="/Purchase-Orders-Query"
                              onClick={handleDrawerClose}
                              style={{
                                color: "#fff",
                                textDecoration: "none",


                              }}
                            >
                              Purchase Orders Query

                            </Link>

                          }
                          onClick={(e) => e.stopPropagation()}
                        />


                        <TreeItem
                          sx={{
                            m: 2,
                            marginLeft: 0
                          }}
                          nodeId="receiptOrdersQuery"
                          label={
                            <Link
                              to="/Receipt-Check-Qr"
                              onClick={handleDrawerClose}
                              style={{
                                color: "#fff",
                                textDecoration: "none",
                                // paddingTop: 5,
                                // marginTop: 5,
                              }}
                            >
                              Receipt Orders Query
                            </Link>
                          }
                          onClick={(e) => e.stopPropagation()}
                        />
                      </TreeItem>
                      <TreeItem
                        sx={{
                          m: 2,
                          marginLeft: 10
                        }}
                        nodeId="outbound"
                        label="Outbound"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <TreeItem
                          sx={{
                            m: 2,
                            marginLeft: 0
                          }}
                          nodeId="DeliveryOrdersQuery"
                          label={
                            <Link
                              to="/Delivery-Orders-Query"
                              onClick={handleDrawerClose}
                              style={{
                                color: "#fff",
                                textDecoration: "none",
                                padding: 5,
                              }}
                            >
                              Delivery Orders Query
                            </Link>
                          }
                          onClick={(e) => e.stopPropagation()}
                        />
                        <TreeItem
                          sx={{
                            m: 2,
                            marginLeft: 0.5
                          }}
                          nodeId="SalesOrdersQuery"
                          label={
                            <Link
                              to="/Sales-Orders-Query"
                              onClick={handleDrawerClose}
                              style={{
                                color: "#fff",
                                textDecoration: "none",
                              }}
                            >
                              Sales Orders Query
                            </Link>
                          }
                          onClick={(e) => e.stopPropagation()}
                        />
                      </TreeItem>
                      <TreeItem
                        sx={{
                          m: 2,
                          marginLeft: 10
                        }}
                        nodeId="stockStatus"
                        label="Stock Status"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <TreeItem
                          sx={{
                            m: 2,
                            marginLeft: 0
                          }}
                          nodeId="item"
                          label={
                            <Link
                              to="/Item-Inventory-Query"
                              onClick={handleDrawerClose}
                              style={{
                                color: "#fff",
                                textDecoration: "none",
                              }}
                            >
                              Item Inventory Query
                            </Link>
                          }
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
                        sx={{
                          m: 2,
                          marginLeft: 10
                        }}
                        nodeId="inbound"
                        label="Inbound"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <TreeItem
                          sx={{
                            m: 2,
                            marginLeft: 0
                          }}
                          nodeId="purchase"
                          label={
                            <Link
                              to="/purchase-orders-entry"
                              onClick={handleDrawerClose}
                              style={{
                                color: "#fff",
                                textDecoration: "none",
                              }}
                            >
                              Purchase Orders Entry
                            </Link>
                          }
                          onClick={(e) => e.stopPropagation()}
                        />
                        <TreeItem
                          sx={{
                            m: 2,
                            marginLeft: 0
                          }}
                          nodeId="receipt"
                          label={
                            <Link
                              to="/Receipt-Check-In"
                              onClick={handleDrawerClose}
                              style={{
                                color: "#fff",
                                textDecoration: "none",
                              }}
                            >
                              ReceiptCheck
                            </Link>
                          }
                          onClick={(e) => e.stopPropagation()}
                        />
                      </TreeItem>
                      <TreeItem
                        sx={{
                          m: 2,
                          marginLeft: 10
                        }}
                        nodeId="Other"
                        label="Other"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <TreeItem
                          sx={{
                            m: 2,
                            marginLeft: 0
                          }}
                          nodeId="fulfillment"
                          label={
                            <Link
                              to="/Fulfillment-Billing"
                              onClick={handleDrawerClose}
                              style={{
                                color: "#fff",
                                textDecoration: "none",
                              }}
                            >
                              Fulfillment Billing
                            </Link>
                          }
                          onClick={(e) => e.stopPropagation()}
                        />
                      </TreeItem>
                      <TreeItem
                        sx={{
                          m: 2,
                          marginLeft: 10
                        }}
                        nodeId="outbound"
                        label="Outbound"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <TreeItem
                          sx={{
                            m: 2,
                            marginLeft: 0
                          }}
                          nodeId="Sale"
                          label={
                            <Link
                              to="/SaleOrders-Entry"
                              onClick={handleDrawerClose}
                              style={{
                                color: "#fff",
                                textDecoration: "none",
                              }}
                            >
                              Sale Orders Entry
                            </Link>
                          }
                          onClick={(e) => e.stopPropagation()}
                        />
                        <TreeItem
                          sx={{
                            m: 2,
                            marginLeft: 0
                          }}
                          nodeId="Pickorder"
                          label={
                            <Link
                              to="/Pickorder-Summary"
                              onClick={handleDrawerClose}
                              style={{
                                color: "#fff",
                                textDecoration: "none",
                              }}
                            >
                              Pickorder Summary
                            </Link>
                          }
                          onClick={(e) => e.stopPropagation()}
                        />

                        <TreeItem
                          sx={{
                            m: 2,
                            marginLeft: 0
                          }}
                          nodeId="Packing"
                          label={
                            <Link
                              to="/PackingEntry"
                              onClick={handleDrawerClose}
                              style={{
                                color: "#fff",
                                textDecoration: "none",
                              }}
                            >
                              Packing Entry
                            </Link>
                          }
                          onClick={(e) => e.stopPropagation()}
                        />
                        <TreeItem
                          sx={{
                            m: 2,
                            marginLeft: 0
                          }}
                          nodeId="DeliveryOrders"
                          label={
                            <Link
                              to="/DeliveryOrders"
                              onClick={handleDrawerClose}
                              style={{
                                color: "#fff",
                                textDecoration: "none",
                              }}
                            >
                              Delivery Orders
                            </Link>
                          }
                          onClick={(e) => e.stopPropagation()}
                        />
                        <TreeItem
                          sx={{
                            m: 2,
                            marginLeft: 0
                          }}
                          nodeId="DeliveryConfirmation"
                          label={
                            <Link
                              to="/Delivery-Confirmation"
                              onClick={handleDrawerClose}
                              style={{
                                color: "#fff",
                                textDecoration: "none",
                              }}
                            >
                              DeliveryConfirmation
                            </Link>
                          }
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
                        sx={{
                          m: 2,
                          marginLeft: 10
                        }}
                        nodeId="Stock"
                        label="Stock Management"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <TreeItem
                          sx={{
                            m: 2,
                            marginLeft: 0
                          }}
                          nodeId="Items"
                          label="Items Relocation"
                          onClick={(e) => e.stopPropagation()}
                        />
                        <TreeItem
                          sx={{
                            m: 2,
                            marginLeft: 0
                          }}
                          nodeId="Pallet"
                          label="Pallet Relocation"
                          onClick={(e) => e.stopPropagation()}
                        />
                        <TreeItem
                          sx={{
                            m: 2,
                            marginLeft: 0
                          }}
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
                        sx={{
                          m: 2,
                          marginLeft: 10
                        }}
                        nodeId="ClientEntities"
                        label="Client Entities"

                        onClick={(e) => e.stopPropagation()}
                      >
                        <TreeItem
                          sx={{
                            m: 2,
                            marginLeft: 0
                          }}
                          nodeId="Client Profile"


                          label={
                            <Link
                              to="/Client-Profile"
                              onClick={handleDrawerClose}
                              style={{
                                color: "#fff",
                                textDecoration: "none",
                              }}
                            >
                              Client Profile
                            </Link>
                          }
                          onClick={(e) => e.stopPropagation()}
                        />
                        <TreeItem
                          sx={{
                            m: 2,
                            marginLeft: 0
                          }}
                          nodeId="Customer Profiles"
                          label={
                            <Link
                              to="/Customer-Profiles"
                              onClick={handleDrawerClose}
                              style={{
                                color: "#fff",
                                textDecoration: "none",
                              }}
                            >
                              Customer Profiles
                            </Link>
                          }
                          onClick={(e) => e.stopPropagation()}
                        />
                        <TreeItem
                          sx={{
                            m: 2,
                            marginLeft: 0
                          }}
                          nodeId="Fulfillment Rate"
                          label={
                            <Link
                              to="/Fulfillment-rate"
                              onClick={handleDrawerClose}
                              style={{
                                color: "#fff",
                                textDecoration: "none",
                              }}
                            >
                              Fulfillment Rate
                            </Link>
                          }
                          onClick={(e) => e.stopPropagation()}
                        />
                        <TreeItem
                          sx={{
                            m: 2,
                            marginLeft: 0
                          }}
                          nodeId="Supplier Profile"
                          label={
                            <Link
                              to="/Supplier-Profile"
                              onClick={handleDrawerClose}
                              style={{
                                color: "#fff",
                                textDecoration: "none",
                              }}
                            >
                              SupplierProfile
                            </Link>
                          }
                          onClick={(e) => e.stopPropagation()}
                        />
                      </TreeItem>
                      <TreeItem
                        sx={{
                          m: 2,
                          marginLeft: 10
                        }}
                        nodeId="Products"
                        label="Products"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <TreeItem
                          sx={{
                            m: 2,
                            marginLeft: 0
                          }}
                          nodeId="Box Property"
                          label={
                            <Link
                              to="/BoxProerty"
                              onClick={handleDrawerClose}
                              style={{
                                color: "#fff",
                                textDecoration: "none",
                              }}
                            >
                              BoxProerty
                            </Link>
                          }
                          onClick={(e) => e.stopPropagation()}
                        />
                        <TreeItem
                          sx={{
                            m: 2,
                            marginLeft: 0
                          }}
                          nodeId="Product/Item Definition"

                          label={
                            <Link
                              to="/ProductItem"
                              onClick={handleDrawerClose}
                              style={{
                                color: "#fff",
                                textDecoration: "none",
                              }}
                            >
                              Product / Item Definition
                            </Link>
                          }
                          onClick={(e) => e.stopPropagation()}
                        />
                        <TreeItem
                          sx={{
                            m: 2,
                            marginLeft: 0
                          }}
                          nodeId="Unit of Measure"
                          label="Unit of Measure"
                          onClick={(e) => e.stopPropagation()}
                        />
                      </TreeItem>
                      <TreeItem
                        sx={{
                          m: 2,
                          marginLeft: 10
                        }}
                        nodeId="System"
                        label="System"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <TreeItem
                          sx={{
                            m: 2,
                            marginLeft: 0,
                            fontSize: 1,
                            // "& .MuiTreeItem-label": {
                            //   whiteSpace: "normal", // Allow text to wrap
                            //   overflow: "hidden",  // Hide any overflow
                            // }
                          }}
                          nodeId="Miscellaneous Maintenance Tools"
                          label="Miscellaneous Maintenance Tools"
                          onClick={(e) => e.stopPropagation()}
                        />
                      </TreeItem>
                      <TreeItem
                        sx={{
                          m: 2,
                          marginLeft: 10
                        }}
                        nodeId="Users"
                        label="Users"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <TreeItem
                          sx={{
                            m: 2,
                            marginLeft: 0
                          }}
                          nodeId="User Group"
                          label="User Group"
                          onClick={(e) => e.stopPropagation()}
                        />
                        <TreeItem
                          sx={{
                            m: 2,
                            marginLeft: 0
                          }}
                          nodeId="User Profiles"
                          label="User Profiles"
                          onClick={(e) => e.stopPropagation()}
                        />
                      </TreeItem>
                      <TreeItem
                        sx={{
                          m: 2,
                          marginLeft: 10
                        }}
                        nodeId="Warehouse"
                        label="Warehouse"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <TreeItem
                          sx={{
                            m: 2,
                            marginLeft: 0
                          }}
                          nodeId="Station Management"
                          label="Station Management"
                          onClick={(e) => e.stopPropagation()}
                        />
                        <TreeItem
                          sx={{
                            m: 2,
                            marginLeft: 0
                          }}
                          nodeId="Zone Management"
                          label="Zone Management"
                          onClick={(e) => e.stopPropagation()}
                        />
                      </TreeItem>
                    </TreeView>
                  )}
                </ListItem>
              </Tooltip>

            </React.Fragment>
          ))}
        </List>
        {open && (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '100vh' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="338" height="226" viewBox="0 0 338 226" fill="none">
              <path d="M138.821 115.338C120.714 91.9586 38.8968 14.5471 0 0V226H338V82.6069C278.984 117.416 189.033 180.169 138.821 115.338Z" fill="#1E9CDD" />
            </svg>
          </Box>
        )}
        <Divider />
      </Drawer>{" "}

      <Box Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

      </Box>
    </Box >
  );
}
