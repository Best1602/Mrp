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
import DetailPo from "./DetailPo";
function HeaderPo() {
    return (
        <Box>
            <InputLabel sx={{ fontSize: '28px', marginTop: '1rem', color: '#003864', fontWeight: 600 }}>HEADER</InputLabel>

            <Paper
                elevation={3}
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "16px",
                    padding: 3,
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                    }}
                >
                    <InputLabel>Client</InputLabel>
                    <Select
                        sx={{
                            width: "100%",
                            height: "50px",
                            borderRadius: '7px'
                        }}
                        value={"001"}
                    >
                        <MenuItem value={"001"}>
                            บริษัท กกกกกกกก จำกัด
                        </MenuItem>
                        <MenuItem value={"บริษัท ขขขขขขขข จำกัด"}>
                            บริษัท ขขขขขขขข จำกัด
                        </MenuItem>
                        <MenuItem value={"บริษัท นนนนนนน จำกัด"}>
                            บริษัท คคคคคคคค จำกัด
                        </MenuItem>
                    </Select>
                    <InputLabel>Po Date</InputLabel>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            sx={{
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: '7px',
                                    height: '55px'
                                },

                            }}
                            label="Po Date"
                            format="DD/MM/YYYY"
                        />
                    </LocalizationProvider>
                </Box>
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                    }}
                >
                    <InputLabel>PO Number</InputLabel>
                    <Select
                        sx={{
                            width: "100%",
                            height: "50px",
                            borderRadius: '7px'
                        }}
                        value={"001"}
                    >
                        <MenuItem value={"001"}>001</MenuItem>
                        <MenuItem value={"002"}>002</MenuItem>
                        <MenuItem value={"003"}>003</MenuItem>
                    </Select>
                </Box>
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                    }}
                >
                    <InputLabel>PO Type</InputLabel>
                    <Select
                        sx={{
                            width: "100%",
                            height: "50px",
                            borderRadius: '7px'

                        }}
                        value={"001"}
                    >
                        <MenuItem value={"001"}>คืออะไรผมไม่รู้</MenuItem>
                        <MenuItem value={"002"}>คืออะไรผมไม่รู้</MenuItem>
                        <MenuItem value={"003"}>คืออะไรผมไม่รู้</MenuItem>
                    </Select>
                </Box>
            </Paper>
            <Box sx={{ display: "flex", gap: "20px", flexDirection: "row" }}>
                <Paper
                    elevation={6}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        marginTop: 2.5,
                        width: "75vw",
                    }}
                >
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr 1fr",
                            gap: "20px",
                            padding: 3,
                        }}
                    >
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                            <InputLabel>Document Reference</InputLabel>
                            <Select
                                sx={{
                                    width: "100%",
                                    height: "50px",
                                    borderRadius: '7px'
                                }}
                                value={"001"}
                            >
                                <MenuItem value={"001"}>001</MenuItem>
                                <MenuItem value={"002"}>002</MenuItem>
                                <MenuItem value={"003"}>003</MenuItem>
                            </Select>

                            <InputLabel>Invoice No.</InputLabel>
                            <Select
                                sx={{
                                    width: "100%",
                                    height: "50px",
                                    borderRadius: '7px'
                                }}
                                value={"001"}
                            >
                                <MenuItem value={"001"}>001</MenuItem>
                                <MenuItem value={"002"}>002</MenuItem>
                                <MenuItem value={"003"}>003</MenuItem>
                            </Select>
                            <InputLabel>Delivery Date (ETA)</InputLabel>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    sx={{
                                        mr: 2,
                                        width: '100%',
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderRadius: '7px',
                                        },
                                    }}
                                    label="Delivery Date (ETA)" format="DD/MM/YYYY" />
                            </LocalizationProvider>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                            <InputLabel>Currency</InputLabel>
                            <Select
                                sx={{
                                    width: "100%",
                                    height: "50px",
                                    borderRadius: '7px'
                                }}
                                value={"001"}
                            >
                                <MenuItem value={"001"}>บาท</MenuItem>
                                <MenuItem value={"002"}>บาทบาท</MenuItem>
                                <MenuItem value={"003"}>บาทบาทบาท</MenuItem>
                            </Select>
                            <InputLabel>Supplier Code</InputLabel>
                            <Select
                                sx={{
                                    width: "100%",
                                    height: "50px",
                                    borderRadius: '7px'
                                }}
                                value={"001"}
                            >
                                <MenuItem value={"001"}>คืออะไรผมไม่รู้</MenuItem>
                            </Select>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                            <TextField
                                label="Address"
                                id="outlined-multiline-static"
                                multiline
                                rows={4}
                                defaultValue=""
                                sx={{
                                    mr: 2,
                                    width: '100%',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderRadius: '7px',
                                    },
                                }}
                            />
                            <TextField
                                id="outlined-textarea"
                                label="Town/City"
                                placeholder="Town/City"
                                multiline
                                sx={{
                                    mr: 2,
                                    width: '100%',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderRadius: '7px',
                                    },
                                }}
                            />
                            <TextField
                                id="outlined-textarea"
                                label="County"
                                placeholder="County"
                                multiline
                                sx={{
                                    mr: 2,
                                    width: '100%',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderRadius: '7px',
                                    },
                                }}
                            />
                            <TextField
                                id="outlined-textarea"
                                label="Phone"
                                placeholder="Phone"
                                multiline
                                sx={{
                                    mr: 2,
                                    width: '100%',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderRadius: '7px',
                                    },
                                }}
                            />
                            <TextField
                                id="outlined-textarea"
                                label="State"
                                placeholder="State"
                                multiline
                                sx={{
                                    mr: 2,
                                    width: '100%',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderRadius: '7px',
                                    },
                                }}
                            />
                            <TextField
                                id="outlined-textarea"
                                label="Postal Code"
                                placeholder="Postal Code"
                                multiline
                                sx={{
                                    mr: 2,
                                    width: '100%',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderRadius: '7px',
                                    },
                                }}
                            />
                            <TextField
                                id="outlined-textarea"
                                label="Fax"
                                placeholder="Fax"
                                multiline
                                sx={{
                                    mr: 2,
                                    width: '100%',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderRadius: '7px',
                                    },
                                }}
                            />
                        </Box>
                    </Box>
                </Paper>
                <Paper sx={{ marginTop: 2.5 }} elevation={4}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px",
                            padding: 3,
                        }}
                    >
                        <RadioGroup
                            sx={{
                                display: "flex", // เรียงแนวนอน
                                flexDirection: "row", // การเรียงแนวนอน
                            }}
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                        //value={value}
                        //onChange={handleChange}
                        >
                            <FormControlLabel
                                value="Domestic"
                                control={<Radio />}
                                label="Domestic"
                            />
                            <FormControlLabel
                                value="Foreign"
                                control={<Radio />}
                                label="Foreign"
                            />
                        </RadioGroup>
                        <Input
                            type="file"
                            sx={{ mr: 2 }}
                        // อื่น ๆ ของ Input ตามต้องการ
                        />
                        <TextField
                            id="outlined-textarea"
                            label="Vat"
                            placeholder="Vat"
                            multiline
                            sx={{
                                mr: 2,
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: '7px',
                                },
                            }} // ระยะห่างด้านล่าง 2 หน่วย
                        />
                        <TextField
                            id="outlined-textarea"
                            label="Discount"
                            placeholder="Discount"
                            multiline
                            sx={{
                                mr: 2,

                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: '7px',
                                },
                            }} // ระยะห่างด้านล่าง 2 หน่วย
                        />
                        <TextField
                            label="Remark"
                            id="outlined-multiline-static"
                            multiline
                            rows={4}
                            defaultValue=""
                            sx={{
                                mr: 2,
                                width: '100%',
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: '7px',
                                },
                            }}
                        />
                        <TextField
                            label="Reject Remark"
                            id="outlined-multiline-static"
                            multiline
                            rows={4}
                            defaultValue=""
                            sx={{
                                mr: 2,
                                width: '100%',
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: '7px',
                                },
                            }}
                        />
                    </Box>
                </Paper>
            </Box>
            <Paper sx={{ marginTop: 2.5 }} elevation={4}>
                <Box sx={{ p: 2 }}>
                    <TextField
                        id="outlined-textarea"
                        label="Entered By"
                        placeholder="Entered By"
                        multiline
                        sx={{
                            mr: 2, width: "32%", '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: '7px',
                            },
                        }}
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Last Updated"
                        placeholder="Last Updated"
                        multiline
                        sx={{
                            mr: 2, width: "32%", '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: '7px',
                            },
                        }}
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Updated By"
                        placeholder="Updated By"
                        multiline
                        sx={{
                            mr: 2, width: "32%", '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: '7px',
                            },
                        }}
                    />
                </Box>
            </Paper>
            <Box sx={{ marginTop: 2 }}>

                <DetailPo />
            </Box>
        </Box>
    );
}

export default HeaderPo;
