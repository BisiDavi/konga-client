import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, tabData0, tabData1,
  tabData2, tabData3, tabData4, tabData5, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));


export default function VerticalTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const {
    tabData0,
    tabData1,
    tabData2,
    tabData3,
    tabData4,
    tabData5,
  } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabCategory = [
      {name: "Overview", index: 0},
      {name: "Description", index: 1},
      {name: "Shipping", index: 2},
      {name: "Warranty", index: 3},
      {name: "Return Policy", index: 4},
      {name: "Reviews", index: 5},
    ]

     
  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >         

        {TabCategory.map(category => {
            return  <Tab 
            label={category.name} 
            {...a11yProps(category.index)} />
        })}
      </Tabs>
      <TabPanel value={value} index={0}>
        {tabData0}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {tabData1}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {tabData2}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {tabData3}
      </TabPanel>
      <TabPanel value={value} index={4}>
        {tabData4}
      </TabPanel>
      <TabPanel value={value} index={5}>
        {tabData5}
      </TabPanel>      
    </div>
  );
}


