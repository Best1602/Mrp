import React from 'react'
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
function Fulfillment_Rate() {
    return (
        <Box
            style={{
                marginLeft: "100px",
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "16px",
                    padding: 3,
                    width: '93vw'
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
                            height: "55px",
                            borderRadius: "7px"
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
                    }}
                >
                    <InputLabel>Client</InputLabel>

                    <TextField
                        sx={{
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: '7px', // กำหนดขอบโค้งให้กับ input
                                // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                            },
                        }}
                        label="Client"
                        id="outlined-multiline-static"
                        defaultValue=""
                    />
                </Box>


            </Paper>



            <Paper
                elevation={3}
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "16px",
                    padding: 3,
                    marginTop: 1.5,
                    width: '93vw'
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
                    ค่าเช่าพื้นที่

                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                        <div style={{ textAlign: 'center' }}>คลังสินค้า</div>
                        <TextField
                            label="คลังสินค้า"
                            id="outlined-multiline-static"
                            multiline
                            defaultValue=""
                            sx={{
                                width: '50vh',
                                marginLeft: '7rem',
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: "7px"
                                },
                            }}
                        />
                        <div style={{ textAlign: 'center', marginLeft: '3rem' }}>บาท / 1 ลบม.*</div>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                        <div style={{ textAlign: 'center' }}>ห้องควบคุมอุณหภูมิ</div>
                        <TextField
                            label="ห้องควบคุมอุณหภูมิ"
                            id="outlined-multiline-static"
                            multiline
                            defaultValue=""
                            sx={{
                                width: '50vh',
                                marginLeft: '3rem',
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: "7px"
                                },
                            }}
                        />
                        <div style={{ textAlign: 'center', marginLeft: '3rem' }}>บาท / 1 ลบม.*</div>
                    </Box>
                </Box>


            </Paper>
            <Paper
                elevation={3}
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "16px",
                    padding: 3,
                    marginTop: 1.5,
                    width: '93vw'
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
                    ค่าบริการ
                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                        <div style={{ textAlign: 'center' }}>จัดการออเดอร์ :</div>
                        <TextField
                            label="จัดการออเดอร์ :"
                            id="outlined-multiline-static"
                            multiline
                            defaultValue=""
                            sx={{
                                width: '50vh',
                                marginLeft: '3rem',
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: "7px"
                                },
                            }}
                        />
                        <div style={{ textAlign: 'center', marginLeft: '3rem' }}>บาท / order</div>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                        <div style={{ textAlign: 'center' }}>หยิบ</div>
                        <TextField
                            label="หยิบ"
                            id="outlined-multiline-static"
                            multiline
                            defaultValue=""
                            placeholder='0.00'
                            sx={{
                                width: '50vh',
                                marginLeft: '125px',
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: "7px"
                                },
                            }}
                        />
                        <Box style={{ textAlign: 'center', marginLeft: '3rem' }}> บาท / ชิ้น  นน. น้อยกว่า   1 Kg </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>

                        <TextField
                            label="หยิบ"
                            id="outlined-multiline-static"
                            multiline
                            defaultValue=""
                            placeholder='0.00'
                            sx={{
                                width: '50vh',
                                marginLeft: '153px',
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: "7px"
                                },
                            }}
                        />
                        <Box style={{ textAlign: 'center', marginLeft: '3rem' }}>บาท / ชิ้น  นน. มากกว่า   1 Kg </Box>
                    </Box>
                </Box>


            </Paper>
        </Box>
    )
}

export default Fulfillment_Rate;