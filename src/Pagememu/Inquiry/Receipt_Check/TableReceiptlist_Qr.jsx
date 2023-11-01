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
    { field: "No", headerName: "#", width: 90 },
    {
        field: "Client",
        headerName: "Client",
        width: 150,
        resizable: true,
    },
    {
        field: "order No",
        headerName: "Order No",

        width: 110,
        resizable: true,
    },
    {
        field: "document_reference",
        headerName: "Document Reference",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "Po_No",
        headerName: "Po No",
        type: "number",
        width: 130,
        resizable: true,
    },
    {
        field: "So_No",
        headerName: "So No",
        type: "number",
        width: 150,
        resizable: true,
        align: "center",
    },
    {
        field: "PD_No",
        headerName: "PD No",
        type: "number",
        width: 150,
        resizable: true,
        // align: "left",
    },
    {
        field: "invoice No",
        headerName: "Invoice No",
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
        field: "station",
        headerName: "Station",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "supplier",
        headerName: "Supplier",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "status",
        headerName: "Status",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "receipt_type",
        headerName: "Receipt Type",
        type: "number",
        width: 150,
        resizable: true,

    },
    {
        field: "receipt_date",
        headerName: "Receipt Date",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "Created By",
        headerName: "Created By",
        type: "number",
        width: 150,
        resizable: true,
    },

    {
        field: "remarks",
        headerName: "Remarks",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "remarkss",
        headerName: "remarks",
        type: "number",
        width: 150,
        resizable: true,
    },

];

const rows = [
    { id: 1, lastName: "ของปลอม", firstName: "ของปลอมฟหก", age: 35 },
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

        <Box sx={{ height: 150, width: "100%" }}>
            <Paper
                elevation={6}
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "16px",
                    padding: 3,

                    marginRight: '40px',
                    borderRadius: "30px"
                }} >

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
