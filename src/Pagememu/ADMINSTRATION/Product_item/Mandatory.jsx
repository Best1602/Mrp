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




function Mandatory() {

    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));


    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,

                    "@media (min-width: 768px)": {
                        flexDirection: "row",

                    },
                }}
            >

                <Paper
                    elevation={3}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
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
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px",

                        }}
                    >
                        <InputLabel sx={{
                            // fontSize: '28px',
                            marginTop: '1rem',
                            color: '#003864',
                            fontWeight: 600,
                            fontSize: isSmallScreen ? "10px" : "20px",
                        }}>Mandatory Product Definition</InputLabel>
                        <InputLabel>Product Class</InputLabel>
                        <Select
                            sx={{
                                width: "100%",
                                height: "55px",
                                borderRadius: '7px',
                                "@media (min-width: 768px)": {
                                    flexDirection: "row",
                                },
                            }}
                            defaultValue={"001"}
                        >
                            <MenuItem value={"001"}>
                                ASSEMBLY
                            </MenuItem>
                            <MenuItem value={"002"}>
                                COMPONENT
                            </MenuItem>
                            <MenuItem value={"บริษัท นนนนนนน จำกัด"}>
                                บริษัท คคคคคคคค จำกัด
                            </MenuItem>
                        </Select>

                        <InputLabel>Gross Weight</InputLabel>
                        <Select
                            sx={{
                                width: "100%",
                                height: "55px",
                                borderRadius: '7px',
                                "@media (min-width: 768px)": {
                                    flexDirection: "row",
                                },
                            }}
                        >
                            <MenuItem value={"001"}>001</MenuItem>
                            <MenuItem value={"002"}>002</MenuItem>
                            <MenuItem value={"003"}>003</MenuItem>
                        </Select>
                        <InputLabel>Net Weight (Unit)</InputLabel>
                        <TextField

                            id="outlined-textarea"
                            label="Net Weight (Unit)"
                            placeholder="Net Weight (Unit)"
                            multiline
                            sx={{
                                mr: 2,
                                width: "100%",
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: '7px',
                                },
                            }}
                        />
                        <InputLabel>Height</InputLabel>
                        <TextField

                            id="outlined-textarea"
                            label="Height"
                            placeholder="Height"
                            multiline
                            sx={{
                                mr: 2,
                                width: "100%",
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: '7px',
                                },
                            }}
                        />

                        <Box
                            sx={{
                                flex: 1,
                                display: "flex",
                                flexDirection: "row",
                                gap: "16px",
                                "@media (min-width: 768px)": {
                                    flexDirection: "row",
                                },
                            }}
                        >
                            <FormControlLabel
                                control={<Checkbox sx={{ height: '55px' }} />}
                                label="Bonded Product"
                            />
                            <FormControlLabel
                                control={<Checkbox sx={{ height: '55px' }} />}
                                label="Auto zoning"
                            />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px"
                            , marginTop: '3.8rem',


                        }}
                    >
                        <InputLabel>Alternate Code</InputLabel>
                        <Select
                            sx={{
                                width: "100%",
                                height: "55px",
                                borderRadius: '7px',

                            }}
                        >
                            <MenuItem value={"001"}>001</MenuItem>
                            <MenuItem value={"002"}>002</MenuItem>
                            <MenuItem value={"003"}>003</MenuItem>
                        </Select>
                        <InputLabel>Category</InputLabel>
                        <Select
                            sx={{
                                width: "100%",
                                height: "55px",
                                borderRadius: '7px'
                            }}
                        >
                            <MenuItem value={"001"}>001</MenuItem>
                            <MenuItem value={"002"}>002</MenuItem>
                            <MenuItem value={"003"}>003</MenuItem>
                        </Select>
                        <InputLabel>Nesting Factor</InputLabel>
                        <TextField

                            id="outlined-textarea"
                            label="Nesting Factor"
                            placeholder="Nesting Factor"
                            multiline
                            sx={{
                                mr: 2,
                                width: "100%",
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: '7px',
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
                            marginTop: '3.8rem'
                        }}
                    >
                        <InputLabel>Product Status</InputLabel>
                        <Select
                            sx={{
                                width: "100%",
                                height: "55px",
                                borderRadius: '7px'
                            }}
                            defaultValue={"001"}
                        >
                            <MenuItem value={"001"}>ACTIVE</MenuItem>
                            <MenuItem value={"002"}>BLOCK ALL</MenuItem>
                            <MenuItem value={"003"}>IN ACTIVE</MenuItem>
                            <MenuItem value={"004"}>OBSOLETE</MenuItem>
                            <MenuItem value={"005"}>QC BLOCK</MenuItem>
                        </Select>
                        <InputLabel>Receipt Grade</InputLabel>
                        <Select
                            sx={{
                                width: "100%",
                                height: "55px",
                                borderRadius: '7px'
                            }}
                        >
                            <MenuItem value={"001"}>คืออะไรผมไม่รู้</MenuItem>
                            <MenuItem value={"002"}>คืออะไรผมไม่รู้</MenuItem>
                            <MenuItem value={"003"}>คืออะไรผมไม่รู้</MenuItem>
                        </Select>
                        <InputLabel>Tile</InputLabel>
                        <TextField

                            id="outlined-textarea"
                            label="Tile"
                            placeholder="Tile"
                            multiline
                            sx={{
                                mr: 2,
                                width: "100%",
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: '7px',
                                },
                            }}
                        />

                    </Box>

                </Paper >
            </Box >

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    paddingTop: "20px",
                    marginRight: '30px',
                    "@media (min-width: 768px)": {
                        flexDirection: "row",
                    },
                }}
            >

                <Paper

                    elevation={6}

                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                        padding: 4,
                        width: '82%',

                    }}

                >
                    <InputLabel sx={{

                        marginTop: '-1rem',
                        color: '#003864',
                        fontWeight: 600,
                        padding: '15px',
                        fontSize: isSmallScreen ? "10px" : "20px",
                    }}>Stock Control Parameters</InputLabel>
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "5px",
                            paddingLeft: '70px',

                        }}
                    >
                        <Box sx={{ display: "flex", flexDirection: "column", marginTop: '30px' }}>


                            <FormControlLabel
                                control={<Checkbox sx={{ height: '55px' }} />}
                                label="Batch Tracking"
                            />
                            <FormControlLabel
                                control={<Checkbox sx={{ height: '55px' }} />}
                                label="Lot Tracking"
                            />
                            <FormControlLabel
                                control={<Checkbox sx={{ height: '55px' }} />}
                                label="Supplier"
                            />
                            <FormControlLabel
                                control={<Checkbox sx={{ height: '55px' }} />}
                                label="Item Color"
                            />
                            <FormControlLabel
                                control={<Checkbox sx={{ height: '55px' }} />}
                                label="Item Class"
                            />

                            <TextField
                                id="outlined-textarea"
                                label="Shelf Life ****"
                                placeholder="Shelf Life ****"
                                multiline
                                sx={{
                                    width: "80%",
                                    marginTop: '10px',
                                    // backgroundColor: '#FFFDDE',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderRadius: '7px',

                                    },
                                    '& input': {

                                        borderRadius: '7px',
                                        padding: '8px',
                                        color: 'black', // สีข้อความ
                                    },
                                }}
                            />
                        </Box>

                        <Box sx={{ display: "flex", flexDirection: "column", marginTop: '30px' }}>

                            <FormControlLabel
                                control={<Checkbox sx={{ height: '55px' }} />}
                                label="Dimension"
                            />
                            <FormControlLabel
                                control={<Checkbox sx={{ height: '55px' }} />}
                                label="Weight"
                            />
                            <FormControlLabel
                                control={<Checkbox sx={{ height: '55px' }} />}
                                label="Serial Number"
                            />
                            <FormControlLabel
                                control={<Checkbox sx={{ height: '55px' }} />}
                                label="MFG Date"
                            />
                            <FormControlLabel
                                control={<Checkbox sx={{ height: '55px' }} />}
                                label="Expiry Date"
                            />

                            <TextField
                                id="outlined-textarea"
                                label="Pre Alert ****"
                                placeholder="Pre Alert ****"
                                multiline
                                sx={{
                                    marginTop: '10px',
                                    width: "80%",
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderRadius: '7px',

                                    },

                                }}
                            />
                        </Box>

                    </Box>
                </Paper>

                <TableAssigned />

            </Box>




            <Box sx={{ p: -1 }}>

                <TablePacking />

            </Box>



        </Box >
    );
}

export default Mandatory;
