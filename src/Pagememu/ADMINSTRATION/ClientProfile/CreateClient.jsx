import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from "@mui/material/Box";
import InCreateClient from './InCreateClient';
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Autocomplete from '@mui/material/Autocomplete';
import axios from "axios";

import MenuItem from "@mui/material/MenuItem";
import Swal from 'sweetalert2';
export default function CreateClient() {
    const [open, setOpen] = React.useState(false);
    const [selectedCountry, setSelectedCountry] = React.useState([]);
    const [formData, setFormData] = React.useState([]);
    const [selectedState, setSelectedState] = React.useState([]);
    const [selectedTown, setSelectedTown] = React.useState([]);

    console.log('ssss', selectedState);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const CustomBackdrop = (props) => {
        return (
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
                {props.children}
            </div>
        );
    }
    const dialogStyle = {
        borderRadius: '10px',

    };
    const stylesx = {
        backgroundColor: "white",
        color: "white",
        // Add other styles you need
    };

    const uniqueTownOptions = Array.from(new Set(selectedTown.map(item => item.param_desc)))
        .map(param_desc => selectedTown.find(item => item.param_desc === param_desc));
    const handleSubmit = () => {

        axios
            .post(
                "http://192.168.1.155:3000/clientprofile/create-clientprofiles",
                {
                    client: formData.client,
                    client_name: formData.client_name,
                    contact_person: formData.contact_person,
                    street: formData.street,
                    building: formData.building,
                    street3: formData.street3,
                    town: formData.town,
                    state: formData.state,
                    country: formData.country,
                    post_code: formData.post_code,
                    phone: formData.phone,
                    fax: formData.fax,
                    email: formData.email,
                    bill_to: formData.bill_to,
                    bill_street: formData.bill_street,
                    bill_building: formData.bill_building,
                    bill_street3: formData.bill_street3,
                    bill_state: formData.bill_state,
                    bill_country: formData.bill_country,
                    bill_postcode: formData.bill_postcode,
                    ls_billing_group: formData.ls_billing_group,
                    billing_period: formData.billing_period,
                    pick_method: formData.pick_method,
                    pick_pack_first: formData.pick_pack_first,
                    putaway_method: formData.putaway_method,
                    interface_export_inship: formData.interface_export_inship,
                    interface_export_outship: formData.interface_export_outship,
                    file_prefix_inship: formData.file_prefix_inship,
                    file_prefix_outship: formData.file_prefix_outship,
                    backorder_flag: formData.backorder_flag,
                    seq_group: formData.seq_group,
                    pick_seq_method: formData.pick_seq_method,
                    poh_change_cs: formData.poh_change_cs,
                    rch_change_cs: formData.poh_change_cs,
                    soh_change_cs: formData.soh_change_cs,
                    doh_change_cs: formData.doh_change_cs,
                    toh_change_cs: formData.toh_change_cs,
                    billing_flag: formData.billing_flag,
                    business_no: formData.business_no,
                    gst_no: formData.gst_no,
                    gst_rate: formData.gst_rate,
                    status: formData.status,
                    maker: formData.maker,
                    last_update: formData.last_update,
                    bill_phone: formData.bill_phone,
                    bill_fax: formData.bill_fax,
                    storage_chrg: formData.storage_chrg,
                    stock_in_chrg: formData.stock_in_chrg,
                    stock_out_chrg: formData.stock_out_chrg,
                    days_free: formData.days_free,
                    storage_chrg_uom: formData.storage_chrg_uom,
                    stock_in_chrg_uom: formData.stock_in_chrg_uom,
                    stock_out_chrg_uom: formData.stock_out_chrg_uom,
                    tax_no: formData.tax_no,
                    prefix_receipt: formData.prefix_receipt,
                    prefix_sales: formData.prefix_sales,
                    ct_st_expired: formData.ct_st_expired,
                    timeSlot: formData.timeSlot,
                    send_email_in: formData.send_email_in,
                    send_email_auto_in: formData.send_email_auto_in,
                    send_sms_in: formData.send_sms_in,
                    send_sms_auto_in: formData.send_email_auto_in,
                    send_email_out: formData.send_email_out,
                    send_email_auto_out: formData.send_email_auto_out,
                    send_sms_out: formData.send_sms_out,
                    send_sms_auto_out: formData.send_sms_auto_out,
                    send_mail_to: formData.send_mail_to,
                    send_sms_to: formData.send_sms_to,
                    client_contact: formData.client_contact,
                    prefix_pick: formData.prefix_pick,
                    prefix_invoice: formData.prefix_invoice,
                    user_profile: formData.user_profile

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
        axios
            .get('http://192.168.1.155:3000/customer-profiles/reference')
            .then((response) => {

                const dataWithUniqueIds3 = response.data.map((item, index) => ({
                    ...item,
                    id: index + 1,
                }));
                setSelectedCountry(dataWithUniqueIds3);

            })
            .catch((error) => {
                console.error('Error fetching data:', error);

            });
    }, []);
    useEffect(() => {
        axios
            .get('http://192.168.1.155:3000/customer-profiles/province')
            .then((response) => {

                const dataWithUniqueIds3 = response.data.map((item, index) => ({
                    ...item,
                    id: index + 1,
                }));
                setSelectedState(dataWithUniqueIds3);

            })
            .catch((error) => {
                console.error('Error fetching data:', error);

            });
    }, []);
    useEffect(() => {
        if (selectedTown === null) {
            axios
                .get('http://192.168.1.155:3000/customer-profiles/District')
                .then((response) => {
                    const dataWithUniqueIds3 = response.data.map((item, index) => ({
                        ...item,
                        id: index + 1,
                    }));
                    setSelectedTown(dataWithUniqueIds3);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
        }
    }, [selectedTown]);
    return (
        <Box sx={{ mt: 4 }}>
            <Button variant="outlined" onClick={handleClickOpen}>
                Create Supplies Profile
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
                    {"Create Supplier"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Box sx={{ display: "flex", gap: "20px", flexDirection: "column" }}>
                            <Paper
                                elevation={0}
                                sx={
                                    stylesx
                                }
                            >
                                <Box
                                    sx={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr",
                                        gap: 5,
                                        padding: 2,
                                        // width: 1000
                                    }}
                                >
                                    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                        <InputLabel>Client</InputLabel>
                                        <Select
                                            sx={{
                                                width: "100%",
                                                height: "55px",
                                                borderRadius: "5px",


                                            }}
                                        >
                                            <MenuItem value={"001"}>001</MenuItem>
                                            <MenuItem value={"002"}>002</MenuItem>
                                            <MenuItem value={"003"}>003</MenuItem>



                                        </Select>



                                    </Box>

                                    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                        <InputLabel>Client</InputLabel>
                                        <TextField
                                            sx={{
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderRadius: "5px", // กำหนดขอบโค้งให้กับ input
                                                    // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                                                },
                                            }}
                                            id="outlined-textarea"
                                            label="Client"
                                            placeholder="Client"
                                            multiline
                                            value={formData.client}
                                            onChange={(e) => {
                                                setFormData({ ...formData, client: e.target.value });
                                            }}

                                        />


                                    </Box>

                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "column", gap: "16px", padding: 2, marginTop: -2 }}>
                                    <InputLabel>EAN Company Code</InputLabel>
                                    <TextField
                                        sx={{
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                borderRadius: '7px', // กำหนดขอบโค้งให้กับ input
                                                // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                                            },
                                        }}
                                        label="EAN Company Code"
                                        id="outlined-multiline-static"
                                        multiline
                                    // value={formData.client}
                                    // onChange={(e) => {
                                    //     setFormData({ ...formData, client: e.target.value });
                                    // }}
                                    />
                                </Box>



                                {/* </Paper> */}
                                <Box sx={{ padding: 3, color: '#000006' }}>Client Details</Box>
                                {/* <Paper
                elevation={0}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    marginTop: 1.5,

                }}> */}
                                <Box sx={{ display: "flex", flexDirection: "column", gap: "16px", padding: 3 }}>
                                    <InputLabel>Name</InputLabel>
                                    <TextField
                                        sx={{
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                borderRadius: '5px', // กำหนดขอบโค้งให้กับ input
                                                // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                                            },
                                        }}
                                        label="Name"
                                        id="outlined-multiline-static"
                                        defaultValue=""
                                        value={formData.client_name}
                                        onChange={(e) => {
                                            setFormData({ ...formData, client_name: e.target.value });
                                        }}
                                    />
                                </Box>
                                <Box
                                    sx={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr",
                                        gap: 4,
                                        padding: 2,
                                        // width: 1000
                                    }}
                                >
                                    <Box sx={{ display: "flex", flexDirection: "column", gap: "5px", padding: 1, marginTop: -5 }}>
                                        <InputLabel>Status</InputLabel>
                                        <Select
                                            sx={{
                                                width: "100%",
                                                height: "55px",
                                                borderRadius: "5px",
                                            }}
                                        >
                                            <MenuItem value={"001"}>All</MenuItem>
                                            <MenuItem value={"002"}>002</MenuItem>
                                            <MenuItem value={"003"}>003</MenuItem>
                                        </Select>
                                    </Box>

                                    <Box sx={{ display: "flex", flexDirection: "column", gap: "5px", padding: 1, marginTop: -5 }}>
                                        <InputLabel>Tax Number</InputLabel>
                                        <TextField
                                            sx={{
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderRadius: "5px", // กำหนดขอบโค้งให้กับ input
                                                    // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                                                },
                                            }}
                                            label="Tax Number"
                                            id="outlined-multiline-static"

                                            value={formData.tax_no}
                                            onChange={(e) => {
                                                setFormData({ ...formData, tax_no: e.target.value });
                                            }}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "column", gap: "5px", padding: 3, marginTop: -5 }}>
                                    <InputLabel>Address</InputLabel>
                                    <TextField
                                        sx={{
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                borderRadius: "5px", // กำหนดขอบโค้งให้กับ input
                                                // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
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
                                        gridTemplateColumns: "1fr 1fr 1fr",
                                        gap: "5px",
                                        padding: 2,
                                        // width: 1000
                                    }}
                                >
                                    <Box sx={{ display: "flex", flexDirection: "column", gap: "5px", padding: 1, marginTop: -5 }}>
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

                                    <Box sx={{ display: "flex", flexDirection: "column", gap: "5px", padding: 1, marginTop: -5 }}>
                                        <InputLabel>Province</InputLabel>
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
                                    <Box sx={{ display: "flex", flexDirection: "column", gap: "5px", padding: 1, marginTop: -5 }}>
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

                                {/* ----------------------------- */}
                                <Box
                                    sx={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr ",
                                        gap: "5px",
                                        padding: 2,
                                        // width: 1000
                                    }}
                                >
                                    <Box sx={{ display: "flex", flexDirection: "column", gap: "15px", padding: 1, marginTop: -5 }}>
                                        <InputLabel>Postal Code</InputLabel>
                                        <TextField
                                            sx={{
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderRadius: "5px", // กำหนดขอบโค้งให้กับ input
                                                    // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                                                },
                                            }}
                                            label="Postal Code"
                                            id="outlined-multiline-static"
                                            value={formData.post_code}
                                            onChange={(e) => {
                                                setFormData({ ...formData, post_code: e.target.value });
                                            }}
                                        />
                                        <InputLabel>Telephone</InputLabel>
                                        <TextField
                                            sx={{
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderRadius: "5px", // กำหนดขอบโค้งให้กับ input
                                                    // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                                                },
                                            }}
                                            label="Telephone"
                                            id="outlined-multiline-static"
                                            value={formData.phone}
                                            onChange={(e) => {
                                                setFormData({ ...formData, phone: e.target.value });
                                            }}
                                        />




                                    </Box>

                                    <Box sx={{ display: "flex", flexDirection: "column", gap: "15px", padding: 1, marginTop: -5 }}>

                                        <InputLabel>Fax Number</InputLabel>
                                        <TextField
                                            sx={{
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderRadius: "5px", // กำหนดขอบโค้งให้กับ input
                                                    // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                                                },
                                            }}
                                            label="Fax Number"
                                            id="outlined-multiline-static"
                                            value={formData.fax}
                                            onChange={(e) => {
                                                setFormData({ ...formData, fax: e.target.value });
                                            }}
                                        />
                                        <InputLabel>Contact Person</InputLabel>
                                        <TextField
                                            sx={{
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderRadius: "5px", // กำหนดขอบโค้งให้กับ input
                                                    // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                                                },
                                            }}
                                            label="Contact Person"
                                            id="outlined-multiline-static"
                                            value={formData.client_contact}
                                            onChange={(e) => {
                                                setFormData({ ...formData, client_contact: e.target.value });
                                            }}
                                        />



                                    </Box>

                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "column", gap: "15px", padding: 3, marginTop: -3 }}>

                                    <InputLabel>Email</InputLabel>
                                    <TextField
                                        sx={{
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                borderRadius: "5px", // กำหนดขอบโค้งให้กับ input
                                                // border: '2px solid red', // กำหนด border และสีเส้นเป็นสีแดง
                                            },
                                        }}
                                        label="Email"
                                        id="outlined-multiline-static"
                                        value={formData.email}
                                        onChange={(e) => {
                                            setFormData({ ...formData, email: e.target.value });
                                        }}
                                    />




                                </Box>




                            </Paper >




                        </Box >
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ m: 3 }}>
                    <Button
                        sx={{

                            backgroundColor: '#2DC598',
                            color: 'white',
                            // marginRight: 0,
                            width: '100px',
                            borderRadius: "30px",
                            '&:hover': {
                                background: '#2DC598', // เปลี่ยน 'new-hover-color' เป็นสีที่คุณต้องการให้เป็นสีของ hover
                            },
                        }}
                        onClick={handleSubmit} autoFocus>Create</Button>

                    <Button sx={{

                        backgroundColor: '	#fff',
                        color: '#000000',
                        borderColor: 'grey.500',
                        borderStyle: 'solid', // เพิ่ม borderStyle โดยกำหนดให้เป็น solid
                        borderWidth: 1,
                        width: '100px',

                        borderRadius: "30px",
                        '&:hover': {
                            borderColor: 'grey.1000',
                            borderStyle: 'solid', // เพิ่ม borderStyle โดยกำหนดให้เป็น solid
                            borderWidth: 1,
                            background: '#D0D4CA ', // เปลี่ยน 'new-hover-color' เป็นสีที่คุณต้องการให้เป็นสีของ hover
                        },
                    }} onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </Box >
    );
}