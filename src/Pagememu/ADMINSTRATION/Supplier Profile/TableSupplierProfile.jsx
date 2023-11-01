import * as React from 'react';
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
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.Client}
                </TableCell>
                <TableCell align="center">{row["Client Name"]}</TableCell>
                <TableCell align="center">{row["Address"]}</TableCell>
                <TableCell align="center">{row.District}</TableCell>
                <TableCell align="center">{row.Province}</TableCell>
                <TableCell align="center">{row.Country}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="Box">
                                Details
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell> </TableCell>
                                        <TableCell> </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {Object.keys(row).map((key) => (
                                        <TableRow key={key}>
                                            <TableCell sx={{ width: '300px' }} component="th" scope="row">
                                                {key}
                                            </TableCell>
                                            <TableCell>{row[key]}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box >
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        calories: PropTypes.number.isRequired,
        carbs: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.number.isRequired,
                customerId: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
            }),
        ).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        protein: PropTypes.number.isRequired,
    }).isRequired,
};

export default function CollapsibleTable() {
    const [rows, setRows] = React.useState([]);
    const [searchText, setSearchText] = React.useState(""); // สถานะเก็บข้อความค้นหา
    const [filteredRows, setFilteredRows] = React.useState([]); // สถานะเก็บข้อมูลที่ผ่านการค้นหา
    const [initialRows, setInitialRows] = React.useState([]);

    const handleSearch = (e) => {
        const searchText = e.target.value.toLowerCase();
        setSearchText(searchText);

        // กรองข้อมูลจาก rows โดยเปรียบเทียบกับค่า searchText
        const filteredData = rows.filter((row) => {
            return (
                row.Client.toLowerCase().includes(searchText) ||
                row["Client Name"].toLowerCase().includes(searchText) ||
                row.Address.toLowerCase().includes(searchText) ||
                row.District.toLowerCase().includes(searchText) ||
                row.Province.toLowerCase().includes(searchText) ||
                row.Country.toLowerCase().includes(searchText)
            );
        });

        setFilteredRows(filteredData);
    };


    React.useEffect(() => {
        axios.get(`http://192.168.1.155:3000/clientprofile/getclientprofiles`).then((response) => {
            setInitialRows(response.data);
            setRows(response.data);
        });
    }, []);

    return (
        <>
            <Box sx={{ mt: 1.5 }}>
                <TextField id="outlined-basic"
                    label="Search..."
                    variant="outlined"
                    placeholder="Search..."
                    value={searchText}
                    onChange={handleSearch}
                    size='small'

                />

                {/* <Autocomplete
                    id="search-autocomplete"
                    options={initialRows}
                    getOptionLabel={(option) => option.Client || option.Country}
                    //value={{ Client: searchText, Country: searchText }}
                    //onChange={(event, newValue) => handleSearch(event, newValue.Client)}
                    onChange={handleSearch}
                    renderInput={(params) => (
                        <TextField {...params} id="outlined-basic"
                            label="Search..."
                            variant="outlined"
                            placeholder="Search..."
                            value={searchText}
                            onChange={handleSearch}
                            size='small' />
                    )}
                /> */}
            </Box>


            <TableContainer component={Paper} elevation={6} sx={{ width: '91.5vw', mt: 3 }}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Cilent</TableCell>
                            <TableCell align="center">Cilent Name</TableCell>
                            <TableCell align="center">Address&nbsp;</TableCell>
                            <TableCell align="center">District&nbsp;</TableCell>
                            <TableCell align="center">Province&nbsp;</TableCell>
                            <TableCell align="center">Country&nbsp;</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {searchText ? (
                            filteredRows.map((row, index) => (
                                <Row key={index} row={row} />
                            ))
                        ) : (
                            initialRows.map((row, index) => (
                                <Row key={index} row={row} />
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </>

    );
}
