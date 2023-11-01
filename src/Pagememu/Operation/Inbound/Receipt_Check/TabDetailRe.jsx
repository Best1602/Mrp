import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Attributes1 from "./Attributes1";
import Attributes2 from "./Attributes2";
import Attributes3 from "./Attributes3";
import Attributes4 from "./Attributes4";

// import Price from "./Price";
// import Total from "./Total";
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
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
        </div>
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

export default function TabDetailRe() {
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
                    <Tab label="Attributes 1" {...a11yProps(0)} />
                    <Tab label="Attributes 2" {...a11yProps(1)} />
                    <Tab label="Attributes 3" {...a11yProps(2)} />
                    <Tab label="Attributes 4" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Attributes1 />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Attributes2 />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <Attributes3 />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <Attributes4 />
            </CustomTabPanel>

        </Box>
    );
}
