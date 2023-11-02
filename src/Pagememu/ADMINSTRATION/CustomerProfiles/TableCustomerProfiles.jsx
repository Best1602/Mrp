import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import CustomFilter from './CustomerProfilesFilter';
import CreateCustomer from './CreateCustomer.jsx';
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
import ButtonGroup from '@mui/material/ButtonGroup';
import SendIcon from '@mui/icons-material/Send';
import { AddBox } from '@mui/icons-material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
export default function DataGridDemo() {
    const [rows, setRows] = useState([]);
    const [test, setTest] = useState([]);
    const [filteredRows, setFilteredRows] = useState([]);
    const [filterValue, setFilterValue] = useState("");
    // console.log("testrows", rows);
    const [selectValue, setSelectValue] = useState("");
    const [formData, setFormData] = React.useState([]);
    const [statusValue, setStatusValue] = useState("");
    const [editRowData, setEditRowData] = React.useState({});


    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [selectedClientName, setSelectedClientName] = React.useState("");
    const [selectedTown, setSelectedTown] = React.useState([]);
    const [selectedCountry, setSelectedCountry] = React.useState([]);
    const [selectedState, setSelectedState] = React.useState([]);
    const [clientNames, setClientNames] = React.useState([]);

    const handleSubmit = () => {

        axios
            .post(
                "http://192.168.1.155:3000/customer-profiles/insupd_customer_master",
                {
                    client: editRowData.client,
                    customer: editRowData.customer,
                    customer_name: editRowData.customer_name,
                    street: editRowData.street,
                    town: editRowData.town,
                    state: editRowData.state,
                    country: editRowData.country,
                    post_code: editRowData.post_code,
                    phone: editRowData.phone,
                    tax_no: editRowData.tax_no,
                    fax: editRowData.fax,
                    contact_person: editRowData.contact_person,
                    email: editRowData.email,
                    remark1: editRowData.remark1,
                    irop_code: editRowData.irop_code,
                    credit_value: editRowData.credit_value,
                    sales_name: editRowData.sales_name,
                    customer_category: editRowData.customer_category,
                    customer_group: editRowData.customer_group,
                    payment_term: editRowData.payment_term,

                }
            )
            .then((response) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'API request was successful!',
                    timer: 3000, // 3 วินาที
                    showConfirmButton: false, // ไม่แสดงปุ่ม OK
                });
                console.log(response);
                setTimeout(() => {
                    window.location.reload();
                }, 1500);
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'API Request Error',
                    text: 'An error occurred while sending the API request.',
                });
                console.error("API Request Error:", error);

                if (error.response) {
                    console.log("API Response Data:", error.response.data); // เพื่อดูข้อมูลข้อผิดพลาดจากเซิร์ฟเวอร์
                }
            });
    };

    useEffect(() => {
        axios.get('http://192.168.1.155:3000/customer-profiles/test')
            .then((response) => {
                const rowsWithUniqueIds = response.data.map((row, index) => ({
                    ...row,
                    id: index + 1,
                }));
                setRows(rowsWithUniqueIds);
            })
            .catch((error) => {
                console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
            });
    }, []);

    React.useEffect(() => {
        axios.get('http://192.168.1.155:3000/clientprofile/getclientprofiles')
            .then((response) => {
                const clientNames = response.data.map((client) => ({
                    value: client.client,
                    label: client.client_name,
                }));
                setClientNames(clientNames);
            })
            .catch((error) => {
                console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
            });
    }, []);
    useEffect(() => {
        filterRows();
    }, [filterValue]);
    useEffect(() => {
        filterRows();
    }, [filterValue, rows]);
    React.useEffect(() => {
        axios.get('http://192.168.1.155:3000/customer-profiles/reference')
            .then((secondResponse) => {
                const dataWithUniqueIds = secondResponse.data.map((item, index) => ({
                    ...item,
                    id: index + 1,
                }));
                setSelectedCountry(dataWithUniqueIds)
            })
            .catch((secondError) => {
                console.error('เกิดข้อผิดพลาดในการดึงข้อมูลจาก URL ที่สอง:', secondError);
            });



        axios.get('http://192.168.1.155:3000/customer-profiles/province')
            .then((secondResponse) => {
                const dataWithUniqueIds = secondResponse.data.map((item, index) => ({
                    ...item,
                    id: index + 1,
                }));
                setSelectedState(dataWithUniqueIds)
            })
            .catch((secondError) => {
                console.error('เกิดข้อผิดพลาดในการดึงข้อมูลจาก URL ที่สอง:', secondError);
            });



        axios.get('http://192.168.1.155:3000/customer-profiles/District')
            .then((secondResponse) => {
                const dataWithUniqueIds1 = secondResponse.data.map((item, index) => ({
                    ...item,
                    id: index + 1,
                }));
                setSelectedTown(dataWithUniqueIds1)
            })
            .catch((secondError) => {
                console.error('เกิดข้อผิดพลาดในการดึงข้อมูลจาก URL ที่สอง:', secondError);
            });


    }, []);


    const stylesx = {
        backgroundColor: "white",
        color: "white",
        // Add other styles you need
    };
    const handleFilterChange = (searchValue, selectValue, statusValue) => {
        setFilterValue(searchValue);
        setSelectValue(selectValue);
        setStatusValue(statusValue);
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
            width: 300,
            renderCell: (params) => {
                const handleEditClick = () => {
                    setEditRowData(params.row);
                    setOpenEditDialog(true);
                };

                return (

                    <Box sx={{ display: 'flex', justifyContent: 'start' }}>
                        <Button
                            variant="contained"
                            color="success"
                            endIcon={<ModeEditIcon />}
                            size="small"
                            onClick={handleEditClick}
                            sx={{ margin: '5px' }} // ระยะห่างระหว่างปุ่ม Edit กับปุ่ม ADD
                        >
                            Edit
                        </Button>

                        <Button
                            variant="contained"
                            size="small"
                            endIcon={<DeleteIcon />}
                            sx={{ backgroundColor: '#e53935', margin: '5px' }} // ระยะห่างระหว่างปุ่ม DELETE กับปุ่มอื่น
                        >
                            DELETE
                        </Button>
                    </Box>



                );
            },
        },



    ];
    return (
        <div>
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
                        columns={columns} pageSizeOptions={[5, 10, 25, 50, 100]}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 10,

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
                                        value={editRowData.client || ''}
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
                                    <Autocomplete
                                        options={clientNames}
                                        getOptionLabel={(option) => option.label || ''}
                                        sx={{
                                            width: "100%",
                                            height: "55px",
                                            borderRadius: "10px",
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderRadius: "10px",
                                                borderColor: editRowData.client ? "initial" : "red",
                                            },
                                        }}
                                        disabled
                                        value={clientNames.find((option) => option.value === editRowData.client) || ''}
                                        onChange={(_, newValue) => {
                                            if (newValue) {
                                                setEditRowData((prevData) => ({
                                                    ...prevData,
                                                    client: newValue.value,
                                                    client_name: newValue.label,
                                                }));
                                            }
                                        }}
                                        renderInput={(params) => <TextField {...params} label="Client" />}
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

                                            setEditRowData((prevData) => ({
                                                ...prevData,
                                                customer: e.target.value,
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
                                        value={editRowData.tax_no || ''}

                                        onChange={(e) => {

                                            setEditRowData((prevData) => ({
                                                ...prevData,
                                                tax_no: e.target.value,
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

                                            setEditRowData((prevData) => ({
                                                ...prevData,
                                                customer_name: e.target.value,
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
                                    onChange={(e) => setEditRowData({ ...editRowData, street: e.target.value })}
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
                                    <Autocomplete
                                        options={selectedState}
                                        value={selectedState.find((item) => item.param_code === editRowData.state) || null}
                                        onChange={(event, newValue) => {
                                            if (newValue) {
                                                setEditRowData((prevData) => ({
                                                    ...prevData,
                                                    state: newValue.param_code,
                                                }));
                                            }
                                        }}
                                        getOptionLabel={(option) => option.param_code || ''}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
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
                                    <Autocomplete
                                        options={selectedCountry}
                                        value={selectedCountry.find((item) => item.param_code === editRowData.country) || null}
                                        onChange={(event, newValue) => {
                                            if (newValue) {
                                                setEditRowData((prevData) => ({
                                                    ...prevData,
                                                    country: newValue.param_code,
                                                }));
                                            }
                                        }}
                                        getOptionLabel={(option) => option.param_code || ''}
                                        renderInput={(params) => <TextField {...params} />}
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
                                <InputLabel>District</InputLabel>

                                <Autocomplete
                                    options={uniqueTownOptions}
                                    value={selectedTown.find((item) => item.param_desc === editRowData.town) || null}
                                    onChange={(event, newValue) => {
                                        if (newValue) {
                                            setEditRowData((prevData) => ({
                                                ...prevData,
                                                town: newValue.param_desc,
                                            }));
                                        }
                                    }}
                                    getOptionLabel={(option) => option.param_desc || ''}
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

                                            setEditRowData((prevData) => ({
                                                ...prevData,
                                                post_code: e.target.value,
                                            }));
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

                                            setEditRowData((prevData) => ({
                                                ...prevData,
                                                phone: e.target.value,
                                            }));
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
                                        value={editRowData.fax || " "}
                                        onChange={(e) => {

                                            setEditRowData((prevData) => ({
                                                ...prevData,
                                                fax: e.target.value,
                                            }));
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
                                        value={editRowData.contact_person || " "}
                                        onChange={(e) => {

                                            setEditRowData((prevData) => ({
                                                ...prevData,
                                                contact_person: e.target.value,
                                            }));
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
                                    value={editRowData.email || ""}
                                    onChange={(e) => {

                                        setEditRowData((prevData) => ({
                                            ...prevData,
                                            email: e.target.value,
                                        }));
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

                                        setEditRowData((prevData) => ({
                                            ...prevData,
                                            remark1: e.target.value,
                                        }));
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

                                            setEditRowData((prevData) => ({
                                                ...prevData,
                                                irop_code: e.target.value,
                                            }));
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
                                        value={editRowData.sales_name || ''}
                                        onChange={(e) => {

                                            setEditRowData((prevData) => ({
                                                ...prevData,
                                                sales_name: e.target.value,
                                            }));
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

                                        value={editRowData.customer_group || ''} // Set the initial value from editRowData
                                        onChange={(e) => {
                                            const selectedValue = e.target.value;
                                            setEditRowData((prevData) => ({
                                                ...prevData,
                                                customer_group: selectedValue, // Update the value in editRowData
                                            }));
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

                                            setEditRowData((prevData) => ({
                                                ...prevData,
                                                credit_value: e.target.value,
                                            }));
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
                                        value={editRowData.customer_category || ''} // Set the initial value from editRowData
                                        onChange={(e) => {
                                            const selectedValue = e.target.value;
                                            setEditRowData((prevData) => ({
                                                ...prevData,
                                                customer_category: selectedValue, // Update the value in editRowData
                                            }));
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

                                        value={editRowData.payment_term || ''} // Set the initial value from editRowData
                                        onChange={(e) => {
                                            const selectedValue = e.target.value;
                                            setEditRowData((prevData) => ({
                                                ...prevData,
                                                payment_term: selectedValue, // Update the value in editRowData
                                            }));
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
        </div>
    );
}