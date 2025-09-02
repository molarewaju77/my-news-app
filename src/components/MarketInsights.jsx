import React, { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";

// Import your tab components
import  MostActiveTab from "./MostActiveTab"
import GainersTab from "./GainersTab";
import LoosersTab from "./LoosersTab";


// Mock data for tabs
const mockTabs = [
  { label: "Most Active", component: <MostActiveTab/>},
  { label: "Gainers %", component: <GainersTab/>},
  { label: "Losers %", component:<LoosersTab/>},
];

export default function MarketInsights(){
    const [value, setValue] = useState(0);
  
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

  return(

    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="red"
        indicatorColor="primary"
        scrollButtons={false}
        sx={{
        "& .MuiTabs-indicator": {
        backgroundColor: "#1256A0",
        height: 2.5,
        },
        }}      
      >
        {mockTabs.map((tab, index)=> (
          <Tab 
            key={index}
            label={tab.label}
            sx={{
            color: value === index ? "#1256A0" : "grey.700",
            borderBottom: 1, borderColor: 'divider',
            textTransform: "none",
            fontSize:"10.44px",
            fontWeight:"600",
            }}
          />
        ))}
      </Tabs>

      <Box sx={{marginTop:"10px"}}>
        {mockTabs[value].component}
      </Box>
    </Box>

  );
}