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

function HeaderQry() {
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
                <InputLabel sx={{ fontSize: "20px", marginTop: "1rem" }}>
                    Header
                </InputLabel>
            </Box>

            <Paper
                elevation={3}
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "16px",
                    padding: 3,
                    // paddingRight: '200px',
                    marginRight: "40px",
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
                            borderRadius: '7px',
                        }}
                    >
                        <MenuItem value={"001"}>001</MenuItem>
                        <MenuItem value={"002"}>002</MenuItem>
                        <MenuItem value={"003"}>003</MenuItem>
                    </Select>
                    <InputLabel>Item Description</InputLabel>
                    <Select
                        sx={{
                            width: "100%",
                            height: "57px",
                            borderRadius: '7px',
                        }}
                    >
                        <MenuItem value={"001"}>001</MenuItem>
                        <MenuItem value={"002"}>002</MenuItem>
                        <MenuItem value={"003"}>003</MenuItem>
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
                    <InputLabel>Item Code </InputLabel>
                    <Select
                        sx={{
                            width: "100%",
                            height: "57px",
                            borderRadius: '7px',
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


                <Box sx={{ display: 'block', alignItems: 'between' }}>

                    <Box>
                        <Button sx={{ background: "#007BFF", width: '100%', height: '45px', borderRadius: '40px', textTransform: 'none', fontSize: '15px', marginLeft: "8px", marginTop: '50px' }} variant="contained">
                            Order Header
                        </Button>
                    </Box>
                    <Box>
                        <Button sx={{ background: "#007BFF", width: '100%', marginTop: '20px', height: '45px', borderRadius: '40px', textTransform: 'none', fontSize: '15px', marginLeft: "8px" }} variant="contained">
                            Order Ordetails
                        </Button>
                    </Box>
                </Box>
            </Paper >

            <Paper
                elevation={3}
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "16px",
                    padding: 3,
                    // paddingRight: '200px',
                    marginRight: "40px",
                    marginTop: 1.5
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
                    <InputLabel>Warehouse</InputLabel>
                    <Select
                        sx={{
                            width: "100%",
                            height: "57px",
                            borderRadius: '7px',
                        }}
                    >
                        <MenuItem value={"001"}>001</MenuItem>
                        <MenuItem value={"002"}>002</MenuItem>
                        <MenuItem value={"003"}>003</MenuItem>
                    </Select>
                    <InputLabel>Document Reference</InputLabel>
                    <Select
                        sx={{
                            width: "100%",
                            height: "57px",
                            borderRadius: '7px',
                        }}
                    >
                        <MenuItem value={"001"}>001</MenuItem>
                        <MenuItem value={"002"}>002</MenuItem>
                        <MenuItem value={"003"}>003</MenuItem>
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
                    <InputLabel>Zone</InputLabel>
                    <Select
                        sx={{
                            width: "100%",
                            height: "57px",
                            borderRadius: '7px',
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
                    <InputLabel>Location</InputLabel>
                    <Select
                        sx={{
                            width: "100%",
                            height: "57px",
                            borderRadius: '7px',
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
                    <InputLabel>Lot No</InputLabel>
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
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                    }}
                >
                    <InputLabel>Batch No</InputLabel>
                    <Select
                        sx={{
                            width: "100%",
                            height: "57px",
                            borderRadius: '7px',
                        }}
                    >
                        <MenuItem value={"All"}>All</MenuItem>
                        <MenuItem value={"บริษัท ขขขขขขขข จำกัด"}>
                            บริษัท ขขขขขขขข จำกัด
                        </MenuItem>
                        <MenuItem value={"บริษัท นนนนนนน จำกัด"}>
                            บริษัท คคคคคคคค จำกัด
                        </MenuItem>
                    </Select>
                </Box>

            </Paper>
        </Box >
    );
}

export default HeaderQry;
