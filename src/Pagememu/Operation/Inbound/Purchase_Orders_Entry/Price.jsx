import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

function Price() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    id="outlined-textarea"
                    label="Utin Cost"
                    placeholder="Utin Cost"
                    multiline
                    sx={{
                        mr: 2,
                        width: '100%',
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderRadius: '7px',
                        },
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    id="outlined-textarea"
                    label="Unit cost - Discount"
                    placeholder="Unit cost - Discount"
                    multiline
                    sx={{
                        mr: 2,
                        width: '100%',
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderRadius: '7px',
                        },
                    }}

                />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    id="outlined-textarea"
                    label="Total"
                    placeholder="Total"
                    multiline
                    sx={{
                        mr: 2,
                        width: '100%',
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderRadius: '7px',
                        },
                    }}

                />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    id="outlined-textarea"
                    label="Discount"
                    placeholder="Discount"
                    multiline
                    sx={{
                        mr: 2,
                        width: '100%',
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderRadius: '7px',
                        },
                    }}

                />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    id="outlined-textarea"
                    label="Total After Discount"
                    placeholder="Total After Discount"
                    multiline
                    sx={{
                        mr: 2,
                        width: '100%',
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderRadius: '7px',
                        },
                    }}

                />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    id="outlined-textarea"
                    label="Remark"
                    placeholder="Remark"
                    multiline
                    sx={{
                        mr: 2,
                        width: '100%',
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderRadius: '7px',
                        },
                    }}

                />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    id="outlined-textarea"
                    label="VAT In/Ex"
                    placeholder="VAT In/Ex"
                    multiline
                    sx={{
                        mr: 2,
                        width: '100%',
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderRadius: '7px',
                        },
                    }}

                />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    id="outlined-textarea"
                    label="Grand Total"
                    placeholder="Grand Total"
                    multiline
                    sx={{
                        mr: 2,
                        width: '100%',
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderRadius: '7px',
                        },
                    }}

                />
            </Grid>
        </Grid>
    );
}

export default Price;
