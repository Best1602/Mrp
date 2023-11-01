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
import Input from '@mui/material/Input';
import DetailRe from "./DetailRe";
// import DetailPo from "./DetailPo";
function HeaderRe() {
    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    gap: "16px",
                    marginBottom: "16px",
                }}
            >
                <Button sx={{ background: "#4088DA", height: '40px', borderRadius: '40px' }} variant="contained">
                    Product Label
                </Button>
                <Button sx={{ background: "#4088DA", height: '40px', borderRadius: '40px' }} variant="contained">
                    Pallet Label
                </Button>
                <Button sx={{ background: "#4088DA", height: '40px', borderRadius: '40px' }} variant="contained">
                    Pallet Tag
                </Button>
                <Button sx={{ background: "#4088DA", height: '40px', borderRadius: '40px' }} variant="contained">
                    Confirm Receipt
                </Button>

            </Box>
            <InputLabel>HEADER</InputLabel>
            <><br /></>
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
                    <InputLabel>Product Type</InputLabel>
                    <Select
                        sx={{
                            width: "100%",
                            height: "50px",
                            borderRadius: '7px'
                        }}
                    >
                        <MenuItem value={"001"}>WH01</MenuItem>
                        <MenuItem value={"002"}>WH02</MenuItem>
                        <MenuItem value={"003"}>WH03</MenuItem>
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
                    <InputLabel>Receipt Number</InputLabel>
                    <Select
                        sx={{
                            width: "100%",
                            height: "50px",
                            borderRadius: '7px'
                        }}
                    >
                        <MenuItem value={"001"}>001</MenuItem>
                        <MenuItem value={"002"}>002</MenuItem>
                        <MenuItem value={"003"}>003</MenuItem>
                    </Select>
                    <InputLabel>Location Assign</InputLabel>
                    <Select
                        sx={{
                            width: "100%",
                            height: "50px",
                            borderRadius: '7px'
                        }}
                    >
                        <MenuItem value={"001"}>WH01</MenuItem>
                        <MenuItem value={"002"}>WH02</MenuItem>
                        <MenuItem value={"003"}>WH03</MenuItem>
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
                    <InputLabel>Receipt Type</InputLabel>
                    <Select
                        sx={{
                            width: "100%",
                            height: "50px",
                            borderRadius: '7px'
                        }}
                    >
                        <MenuItem value={"001"}>คืออะไรผมไม่รู้</MenuItem>
                        <MenuItem value={"002"}>คืออะไรผมไม่รู้</MenuItem>
                        <MenuItem value={"003"}>คืออะไรผมไม่รู้</MenuItem>
                    </Select>

                    <InputLabel>Receipt Date</InputLabel>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            sx={{
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: '7px',
                                    height: '55px'
                                },
                                // ปรับความสูงตามที่คุณต้องการ
                                // สามารถปรับแต่งค่าความสูงเพิ่มเติมตามต้องการ
                            }}
                            label="Receipt Date"
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
                    <InputLabel>Warehouse</InputLabel>
                    <Select
                        sx={{
                            width: "100%",
                            height: "50px",
                            borderRadius: '7px'
                        }}
                    >
                        <MenuItem value={"001"}>WH01</MenuItem>
                        <MenuItem value={"002"}>WH02</MenuItem>
                        <MenuItem value={"003"}>WH03</MenuItem>
                    </Select>

                </Box>

            </Paper>
            <><br /></>
            <InputLabel>WARNING: Do not mix munual and system putaway pallets in one receipt</InputLabel>
            {/* <><br /></> */}


            {/* ------------------------------------------------------------------------------------ */}
            <Box sx={{ display: "flex", gap: "20px", flexDirection: "row" }}>
                <Paper
                    elevation={6}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        marginTop: 2.5,
                        width: '75vw'
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
                            >
                                <MenuItem value={"001"}>WH01</MenuItem>
                                <MenuItem value={"002"}>WH02</MenuItem>
                                <MenuItem value={"003"}>WH03</MenuItem>
                            </Select>

                            <InputLabel>Purchase Order#</InputLabel>
                            <Select
                                sx={{
                                    width: "100%",
                                    height: "50px",
                                    borderRadius: '7px'
                                }}
                            >
                                <MenuItem value={"001"}>WH01</MenuItem>
                                <MenuItem value={"002"}>WH02</MenuItem>
                                <MenuItem value={"003"}>WH03</MenuItem>
                            </Select>
                            <InputLabel>Sales Order Number Ref</InputLabel>
                            <Select
                                sx={{
                                    width: "100%",
                                    height: "50px",
                                    borderRadius: '7px'
                                }}
                            >
                                <MenuItem value={"001"}>WH01</MenuItem>
                                <MenuItem value={"002"}>WH02</MenuItem>
                                <MenuItem value={"003"}>WH03</MenuItem>
                            </Select>


                        </Box>
                        {/* ---------------------------------------------------------- */}
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>

                            <InputLabel>PD Order Number Ref</InputLabel>
                            <Select
                                sx={{
                                    width: "100%",
                                    height: "50px",
                                    borderRadius: '7px'
                                }}
                            >
                                <MenuItem value={"001"}>WH01</MenuItem>
                                <MenuItem value={"002"}>WH02</MenuItem>
                                <MenuItem value={"003"}>WH03</MenuItem>
                            </Select>

                            <InputLabel>Check In Station</InputLabel>
                            <Select
                                sx={{
                                    width: "100%",
                                    height: "50px",
                                    borderRadius: '7px'
                                }}
                            >
                                <MenuItem value={"001"}>คืออะไรผมไม่รู้</MenuItem>
                            </Select>
                            <InputLabel>Supplier Code</InputLabel>
                            <Select
                                sx={{
                                    width: "100%",
                                    height: "50px",
                                    borderRadius: '7px'
                                }}
                            >
                                <MenuItem value={"001"}>คืออะไรผมไม่รู้</MenuItem>
                            </Select>

                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>


                            <InputLabel>Customer Code</InputLabel>
                            <Select
                                sx={{
                                    width: "100%",
                                    height: "50px",
                                    borderRadius: '7px'
                                }}
                            >
                                <MenuItem value={"001"}>คืออะไรผมไม่รู้</MenuItem>
                            </Select>
                            <InputLabel>Payment Term</InputLabel>
                            <Select
                                sx={{
                                    width: "100%",
                                    height: "50px",
                                    borderRadius: '7px'
                                }}
                            >
                                <MenuItem value={"001"}>คืออะไรผมไม่รู้</MenuItem>
                            </Select>
                        </Box>

                    </Box>
                </Paper>
                <Paper sx={{ marginTop: 2.5 }} elevation={4}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                        padding: 3,
                    }}>
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
                        {/* <Input
                            type="file"
                            sx={{ mr: 2 }}
                        // อื่น ๆ ของ Input ตามต้องการ
                        /> */}
                        <TextField
                            id="outlined-textarea"
                            label="Vat"
                            placeholder="Vat"
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
                            label="Discount"
                            placeholder="Discount"
                            multiline
                            sx={{
                                mr: 2, width: '100%',
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: '7px',
                                },
                            }} // ระยะห่างด้านล่าง 2 หน่วย
                        />
                        <TextField
                            id="outlined-textarea"
                            // label="Discount"
                            // placeholder="Discount"
                            multiline
                            sx={{
                                mr: 2, width: '100%',
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: '7px',
                                },
                            }} // ระยะห่างด้านล่าง 2 หน่วย
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker sx={{
                                width: 1,
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: '7px',
                                },
                            }} label="Delivery Date(ETA)" format="DD/MM/YYYY" />
                        </LocalizationProvider>


                    </Box>
                </Paper>
            </Box>

            <Box sx={{ marginTop: 2 }}>
                < DetailRe />
            </Box>

        </Box>
    );
}

export default HeaderRe;
