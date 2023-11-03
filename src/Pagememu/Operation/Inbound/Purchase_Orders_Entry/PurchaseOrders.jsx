import React from "react";
import Box from "@mui/material/Box";

import TabPo from "./TabPo";
function PurchaseOrders() {
  return (
    <Box
      sx={{
        marginLeft: "100px",
      }}
    >
      {/* Hello */}
      <Box sx={{ marginTop: -5 }}>
        <TabPo />

      </Box>


    </Box>
  );
}

export default PurchaseOrders;
