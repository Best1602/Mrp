import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
const columns = [

    {
        field: "client",
        headerName: "Client",
        width: 150,

        resizable: true,
    },
    {
        field: "sales_order",
        headerName: "Sales Order",
        width: 150,
        resizable: true,
    },
    {
        field: "delivery_No",
        headerName: "Delivery No",
        type: "number",
        width: 110,
        resizable: true,
    },
    {
        field: "load_summary",
        headerName: "Load Summary",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "reference_no",
        headerName: "Reference No",
        type: "number",
        width: 130,
        resizable: true,
    },
    {
        field: "status",
        headerName: "Status",
        type: "number",
        width: 150,
        resizable: true,
        align: "center",
    },
    {
        field: "customer_code",
        headerName: "Customer Code",
        type: "number",
        width: 150,
        resizable: true,
        // align: "left",
    },
    {
        field: "delivery_code",
        headerName: "Delivery Code",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "delivery_to",
        headerName: "Delivery To",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "delivery_street",
        headerName: "Delivery Street",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "delivery_building",
        headerName: "Delivery Buliding",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "delivery_street3",
        headerName: "Delivery Street 3",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "delivery_town",
        headerName: "Delivery Town",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "delivery_state",
        headerName: "Delivery State",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "delivery_country",
        headerName: "Delivery Country",
        type: "number",
        width: 150,
        resizable: true,
    },

    {
        field: "delivery_postcode",
        headerName: "Delivery Postcode",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "warehouse",
        headerName: "Warehouse",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "despatch",
        headerName: "Despatch",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "carrier",
        headerName: "Carrier",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "vehicle",
        headerName: "Vehicle",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "route",
        headerName: "Route",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "delivery_stop",
        headerName: "Delivery Stop",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "container",
        headerName: "Container",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "driver",
        headerName: "Driver",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "despatch_date",
        headerName: "Despathch Date",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "invoice_no",
        headerName: "Invoice No",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "invoice_date",
        headerName: "Invoice Date",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "deliver_date",
        headerName: "Delivery Date",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "deliver_time",
        headerName: "Delivery Time",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "recipient",
        headerName: "Recipient",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "recipient_id",
        headerName: "Recipient ID",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "remark",
        headerName: "Remark",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "update_so",
        headerName: "Update So",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "update_customer",
        headerName: "Update Customer",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "last_update",
        headerName: "Last Update",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "maker",
        headerName: "Maker",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "inv_no",
        headerName: "Inv No",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "status_work",
        headerName: "Status Work",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "remark_work",
        headerName: "Remark Work",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "create_date",
        headerName: "Create Date",
        type: "number",
        width: 150,
        resizable: true,
    },








    // {
    //     field: "fullName",
    //     headerName: "Full name",
    //     description: "This column has a value getter and is not sortable.",
    //     sortable: false,
    //     resizable: true,
    //     width: 160,
    //     valueGetter: (params) =>
    //         `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    // },
];

const rows = [
    { id: 1, lastName: "ของปลอม", firstName: "ของปลอม", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
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

        <Box sx={{ height: 150, width: "100%", marginTop: 2 }}>
            <Paper sx={{ width: "91.5vw" }} elevation={6}>

                <DataGrid
                    sx={{ height: "80vh", width: "91.5vw" }}
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
                /></Paper>

        </Box>
    );
}
