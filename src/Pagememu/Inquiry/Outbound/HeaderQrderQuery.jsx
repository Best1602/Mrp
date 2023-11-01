import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Input from '@mui/material/Input';
// import DetailPo from "./DetailPo";
function HeaderQrderQuery() {
    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    gap: "16px",
                    marginBottom: "16px",

                }}
            >

            </Box>
            <InputLabel>HEADER</InputLabel>
            <><br /></>
            <Box sx={{ display: "flex", gap: "20px", flexDirection: "row" }}>
                <Paper
                    elevation={3}
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "16px",
                        padding: 3,
                        width: '91.5vw'
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
                                height: "55px",
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
                        <InputLabel>Order</InputLabel>
                        <Select
                            sx={{
                                width: "100%",
                                height: "55px",
                                borderRadius: '7px'
                            }}
                        >
                            <MenuItem value={"001"}>WH01</MenuItem>
                            <MenuItem value={"002"}>WH02</MenuItem>
                            <MenuItem value={"003"}>WH03</MenuItem>
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
                                }}
                                label="Start Date" format="DD/MM/YYYY" />
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
                            <DatePicker
                                sx={{
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderRadius: '7px', // กำหนดขอบโค้งให้กับ input
                                        // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                                    },
                                }}
                                label="End Date" format="DD/MM/YYYY" />
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

                </Paper>





            </Box>
        </Box>
    );
}

export default HeaderQrderQuery;
