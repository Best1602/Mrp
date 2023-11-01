import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/lab/Autocomplete";
import Paper from "@mui/material/Paper";
import Swal from 'sweetalert2';
import CustomFilter from "./CustomerProfilesFilter";
export default function CreateCustomer() {
    const [open, setOpen] = React.useState(false);
    const [rows, setRows] = React.useState([]);
    console.log(rows);
    const [formData, setFormData] = React.useState({});

    const [selectedClientName, setSelectedClientName] = React.useState([]);
    const [selectedCountry, setSelectedCountry] = React.useState([]);
    console.log('selectedcountry', selectedCountry);
    const [selectedTown, setSelectedTown] = React.useState([]);
    const [selectedState, setSelectedState] = React.useState([]);
    const stylesx = {
        backgroundColor: "white",
        color: "white",
        // Add other styles you need
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const CustomBackdrop = (props) => {
        return (
            <div
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                }}
            >
                {props.children}
            </div>
        );
    };
    const dialogStyle = {
        borderRadius: "10px",
    };

    const handleSubmit = () => {
        if (!formData.customer_name) {
            Swal.fire({

                icon: 'error',
                title: 'Validation Error',
                text: 'Customer Name cannot be empty!',

            });
            return;
        }
        if (!formData.client) {
            Swal.fire({

                icon: 'error',
                title: 'Validation Error',
                text: 'Customer Name cannot be empty!',

            });
            return;
        }
        if (!formData.customer) {
            Swal.fire({

                icon: 'error',
                title: 'Validation Error',
                text: 'Customer Name cannot be empty!',

            });
            return;
        }
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
    React.useEffect(() => {
        axios.get
            ('http://192.168.1.155:3000/clientprofile/getclientprofiles')

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


    }, []);
    React.useEffect(() => {
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


    }, []);
    React.useEffect(() => {
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
    const uniqueTownOptions = Array.from(new Set(selectedTown.map(item => item.param_desc)))
        .map(param_desc => selectedTown.find(item => item.param_desc === param_desc));
    return (
        <Box sx={{ mt: 4 }}>
            <Button sx={{ height: '2.5rem' }} variant="outlined" onClick={handleClickOpen}>
                Create Customer Profile
            </Button>

            <Dialog
                PaperProps={{ style: dialogStyle }}
                BackdropComponent={CustomBackdrop}
                fullWidth
                maxWidth="xl"
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Create Customer Profile"}
                </DialogTitle>




                <DialogContent>

                    <DialogContentText id="alert-dialog-description">
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
                                                borderColor: formData.customer ? "initial" : "red",
                                                // เส้นขอบสีแดงถ้าค่าว่าง
                                            },
                                        }}
                                        value={formData.client}
                                        onChange={(e) => {
                                            setFormData({ ...formData, client: e.target.value });
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
                                        }}
                                        id="outlined-textarea"
                                        label="Client"
                                        placeholder="Client"
                                        multiline
                                        value={selectedClientName || ''}
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
                                                borderColor: formData.customer ? "initial" : "red", // เส้นขอบสีแดงถ้าค่าว่าง
                                            },

                                        }}
                                        id="outlined-textarea"
                                        label="Customer Code"
                                        placeholder="Customer Code"
                                        value={formData.customer}
                                        onChange={(e) => {
                                            setFormData({ ...formData, customer: e.target.value });
                                        }}
                                        multiline
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
                                        value={formData.tax_no}
                                        onChange={(e) => {
                                            setFormData({ ...formData, tax_no: e.target.value });
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
                                                borderColor: formData.customer ? "initial" : "red",

                                            },
                                            // "& .MuiFormLabel-root.Mui-focused": {
                                            //     color: formData.customer_name ? "initial" : "red",
                                            // },

                                        }}

                                        id="outlined-textarea"
                                        label="Customer Name"
                                        placeholder="Customer Name"
                                        value={formData.customer_name}
                                        onChange={(e) => {
                                            setFormData({ ...formData, customer_name: e.target.value });
                                        }}
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
                                    value={formData.street}
                                    onChange={(e) => {
                                        setFormData({ ...formData, street: e.target.value });
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
                                    {/* จังหวัด */}
                                    <Autocomplete
                                        options={selectedState}
                                        value={selectedState.find((item) => item.param_code === formData.state) || null}
                                        onChange={(event, newValue) => {
                                            if (newValue) {
                                                setFormData({ ...formData, state: newValue.param_code });
                                            }
                                        }}
                                        getOptionLabel={(option) => option.param_code}
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
                                        value={selectedCountry.find((item) => item.param_code === formData.country) || null}
                                        onChange={(event, newValue) => {
                                            if (newValue) {
                                                setFormData({ ...formData, country: newValue.param_code });
                                            }
                                        }}
                                        getOptionLabel={(option) => option.param_code}
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
                                        value={formData.post_code}
                                        onChange={(e) => {
                                            setFormData({ ...formData, post_code: e.target.value });
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
                                        value={formData.phone}
                                        onChange={(e) => {
                                            setFormData({ ...formData, phone: e.target.value });
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
                                        value={formData.fax}
                                        onChange={(e) => {
                                            setFormData({ ...formData, fax: e.target.value });
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
                                        value={formData.contact_person}
                                        onChange={(e) => {
                                            setFormData({ ...formData, contact_person: e.target.value });
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
                                    value={formData.email}
                                    onChange={(e) => {
                                        setFormData({ ...formData, email: e.target.value });
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
                                    value={formData.remark1}
                                    onChange={(e) => {
                                        setFormData({ ...formData, remark1: e.target.value });
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
                                        value={formData.irop_code}
                                        onChange={(e) => {
                                            setFormData({ ...formData, irop_code: e.target.value });
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
                                        value={formData.sales_name}
                                        onChange={(e) => {
                                            setFormData({ ...formData, sales_name: e.target.value });
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
                                        value={formData.customer_group}
                                        onChange={(e) => {
                                            const selectedValue = e.target.value; // ค่าที่ถูกเลือกจาก Select
                                            setFormData({ ...formData, customer_group: selectedValue }); // อัปเดตค่า customer_group ใน formData
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
                                        type="number"
                                        label="Credit Value"
                                        placeholder="Credit Value"
                                        value={formData.credit_value}
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
                                        value={formData.customer_category}
                                        onChange={(e) => {
                                            const selectedValue = e.target.value; // ค่าที่ถูกเลือกจาก Select
                                            setFormData({ ...formData, customer_category: selectedValue }); // อัปเดตค่า customer_group ใน formData
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
                                        value={formData.payment_term}
                                        onChange={(e) => {
                                            const selectedValue = e.target.value; // ค่าที่ถูกเลือกจาก Select
                                            setFormData({ ...formData, payment_term: selectedValue }); // อัปเดตค่า customer_group ใน formData
                                        }}
                                    >
                                        <MenuItem value={"Cash"}>Cash</MenuItem>
                                        <MenuItem value={"Credit"}>Credit</MenuItem>

                                    </Select>
                                </Box>
                            </Box>
                        </Paper>
                    </DialogContentText>

                </DialogContent>
                <DialogActions sx={{ m: 3 }}>
                    <Button
                        sx={{
                            backgroundColor: "#2DC598",
                            color: "white",
                            // marginRight: 0,
                            width: "100px",

                            borderRadius: "30px",
                            "&:hover": {
                                background: "#2DC598",
                            },
                        }}
                        onClick={handleSubmit}
                        autoFocus
                    >
                        Create
                    </Button>

                    <Button
                        sx={{
                            backgroundColor: "#fff",
                            color: "black",
                            width: "100px",
                            borderColor: "grey.500",
                            borderStyle: "solid",
                            borderWidth: 1,
                            borderRadius: "30px",
                            "&:hover": {
                                background: "#D0D4CA ",
                            },
                        }}
                        onClick={handleClose}
                    >
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
