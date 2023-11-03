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
import BasicTabs from "./TabdetailPo";
const columns = [
    { field: "Item_No", headerName: "Item No", width: 90 },
    {
        field: "firstName",
        headerName: "First name",
        width: 150,

        // resizable: true,
    },
    {
        field: "lastName",
        headerName: "Last name",
        width: 150,

        // resizable: true,
    },
    {
        field: "age",
        headerName: "Age",
        type: "number",
        width: 110,

        // resizable: true,
    },
    {
        field: "fullName",
        headerName: "Full name",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        // resizable: true,
        width: 160,
        valueGetter: (params) =>
            `${params.row.firstName || ""} ${params.row.lastName || ""}`,
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

function DetailPo() {
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
                        height: "50vh"
                    }}
                ><h4>Detail</h4>
                    <DataGrid
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
                        label="Line"
                        placeholder="Line"
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
                        label="Item Code"
                        placeholder="Item Code"
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
                        label="Item Grade"
                        placeholder="Item Grade"
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
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">UOM</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            //value={age}
                            label="UOM"
                            sx={{ borderRadius: '7px' }}
                            value={"001"}
                        //onChange={handleChange}
                        >
                            <MenuItem value={"001"}>PCS</MenuItem>
                            <MenuItem value={"20"}>BOX</MenuItem>
                            <MenuItem value={"30"}>PALLET</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        id="outlined-textarea"
                        label="Smallest Unit"
                        placeholder="Smallest Unit"
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

                    <BasicTabs />
                </Paper>

            </Box>
        </Box >
    );
}

export default DetailPo;