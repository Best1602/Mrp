import React from 'react'
import TabRc from './TabRc'
import Box from "@mui/material/Box";
function Receipt_Check() {
    return (
        <Box
            style={{
                marginLeft: "100px",
            }}
        >
            <Box sx={{ marginTop: -5 }}>
                <TabRc />
            </Box>
        </Box>
    )
}

export default Receipt_Check