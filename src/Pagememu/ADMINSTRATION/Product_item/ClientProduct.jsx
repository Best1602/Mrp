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
import DetailPo from "../../Operation/Inbound/Purchase_Orders_Entry/DetailPo";
import TabProduct from "./TabProduct";

function ClientProduct() {
    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    padding: "30px",
                    "@media (min-width: 768px)": {
                        flexDirection: "row",
                    },
                }}
            >
                <Paper
                    elevation={3}
                    sx={{
                        width: "100%",
                        "@media (min-width: 768px)": {
                            width: "70%",
                        },
                    }}
                >
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "1fr",
                            gap: 2,
                            padding: 2,
                            "@media (min-width: 768px)": {
                                gridTemplateColumns: "1fr 1fr",
                                gap: 5,
                            },
                        }}
                    >
                        <Box
                            sx={{
                                flex: 1,
                                display: "flex",
                                flexDirection: "column",
                                gap: "16px",
                                padding: "15px",
                            }}
                        >
                            <InputLabel>Client</InputLabel>
                            <Select
                                sx={{
                                    width: "100%",
                                    height: "57px",
                                    borderRadius: "7px",
                                }}
                            >
                                <MenuItem value={"บริษัท กกกกกกกก จำกัด"}>
                                    บริษัท กกกกกกกก จำกัด
                                </MenuItem>
                                <MenuItem value={"บริษัท ขขขขขขขข จำกัด"}>
                                    บริษัท ขขขขขขขข จำกัด
                                </MenuItem>
                                <MenuItem value={"บริษัท นนนนนนน จำกัด"}>
                                    บริษัท คคคคคคคค จำกัด
                                </MenuItem>
                            </Select>
                        </Box>

                        <Box
                            sx={{
                                flex: 1,
                                display: "flex",
                                flexDirection: "column",
                                gap: "16px",
                                padding: "1px",
                                marginTop: '15px'
                            }}
                        >
                            <InputLabel>Item Code</InputLabel>
                            <TextField
                                id="outlined-textarea"
                                label="Item Code"
                                placeholder="Item Code"
                                multiline
                                sx={{
                                    mr: 2,
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderRadius: "7px",
                                    },
                                }}
                            />
                        </Box>
                    </Box>


                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px",
                            padding: "30px",
                        }}
                    >
                        <InputLabel>Item Description</InputLabel>
                        <Select
                            sx={{
                                width: "100%%",
                                height: "57px",
                                borderRadius: "7px",
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderRadius: "10px",
                                },
                            }}
                        >
                            <MenuItem value={"001"}>ปากกา</MenuItem>
                            <MenuItem value={"002"}>หนังสือ</MenuItem>
                            <MenuItem value={"003"}>หน้ากากอนามัย</MenuItem>
                        </Select>
                    </Box>


                </Paper>





                <Paper
                    elevation={3}
                    sx={{
                        width: "100%",
                        "@media (min-width: 768px)": {
                            width: "30%",
                        },
                    }}
                >
                    <Box sx={{ padding: 2 }}>
                        <InputLabel>Product Price</InputLabel>
                    </Box>
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: 1,
                            padding: 2,
                        }}
                    >
                        <Box
                            sx={{
                                flex: 1,
                                display: "flex",
                                flexDirection: "column",
                                gap: "16px",
                                padding: "15px",
                            }}
                        >
                            <InputLabel>Discount ส่วนลด </InputLabel>
                            <TextField
                                id="outlined-textarea"
                                label="Discount ส่วนลด "
                                placeholder="Discount ส่วนลด "
                                multiline
                                InputProps={{
                                    endAdornment: "%", // ส่วนนี้เพิ่มข้อความ "bath" หลัง TextField
                                }}
                                sx={{
                                    mr: 2,
                                    width: "100%",
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderRadius: "7px",
                                    },
                                }}
                            />
                        </Box>
                        <Box
                            sx={{
                                flex: 1,
                                display: "flex",
                                flexDirection: "column",
                                gap: "16px",
                                padding: "15px",
                            }}
                        >
                            <InputLabel>Unit Cost </InputLabel>
                            <TextField
                                id="outlined-textarea"
                                label="Unit Cost"
                                placeholder="Unit Cost "
                                multiline
                                sx={{
                                    mr: 2,
                                    width: "100%",
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderRadius: "7px",
                                    },
                                }}
                            />
                        </Box>
                        <Box
                            sx={{
                                flex: 1,
                                display: "flex",
                                flexDirection: "column",
                                gap: "16px",
                                padding: "15px",
                            }}
                        >
                            <InputLabel>Unit Price </InputLabel>
                            <TextField
                                id="outlined-textarea"
                                label="Unit Price"
                                placeholder="Unit Price"
                                multiline
                                sx={{
                                    mr: 2,
                                    width: "100%",
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderRadius: "7px",
                                    },
                                }}
                            />
                        </Box>
                    </Box>
                </Paper>
            </Box>



            <Box sx={{ display: "flex", flexDirection: "row", marginLeft: "30px" }}>
                <TabProduct />
            </Box>
        </Box>
    );
}

export default ClientProduct;
