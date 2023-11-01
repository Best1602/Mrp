import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function Attributes1() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderRadius: "7px", // กำหนดขอบโค้งให้กับ input
                            // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                        },
                    }}
                    id="outlined-textarea"
                    label="Lot Number"
                    placeholder="Lot Number"
                    multiline
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderRadius: "7px", // กำหนดขอบโค้งให้กับ input
                            // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                        },
                    }}
                    id="outlined-textarea"
                    label="Item Color"
                    placeholder="Item Color"
                    multiline
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="Mfg Date"
                        sx={{
                            width: "74%",
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: '7px'
                            },
                        }}

                        format="DD/MM/YYYY" />
                </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderRadius: "7px", // กำหนดขอบโค้งให้กับ input
                            // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                        },
                    }}
                    id="outlined-textarea"
                    label="Batch Number"
                    placeholder="Batch Number"
                    multiline
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderRadius: "7px", // กำหนดขอบโค้งให้กับ input
                            // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                        },
                    }}
                    id="outlined-textarea"
                    label="Item Class"
                    placeholder="Item Class"
                    multiline
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        sx={{
                            width: "74%",
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: '7px'
                            },

                        }}
                        label="Expiry Date" format="DD/MM/YYYY" />
                </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderRadius: "7px", // กำหนดขอบโค้งให้กับ input
                            // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                        },
                    }}
                    id="outlined-textarea"
                    label="Line Status"
                    placeholder="Line Status"
                    multiline
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderRadius: "7px", // กำหนดขอบโค้งให้กับ input
                            // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                        },
                    }}
                    id="outlined-textarea"
                    label="Item Size"
                    placeholder="Item Size"
                    multiline
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderRadius: "7px", // กำหนดขอบโค้งให้กับ input
                            // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                        },
                    }}
                    id="outlined-textarea"
                    label="Zone"
                    placeholder="Zone"
                    multiline
                />
            </Grid>
        </Grid>
    );
}

export default Attributes1;
