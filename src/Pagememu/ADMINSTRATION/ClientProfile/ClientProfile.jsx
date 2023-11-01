import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TableCileProfile from "./TableCilenttProfile"
import CreateClient from "./CreateClient";
function ClientProfile() {
    return (
        <Box
            sx={{
                marginLeft: "100px",

            }}
        >




            <Box sx={{ marginTop: -5, }}>
                <CreateClient />
                <TableCileProfile />

            </Box>
        </Box>
    );
}

export default ClientProfile