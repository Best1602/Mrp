import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import CustomFilter from './CustomerProfilesFilter';
import CreateCustomer from './CreateCustomer';
import { Button } from '@mui/material';
import axios from 'axios';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from '@mui/material/TextField';
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Swal from 'sweetalert2';
import Autocomplete from "@mui/lab/Autocomplete";

export default function DataGridDemo() {
    const [rows, setRows] = useState([]);
    const [test, setTest] = useState([]);
    const [filteredRows, setFilteredRows] = useState([]);
    const [filterValue, setFilterValue] = useState("");
    // console.log("testrows", rows);
    const [selectValue, setSelectValue] = useState("");
    const [formData, setFormData] = React.useState({});
    const [statusValue, setStatusValue] = useState("");
    const [editRowData, setEditRowData] = React.useState(null);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [selectedClientName, setSelectedClientName] = React.useState([]);
    const [selectedTown, setSelectedTown] = React.useState([]);
    const [selectedCountry, setSelectedCountry] = React.useState([]);
    const handleSubmit = () => {
        // if (!formData.customer_name) {
        //     Swal.fire({

        //         icon: 'error',
        //         title: 'Validation Error',
        //         text: 'Customer Name cannot be empty!',

        //     });
        //     return;
        // }
        // if (!formData.client) {
        //     Swal.fire({

        //         icon: 'error',
        //         title: 'Validation Error',
        //         text: 'Customer Name cannot be empty!',

        //     });
        //     return;
        // }
        // if (!formData.customer) {
        //     Swal.fire({

        //         icon: 'error',
        //         title: 'Validation Error',
        //         text: 'Customer Name cannot be empty!',

        //     });
        //     return;
        // }
        axios
            .post(
                "http://192.168.1.155:3000/customer-profiles/insupd_customer_master",
                {
                    client: formData.client,
                    customer: formData.customer,
                    customer_name: formData.customer_name,
                    street: formData.street,
                    town: formData.town,
                    state: formData.state,
                    country: formData.country,
                    post_code: formData.post_code,
                    phone: formData.phone,
                    tax_no: formData.tax_no,
                    fax: formData.fax,
                    contact_person: formData.contact_person,
                    email: formData.email,
                    remark1: formData.remark1,
                    irop_code: formData.irop_code,
                    credit_value: formData.credit_value,
                    sales_name: formData.sales_name,
                    customer_category: formData.customer_category,
                    customer_group: formData.customer_group,
                    payment_term: formData.payment_term,
                }
            )
            .then((response) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'API request was successful!',
                });
                console.log("API Response:", response.data);

            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'API Request Error',
                    text: 'An error occurred while sending the API request.',
                });
                console.error("API Request Error:", error);
            });
    };

    useEffect(() => {
        axios.get('http://192.168.1.155:3000/customer-profiles/test')
            .then((response) => {
                // สร้างค่า id ที่ไม่ซ้ำกัน
                const rowsWithUniqueIds = response.data.map((row, index) => ({
                    ...row,
                    id: index + 1, // หรือใช้ค่าอื่น ๆ ที่ไม่ซ้ำกัน
                }));
                setRows(rowsWithUniqueIds);
            })
            .catch((error) => {
                console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
            });
    }, [editRowData]);

    React.useEffect(() => {
        axios.get
            ('http://192.168.1.155:3000/clientprofile/getclientprofiles')

            .then((response) => {
                const rowsWithUniqueIds = response.data.map((row, index) => ({
                    ...row,
                    id: index + 1,
                }));
                setTest(rowsWithUniqueIds);
            })
            .catch((error) => {
                console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
            });
    }, []);
    useEffect(() => {
        // Fetch user data from your Express.js server when the component mounts
        filterRows();
    }, []);
    useEffect(() => {
        // กรองข้อมูลแถวเมื่อค่าตัวกรองเปลี่ยน
        filterRows();
    }, [filterValue, rows]);

    const stylesx = {
        backgroundColor: "white",
        color: "white",
        // Add other styles you need
    };
    const handleFilterChange = (searchValue, selectValue, statusValue) => {
        // เพิ่มการรับค่า statusValue
        setFilterValue(searchValue);
        setSelectValue(selectValue);
        setStatusValue(statusValue); // ต้องรับค่า statusValue เข้ามา
    };
    const filterRows = () => {
        // กรองข้อมูลแถวตามค่าตัวกรองและค่า Select และค่า Status
        const filtered = rows.filter((row) => {
            const nameMatches =
                (row.client &&
                    row.client.toLowerCase().includes(filterValue.toLowerCase())) ||
                (row.customer &&
                    row.customer.toLowerCase().includes(filterValue.toLowerCase())) ||
                (row.street &&
                    row.street.toLowerCase().includes(filterValue.toLowerCase())) ||
                (row.building &&
                    row.building.toLowerCase().includes(filterValue.toLowerCase())) ||
                (row.town &&
                    row.town.toLowerCase().includes(filterValue.toLowerCase())) ||
                (row.country &&
                    row.country.toLowerCase().includes(filterValue.toLowerCase())) ||
                (row.post_code &&
                    row.post_code.toLowerCase().includes(filterValue.toLowerCase())) ||
                (row.phone &&
                    row.phone.toLowerCase().includes(filterValue.toLowerCase())) ||
                (row.customer_name &&
                    row.customer_name.toLowerCase().includes(filterValue.toLowerCase())) ||
                (row.state &&
                    row.state.toLowerCase().includes(filterValue.toLowerCase()));

            const typeMatches =
                !selectValue || // ถ้าไม่ได้เลือก selectValue
                (row.typabsent &&
                    row.typabsent.toLowerCase() === selectValue.toLowerCase());

            const statusMatches =
                !statusValue || // ถ้าไม่ได้เลือก statusValue
                (row.name && row.name.toLowerCase() === statusValue.toLowerCase());

            return nameMatches && typeMatches && statusMatches;
        });

        setFilteredRows(filtered); // อัปเดตข้อมูลแถวที่ถูกกรอง
    };
    const handleCloseEditDialog = () => {
        setOpenEditDialog(false);
    };

    const handleField1Change = (value) => {
        setEditRowData((prevData) => ({
            ...prevData,
            field1: value,
        }));
    };


    const uniqueTownOptions = Array.from(new Set(selectedTown.map(item => item.param_desc)))
        .map(param_desc => selectedTown.find(item => item.param_desc === param_desc));
    const columns = [
        { field: 'client', headerName: 'client', width: 90 },
        {
            field: 'customer',
            headerName: 'customer Code',
            width: 200,

        },
        {
            field: 'customer_name',
            headerName: 'customer name',
            width: 230,

        },
        {
            field: 'street',
            headerName: 'street',

            width: 200,

        },
        {
            field: 'building',
            headerName: 'building',

            width: 180,

        },
        {
            field: 'town',
            headerName: 'town',

            width: 150,

        },
        {
            field: 'state',
            headerName: 'state',

            width: 150,

        },
        {
            field: 'country',
            headerName: 'country',

            width: 150,

        },
        {
            field: 'post_code',
            headerName: 'post code',

            width: 150,

        },
        {
            field: 'phone',
            headerName: 'phone',

            width: 75,

        },
        {
            field: '',
            headerName: 'button',
            width: 120,
            renderCell: (params) => {
                const handleEditClick = () => {
                    setEditRowData(params.row);
                    setOpenEditDialog(true);
                };

                return (
                    <Button
                        variant="contained"
                        color="success"
                        size="small"
                        sx={{ backgroundColor: "#2DC598" }}
                        onClick={handleEditClick}
                    >
                        Edit And Add
                    </Button>
                );
            },
        },



    ];
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'start' }}>
                <Box >
                    <CreateCustomer />
                </Box>
                <Box sx={{ marginTop: 4 }}>
                    <CustomFilter onFilterChange={handleFilterChange} />
                </Box>
            </Box>



            <Paper elevation={12} sx={{ mt: 3, width: "91.5vw", height: '85vh', }}>

                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        sx={{ height: '85vh', padding: 4, paddingLeft: 8 }}
                        rows={filteredRows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 13,
                                },
                            },
                        }}
                    />
                </div>
            </Paper>
            <Dialog
                open={openEditDialog}
                onClose={handleCloseEditDialog}
                aria-labelledby="form-dialog-title"
                fullWidth
                maxWidth="xl"
            >
                <DialogTitle id="form-dialog-title">Edit Row</DialogTitle>
                <DialogContent>
                    {editRowData && (
                        // แสดงข้อมูลและส่วนให้ผู้ใช้แก้ไข
                        <Paper elevation={0} sx={stylesx}>
                            <Box
                                sx={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    gap: 5,
                                    padding: 2,
                                }}
                            >
                                <Box
                                    sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
                                >
                                    <InputLabel>Client</InputLabel>
                                    <Select
                                        sx={{
                                            width: "100%",
                                            height: "55px",
                                            borderRadius: "10px",
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderRadius: "10px",
                                                borderColor: editRowData.customer ? "initial" : "red",
                                                // เส้นขอบสีแดงถ้าค่าว่าง
                                            },
                                            "& .MuiInputBase-input.Mui-disabled": {
                                                WebkitTextFillColor: "#000000",
                                            },
                                        }}
                                        disabled
                                        value={editRowData.client}
                                        onChange={(e) => {
                                            setRows({ ...editRowData, client: e.target.value });
                                            // Set the selected client's name
                                            const selectedClient = rows.find((client) => client.client === e.target.value);
                                            setSelectedClientName(selectedClient ? selectedClient["client_name"] : "");
                                        }}
                                    >
                                        {rows.map((client) => (
                                            <MenuItem key={client.id} value={client.client}>
                                                {client.client}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "16px",
                                    }}
                                >
                                    <InputLabel>Client Name</InputLabel>
                                    <TextField
                                        sx={{
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderRadius: "10px",
                                            },
                                            "& .MuiInputBase-input.Mui-disabled": {
                                                WebkitTextFillColor: "#000000",
                                            },
                                        }} disabled
                                        id="outlined-textarea"
                                        label="Client"
                                        placeholder="Client"
                                        multiline
                                        value={editRowData ? editRowData.client_name : ''}
                                        onChange={(e) => {
                                            const newValue = e.target.value; // ค่าใหม่ที่ผู้ใช้ป้อน
                                            setEditRowData((prevData) => ({
                                                ...prevData,
                                                client_name: newValue, // อัปเดตค่า client_name
                                            }));
                                        }}
                                    />
                                </Box>
                            </Box>

                            <Box sx={{ padding: 3, color: "#000006" }}>Customer</Box>

                            <Box
                                sx={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    gap: 5,
                                    padding: 2,
                                }}
                            >
                                <Box
                                    sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
                                >
                                    <InputLabel>Customer Code</InputLabel>
                                    <TextField
                                        sx={{
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderRadius: "10px",
                                                borderColor: editRowData.customer ? "initial" : "red", // เส้นขอบสีแดงถ้าค่าว่าง
                                            },
                                            "& .MuiInputBase-input.Mui-disabled": {
                                                WebkitTextFillColor: "#000000",
                                            },
                                        }}
                                        id="outlined-textarea"
                                        label="Customer Code"
                                        placeholder="Customer Code"
                                        value={editRowData.customer}
                                        // onChange={(e) => {
                                        //     setFormData({ ...editRowData, customer: e.target.value });
                                        // }}
                                        onChange={(e) => {
                                            const newValue = e.target.value; // ค่าใหม่ที่ผู้ใช้ป้อน
                                            setEditRowData((prevData) => ({
                                                ...prevData,
                                                customer: newValue, // อัปเดตค่า client_name
                                            }));
                                        }}
                                        multiline
                                        disabled
                                    //size="small"
                                    />
                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "16px",
                                    }}
                                >
                                    <InputLabel>Tax Number</InputLabel>
                                    <TextField
                                        sx={{
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderRadius: "10px",
                                            },
                                        }}
                                        id="outlined-textarea"
                                        label="Tax Number"
                                        placeholder="Tax Number"
                                        value={editRowData.tax_no}
                                        // onChange={(e) => {
                                        //     setFormData({ ...editRowData, tax_no: e.target.value });
                                        // }}
                                        onChange={(e) => {
                                            const newValue = e.target.value; // ค่าใหม่ที่ผู้ใช้ป้อน
                                            setEditRowData((prevData) => ({
                                                ...prevData,
                                                tax_no: newValue, // อัปเดตค่า client_name
                                            }));
                                        }}

                                        multiline
                                    />
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    display: "grid",

                                    gap: 5,
                                    padding: 2,
                                    // width: 1000
                                }}
                            >
                                <Box
                                    sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
                                >
                                    <InputLabel>Customer Name</InputLabel>
                                    <TextField
                                        sx={{
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderRadius: "10px",
                                                borderColor: editRowData.customer ? "initial" : "red",

                                            },
                                            "& .MuiInputBase-input.Mui-disabled": {
                                                WebkitTextFillColor: "#000000",
                                            },

                                        }}

                                        id="outlined-textarea"
                                        label="Customer Name"
                                        placeholder="Customer Name"
                                        value={editRowData.customer_name}
                                        onChange={(e) => {
                                            const newValue = e.target.value; // ค่าใหม่ที่ผู้ใช้ป้อน
                                            setEditRowData((prevData) => ({
                                                ...prevData,
                                                customer_name: newValue, // อัปเดตค่า client_name
                                            }));
                                        }}
                                        disabled
                                        multiline
                                    />
                                </Box>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "5px",
                                    padding: 3,
                                    marginTop: -3,
                                }}
                            >
                                <InputLabel>Address</InputLabel>
                                <TextField
                                    sx={{
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderRadius: "10px",
                                        },
                                    }}
                                    label="Address"
                                    id="outlined-multiline-static"
                                    multiline
                                    rows={4}
                                    value={editRowData.street}
                                    onChange={(e) => {
                                        const newValue = e.target.value; // ค่าใหม่ที่ผู้ใช้ป้อน
                                        setEditRowData((prevData) => ({
                                            ...prevData,
                                            street: newValue, // อัปเดตค่า client_name
                                        }));
                                    }}
                                />
                            </Box>

                            <Box
                                sx={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr ",
                                    gap: "5px",
                                    padding: 2,
                                    // width: 1000
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "5px",
                                        padding: 1,
                                        marginTop: -2,
                                    }}
                                >
                                    <InputLabel>Province</InputLabel>
                                    <Select
                                        sx={{
                                            width: "100%",
                                            height: "55px",
                                            borderRadius: "10px",
                                        }}
                                        value={editRowData.state}
                                        onChange={(e) => {
                                            setFormData({ ...editRowData, state: e.target.value });
                                            // Set the selected client's name
                                            const selectedState = rows.find((client) => client.state === e.target.value);
                                            setSelectedState(selectedState ? selectedState.state : "");
                                        }}
                                    >
                                        <MenuItem value={"state"}>state</MenuItem>
                                        <MenuItem value={"state"}>state</MenuItem>
                                        <MenuItem value={"state"}>state</MenuItem>
                                    </Select>
                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "5px",
                                        padding: 1,
                                        marginTop: -2,
                                    }}
                                >
                                    <InputLabel>Country</InputLabel>
                                    <Select
                                        sx={{
                                            width: "100%",
                                            height: "55px",
                                            borderRadius: "10px",
                                        }}
                                        value={editRowData.country}
                                        onChange={(e) => {
                                            setFormData({ ...editRowData, country: e.target.value });
                                            // Set the selected client's name
                                            const selectedcountry = rows.find((client) => client.country === e.target.value);
                                            setSelectedCountry(selectedcountry ? selectedcountry.country : "");
                                        }}
                                    >
                                        <MenuItem value={"Bangkok"}>Bangkok</MenuItem>
                                        <MenuItem value={"Bangkok1"}>Bangkok1</MenuItem>
                                        <MenuItem value={"Bangkok2"}>Bangkok2</MenuItem>
                                    </Select>
                                </Box>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "5px",
                                    padding: 3,
                                    marginTop: -3,
                                }}
                            >
                                <InputLabel>District</InputLabel>
                                <Autocomplete
                                    options={uniqueTownOptions}
                                    value={selectedTown.find((item) => item.param_desc === formData.town) || null}
                                    onChange={(event, newValue) => {
                                        if (newValue) {
                                            setFormData({ ...formData, town: newValue.param_desc });
                                        }
                                    }}
                                    getOptionLabel={(option) => option.param_desc}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </Box>

                            <Box
                                sx={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr ",
                                    gap: "5px",
                                    padding: 2,
                                    // width: 1000
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "15px",
                                        padding: 1,
                                        marginTop: -2,
                                    }}
                                >
                                    <InputLabel>Postal Code</InputLabel>
                                    <TextField
                                        sx={{
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderRadius: "10px",
                                            },
                                        }}
                                        id="outlined-textarea"
                                        label="Postal Code"
                                        placeholder="Postal Code"
                                        value={editRowData.post_code}
                                        onChange={(e) => {
                                            setFormData({ ...editRowData, post_code: e.target.value });
                                        }}
                                        multiline
                                    />
                                    <InputLabel>Telephone Number</InputLabel>
                                    <TextField
                                        sx={{
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderRadius: "10px",
                                            },
                                        }}
                                        id="outlined-textarea"
                                        label="Telephone Number"
                                        placeholder="Telephone Number"
                                        value={editRowData.phone}
                                        onChange={(e) => {
                                            setFormData({ ...editRowData, phone: e.target.value });
                                        }}
                                        multiline
                                    />
                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "15px",
                                        padding: 1,
                                        marginTop: -2,
                                    }}
                                >
                                    <InputLabel>Fax Number</InputLabel>
                                    <TextField
                                        sx={{
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderRadius: "10px",
                                            },
                                        }}
                                        id="outlined-textarea"
                                        label="Fax Number"
                                        placeholder="Fax Number"
                                        value={editRowData.fax}
                                        onChange={(e) => {
                                            setFormData({ ...editRowData, fax: e.target.value });
                                        }}
                                        multiline
                                    />
                                    <InputLabel>Contact Person</InputLabel>
                                    <TextField
                                        sx={{
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderRadius: "10px",
                                            },
                                        }}
                                        id="outlined-textarea"
                                        label="Contact Person"
                                        placeholder="Contact Person"
                                        value={editRowData.contact_person}
                                        onChange={(e) => {
                                            setFormData({ ...editRowData, contact_person: e.target.value });
                                        }}
                                        multiline
                                    />
                                </Box>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "16px",
                                    padding: 3,
                                    marginTop: -5,
                                }}
                            >
                                <InputLabel>Email</InputLabel>
                                <TextField
                                    sx={{
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderRadius: "10px",
                                        },
                                    }}
                                    label="Email"
                                    id="outlined-multiline-static"
                                    value={editRowData.email}
                                    onChange={(e) => {
                                        setFormData({ ...editRowData, email: e.target.value });
                                    }}
                                />
                                <InputLabel>Remark</InputLabel>
                                <TextField
                                    sx={{
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderRadius: "10px",
                                        },
                                    }}
                                    label="Remark"
                                    id="outlined-multiline-static"
                                    value={editRowData.remark1}
                                    onChange={(e) => {
                                        setFormData({ ...editRowData, remark1: e.target.value });
                                    }}
                                />
                            </Box>

                            {/* ----------------------------- */}

                            <Box
                                sx={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr ",
                                    gap: "5px",
                                    padding: 2,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "15px",
                                        padding: 1,
                                        marginTop: -2,
                                    }}
                                >
                                    <InputLabel>Irop code</InputLabel>
                                    <TextField
                                        sx={{
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderRadius: "10px",
                                            },
                                        }}
                                        id="outlined-textarea"
                                        label="Irop code"
                                        placeholder="Irop code"
                                        value={editRowData.irop_code}
                                        onChange={(e) => {
                                            setFormData({ ...editRowData, irop_code: e.target.value });
                                        }}
                                        multiline
                                    />
                                    <InputLabel>Sale Name</InputLabel>
                                    <TextField
                                        sx={{
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderRadius: "10px",
                                            },
                                        }}
                                        id="outlined-textarea"
                                        label="Sale Name"
                                        placeholder="Sale Name"
                                        value={editRowData.sales_name}
                                        onChange={(e) => {
                                            setFormData({ ...editRowData, sales_name: e.target.value });
                                        }}
                                        multiline
                                    />
                                    <InputLabel>Customer Group</InputLabel>
                                    <Select
                                        sx={{
                                            width: "100%",
                                            height: "55px",
                                            borderRadius: "10px",
                                        }}
                                        value={editRowData.customer_group}
                                        onChange={(e) => {
                                            setFormData({ ...editRowData, customer_group: e.target.value });
                                        }}
                                    >
                                        <MenuItem value={"Agent"}>Agent</MenuItem>
                                    </Select>
                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "15.5px",
                                        padding: 1,
                                        marginTop: -2,
                                    }}
                                >
                                    <InputLabel>Credit Value</InputLabel>
                                    <TextField
                                        sx={{
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderRadius: "10px",
                                            },
                                        }}
                                        id="outlined-textarea"
                                        label="Credit Value"
                                        placeholder="Credit Value"
                                        value={editRowData.credit_value}
                                        onChange={(e) => {
                                            const newValue = e.target.value;
                                            // ใช้ regular expression เช็คว่ามีแต่ตัวเลขหรือไม่
                                            if (/^\d*$/.test(newValue)) {
                                                setFormData({ ...formData, credit_value: newValue });
                                            }
                                        }}
                                        multiline
                                    />
                                    <InputLabel>Customer Category</InputLabel>
                                    <Select
                                        sx={{
                                            width: "100%",
                                            height: "55px",
                                            borderRadius: "10px",
                                        }}
                                        value={editRowData.customer_category}
                                        onChange={(e) => {
                                            setFormData({ ...editRowData, customer_category: e.target.value });
                                        }}
                                    >
                                        <MenuItem value={"Hotel"}>Hotel</MenuItem>
                                        <MenuItem value={"Individual"}>Individual</MenuItem>
                                        <MenuItem value={"Restaurant"}>Restaurant</MenuItem>
                                    </Select>
                                    <InputLabel>Perment Term</InputLabel>
                                    <Select
                                        sx={{
                                            width: "100%",
                                            height: "55px",
                                            borderRadius: "5px",
                                        }}
                                        value={editRowData.payment_term}
                                        onChange={(e) => {
                                            setFormData({ ...editRowData, payment_term: e.target.value });
                                        }}
                                    >
                                        <MenuItem value={"Cash"}>Cash</MenuItem>
                                        <MenuItem value={"Credit"}>Credit</MenuItem>
                                    </Select>
                                </Box>
                            </Box>
                        </Paper>

                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseEditDialog} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}