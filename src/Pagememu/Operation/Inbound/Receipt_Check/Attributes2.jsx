import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function Attributes2() {
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
                    label="Item height"
                    placeholder="Item height"
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
                    label="Item Weight"
                    placeholder="Item Weight"
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
                    label="Remarks"
                    placeholder="Remarks"
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
                    label="Item width"
                    placeholder="Item width"
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
                    label="Item lenght"
                    placeholder="Item lenght"
                    multiline
                />
            </Grid>



        </Grid>
    );
}

export default Attributes2;
