import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Table_header from "./Table_header"
import HeaderOrdersQuery from "./HeaderOrdersQuery";
function purchaseOrdersQuery() {
    return (
        <Box
            style={{
                marginLeft: "100px",
            }}
        >
            <Box sx={{ marginTop: -5 }}>
                <HeaderOrdersQuery />
                <Table_header />

            </Box>
        </Box>
    );
}

export default purchaseOrdersQuery