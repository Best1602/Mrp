import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Mandatory from "./Mandatory";
import Advance from "./Advance";
import Advance2 from "./Advance2";
import SupplierSku from "./SupplierSku";

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </Box>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

export default function TabProduct() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab label="Mandatory" {...a11yProps(0)} />
                    <Tab label="Advanced" {...a11yProps(1)} />
                    <Tab label="Advanced 2" {...a11yProps(2)} />
                    <Tab label="Supplier SKU" {...a11yProps(3)} />
                    <Tab label="Stock Owners" {...a11yProps(4)} />
                    <Tab label="Prefer Location" {...a11yProps(5)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Mandatory />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Advance />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <Advance2 />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <SupplierSku />
            </CustomTabPanel>

        </Box>
    );
}
