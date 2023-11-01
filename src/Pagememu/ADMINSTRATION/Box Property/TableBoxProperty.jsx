import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import axios from "axios";


const columns = [
    {
        field: "Box",
        headerName: "Box",
        width: 110,
        headerClassName: "custom-header",

    },
    {
        field: "Width",
        headerName: "Width",
        width: 150,

        resizable: true,
    },
    {
        field: "Depth",
        headerName: "Depth",
        width: 150,


        resizable: true,
    },
    {
        field: "Height",
        headerName: "Height",
        width: 150,

        resizable: true,
    },
    {
        field: "Weight",
        headerName: "Weight",
        width: 150,

        resizable: true,
    },
    {
        field: "Percent",
        headerName: "Percent",
        width: 150,

        resizable: true,
    },
    {
        field: "price Box",
        headerName: "ราคากล่อง",
        width: 150,

        resizable: true,
    },
    {
        field: "Price buble",
        headerName: "ราคาบับเบิ้ล",
        width: 200,

        resizable: true,
    },
    {
        field: "Vol",
        headerName: "Vol",
        width: 150,

        resizable: true,
    },
    {
        field: "Sum vol",
        headerName: "Sum vol",
        width: 150,
        resizable: true,
    },
    {
        field: "Status",
        headerName: "Status",
        width: 150,
        resizable: true,

    },
    {
        field: "Maker",
        headerName: "Maker",
        width: 150,
        resizable: true,

    },
    {
        field: "date",
        headerName: "Date",
        width: 150,
        resizable: true,

    },

];


export default function TableProperty() {

    const [rows, setRows] = React.useState([]);

    const fetchUserData = () => {
        axios
            .get(`http://192.168.1.155:3000/purchase/getpurchase`)
            .then((response) => {
                setRows(response.data);
            })
            .catch((error) => {
                console.error("เกิดข้อผิดพลาดในการดึงข้อมูล:", error);
            });
    };

    React.useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <Box
            sx={{
                height: 700,
                width: "50%",
                marginLeft: "100px"

            }}>
            <Paper elevation={6}>
                <DataGrid
                    sx={{
                        width: '100%',
                        height: "80vh",
                        // padding: 1,
                        // paddingLeft: 2,
                        // marginLeft: '100px'
                    }}
                    rows={rows}
                    columns={columns}
                    getRowId={(row) => row.Client + row["Order No"]}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,

                            },
                        },
                    }}
                    pageSizeOptions={[10]}
                    disableRowSelectionOnClick

                />
            </Paper>

        </Box>
    );
}
