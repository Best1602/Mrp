import React from 'react'
import Header_Qr from './HeaderQr'
import TableReceiptlist from './TableReceiptlist_Qr'
import Box from "@mui/material/Box";
function Receipt_Qr() {


    return (
        <Box
            style={{
                marginLeft: "100px"
            }}
        >
            <Box sx={{ marginTop: -5, }}>
                <Header_Qr />
                <TableReceiptlist />
            </Box>
        </Box>
    )
}

export default Receipt_Qr