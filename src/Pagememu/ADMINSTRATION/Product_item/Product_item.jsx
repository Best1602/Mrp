import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ClientProduct from "./ClientProduct";



function Product_item() {
    return (
        <Box sx={{ marginLeft: '90px', marginTop: '-50px' }}>
            <ClientProduct />

        </Box>
    );
}

export default Product_item;
