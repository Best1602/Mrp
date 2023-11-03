import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";


import { DataGrid } from "@mui/x-data-grid";


import { useMediaQuery } from "@mui/material";

function TablePacking() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

    const rows = [
        { id: 1, lastName: "Packing", Packing: "A", age: 35 },
        { id: 2, lastName: "Packing", Packing: "B", age: 35 },
        { id: 3, lastName: "Packing ", Packing: "C", age: 35 },
        { id: 4, lastName: "Packing ", Packing: "D", age: 35 },
        { id: 5, lastName: "Packing ", Packing: "E", age: 35 },
        { id: 6, lastName: "Packing ", Packing: "F", age: 35 },

    ];
    const columns = [
        {
            field: "Packing",
            headerName: "Packing",
            width: 200,
            headerClassName: "custom-header",

        },
        {
            field: "Qty",
            headerName: "Qty",
            width: 200,
            headerClassName: "custom-header",

        },
        {
            field: "UOM",
            headerName: "UOM",
            width: 200,
            headerClassName: "custom-header",

        },
        {
            field: "Width",
            headerName: "Width",
            width: 200,
            headerClassName: "custom-header",

        },
        {
            field: "Depth",
            headerName: "Depth",
            width: 200,
            headerClassName: "custom-header",

        },
        {
            field: "Height",
            headerName: "Height",
            width: 200,
            headerClassName: "custom-header",

        },
        {
            field: "Volumn",
            headerName: "Volumn",
            width: 200,
            headerClassName: "custom-header",

        },
        {
            field: "Weight",
            headerName: "Weight",
            width: 200,
            headerClassName: "custom-header",

        },

    ];



    return (
        <Box>
            <Paper sx={{
                marginTop: 2.5,
                width: '96.5%',
            }} elevation={4}>

                <InputLabel sx={{
                    marginTop: '1rem',
                    color: '#003864',
                    fontWeight: 600,
                    padding: '15px',
                    fontSize: isSmallScreen ? "14px" : "20px", // Adjust font size
                    whiteSpace: 'pre-wrap',
                }}>
                    Packaging UOM Definition 1. All measurements per unit packing 2. UOM cannot be changed when active
                </InputLabel>

                <DataGrid
                    sx={{ height: isSmallScreen ? "25vh" : "45vh", paddingLeft: '30px' }} // Adjust height
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: isSmallScreen ? 3 : 5, // Adjust pageSize
                            },
                        },
                    }}
                    pageSizeOptions={isSmallScreen ? [3] : [5]} // Adjust pageSizeOptions
                    disableRowSelectionOnClick
                />

                <Box sx={{
                    display: "flex",
                    flexDirection: isSmallScreen ? "column" : "row", // Adjust flex direction
                    alignItems: isSmallScreen ? 'center' : 'end',
                    justifyContent: isSmallScreen ? 'end' : 'flex-end',
                    marginTop: '10px',
                    padding: '10px'
                }}>
                    <Button sx={{ marginBottom: isSmallScreen ? '10px' : 0, color: 'red', border: '1px solid red', }} variant="outlined">Remove</Button>
                    <Button sx={{ marginBottom: isSmallScreen ? '10px' : 0, marginLeft: isSmallScreen ? 0 : '10px', }} variant="outlined">Update</Button>
                    <Button sx={{ marginBottom: isSmallScreen ? '10px' : 0, marginLeft: isSmallScreen ? 0 : '10px' }} variant="outlined">Export</Button>
                </Box>
            </Paper>



            <Paper sx={{
                marginTop: 2.5,
                width: '96.5%',
            }} elevation={4}>

                <Box sx={{
                    display: "flex",
                    flexDirection: isSmallScreen ? "column" : "row", // Adjust flex direction
                    alignItems: isSmallScreen ? 'center' : 'center',
                    justifyContent: isSmallScreen ? 'center' : 'center',
                    marginTop: '10px',
                    padding: '10px',
                    gap: "16px",
                }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
                        <InputLabel>Packaging</InputLabel>
                        <FormControl fullWidth>
                            <Select
                                sx={{
                                    width: "9vw",
                                    height: "55px",
                                    borderRadius: '7px',
                                    marginTop: '12px'
                                }}
                                defaultValue={"001"}
                            >
                                <MenuItem value={"001"}>PALLET</MenuItem>
                                <MenuItem value={"002"}>BOX</MenuItem>
                                <MenuItem value={"003"}>CARTON</MenuItem>
                                <MenuItem value={"004"}>PCS</MenuItem>

                            </Select>
                        </FormControl>

                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '-10px' }}>
                        <InputLabel>Pkg Quantity</InputLabel>
                        <TextField
                            id="outlined-textarea"
                            label="Pkg Quantity"
                            placeholder="Pkg Quantity"
                            multiline
                            sx={{
                                width: "10vw",
                                marginTop: '10px',
                                // backgroundColor: '#FFFDDE',
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: '7px',

                                },
                                '& input': {

                                    borderRadius: '7px',
                                    padding: '8px',
                                    color: 'black', // สีข้อความ
                                },
                            }}
                        />

                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <InputLabel>UOM</InputLabel>
                        <FormControl fullWidth>
                            <Select
                                sx={{
                                    width: "9vw",
                                    height: "55px",
                                    borderRadius: '7px',
                                    marginTop: '12px'
                                }}
                                defaultValue={"004"}
                            >
                                <MenuItem value={"001"}>PALLET</MenuItem>
                                <MenuItem value={"002"}>BOX</MenuItem>
                                <MenuItem value={"003"}>CARTON</MenuItem>
                                <MenuItem value={"004"}>PCS</MenuItem>

                            </Select>
                        </FormControl>

                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                        <InputLabel>Width(mm)</InputLabel>
                        <TextField
                            id="outlined-textarea"
                            label="Width(mm)"
                            placeholder="Width(mm)"
                            multiline
                            sx={{
                                width: "10vw",
                                marginTop: '10px',
                                // backgroundColor: '#FFFDDE',
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: '7px',

                                },
                                '& input': {

                                    borderRadius: '7px',
                                    padding: '8px',
                                    color: 'black', // สีข้อความ
                                },
                            }}
                        />

                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                        <InputLabel>Lenght (mm)</InputLabel>
                        <TextField
                            id="outlined-textarea"
                            label="Lenght (mm)"
                            placeholder="Lenght (mm)"
                            multiline
                            sx={{
                                width: "10vw",
                                marginTop: '10px',
                                // backgroundColor: '#FFFDDE',
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: '7px',

                                },
                                '& input': {

                                    borderRadius: '7px',
                                    padding: '8px',
                                    color: 'black', // สีข้อความ
                                },
                            }}
                        />

                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                        <InputLabel>Height (mm)</InputLabel>
                        <TextField
                            id="outlined-textarea"
                            label="Height (mm)"
                            placeholder="Height (mm)"
                            multiline
                            sx={{
                                width: "10vw",
                                marginTop: '10px',
                                // backgroundColor: '#FFFDDE',
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: '7px',

                                },
                                '& input': {

                                    borderRadius: '7px',
                                    padding: '8px',
                                    color: 'black', // สีข้อความ
                                },
                            }}
                        />

                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                        <InputLabel>Volumn (cu .m)</InputLabel>
                        <TextField
                            id="outlined-textarea"
                            label="Volumn (cu .m)"
                            placeholder="Volumn (cu .m)"
                            multiline
                            sx={{
                                width: "10vw",
                                marginTop: '10px',
                                // backgroundColor: '#FFFDDE',
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: '7px',

                                },
                                '& input': {

                                    borderRadius: '7px',
                                    padding: '8px',
                                    color: 'black', // สีข้อความ
                                },
                            }}
                        />

                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                        <InputLabel>Weight (kg)</InputLabel>
                        <TextField
                            id="outlined-textarea"
                            label="Weight (kg)"
                            placeholder="Weight (kg)"
                            multiline
                            sx={{
                                width: "10vw",
                                marginTop: '10px',
                                // backgroundColor: '#FFFDDE',
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: '7px',

                                },
                                '& input': {

                                    borderRadius: '7px',
                                    padding: '8px',
                                    color: 'black', // สีข้อความ
                                },
                            }}
                        />

                    </Box>

                </Box>
            </Paper>
        </Box>
    )
}

export default TablePacking