import React from 'react'
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
function FulfillmentBilling() {
    return (
        <Box
            style={{
                marginLeft: "100px",
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "16px",
                    padding: 3,
                    width: '93vw'
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
                            height: "50px",
                            borderRadius: "7px"
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
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            sx={{
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: "7px" // กำหนดขอบโค้งให้กับ input
                                    // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                                },
                            }}
                            label="Po Date" format="DD/MM/YYYY" />
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
                    <InputLabel>PO Number</InputLabel>
                    <Select
                        sx={{
                            width: "100%",
                            height: "50px",
                            borderRadius: "7px"
                        }}
                    >
                        <MenuItem value={"001"}>001</MenuItem>
                        <MenuItem value={"002"}>002</MenuItem>
                        <MenuItem value={"003"}>003</MenuItem>
                    </Select> <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            sx={{
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: "7px" // กำหนดขอบโค้งให้กับ input
                                    // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                                },
                            }}
                            label="Po Date" format="DD/MM/YYYY" />
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
                    <InputLabel>PO Type</InputLabel>
                    <Select
                        sx={{
                            width: "100%",
                            height: "50px",
                            borderRadius: "7px"
                        }}
                    >
                        <MenuItem value={"001"}>คืออะไรผมไม่รู้</MenuItem>
                        <MenuItem value={"002"}>คืออะไรผมไม่รู้</MenuItem>
                        <MenuItem value={"003"}>คืออะไรผมไม่รู้</MenuItem>
                    </Select>
                </Box>
            </Paper>
            <Paper
                elevation={3}
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "16px",
                    padding: 3,
                    marginTop: 1.5,
                    width: '93vw'
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
                    รายละเอียดการใช้พื่นที่
                    <TextField
                        label="คลังสินค้า ลบ.ม."
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                        defaultValue=""
                        sx={{
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: "7px" // กำหนดขอบโค้งให้กับ input
                                // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                            },
                        }}
                    />
                    <TextField
                        id="outlined-textarea"
                        label="ห้องควบคุมอุณหภูมิ"
                        placeholder="ห้องควบคุมอุณหภูมิ"
                        multiline
                        sx={{
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: "7px" // กำหนดขอบโค้งให้กับ input
                                // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                            },
                        }}
                    />
                </Box>


            </Paper>
        </Box>
    )
}

export default FulfillmentBilling