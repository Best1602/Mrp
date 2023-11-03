import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

export default function CollapsibleTable() {
    const [rows, setRows] = React.useState([]);
    const [selectedCountry, setSelectedCountry] = React.useState([]);


    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'client',
            headerName: 'Client',
            width: 150,



        },
        {
            field: 'client_name',
            headerName: 'Client_name',

            width: 200,

        },
        {
            field: 'country',
            headerName: 'Country',
            type: 'text',
            width: 200,

        },
        {
            field: 'street',
            headerName: 'street',
            type: 'text',
            width: 200,

        },
        {
            field: 'town',
            headerName: 'town',
            type: 'text',
            width: 200,

        },
        {
            field: 'state',
            headerName: 'state',
            type: 'text',
            width: 200,

        },
        {
            field: 'phone',
            headerName: 'phone',
            type: 'text',
            width: 200,

        },
        {
            field: '',
            headerName: 'button',
            width: 250,
            renderCell: (params) => {
                const handleEditClick = () => {
                    setEditRowData(params.row);
                    setOpenEditDialog(true);
                };

                return (

                    <Box sx={{ display: 'flex', justifyContent: 'start' }}>
                        <Button
                            variant="contained"
                            color="success"
                            endIcon={<ModeEditIcon />}
                            size="small"
                            onClick={handleEditClick}
                            sx={{ margin: '5px' }} // ระยะห่างระหว่างปุ่ม Edit กับปุ่ม ADD
                        >
                            Edit
                        </Button>

                        <Button
                            onClick={handleDelete}
                            variant="contained"
                            size="small"
                            endIcon={<DeleteIcon />}
                            sx={{ backgroundColor: '#e53935', margin: '5px' }} // ระยะห่างระหว่างปุ่ม DELETE กับปุ่มอื่น
                        >
                            DELETE
                        </Button>
                    </Box>



                );
            },
        },
    ];






    useEffect(() => {
        axios
            .get('http://192.168.1.155:3000/clientprofile/getclientprofiles')
            .then((response) => {
                // Map the response data to add unique IDs to each row
                const rowsWithUniqueIds = response.data.map((row, index) => ({
                    ...row,
                    id: index + 1,
                }));
                setRows(rowsWithUniqueIds); // Store the fetched data with unique IDs in the state

            })
            .catch((error) => {
                console.error('Error fetching data:', error);

            });
    }, []);


    const handleDelete = () => {

        axios
            .delete(
                // "http://192.168.1.155:3000/customer-profiles/insupd_customer_master",
                {


                }
            )
            .then((response) => {

                console.log(response);
                setOpenEditDialog(false);
            })
            .catch((error) => {

                if (error.response) {
                    console.log("API Response Data:", error.response.data); // เพื่อดูข้อมูลข้อผิดพลาดจากเซิร์ฟเวอร์
                }
            });
    };

    return (
        <Box sx={{ height: '100%', width: '100%' }}>

            <Paper elevation={12} sx={{ mt: 3, width: "91.5vw", height: '85vh', }}>

                <div style={{ height: "100%", width: '100%' }}>
                    <DataGrid
                        sx={{ height: '85vh', padding: 4, paddingLeft: 8 }}
                        rows={rows}
                        columns={columns}
                        className="custom-datagrid"

                        pageSizeOptions={[5, 10, 25, 50, 100]}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 10,

                                },
                            },
                        }}
                    />
                </div>
            </Paper>
        </Box>
    );
}
