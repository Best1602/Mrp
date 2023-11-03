import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import axios from "axios";


const columns = [
  {
    field: "Client",
    headerName: "Client",
    width: 110,


  },
  {
    field: "Order No",
    headerName: "Order No",
    width: 150,

    // resizable: true,
  },
  {
    field: "Document Ref",
    headerName: "Document Ref",
    width: 150,


    // resizable: true,
  },
  {
    field: "Invoice No",
    headerName: "Invoice No",
    width: 150,

    // resizable: true,
  },
  {
    field: "Status",
    headerName: "Status",
    width: 150,

    // resizable: true,
  },
  {
    field: "Create Date",
    headerName: "Create Date",
    width: 150,

    // resizable: true,
  },
  {
    field: "Supplier",
    headerName: "Supplier",
    width: 150,

    // resizable: true,
  },
  {
    field: "Supplier Name",
    headerName: "Supplier Name",
    width: 200,

    // resizable: true,
  },
  {
    field: "Shipment No",
    headerName: "Shipment No",
    width: 150,

    // resizable: true,
  },
  {
    field: "Payment Term",
    headerName: "Payment Term",
    width: 150,
    // resizable: true,
  },
  {
    field: "Vat",
    headerName: "Vat",
    width: 150,
    // resizable: true,

  },

];


export default function DataGridDemo() {

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
            height: "80vh",
            padding: 1,
            paddingLeft: 2,
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
