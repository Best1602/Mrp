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
import Checkbox from '@mui/material/Checkbox';
import { DataGrid } from "@mui/x-data-grid";
import TableAssigned from "./TableAssigned";
import TablePacking from "./TablePacking";
import { useMediaQuery } from "@mui/material";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Advance_2 from "./Advance_2";
import Advance_Barcode from "./Advance_Barcode"


function Advance() {

    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    const [uomLooseValue, setUomLooseValue] = React.useState("");

    return (
        <Box>
            <Box
                sx={{
                    // display: "flex",
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


                            <InputLabel sx={{
                                // fontSize: '28px',
                                marginTop: '1rem',
                                color: '#003864',
                                fontWeight: 600,
                                fontSize: isSmallScreen ? "10px" : "20px",
                            }}>Product Definition</InputLabel>

                            <InputLabel>Product Version</InputLabel>
                            <FormControl fullWidth>
                                <TextField
                                    id="outlined-textarea"
                                    label="Product Version"
                                    placeholder="Product Version"
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

                            <InputLabel>Minimum Stock</InputLabel>
                            <FormControl fullWidth>
                                <TextField
                                    id="outlined-textarea"
                                    label="Minimum Stock"
                                    placeholder="Minimum Stock"
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

                            <InputLabel>Product Group</InputLabel>
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


                        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px", mt: "60px" }}>

                            <InputLabel>Maximum Stock</InputLabel>
                            <FormControl fullWidth>
                                <TextField
                                    id="outlined-textarea"
                                    label="Maximum Stock"
                                    placeholder="Maximum Stock"
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

                            <InputLabel>Brand</InputLabel>
                            <FormControl fullWidth>
                                <Select
                                    sx={{
                                        width: "100%",
                                        height: "55px",
                                        borderRadius: '7px'
                                    }}
                                    value={"001"}
                                >
                                    <MenuItem value={"001"}>001</MenuItem>
                                    <MenuItem value={"002"}>002</MenuItem>
                                    <MenuItem value={"003"}>003</MenuItem>
                                </Select>
                            </FormControl>


                            <InputLabel>เลขที่ใบขึ้นทะเบียน</InputLabel>
                            <FormControl fullWidth>
                                <Select
                                    sx={{
                                        width: "100%",
                                        height: "55px",
                                        borderRadius: '7px'
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
                    <Advance_2 />
                </Paper >
                <Advance_Barcode />

            </Box >




        </Box >
    );
}

export default Advance;
