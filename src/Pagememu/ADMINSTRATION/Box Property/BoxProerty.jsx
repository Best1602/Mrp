import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TableProperty from "./TableBoxProperty";
import TabBox from "./TabBox";

function BoxProerty() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <TableProperty />
            <Box sx={{ marginLeft: '30px', width: '100%' }}>
                <TabBox />
            </Box>

        </Box>
    );
}

export default BoxProerty;
