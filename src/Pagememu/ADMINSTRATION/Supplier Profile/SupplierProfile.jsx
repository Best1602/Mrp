import React from 'react'
import Box from "@mui/material/Box";
import TableSupplierProfile from './TableSupplierProfile'
function SupplierProfile() {
    return (
        <Box
            style={{
                marginLeft: "100px",
            }}
        >
            <Box sx={{ marginTop: -5 }}>

                <TableSupplierProfile />
            </Box>
        </Box>
    );
}

export default SupplierProfile