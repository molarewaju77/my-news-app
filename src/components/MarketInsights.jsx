import React, { useState } from "react";
import { Box, Tabs, Tab, Table, TableHead, TableRow, TableCell, TableBody, Typography } from "@mui/material";

import ClockImage from "../assets/clock.png"

// Example data (replace with real API later)
const rows = [
  // 🔥 Most Active
  { name: "NVDA", last: 160.0, change: +1.11, volume: "138.13M", category: "Most Active" },
  { name: "TSLA", last: 297.81, change: +1.32, volume: "103.25M", category: "Most Active" },
  { name: "DDOG", last: 145.94, change: -4.25, volume: "86.39M", category: "Most Active" },
  { name: "PLTR", last: 139.71, change: +0.42, volume: "59.83M", category: "Most Active" },
  { name: "AMZN", last: 219.36, change: -1.84, volume: "45.69M", category: "Most Active" },
  { name: "AAPL", last: 210.01, change: +0.03, volume: "42.85M", category: "Most Active" },
  { name: "GOOGL", last: 174.36, change: -1.37, volume: "40.44M", category: "Most Active" },

  // 📈 Gainers %
  { name: "META", last: 375.22, change: +5.42, volume: "30.12M", category: "Gainers %" },
  { name: "NFLX", last: 642.18, change: +4.87, volume: "18.44M", category: "Gainers %" },
  { name: "AMD", last: 145.77, change: +3.95, volume: "22.76M", category: "Gainers %" },
  { name: "SHOP", last: 98.63, change: +3.22, volume: "12.11M", category: "Gainers %" },
  { name: "COIN", last: 212.41, change: +2.88, volume: "16.54M", category: "Gainers %" },

  // 📉 Losers %
  { name: "UBER", last: 67.22, change: -4.95, volume: "14.32M", category: "Losers %" },
  { name: "SNOW", last: 158.41, change: -4.52, volume: "19.25M", category: "Losers %" },
  { name: "BABA", last: 72.13, change: -3.71, volume: "28.64M", category: "Losers %" },
  { name: "NIO", last: 8.11, change: -2.95, volume: "44.11M", category: "Losers %" },
  { name: "PDD", last: 102.24, change: -2.44, volume: "21.97M", category: "Losers %" },
];


// Mock data for tabs
const mockTabs = [
  { label: "Most Active"},
  { label: "Gainers %"},
  { label: "Losers %"},
];

export default function MarketInsights(){
    const [value, setValue] = useState(0);
  
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // 👇 get active category
    const activeCategory = mockTabs[value].label;
    const filteredRows = rows.filter((r) => r.category === activeCategory);

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
        {filteredRows.length > 0 ? (
        <Table size="small">
          <TableHead>
            <TableRow
                sx={{
                "& .MuiTableCell-head": {
                    fontSize: "11px",
                    fontWeight: "600",
                }
                }}
              >
              <TableCell>Name</TableCell>
              <TableCell>Last</TableCell>
              <TableCell>Chg.%</TableCell>
              <TableCell>Vol.</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
                {filteredRows.map((row, i) => (
                  <TableRow key={i}
                    sx={{
                      '& td': {
                        fontSize:"10.44px"
                      }
                }}
                  >
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.last}</TableCell>
                  <TableCell sx={{ color: row.change >= 0 ? "green" : "red" ,fontSize: "10.44px", fontWeight: 400 }}>
                    {row.change > 0 ? `+ ${row.change}%` : `${row.change}%`}
                  </TableCell>
                    <TableCell sx={{display:"flex", gap:"5px", alignItems:"center"}}>
                      {row.volume}
                      <img src={ClockImage} alt="clock"/>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table> ) :
        (
          <Typography sx={{fontSize:"10.44px"}}>
            No market insights for this {activeCategory}
          </Typography>
        )
        }
      </Box>
    </Box>

  );
}