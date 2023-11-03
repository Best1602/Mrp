import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
const columns = [
    { field: "id", headerName: "Client", width: 90 },
    {
        field: "order_no",
        headerName: "Order_No",
        width: 150,

        // resizable: true,
    },
    {
        field: "reference_no",
        headerName: "Reference No",
        width: 150,

        // resizable: true,
    },
    {
        field: "invoice",
        headerName: "Invoice",
        type: "number",
        width: 110,

        // resizable: true,
    },
    {
        field: "status",
        headerName: "Status",

        width: 110,

        // resizable: true,
    },
    {
        field: "create_date",
        headerName: "Create_date",

        width: 110,

        // resizable: true,
    },
    {
        field: "supplier",
        headerName: "Supplier",

        width: 110,

        // resizable: true,
    },
    {
        field: "supplier_Name",
        headerName: "Supplier Name",

        width: 110,

        // resizable: true,
    },
    {
        field: "shipment_no",
        headerName: "Shipment No",

        width: 110,

        // resizable: true,
    },
    {
        field: "payment_term",
        headerName: "Payment Term",

        width: 110,

        // resizable: true,
    },
    {
        field: "vat",
        headerName: "Vat",
        type: "number",
        width: 50,

        // resizable: true,
    },
    {
        field: "discount",
        headerName: "Discount",
        type: "number",
        width: 110,

        // resizable: true,
    },
    {
        field: "discount_type",
        headerName: "Discount Type",

        width: 110,

        // resizable: true,
    },
    {
        field: "order_type",
        headerName: "Order Type",

        width: 110,

        // resizable: true,
    },
    {
        field: "request By",
        headerName: "Request By",

        width: 110,

        // resizable: true,
    },
    {
        field: "street",
        headerName: "Street",

        width: 110,

        // resizable: true,
    },
    {
        field: "bldg",
        headerName: "Bldg",

        width: 110,

        // resizable: true,
    },
    {
        field: "town",
        headerName: "Town",

        width: 110,

        // resizable: true,
    },
    {
        field: "country",
        headerName: "Country",

        width: 110,

        // resizable: true,
    },
    {
        field: "postcode",
        headerName: "Postcode",
        type: "number",
        width: 110,

        // resizable: true,
    },
    {
        field: "contact",
        headerName: "Contact",

        width: 110,

        // resizable: true,
    },
    {
        field: "maker",
        headerName: "Maker",

        width: 110,

        // resizable: true,
    },
    {
        field: "last_receipt",
        headerName: "Last Receipt",

        width: 110,

        // resizable: true,
    },
    {
        field: "received_by",
        headerName: "Received By",

        width: 110,

        // resizable: true,
    },
    {
        field: "update_by",
        headerName: "Update By",

        width: 110,

        // resizable: true,
    },
    {
        field: "last_update",
        headerName: "Last Update",

        width: 110,

        // resizable: true,
    },
    {
        field: "remarks",
        headerName: "Remarks",

        width: 110,

        // resizable: true,
    },
    {
        field: "req_delivery",
        headerName: "Req Delivery",

        width: 110,

        // resizable: true,
    },

];

const rows = [
    { id: 1, lastName: "ของปลอม", order_no: "ของปลอม", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 20 },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function DataGridDemo() {
    const handleColumnWidthChange = (params) => {
        console.log(
            `Column ${params.colDef.field} width changed to ${params.width}px`
        );
    };
    return (
        <Box sx={{ height: 700, width: "100%" }}>


            <Paper elevation={6}>

                <DataGrid
                    sx={{ height: "80vh" }}
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    disableRowSelectionOnClick
                    onColumnWidthChange={handleColumnWidthChange}
                />
            </Paper>

        </Box>
    );
}
