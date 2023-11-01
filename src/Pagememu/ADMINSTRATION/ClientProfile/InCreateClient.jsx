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
const stylesx = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginTop: 2.5,
}

function InCreateClient() {

    return (
        <Box sx={{ display: "flex", gap: "20px", flexDirection: "column" }}>
            <Paper
                elevation={0}
                sx={
                    stylesx
                }
            >
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 5,
                        padding: 2,
                        // width: 1000
                    }}
                >
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <InputLabel>Client</InputLabel>
                        <Select
                            sx={{
                                width: "100%",
                                height: "55px",
                                borderRadius: "5px",


                            }}
                        >
                            <MenuItem value={"001"}>001</MenuItem>
                            <MenuItem value={"002"}>002</MenuItem>
                            <MenuItem value={"003"}>003</MenuItem>
                        </Select>



                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <InputLabel>Client</InputLabel>
                        <TextField
                            sx={{
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: "5px", // กำหนดขอบโค้งให้กับ input
                                    // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                                },
                            }}
                            id="outlined-textarea"
                            label="Client"
                            placeholder="Client"
                            multiline

                        />


                    </Box>

                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "16px", padding: 2, marginTop: -5 }}>
                    <InputLabel>Supplier Code</InputLabel>
                    <TextField
                        // sx={{
                        //     '& .MuiOutlinedInput-notchedOutline': {
                        //         borderRadius: '30px', // กำหนดขอบโค้งให้กับ input
                        //         // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                        //     },
                        // }}
                        label="Supplier Code"
                        id="outlined-multiline-static"
                        defaultValue=""
                    />
                </Box>



                {/* </Paper> */}
                <Box sx={{ padding: 3, color: '#000006' }}>Supplier Details</Box>
                {/* <Paper
                elevation={0}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    marginTop: 1.5,

                }}> */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: "16px", padding: 3 }}>
                    <InputLabel>Client</InputLabel>
                    <TextField
                        sx={{
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: '5px', // กำหนดขอบโค้งให้กับ input
                                // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                            },
                        }}
                        label="Client"
                        id="outlined-multiline-static"
                        defaultValue=""
                    />
                </Box>
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 4,
                        padding: 2,
                        // width: 1000
                    }}
                >
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "5px", padding: 1, marginTop: -5 }}>
                        <InputLabel>Status</InputLabel>
                        <Select
                            sx={{
                                width: "100%",
                                height: "55px",
                                borderRadius: "5px",
                            }}
                        >
                            <MenuItem value={"001"}>All</MenuItem>
                            <MenuItem value={"002"}>002</MenuItem>
                            <MenuItem value={"003"}>003</MenuItem>
                        </Select>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: "5px", padding: 1, marginTop: -5 }}>
                        <InputLabel>Tax Number</InputLabel>
                        <TextField
                            sx={{
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: "5px", // กำหนดขอบโค้งให้กับ input
                                    // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                                },
                            }}
                            label="Tax Number"
                            id="outlined-multiline-static"
                            defaultValue=""
                        />
                    </Box>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "5px", padding: 3, marginTop: -5 }}>
                    <InputLabel>Address</InputLabel>
                    <TextField
                        sx={{
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: "5px", // กำหนดขอบโค้งให้กับ input
                                // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                            },
                        }}
                        label="Address"
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                        defaultValue=""
                    />
                </Box>


                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gap: "5px",
                        padding: 2,
                        // width: 1000
                    }}
                >
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "5px", padding: 1, marginTop: -5 }}>
                        <InputLabel>District</InputLabel>
                        <Select
                            sx={{
                                width: "100%",
                                height: "55px",
                                borderRadius: "5px",
                            }}
                        >
                            <MenuItem value={"001"}>All</MenuItem>
                            <MenuItem value={"002"}>002</MenuItem>
                            <MenuItem value={"003"}>003</MenuItem>
                        </Select>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: "5px", padding: 1, marginTop: -5 }}>
                        <InputLabel>Province</InputLabel>
                        <Select
                            sx={{
                                width: "100%",
                                height: "55px",
                                borderRadius: "5px",
                            }}
                        >
                            <MenuItem value={"001"}>Bangkok</MenuItem>
                            <MenuItem value={"002"}>002</MenuItem>
                            <MenuItem value={"003"}>003</MenuItem>
                        </Select>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "5px", padding: 1, marginTop: -5 }}>
                        <InputLabel>Country</InputLabel>
                        <Select
                            sx={{
                                width: "100%",
                                height: "55px",
                                borderRadius: "5px",

                            }}
                        >
                            <MenuItem value={"001"}>Thailand</MenuItem>
                            <MenuItem value={"002"}>002</MenuItem>
                            <MenuItem value={"003"}>003</MenuItem>
                        </Select>
                    </Box>
                </Box>

                {/* ----------------------------- */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr ",
                        gap: "5px",
                        padding: 2,
                        // width: 1000
                    }}
                >
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "15px", padding: 1, marginTop: -5 }}>
                        <InputLabel>Postal Code</InputLabel>
                        <TextField
                            sx={{
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: "5px", // กำหนดขอบโค้งให้กับ input
                                    // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                                },
                            }}
                            label="Postal Code"
                            id="outlined-multiline-static"
                            defaultValue=""
                        />
                        <InputLabel>Telephone</InputLabel>
                        <TextField
                            sx={{
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: "5px", // กำหนดขอบโค้งให้กับ input
                                    // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                                },
                            }}
                            label="Telephone"
                            id="outlined-multiline-static"
                            defaultValue=""
                        />
                        <InputLabel>Contact Person</InputLabel>
                        <TextField
                            sx={{
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: "5px", // กำหนดขอบโค้งให้กับ input
                                    // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                                },
                            }}
                            label="Contact Person"
                            id="outlined-multiline-static"
                            defaultValue=""
                        />
                        <InputLabel>Email</InputLabel>
                        <TextField
                            sx={{
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: "5px", // กำหนดขอบโค้งให้กับ input
                                    // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                                },
                            }}
                            label="Email"
                            id="outlined-multiline-static"
                            defaultValue=""
                        />
                        <InputLabel>VAT</InputLabel>
                        <Select
                            sx={{
                                width: "100%",
                                height: "55px",
                                borderRadius: "5px",
                            }}
                        >
                            <MenuItem value={"001"}>7%</MenuItem>
                            <MenuItem value={"002"}>9%</MenuItem>

                        </Select>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: "15px", padding: 1, marginTop: -5 }}>
                        <InputLabel>Account Number</InputLabel>
                        <TextField
                            sx={{
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: "5px", // กำหนดขอบโค้งให้กับ input
                                    // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                                },
                            }}
                            label="Account Number"
                            id="outlined-multiline-static"
                            defaultValue=""
                        />
                        <InputLabel>Fax Number</InputLabel>
                        <TextField
                            sx={{
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: "5px", // กำหนดขอบโค้งให้กับ input
                                    // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                                },
                            }}
                            label="Fax Number"
                            id="outlined-multiline-static"
                            defaultValue=""
                        />
                        <InputLabel>Payment Term</InputLabel>
                        <Select
                            sx={{
                                width: "100%",
                                height: "55px",
                                borderRadius: "5px",
                            }}
                        >
                            <MenuItem value={"001"}>All</MenuItem>
                            <MenuItem value={"002"}>002</MenuItem>
                            <MenuItem value={"003"}>003</MenuItem>
                        </Select>
                        <InputLabel>Remark</InputLabel>
                        <TextField
                            sx={{
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: "5px", // กำหนดขอบโค้งให้กับ input
                                    // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                                },
                            }}
                            label="Remark"
                            id="outlined-multiline-static"
                            defaultValue=""
                        />
                        <InputLabel>VAT RATE</InputLabel>
                        <TextField
                            sx={{
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: "5px", // กำหนดขอบโค้งให้กับ input
                                    // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                                },
                            }}
                            label="VAT RATE"
                            id="outlined-multiline-static"
                            defaultValue=""
                        />
                    </Box>

                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "16px", padding: 3, marginTop: -5 }}>
                    <InputLabel>Supplier Category</InputLabel>
                    <TextField
                        sx={{
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: "5px", // กำหนดขอบโค้งให้กับ input
                                // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                            },
                        }}
                        label="Supplier Category"
                        id="outlined-multiline-static"
                        defaultValue=""
                    />
                </Box>



            </Paper >




        </Box >
    )
}

export default InCreateClient