import React, { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";

// Import your tab components
import IndiciesTab from "./MarketsTable/IndiciesTab";
import StocksTab from "./MarketsTable/StocksTab";
import CommoditiesTab from "./MarketsTable/CommoditiesTab";
import CurrencyTab from "./MarketsTable/CurrencyTab";
import EtfTab from "./MarketsTable/EtfTab";
import BondsTab from "./MarketsTable/BondsTab";
import FundsTab from "./MarketsTable/FundsTab";
import CryptoTab from "./MarketsTable/CryptoTab";

// Mock data for tabs (store component references, not JSX elements)
// With React.createElement(), only the active tab’s component mounts, so performance and memory usage is better (especially if those tables will get big later).
const mockTabs = [
  { label: "Indices", component: IndiciesTab},
  { label: "Stocks", component: StocksTab},
  { label: "Commodities", component: CommoditiesTab},
  { label: "Currencies", component: CurrencyTab},
  { label: "ETFs", component: EtfTab},
  { label: "Bonds", component: BondsTab},
  { label: "Funds", component: FundsTab},
  { label: "Cryptocurrency", component: CryptoTab},
];

export default function MarketsTable(){
    const [value, setValue] = useState(0);
  
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

  return(
    <Box sx={{}}>
<Tabs
  value={value}
  onChange={handleChange}
  textColor="black"
  variant="scrollable"
  scrollButtons={false}
  sx={{
    "& .MuiTabs-flexContainer": {
      display: "flex",
      justifyContent: "flex-start", // remove default centering
      gap: "10px",                  // your custom gap
    },
    "& .MuiTabs-indicator": {
      backgroundColor: "#218BC5",
      height: "3px",
    },
  }}
>
  {mockTabs.map((tab, index) => (
    <Tab
      key={index}
      label={tab.label}
      sx={{
        color: value === index ? "#218BC5" : "#232526",
        borderBottom: 1,
        borderColor: "divider",
        textTransform: "none",
        fontSize: "16px",
        fontWeight: "600",
        padding: 0,        // remove Tab’s default padding
      }}
    />
  ))}
</Tabs>
      <Box sx={{marginTop:"30px"}}>
        {/* so it create the component for the active tab and does not render everyone at once nice👍 */}
        {React.createElement(mockTabs[value].component)}
      </Box>
    </Box>

  );
}
