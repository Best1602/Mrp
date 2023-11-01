import React from 'react'
import { Box } from '@mui/material'
import HeaderQrderQuery from '../Outbound/HeaderQrderQuery'
import TableOrdersQuery from "../Outbound/TableOrdersQuery"
function DeliveyOrdersQuery() {
    return (
        <Box
            style={{
                marginLeft: "100px"
            }}
        >
            <Box sx={{ marginTop: -5, }}>
                <HeaderQrderQuery />
                <TableOrdersQuery />
            </Box>
        </Box>
    )
}

export default DeliveyOrdersQuery