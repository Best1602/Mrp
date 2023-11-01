import React from 'react'
import { Box } from '@mui/material'
import HeaderSalesQrderQuery from '../../Outbound/SalesOrdersQuery/HeaderSalesQrderQuery'
import TableSalesOrdersQuery from "../../Outbound/SalesOrdersQuery/TableSalesOrdersQuery"
function SalesOrdersQuery() {
    return (
        <Box
            style={{
                marginLeft: "100px"
            }}
        >
            <Box sx={{ marginTop: -5, }}>
                <HeaderSalesQrderQuery />
                <TableSalesOrdersQuery />
            </Box>
        </Box>
    )
}

export default SalesOrdersQuery