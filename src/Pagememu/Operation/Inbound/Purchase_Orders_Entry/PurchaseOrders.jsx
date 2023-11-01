import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TabPo from "./TabPo";
function PurchaseOrders() {
  return (
    <Box
      style={{
        marginLeft: "100px",
      }}
    >
      <Box sx={{ marginTop: -5 }}>
        <TabPo />
      </Box>
    </Box>
  );
}

export default PurchaseOrders;
