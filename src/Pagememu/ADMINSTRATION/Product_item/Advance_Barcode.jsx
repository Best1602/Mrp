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



function Advance_Barcode() {

    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

    const [uomLooseValue, setUomLooseValue] = React.useState("");

    return (
        <Box sx={{ marginTop: '30px' }}>


            <Paper

                elevation={6}

                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    padding: 4,
                    width: '97%',

                }}

            >
                <InputLabel sx={{

                    marginTop: '-1rem',
                    color: '#003864',
                    fontWeight: 600,
                    padding: '15px',
                    fontSize: isSmallScreen ? "10px" : "20px",
                }}>Barcode Convertion</InputLabel>
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr",
                        gap: "5px",
                        // paddingLeft: '70px',

                    }}
                >


                    <TextareaAutosize
                        sx={{
                            padding: '50px',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: '10px',
                            },
                            '& textarea': {
                                // ปรับขนาดของพื้นที่ข้อความ
                                border: '1px solid #fff', // ปรับขอบของกรอบ
                                borderRadius: '10px', // ปรับระยะขอบมุม
                            },
                        }}
                        id="outlined-textarea"

                        multiline
                        minRows={20} // ปรับความสูงของ Textarea
                    />



                </Box>
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr 1fr",
                        gap: "5px",
                        // paddingLeft: '70px',

                    }}
                >


                    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px", mt: "5px", marginLeft: '13px' }}>

                        <InputLabel>Barcode Reading</InputLabel>
                        <FormControl fullWidth>
                            <TextField
                                id="outlined-textarea"
                                label="Barcode Reading"
                                placeholder="Barcode Reading"
                                multiline
                                sx={{
                                    width: "99%",
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderRadius: '7px',
                                    },
                                }}
                                value={uomLooseValue}
                                onChange={(e) => setUomLooseValue(e.target.value)}
                            />
                        </FormControl>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px", mt: "5px", marginLeft: '13px' }}>

                        <InputLabel>Pack UOM</InputLabel>
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
                    </Box> <Box sx={{ display: "flex", flexDirection: "column", gap: "16px", mt: "5px", marginLeft: '13px' }}>

                        <InputLabel>Unit Equivalent</InputLabel>
                        <FormControl fullWidth>
                            <TextField
                                id="outlined-textarea"
                                label="Unit Equivalent"
                                placeholder="Unit Equivalent"
                                multiline
                                sx={{
                                    width: "99%",
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderRadius: '7px',
                                    },
                                }}
                            />
                        </FormControl>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px", mt: "5px", marginLeft: '13px' }}>

                        <InputLabel>Remarks (Barcode)</InputLabel>
                        <FormControl fullWidth>
                            <TextField
                                id="outlined-textarea"
                                label="Remarks (Barcode)"
                                placeholder="Remarks (Barcode)"
                                multiline
                                sx={{
                                    width: "99%",
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderRadius: '7px',
                                    },
                                }}
                            />
                        </FormControl>
                    </Box>

                </Box>
                <Box
                    sx={{
                        display: "flex",
                        gridTemplateColumns: "column",
                        justifyContent: 'center'
                        // gap: "5px",
                        // paddingLeft: '70px',

                    }}
                >


                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                        <Button sx={{ background: "#4088DA", height: '40px', borderRadius: '40px', width: '250px' }} variant="contained">
                            Remove
                        </Button>

                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", mt: "30px", marginLeft: '20px' }}>

                        <Button sx={{ background: "#4088DA", height: '40px', borderRadius: '40px', width: '250px' }} variant="contained">
                            Add
                        </Button>
                    </Box>
                </Box>

            </Paper>



        </Box >


    );
}

export default Advance_Barcode;
