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
    { field: "No", headerName: "No.", width: 90 },
    {
        field: "Status",
        headerName: "Status",
        width: 150,

        resizable: true,
    },
    {
        field: "Client",
        headerName: "Client",
        width: 150,
        resizable: true,
    },
    {
        field: "Personal No",
        headerName: "Personal No",
        type: "number",
        width: 110,
        resizable: true,
    },
    {
        field: "Receipt Type",
        headerName: "Receipt Type",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "Order No",
        headerName: "Order No",
        type: "number",
        width: 130,
        resizable: true,
    },
    {
        field: "Document Reference",
        headerName: "Document Reference",
        type: "number",
        width: 150,
        resizable: true,
        align: "center",
    },
    {
        field: "Po No",
        headerName: "Po No",
        type: "number",
        width: 150,
        resizable: true,
        // align: "left",
    },
    {
        field: "So No",
        headerName: "So No",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "PD No",
        headerName: "PD No",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "Invoice No",
        headerName: "Invoice No",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "Warehouse",
        headerName: "Warehouse",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "Station",
        headerName: "Station",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "Supplier",
        headerName: "Supplier",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "Receipt Date",
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
        field: "Remarks",
        headerName: "Remarks",
        type: "number",
        width: 150,
        resizable: true,
    },
    {
        field: "fullName",
        headerName: "Full name",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        resizable: true,
        width: 160,
        valueGetter: (params) =>
            `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
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

        <Box sx={{ height: 200, width: "100%" }}>

            <Box
                sx={{
                    height: '30',
                    display: "flex",
                    justifyContent: "start",
                    gap: "7px",
                    marginBottom: "16px",
                }}
            >
                <Button sx={{ background: "#4088DA", height: '40px', borderRadius: '40px' }} variant="contained">
                    Product Label
                </Button>
                <Button sx={{ background: "#4088DA", height: '40px', borderRadius: '40px' }} variant="contained">
                    Pallet Label
                </Button>
                <Button sx={{ background: "#4088DA", height: '40px', borderRadius: '40px' }} variant="contained">
                    Pallet Tag
                </Button>
                <Button sx={{ background: "#4088DA", height: '40px', borderRadius: '40px' }} variant="contained">
                    Confirm Receipt
                </Button>


                <Box sx={{
                    // height: '30',
                    display: "flex",
                    justifyContent: "end",
                    gap: "8px",
                    marginBottom: "16px",
                    marginLeft: "480px"
                }}>
                    <TextField
                        size="small"
                        sx={{

                            '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: '7px',
                            },
                            '& input': {
                                backgroundColor: '#fff',
                                color: 'black',
                            },
                        }}
                        label="Receipt Number"

                    />


                    <Button sx={{ background: "#2DC598", height: '40px', borderRadius: '7px' }} variant="contained">
                        Search
                    </Button>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            size="small"
                            sx={{
                                width: '200px',
                                backgroundColor: '#fff',
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: '7px',

                                },

                            }} label="Start Date" format="DD/MM/YYYY" slotProps={{ textField: { size: 'small' }, }} />
                    </LocalizationProvider>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker sx={{
                            backgroundColor: '#fff', width: '200px',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: '7px',

                            },
                        }} label="End Date" format="DD/MM/YYYY"
                            slotProps={{ textField: { size: 'small' }, }} />
                    </LocalizationProvider>
                </Box>
            </Box>



            <Paper elevation={6}>

                <DataGrid
                    sx={{ height: "70vh" }}
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
