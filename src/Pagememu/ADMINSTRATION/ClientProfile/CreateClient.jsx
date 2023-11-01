import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from "@mui/material/Box";
import InCreateClient from './InCreateClient';
export default function CreateClient() {
    const [open, setOpen] = React.useState(false);

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
                        <InCreateClient />
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
                        onClick={handleClose} autoFocus>Create</Button>

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