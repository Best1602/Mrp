import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function Parameter() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>

                <TextField
                    id="outlined-textarea"
                    label="Lot Number"
                    placeholder="Lot Number"
                    multiline
                    sx={{
                        mr: 2,
                        width: '100%',
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderRadius: '7px',
                        },
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    id="outlined-textarea"
                    label="Item Size"
                    placeholder="Item Size"

                    sx={{
                        width: "100%",
                        mr: 2,

                        '& .MuiOutlinedInput-notchedOutline': {
                            borderRadius: '7px',
                            width: '100%',
                        }
                    }}
                    multiline
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Mfg Date" sx={{
                            width: "100%",
                            mr: 2,
                            width: '100%',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: '7px',
                            },
                        }} format="DD/MM/YYYY" />
                </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    id="outlined-textarea"
                    label="Batch Number"
                    placeholder="Batch Number"
                    multiline
                    sx={{
                        mr: 2,
                        width: '100%',
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderRadius: '7px',
                        },
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    id="outlined-textarea"
                    label="Expiry Date"
                    placeholder="Expiry Date"
                    multiline
                    sx={{
                        mr: 2,
                        width: '100%',
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderRadius: '7px',
                        },
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    id="outlined-textarea"
                    label="Item Color"
                    placeholder="Item Color"
                    multiline
                    sx={{
                        mr: 2,
                        width: '100%',
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderRadius: '7px',
                        },
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    id="outlined-textarea"
                    label="Line Status"
                    placeholder="Line Status"
                    multiline
                    sx={{
                        mr: 2,
                        width: '100%',
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderRadius: '7px',
                        },
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    id="outlined-textarea"
                    label="Due Date"
                    placeholder="Due Date"
                    multiline
                    sx={{
                        mr: 2,
                        width: '100%',
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderRadius: '7px',
                        },
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    id="outlined-textarea"
                    label="Item Class"
                    placeholder="Item Class"
                    multiline
                    sx={{
                        mr: 2,
                        width: '100%',
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderRadius: '7px',
                        },
                    }}
                />
            </Grid>
        </Grid>
    );
}

export default Parameter;
