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




function Advance_2() {

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




                        <InputLabel>Minimum Pick Face</InputLabel>
                        <FormControl fullWidth>
                            <TextField
                                id="outlined-textarea"
                                label="Minimum Pick Face"
                                placeholder="Minimum Pick Face"
                                multiline
                                sx={{
                                    mr: 2,
                                    width: "100%",
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderRadius: '7px',
                                    },
                                }}
                                value={uomLooseValue}
                                onChange={(e) => setUomLooseValue(e.target.value)}
                            />
                        </FormControl>

                        <InputLabel>Packging</InputLabel>
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


                    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px", mt: "-1px" }}>

                        <InputLabel>Maximum Pick Face</InputLabel>
                        <FormControl fullWidth>
                            <TextField
                                id="outlined-textarea"
                                label="Maximum Pick Face"
                                placeholder="Maximum Pick Face"
                                multiline
                                sx={{
                                    mr: 2,
                                    width: "100%",
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderRadius: '7px',
                                    },
                                }}
                                value={uomLooseValue}
                                onChange={(e) => setUomLooseValue(e.target.value)}
                            />
                        </FormControl>

                        <InputLabel>Qty Loose</InputLabel>
                        <FormControl fullWidth>
                            <TextField
                                id="outlined-textarea"
                                label="Maximum Pick Face"
                                placeholder="Maximum Pick Face"
                                multiline
                                sx={{
                                    mr: 2,
                                    width: "100%",
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderRadius: '7px',
                                    },
                                }}
                                value={uomLooseValue}
                                onChange={(e) => setUomLooseValue(e.target.value)}
                            />
                        </FormControl>
                    </Box>
                </Box>

            </Box >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px", mt: "-1px", padding: '10px' }}>
                <InputLabel>UOM Loose</InputLabel>
                <FormControl fullWidth>
                    <TextField
                        id="outlined-textarea"
                        label="UOM Loose"
                        placeholder="UOM Loose"
                        multiline
                        sx={{
                            mr: 2,
                            width: "100%",
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: '7px',
                            },
                        }}
                        value={uomLooseValue}
                        onChange={(e) => setUomLooseValue(e.target.value)}

                    />

                </FormControl>

            </Box>




        </Box >
    );
}

export default Advance_2;
