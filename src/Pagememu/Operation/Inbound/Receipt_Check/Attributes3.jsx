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

function Attributes3() {
    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
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
                    label="Container 1"
                    placeholder="Container 1"
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
                    label="Container 2"
                    placeholder="Container 2"
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
                    label="Container 3"
                    placeholder="Container 3"
                    multiline
                />
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "18px",
                    // marginTop: 'px'
                }}
            >
                {/* <InputLabel>Tax Number</InputLabel> */}
                <Select
                    sx={{
                        width: "50%",
                        height: "57px",
                        borderRadius: "10px",
                    }}
                    defaultValue="001"
                >
                    <MenuItem value={"001"}>Box</MenuItem>
                    <MenuItem value={"002"}>Bottle</MenuItem>
                    <MenuItem value={"003"}>Pack</MenuItem>
                    <MenuItem value={"003"}>TopiClick</MenuItem>
                    <MenuItem value={"003"}>Jar</MenuItem>
                    <MenuItem value={"003"}>Other</MenuItem>
                </Select>
                {/* <InputLabel>Tax Number</InputLabel> */}
                <Select
                    sx={{
                        width: "50%",
                        height: "57px",
                        borderRadius: "10px",
                    }}
                    defaultValue="001"
                >
                    <MenuItem value={"001"}>Box</MenuItem>
                    <MenuItem value={"002"}>Bottle</MenuItem>
                    <MenuItem value={"003"}>Pack</MenuItem>
                    <MenuItem value={"003"}>TopiClick</MenuItem>
                    <MenuItem value={"003"}>Jar</MenuItem>
                    <MenuItem value={"003"}>Other</MenuItem>
                </Select>
                {/* <InputLabel>Tax Number</InputLabel> */}
                <Select
                    sx={{
                        width: "50%",
                        height: "57px",
                        borderRadius: "10px",
                    }} defaultValue="001"
                >
                    <MenuItem value={"001"}>Box</MenuItem>
                    <MenuItem value={"002"}>Bottle</MenuItem>
                    <MenuItem value={"003"}>Pack</MenuItem>
                    <MenuItem value={"003"}>TopiClick</MenuItem>
                    <MenuItem value={"003"}>Jar</MenuItem>
                    <MenuItem value={"003"}>Other</MenuItem>
                </Select>
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
                    label="Container 4"
                    placeholder="Container 4"
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
                    label="Container 5"
                    placeholder="Container 5"
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
                    label="Container 6"
                    placeholder="Container 6"
                    multiline
                />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "18px",
                    marginTop: "-16px"
                    // marginRight: "16px"
                }}
            >
                <InputLabel>  </InputLabel>
                <Select
                    sx={{
                        width: "50%",
                        height: "57px",
                        borderRadius: "10px",
                    }}
                    defaultValue="001"
                >
                    <MenuItem value={"001"}>Box</MenuItem>
                    <MenuItem value={"002"}>Bottle</MenuItem>
                    <MenuItem value={"003"}>Pack</MenuItem>
                    <MenuItem value={"003"}>TopiClick</MenuItem>
                    <MenuItem value={"003"}>Jar</MenuItem>
                    <MenuItem value={"003"}>Other</MenuItem>
                </Select>
                {/* <InputLabel>Tax Number</InputLabel> */}
                <Select
                    sx={{
                        width: "50%",
                        height: "55px",
                        borderRadius: "10px",

                    }}
                    defaultValue="001"
                >
                    <MenuItem value={"001"}>Box</MenuItem>
                    <MenuItem value={"002"}>Bottle</MenuItem>
                    <MenuItem value={"003"}>Pack</MenuItem>
                    <MenuItem value={"003"}>TopiClick</MenuItem>
                    <MenuItem value={"003"}>Jar</MenuItem>
                    <MenuItem value={"003"}>Other</MenuItem>
                </Select>
                {/* <InputLabel>Tax Number</InputLabel> */}
                <Select
                    sx={{
                        width: "50%",
                        height: "55px",
                        borderRadius: "10px",
                    }} defaultValue="001"
                >
                    <MenuItem value={"001"}>Box</MenuItem>
                    <MenuItem value={"002"}>Bottle</MenuItem>
                    <MenuItem value={"003"}>Pack</MenuItem>
                    <MenuItem value={"003"}>TopiClick</MenuItem>
                    <MenuItem value={"003"}>Jar</MenuItem>
                    <MenuItem value={"003"}>Other</MenuItem>
                </Select>
            </Box>
        </Box>

    );
}

export default Attributes3;
