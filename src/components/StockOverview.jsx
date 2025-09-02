import React, { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";

// Import your tab components
import StockPicksTable from "./StockPicksTable";
import StockWatchList from './StockWatchList';

// Mock data for tabs (store component references, not JSX elements)
// With React.createElement(), only the active tab’s component mounts, so performance and memory usage is better (especially if those tables will get big later).
const mockTabs = [
  { label: "Stockertim portfolio", component: StockPicksTable},
  { label: "My Watchlist", component: StockWatchList},
];

const StockOverview = () => {
    const [value, setValue] = useState(0);
  
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
  return (
    <Box>
        <Tabs
            value={value}
            onChange={handleChange}
            textColor="black"
            scrollButtons={false}
            sx={{
                "& .MuiTabs-flexContainer": {
                display: "flex",
                width:"max-content",
                height:"46px",
                alignItems:"center",
                padding:"10px",
                justifyContent: "start",
                backgroundColor:"#ECEDEF",
                borderRadius:"5px"
                },
                "& .MuiTabs-indicator": {
                    display:"none"
                },
            }}
            >
            {mockTabs.map((tab, index) => (
                <Tab
                key={index}
                label={tab.label}
                sx={{
                    color: value === index ? "white" : "#232526",
                    backgroundColor: value === index ? "#1B1464" : "",
                    textTransform: "none",
                    borderRadius:"5px",
                    fontSize: "14px",
                    fontWeight: "500",
                }}
                />
            ))}
        </Tabs>













        <Box sx={{marginTop:"30px"}}>
            {/* so it create the component for the active tab and does not render everyone at once nice👍 */}
            {React.createElement(mockTabs[value].component)}
        </Box>
    </Box>
  )
}

export default StockOverview