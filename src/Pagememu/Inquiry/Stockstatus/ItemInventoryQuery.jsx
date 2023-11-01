import React from 'react'
import HeaderItem from './HeaderItem'
import Box from "@mui/material/Box";
import TableItem from './TableItem'
function ItemInventoryQuery() {
    return (
        <Box
            style={{
                marginLeft: "100px"
            }}
        >
            <Box sx={{ marginTop: -5, }}>
                <HeaderItem />
                <TableItem />
            </Box>
        </Box>
    )
}

export default ItemInventoryQuery