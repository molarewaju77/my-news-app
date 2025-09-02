import React, { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";

// Import your tab components
import TrendNewsTab from "./TrendNewsTab";
import TechNewsTab from "./TechNewsTab";
import StockNewsTab from "./StockNewsTab";
import CryptoNewsTab from "./CryptoNewsTab";
import EnergyNewsTab from "./EnergyNewsTab";
import PoliticsNewsTab from "./PoliticsNewsTab";


// Mock data for tabs
const mockTabs = [
  { label: "Trending News", component: <TrendNewsTab/>},
  { label: "Tech", component: <TechNewsTab/>},
  { label: "Stock", component:<StockNewsTab/>},
  { label: "Cryptocurrency", component:<CryptoNewsTab/>},
  { label: "Energy", component:<EnergyNewsTab/>},
  { label: "Politics", component:<PoliticsNewsTab/>},
];

export default function News(){
    const [value, setValue] = useState(0);
  
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

  return(
    // <TableContainer sx={{ overflowX: "auto" }}></TableContainer> add to my tables to avoid overflow
    <Box sx={{width:"100%"}}>
      <Tabs                 
        value={value}
        onChange={handleChange}
        textColor="red"
        indicatorColor="primary"
        variant="scrollable"
        scrollButtons={false}
        sx={{
        "& .MuiTabs-indicator": {
        backgroundColor: "#218BC5",
        height: "3px",
        },
        }}      
      >
        {mockTabs.map((tab, index)=> (
          <Tab 
            key={index}
            label={tab.label}
            sx={{
            color: value === index ? "#218BC5" : "#232526",
            borderBottom: 1, borderColor: 'divider',
            textTransform: "none",
            fontSize:"16px",
            fontWeight:"600",
            }}
          />
        ))}
      </Tabs>

      <Box sx={{marginTop:"30px"}}>
        {mockTabs[value].component}
      </Box>
    </Box>

  );
}