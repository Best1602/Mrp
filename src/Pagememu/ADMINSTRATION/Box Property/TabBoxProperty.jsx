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
import Input from "@mui/material/Input";
function TabBoxProperty() {
    return (
        <Box sx={{ width: '100%', }}>


            <Paper
                elevation={3}
                sx={{
                    display: "flex",
                    width: '100%',
                    padding: 3,


                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                        width: '50%',
                        // marginRight: '300px'
                    }}
                >
                    <InputLabel>Box</InputLabel>
                    <TextField
                        sx={{
                            width: '230px',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: '7px', // กำหนดขอบโค้งให้กับ input
                                // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                            },
                        }}
                        label="Box"
                        id="outlined-multiline-static"
                        defaultValue=""


                    />
                    <InputLabel>Height</InputLabel>
                    <TextField
                        sx={{
                            width: '230px',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: '7px', // กำหนดขอบโค้งให้กับ input
                                // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                            },
                        }}
                        label="Height"
                        id="outlined-multiline-static"
                        defaultValue=""
                        InputProps={{
                            endAdornment: 'mm.' // ส่วนนี้เพิ่มข้อความ "bath" หลัง TextField
                        }}
                    />
                    <InputLabel>ราคากล่อง</InputLabel>
                    <TextField
                        sx={{
                            width: '230px',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: '7px', // กำหนดขอบโค้งให้กับ input
                                // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                            },
                        }}
                        label="ราคากล่อง"
                        id="outlined-multiline-static"
                        defaultValue=""
                        InputProps={{
                            endAdornment: 'บาท' // ส่วนนี้เพิ่มข้อความ "bath" หลัง TextField
                        }}
                    />
                    <InputLabel>Balance</InputLabel>
                    <TextField
                        sx={{
                            width: '230px',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: '7px', // กำหนดขอบโค้งให้กับ input
                                // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                            },
                        }}
                        label="Balance"
                        id="outlined-multiline-static"
                        defaultValue=""
                        InputProps={{
                            endAdornment: 'CBM' // ส่วนนี้เพิ่มข้อความ "bath" หลัง TextField
                        }}
                    />

                    {/* <Button variant="contained" color="primary">Submit</Button> */}

                </Box>
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                    }}
                >
                    <InputLabel>Width</InputLabel>
                    <TextField
                        sx={{
                            width: '230px',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: '7px', // กำหนดขอบโค้งให้กับ input
                                // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                            },
                        }}
                        label="Width"
                        id="outlined-multiline-static"
                        defaultValue=""
                        InputProps={{
                            endAdornment: 'mm.' // ส่วนนี้เพิ่มข้อความ "bath" หลัง TextField
                        }}
                    />
                    <InputLabel>Weight</InputLabel>
                    <TextField
                        sx={{
                            width: '230px',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: '7px', // กำหนดขอบโค้งให้กับ input
                                // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                            },
                        }}
                        label="Weight"
                        id="outlined-multiline-static"
                        defaultValue=""
                        InputProps={{
                            endAdornment: 'KG.' // ส่วนนี้เพิ่มข้อความ "bath" หลัง TextField
                        }}
                    />
                    <InputLabel>ราคาบับเบิ้ล</InputLabel>
                    <TextField
                        sx={{
                            width: '230px',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: '7px', // กำหนดขอบโค้งให้กับ input
                                // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                            },
                        }}
                        label="ราคาบับเบิ้ล"
                        id="outlined-multiline-static"
                        defaultValue=""
                        InputProps={{
                            endAdornment: 'บาท' // ส่วนนี้เพิ่มข้อความ "bath" หลัง TextField
                        }}
                    />
                    <InputLabel>Status</InputLabel>
                    <Select
                        sx={{
                            width: '230px',
                            height: "55px",
                            borderRadius: "7px",


                        }}
                        defaultValue={"001"}
                    >
                        <MenuItem value={"001"}>ACTIVE</MenuItem>
                        <MenuItem value={"002"}>INACTIVE</MenuItem>
                        {/* <MenuItem value={"003"}>003</MenuItem> */}
                    </Select>

                    {/* <Button variant="contained" color="primary">DELETE</Button> */}
                </Box>
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                    }}
                >
                    <InputLabel>Depth</InputLabel>
                    <TextField
                        sx={{
                            width: '230px',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: '7px', // กำหนดขอบโค้งให้กับ input
                                // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                            },
                        }}
                        label="Depth"
                        id="outlined-multiline-static"
                        defaultValue=""
                        InputProps={{
                            endAdornment: 'mm.' // ส่วนนี้เพิ่มข้อความ "bath" หลัง TextField
                        }}
                    />
                    <InputLabel>Percent</InputLabel>
                    <TextField
                        sx={{
                            width: '230px',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: '7px', // กำหนดขอบโค้งให้กับ input
                                // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                            },
                        }}
                        label="Percent"
                        id="outlined-multiline-static"
                        defaultValue=""
                        InputProps={{
                            endAdornment: '%' // ส่วนนี้เพิ่มข้อความ "bath" หลัง TextField
                        }}
                    />
                    <InputLabel>Volume</InputLabel>
                    <TextField
                        sx={{
                            width: '230px',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: '7px', // กำหนดขอบโค้งให้กับ input
                                // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                            },
                        }}
                        label="Volume"
                        id="outlined-multiline-static"
                        defaultValue=""
                        InputProps={{
                            endAdornment: 'CBM' // ส่วนนี้เพิ่มข้อความ "bath" หลัง TextField
                        }}
                    />
                </Box>

            </Paper>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                <Button sx={{ background: "#4088DA", height: '40px', borderRadius: '40px', width: '150px' }} variant="contained">
                    Update
                </Button>
                <Button sx={{ background: "#4088DA", height: '40px', borderRadius: '40px', marginLeft: '30px', width: '150px' }} variant="contained">
                    Delete
                </Button>
            </Box>
        </Box>
    );
}

export default TabBoxProperty;
