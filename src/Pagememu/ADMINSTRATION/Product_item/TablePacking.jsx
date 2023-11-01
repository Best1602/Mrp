import React from "react";
import Box from "@mui/material/Box";

import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";

import { DataGrid } from "@mui/x-data-grid";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
function TablePacking() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const rows = [
        { id: 1, lastName: "ของปลอม", Box: "A", age: 35 },
        { id: 2, lastName: "ของปลอม", Box: "B", age: 35 },
        { id: 3, lastName: "ของปลอม", Box: "C", age: 35 },

    ];
    const columns = [
        {
            field: "Box",
            headerName: "Zone",
            width: "100%",
            headerClassName: "custom-header",

        },

    ];



    return (
        <Paper sx={{ marginTop: 2.5, width: '97%' }} elevation={4}>
            <InputLabel sx={{ fontSize: '28px', marginTop: '1rem', color: '#003864', fontWeight: 600, padding: '15px' }}>
                Packaging UOM Definition 1.All measurements per unit packing 2.UOM cannot be changed when active </InputLabel>

            <DataGrid
                sx={{ height: "45vh", display: 'flex', justifyContent: 'center', alignItems: 'center', p: 0 }}
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                disableRowSelectionOnClick


            />

            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: 'center', marginTop: '10px' }}>




                <Button sx={{ marginBottom: '10px' }} variant="outlined">Remove</Button>
                <Button sx={{ marginBottom: '10px', marginLeft: '10px' }} variant="outlined" onClick={handleClickOpen}>
                    Add
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Assigned Storage Zone"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <Select
                                sx={{
                                    width: "100%",
                                    height: "57px",
                                    borderRadius: '7px'
                                }}
                                defaultValue={"A"}
                            >
                                <MenuItem value={"A"}>
                                    A
                                </MenuItem>
                                <MenuItem value={"B"}>
                                    B
                                </MenuItem>
                                <MenuItem value={"C"}>
                                    C
                                </MenuItem>
                            </Select>

                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleClose} autoFocus>
                            Add
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>


        </Paper>
    )
}

export default TablePacking