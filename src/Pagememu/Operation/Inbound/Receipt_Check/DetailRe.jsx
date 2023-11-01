import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { DataGrid } from "@mui/x-data-grid";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FormControl from '@mui/material/FormControl';
import TabDetailRe from "./TabDetailRe";
const columns = [
    { field: "Item No", headerName: "Item No", width: 90 },
    {
        field: "Description",
        headerName: "Description",
        width: 150,

        resizable: true,
    },
    {
        field: "Zone",
        headerName: "Zone",
        width: 150,

        resizable: true,
    },
    {
        field: "Pallet_no",
        headerName: "Pallet No",
        type: "number",
        width: 110,

        resizable: true,
    },
    {
        field: "QTY",
        headerName: "QTY",
        sortable: false,
        resizable: true,
        width: 160,

    },
    {
        field: "UOM",
        headerName: "UOM",
        sortable: false,
        resizable: true,
        width: 160,

    },
    {
        field: "Grade",
        headerName: "Grade",
        sortable: false,
        resizable: true,
        width: 160,

    },
    {
        field: "Lot_no",
        headerName: "Lot No",
        sortable: false,
        resizable: true,
        width: 160,

    },
    {
        field: "Batch_no",
        headerName: "Batch No",
        sortable: false,
        resizable: true,
        width: 160,

    },
    {
        field: "QTY",
        headerName: "QTY",
        sortable: false,
        resizable: true,
        width: 160,

    },
    {
        field: "Expire_date",
        headerName: "Expire Date",
        sortable: false,
        resizable: true,
        width: 160,

    },
    {
        field: "Mfg_date",
        headerName: "Mfg Date",
        sortable: false,
        resizable: true,
        width: 160,

    },
    {
        field: "Line_status",
        headerName: "Line Status",
        sortable: false,
        resizable: true,
        width: 160,

    },
    {
        field: "Pack_size",
        headerName: "Pack Size",
        sortable: false,
        resizable: true,
        width: 160,

    },
    {
        field: "Item_width",
        headerName: "Item Width",
        sortable: false,
        resizable: true,
        width: 160,

    },
    {
        field: "Item_length",
        headerName: "Item Length",
        sortable: false,
        resizable: true,
        width: 160,

    },
    {
        field: "Item_height",
        headerName: "Item Height",
        sortable: false,
        resizable: true,
        width: 160,

    },
    {
        field: "Item_weight",
        headerName: "Item Weight",
        sortable: false,
        resizable: true,
        width: 160,

    },
    {
        field: "Owner",
        headerName: "Owner",
        sortable: false,
        resizable: true,
        width: 160,

    },
];
const handleColumnWidthChange = (params) => {
    console.log(
        `Column ${params.colDef.field} width changed to ${params.width}px`
    );
};
const rows = [
    { id: 1, lastName: "ของปลอม", firstName: "ของปลอม", age: "ของปลอม" },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

function DetailRe() {
    return (
        <Box>
            <Paper
                elevation={6}
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "16px",
                    padding: 3,
                }}
            >

                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                        height: 700,
                        width: '100%'
                    }}
                ><h4>Detail</h4>
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
                </Box>
            </Paper>

            <Box
                sx={{
                    display: "flex",
                    gap: "20px",
                    flexDirection: "row",
                    flexWrap: "wrap",
                }}
            >
                <Paper
                    elevation={6}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        width: "20%",
                        padding: 2,
                        marginTop: 2,
                    }}
                >
                    <h4>Parameter</h4>
                    <TextField
                        id="outlined-textarea"
                        label="Line #"
                        placeholder="Line #"
                        multiline
                        sx={{
                            mr: 2,
                            width: '100%',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: '7px',
                            },
                        }}
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Purchase Order"
                        placeholder="Purchase Order"
                        multiline
                        sx={{
                            mr: 2,
                            width: '100%',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: '7px',
                            },
                        }}
                    />

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Item Code</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            //value={age}
                            label="UOM"
                            sx={{ borderRadius: '7px', }}
                        //onChange={handleChange}
                        >
                            <MenuItem value={10}>PCS</MenuItem>
                            <MenuItem value={20}>BOX</MenuItem>
                            <MenuItem value={30}>PALLET</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Item Grade</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            //value={age}
                            label="UOM"
                            sx={{ borderRadius: '7px', }}
                        //onChange={handleChange}
                        >
                            <MenuItem value={10}>PCS</MenuItem>
                            <MenuItem value={20}>BOX</MenuItem>
                            <MenuItem value={30}>PALLET</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        id="outlined-textarea"
                        label="Quantity"
                        placeholder="Quantity"
                        multiline
                        sx={{
                            mr: 2,
                            width: '100%',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: '7px',
                            },
                        }}
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Total Qty"
                        placeholder="Total Qty"
                        multiline
                        sx={{
                            mr: 2,
                            width: '100%',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: '7px',
                            },
                        }}
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Smallest unit"
                        placeholder="Smallest unit"
                        multiline
                        sx={{
                            mr: 2,
                            width: '100%',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: '7px',
                            },
                        }}
                    />

                </Paper>


                <Paper
                    elevation={6}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        width: "50%",
                        padding: 2,
                        marginTop: 2
                    }}
                >

                    <TabDetailRe />
                </Paper>

            </Box>
        </Box >
    );
}

export default DetailRe;