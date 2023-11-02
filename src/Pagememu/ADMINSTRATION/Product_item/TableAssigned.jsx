import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useMediaQuery } from "@mui/material";

function TableAssigned() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

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
        <Paper
            sx={{
                padding: isSmallScreen ? "0.5rem" : "1rem",

            }}
            elevation={4}

        >
            <InputLabel
                sx={{
                    fontSize: isSmallScreen ? "10px" : "20px",
                    // marginTop: "1rem",
                    color: "#003864",
                    fontWeight: 600,
                    padding: "10px",
                }}
            >
                Assigned Storage Zone
            </InputLabel>

            <DataGrid
                sx={{ height: isSmallScreen ? "30vh" : "45vh", display: "flex", justifyContent: "center", alignItems: "center" }}
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: isSmallScreen ? 3 : 5,
                        },
                    },
                }}
                pageSizeOptions={isSmallScreen ? [3] : [5]}
                disableRowSelectionOnClick
            />

            <Box
                sx={{
                    display: "flex",
                    // flexDirection: isSmallScreen ? "column" : "row",
                    justifyContent: isSmallScreen ? "center" : "center",
                    marginTop: "10px",
                }}
            >
                <Button
                    sx={{
                        marginBottom: isSmallScreen ? '10px' : '0',
                        height: isSmallScreen ? '40px' : '0',
                    }}
                    variant="outlined"
                >
                    Remove
                </Button>
                <Button
                    sx={{
                        marginBottom: '10px', marginLeft: isSmallScreen ? '0' : '10px'

                    }}
                    variant="outlined"
                    onClick={handleClickOpen}
                >
                    Add
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">Assigned Storage Zone</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <Select
                                sx={{
                                    width: "100%",
                                    height: "57px",
                                    borderRadius: '7px',
                                }}
                                defaultValue={"001"}
                            >
                                <MenuItem value={"001"}>A</MenuItem>
                                <MenuItem value={"002"}>B</MenuItem>
                                <MenuItem value={"003"}>C</MenuItem>
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
        </Paper >
    );
}

export default TableAssigned;
