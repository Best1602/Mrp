
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TableCustomerProfiles from "./TableCustomerProfiles";
import CreateCustomer from "./createCustomer";


function CustomerProfiles() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: "100px",


            }}
        >
            <Box sx={{
                // backgroundColor: 'red',
                marginTop: -15,
            }}>
                {/* <CreateCustomer /> */}
                <TableCustomerProfiles />
            </Box>










        </Box>
    );
}

export default CustomerProfiles