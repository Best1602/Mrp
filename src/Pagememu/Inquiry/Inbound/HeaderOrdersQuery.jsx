import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Paper from "@mui/material/Paper";


function HeaderOrdersQuery() {

    return (
        <Box>
            {<Box
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    gap: "16px",
                    marginBottom: "16px",
                }}
            >

                <InputLabel sx={{ fontSize: '28px', marginTop: '1rem', color: '#003864', fontWeight: 600 }}>HEADER</InputLabel>
            </Box>}
            <Paper
                elevation={3}
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "16px",
                    padding: 3,
                    // paddingRight: '200px',
                    marginRight: '40px'
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                    }}
                >
                    <InputLabel>Client</InputLabel>
                    <Select
                        sx={{
                            width: "100%",
                            height: "57px",
                            borderRadius: '7px'
                        }}
                    >
                        <MenuItem value={"001"}>
                            001
                        </MenuItem>
                        <MenuItem value={"002"}>
                            002
                        </MenuItem>
                        <MenuItem value={"003"}>
                            003
                        </MenuItem>
                    </Select>




                </Box>
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                        borderRadius: '7px'
                    }}
                >
                    <InputLabel>Order #</InputLabel>
                    <Select
                        sx={{
                            width: "100%",
                            height: "57px",
                            borderRadius: '7px'
                        }}
                    >
                        <MenuItem value={"บริษัท กกกกกกกก จำกัด"}>
                            บริษัท กกกกกกกก จำกัด
                        </MenuItem>
                        <MenuItem value={"บริษัท ขขขขขขขข จำกัด"}>
                            บริษัท ขขขขขขขข จำกัด
                        </MenuItem>
                        <MenuItem value={"บริษัท นนนนนนน จำกัด"}>
                            บริษัท คคคคคคคค จำกัด
                        </MenuItem>
                    </Select>
                </Box>
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                    }}
                >
                    <InputLabel>Start Date</InputLabel>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            sx={{
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: '7px', // กำหนดขอบโค้งให้กับ input
                                    // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                                },
                            }} label="Start Date" format="DD/MM/YYYY" />
                    </LocalizationProvider>
                </Box>
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                    }}
                >
                    <InputLabel>End Date</InputLabel>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker sx={{
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: '7px', // กำหนดขอบโค้งให้กับ input
                                // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                            },
                        }} label="End Date" format="DD/MM/YYYY" />
                    </LocalizationProvider>

                </Box>

                <Box sx={{ display: 'block', alignItems: 'between' }}>

                    <Box>
                        <Button sx={{ background: "#007BFF", width: '100%', height: '45px', borderRadius: '40px', textTransform: 'none', fontSize: '15px', marginLeft: "8px" }} variant="contained">
                            Order Header
                        </Button>
                    </Box>
                    <Box>
                        <Button sx={{ background: "#007BFF", width: '100%', marginTop: '10px', height: '45px', borderRadius: '40px', textTransform: 'none', fontSize: '15px', marginLeft: "8px" }} variant="contained">
                            Order Ordetails
                        </Button>
                    </Box>
                </Box>
            </Paper >





            <Box sx={{ display: "flex", gap: "20px", flexDirection: "row" }}>
                <Paper
                    elevation={6}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        marginTop: 2.5,
                        width: '75vw'
                    }}
                >


                </Paper>

            </Box>

            <Box sx={{ marginTop: 2 }}> </Box>

        </Box >
    );
}

export default HeaderOrdersQuery;
