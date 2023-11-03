import React, { useState } from "react";
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
import Checkbox from '@mui/material/Checkbox';
import { DataGrid } from "@mui/x-data-grid";
import TableAssigned from "./TableAssigned";
import TablePacking from "./TablePacking";
import { useMediaQuery } from "@mui/material";
import TextareaAutosize from '@mui/material/TextareaAutosize';
// import Advance2_2 from "./Advance2_2";
// import Advance2_2_Barcode from "./Advance2_2_Barcode";



function Advance2() {

    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

    const [uomLooseValue, setUomLooseValue] = React.useState("");

    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    // flexDirection: "column",
                    gap: 2,

                    "@media (min-width: 768px)": {
                        flexDirection: "row",

                    },
                }}
            >

                <Paper
                    elevation={3}
                    sx={{
                        // display: "flex",
                        // flexDirection: "column",
                        gap: "16px",
                        padding: 4,
                        width: '97%',
                        "@media (min-width: 768px)": {
                            flexDirection: "row",
                            // width: '80vh',
                        },
                    }}
                >

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: 5,
                            padding: 2,
                            width: "100%",
                            "@media (max-width: 768px)": {
                                gridTemplateColumns: "1fr",
                                // width: '80vh',
                            },
                        }}
                    >
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>




                            <InputLabel>Pick Method</InputLabel>
                            <FormControl fullWidth>
                                <Select
                                    sx={{
                                        width: "100%",
                                        height: "58px",
                                        borderRadius: '7px',

                                    }}
                                    value={"001"}
                                >
                                    <MenuItem value={"001"}>001</MenuItem>
                                    <MenuItem value={"002"}>002</MenuItem>
                                    <MenuItem value={"003"}>003</MenuItem>
                                </Select>
                            </FormControl>

                            <InputLabel>Secondary Risk</InputLabel>
                            <FormControl fullWidth>
                                <Select
                                    sx={{
                                        width: "100%",
                                        height: "58px",
                                        borderRadius: '7px',

                                    }}
                                    value={"001"}
                                >
                                    <MenuItem value={"001"}>001</MenuItem>
                                    <MenuItem value={"002"}>002</MenuItem>
                                    <MenuItem value={"003"}>003</MenuItem>
                                </Select>
                            </FormControl>

                            <InputLabel>Hazardous Substances Type</InputLabel>
                            <FormControl fullWidth>
                                <Select
                                    sx={{
                                        width: "100%",
                                        height: "55px",
                                        borderRadius: '7px',

                                    }}
                                    value={"001"}
                                >
                                    <MenuItem value={"001"}>001</MenuItem>
                                    <MenuItem value={"002"}>002</MenuItem>
                                    <MenuItem value={"003"}>003</MenuItem>
                                </Select>
                            </FormControl>





                        </Box>


                        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px", mt: "-1px" }}>

                            <InputLabel>Primary Risk</InputLabel>
                            <FormControl fullWidth>
                                <Select
                                    sx={{
                                        width: "100%",
                                        height: "58px",
                                        borderRadius: '7px',

                                    }}
                                    value={"001"}
                                >
                                    <MenuItem value={"001"}>001</MenuItem>
                                    <MenuItem value={"002"}>002</MenuItem>
                                    <MenuItem value={"003"}>003</MenuItem>
                                </Select>
                            </FormControl>

                            <InputLabel>Third Risk</InputLabel>
                            <FormControl fullWidth>
                                <Select
                                    sx={{
                                        width: "100%",
                                        height: "58px",
                                        borderRadius: '7px',

                                    }}
                                    value={"001"}
                                >
                                    <MenuItem value={"001"}>001</MenuItem>
                                    <MenuItem value={"002"}>002</MenuItem>
                                    <MenuItem value={"003"}>003</MenuItem>
                                </Select>
                            </FormControl>


                            <InputLabel>Physical Type of Chemicals</InputLabel>
                            <FormControl fullWidth>
                                <Select
                                    sx={{
                                        width: "100%",
                                        height: "58px",
                                        borderRadius: '7px',

                                    }}
                                    value={"001"}
                                >
                                    <MenuItem value={"001"}>001</MenuItem>
                                    <MenuItem value={"002"}>002</MenuItem>
                                    <MenuItem value={"003"}>003</MenuItem>
                                </Select>
                            </FormControl>





                        </Box>
                    </Box>


                    {/* <Advance2_2 /> */}
                </Paper >
                {/* <Advance2_2_Barcode /> */}

            </Box >
        </Box >
    );
}

export default Advance2;
