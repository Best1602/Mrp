import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";

function Attributes4() {
    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 5,
                padding: 2,
                // width: 1000
            }}
        >
            <Box
                sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
                {/* <InputLabel>Customer Code</InputLabel> */}
                <TextField
                    sx={{
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderRadius: "10px",
                        },
                    }}
                    id="outlined-textarea"
                    label="Unit Cost"
                    placeholder="Unit Cost"
                    multiline
                />
                {/* <InputLabel>Customer Code</InputLabel> */}
                <TextField
                    sx={{
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderRadius: "10px",
                        },
                    }}
                    id="outlined-textarea"
                    label="Unit Price"
                    placeholder="Unit Price"
                    multiline
                />
                {/* <InputLabel>Customer Code</InputLabel> */}
                <TextField
                    sx={{
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderRadius: "10px",
                        },
                    }}
                    id="outlined-textarea"
                    label="Discount"
                    placeholder="Discount"
                    multiline
                />
            </Box>


            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                }}
            >
                {/* <InputLabel>Tax Number</InputLabel> */}
                <TextField
                    sx={{
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderRadius: "10px",
                        },
                    }}
                    id="outlined-textarea"
                    label="Total"
                    placeholder="Total"
                    multiline
                />
                {/* <InputLabel>Tax Number</InputLabel> */}
                <TextField
                    sx={{
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderRadius: "10px",
                        },
                    }}
                    id="outlined-textarea"
                    label="Discount cost"
                    placeholder="Discount cost"
                    multiline
                />
                {/* <InputLabel>Tax Number</InputLabel> */}
                <TextField
                    sx={{
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderRadius: "10px",
                        },
                    }}
                    id="outlined-textarea"
                    label="Total"
                    placeholder="Total"
                    multiline
                    InputProps={{
                        endAdornment: 'Bath' // ส่วนนี้เพิ่มข้อความ "bath" หลัง TextField
                    }}

                />

            </Box>


        </Box>

    );
}

export default Attributes4;
