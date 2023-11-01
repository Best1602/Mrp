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
    { field: "order no", headerName: "Order No.", width: 90 },
    {
        field: "customer",
        headerName: "Customer",
        width: 150,

        resizable: true,
    },
    {
        field: "customer_name",
        headerName: "Customer Name",
        width: 150,
        resizable: true,
    },
    {
        field: "reference_no",
        headerName: "Reference No",
        type: "number",
        width: 110,
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
        field: "status",
        headerName: "Status",
        type: "number",
        width: 130,
        resizable: true,
    },
    {
        field: "route",
        headerName: "Route",
        type: "number",
        width: 150,
        resizable: true,
        align: "center",
    },
    {
        field: "priority",
        headerName: "Priority",
        type: "number",
        width: 150,
        resizable: true,
        // align: "left",
    },
    {
        field: "despatch",
        headerName: "Despatch",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "pickDate",
        headerName: "Pick Date",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "deliverDate",
        headerName: "Delivery Date",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "createDate",
        headerName: "Create Date",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "lastUpdate",
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
        field: "sdTotalVolumn",
        headerName: "SD TotalVolumn",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "sdTotalWeight",
        headerName: "SD Total Weight",
        type: "number",
        width: 150,
        resizable: true,
    },

    {
        field: "customerType",
        headerName: "Customer Type",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "customPermitNo",
        headerName: "Custom Permit No",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "delivery",
        headerName: "Delivery",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "createdBy",
        headerName: "Created By",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "amount",
        headerName: "Amount",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "tl",
        headerName: "TL",
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
