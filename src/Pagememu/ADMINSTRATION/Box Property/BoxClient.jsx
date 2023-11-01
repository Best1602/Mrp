import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import axios from "axios";
import Checkbox from '@mui/material/Checkbox';
import Button from "@mui/material/Button";


const columns = [
    {
        field: "Box",
        headerName: "Box",
        width: 110,
        headerClassName: "custom-header",
        renderCell: (params) => (
            <Checkbox
                checked={params.value} // ใส่ค่าตรวจสอบเพื่อกำหนดสถานะของ checkbox
                disabled // ถ้าคุณต้องการ checkbox ใช้งานได้, ไม่ต้องใส่คุณสมบัตินี้
            />
        ),
    },
    {
        field: "Client",
        headerName: "Client",
        width: 150,

        resizable: true,
    },
    {
        field: "Client Name",
        headerName: "Client Name",
        width: 150,

        resizable: true,
    },


];


export default function BoxClient() {

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
                width: "100%",

            }}>
            <Paper elevation={6}>
                <DataGrid
                    sx={{
                        width: '100%',
                        height: "66vh",

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
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                <Button sx={{ background: "#4088DA", height: '40px', borderRadius: '40px', width: '500px' }} variant="contained">
                    Update
                </Button>

            </Box>

        </Box>
    );
}
