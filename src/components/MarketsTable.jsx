import React, { useState } from "react";
import { Box, Tabs, Tab, Table, TableHead, TableRow, TableCell, TableBody, Typography, TableContainer } from "@mui/material";


import CountryLogo from "../assets/countrylogo.png"; //wiil be replaced with api later ...

const rows = [
  // 📊 Indices
  {
    name: "Dow Jones",
    logo: CountryLogo,
    last: "44,240.76",
    high: "44,436.96",
    low: "44,201.37",
    change: "-165.60",
    changePercent: "-0.37%",
    volume: "11.85M",
    positive: false,
    category: "Indices",
  },
  {
    name: "S&P 500",
    logo: CountryLogo,
    last: "6,225.52",
    high: "6,242.70",
    low: "6,217.75",
    change: "-4.46",
    changePercent: "-0.07%",
    volume: "10.45M",
    positive: false,
    category: "Indices",
  },
  {
    name: "Nasdaq",
    logo: CountryLogo,
    last: "20,418.46",
    high: "20,480.89",
    low: "20,377.36",
    change: "+5.95",
    changePercent: "+0.03%",
    volume: "12.33M",
    positive: true,
    category: "Indices",
  },

  // 📈 Stocks
  {
    name: "Tesla",
    logo: CountryLogo,
    last: "200.54",
    high: "210.32",
    low: "198.10",
    change: "+3.25",
    changePercent: "+1.65%",
    volume: "15.2M",
    positive: true,
    category: "Stocks",
  },
  {
    name: "Apple",
    logo: CountryLogo,
    last: "210.01",
    high: "215.20",
    low: "208.50",
    change: "-1.12",
    changePercent: "-0.53%",
    volume: "18.6M",
    positive: false,
    category: "Stocks",
  },
  {
    name: "Microsoft",
    logo: CountryLogo,
    last: "402.12",
    high: "410.10",
    low: "400.45",
    change: "+2.44",
    changePercent: "+0.61%",
    volume: "14.7M",
    positive: true,
    category: "Stocks",
  },

  // 🛢️ Commodities
  {
    name: "Gold",
    logo: CountryLogo,
    last: "2,345.12",
    high: "2,356.78",
    low: "2,330.22",
    change: "+12.50",
    changePercent: "+0.54%",
    volume: "5.2M",
    positive: true,
    category: "Commodities",
  },
  {
    name: "Crude Oil",
    logo: CountryLogo,
    last: "84.15",
    high: "85.20",
    low: "83.75",
    change: "-0.44",
    changePercent: "-0.52%",
    volume: "8.9M",
    positive: false,
    category: "Commodities",
  },
  {
    name: "Silver",
    logo: CountryLogo,
    last: "29.85",
    high: "30.22",
    low: "29.12",
    change: "+0.25",
    changePercent: "+0.84%",
    volume: "4.4M",
    positive: true,
    category: "Commodities",
  },

  // 💱 Currencies
  {
    name: "EUR/USD",
    logo: CountryLogo,
    last: "1.085",
    high: "1.090",
    low: "1.083",
    change: "-0.002",
    changePercent: "-0.18%",
    volume: "2.1M",
    positive: false,
    category: "Currencies",
  },
  {
    name: "GBP/USD",
    logo: CountryLogo,
    last: "1.276",
    high: "1.282",
    low: "1.274",
    change: "+0.004",
    changePercent: "+0.31%",
    volume: "1.9M",
    positive: true,
    category: "Currencies",
  },
  {
    name: "USD/JPY",
    logo: CountryLogo,
    last: "148.50",
    high: "149.20",
    low: "147.90",
    change: "+0.75",
    changePercent: "+0.51%",
    volume: "3.0M",
    positive: true,
    category: "Currencies",
  },

  // 📊 ETFs
  {
    name: "SPDR S&P 500 ETF (SPY)",
    logo: CountryLogo,
    last: "515.23",
    high: "520.10",
    low: "512.45",
    change: "-1.25",
    changePercent: "-0.24%",
    volume: "12.5M",
    positive: false,
    category: "ETFs",
  },
  {
    name: "Invesco QQQ",
    logo: CountryLogo,
    last: "439.18",
    high: "445.55",
    low: "437.22",
    change: "+2.44",
    changePercent: "+0.56%",
    volume: "9.8M",
    positive: true,
    category: "ETFs",
  },
  // 💵 Bonds
{
  name: "US 10Y Treasury",
  logo: CountryLogo,
  last: "4.28%",
  high: "4.35%",
  low: "4.25%",
  change: "+0.03%",
  changePercent: "+0.71%",
  volume: "1.2M",
  positive: true,
  category: "Bonds",
},
{
  name: "German Bund 10Y",
  logo: CountryLogo,
  last: "2.35%",
  high: "2.40%",
  low: "2.31%",
  change: "-0.01%",
  changePercent: "-0.42%",
  volume: "0.9M",
  positive: false,
  category: "Bonds",
},

// 🏦 Funds
{
  name: "Vanguard Total Stock Market Fund (VTSAX)",
  logo: CountryLogo,
  last: "112.45",
  high: "113.10",
  low: "111.80",
  change: "-0.55",
  changePercent: "-0.49%",
  volume: "6.7M",
  positive: false,
  category: "Funds",
},
{
  name: "Fidelity Contrafund (FCNTX)",
  logo: CountryLogo,
  last: "154.22",
  high: "155.10",
  low: "153.80",
  change: "+0.65",
  changePercent: "+0.42%",
  volume: "4.3M",
  positive: true,
  category: "Funds",
},

// ₿ Cryptocurrency
{
  name: "Bitcoin (BTC/USD)",
  logo: CountryLogo,
  last: "64,500.25",
  high: "65,200.10",
  low: "63,900.55",
  change: "+850.75",
  changePercent: "+1.34%",
  volume: "25.4B",
  positive: true,
  category: "Cryptocurrency",
},
{
  name: "Ethereum (ETH/USD)",
  logo: CountryLogo,
  last: "3,250.60",
  high: "3,310.22",
  low: "3,210.15",
  change: "-45.12",
  changePercent: "-1.37%",
  volume: "12.7B",
  positive: false,
  category: "Cryptocurrency",
},
// ✈️ Futures
{
  name: "E-mini S&P 500 Futures",
  logo: CountryLogo,
  last: "6,227.50",
  high: "6,245.00",
  low: "6,215.25",
  change: "+12.75",
  changePercent: "+0.20%",
  volume: "3.5M",
  positive: true,
  category: "Futures",
},
{
  name: "Brent Oil Futures",
  logo: CountryLogo,
  last: "85.10",
  high: "86.00",
  low: "84.55",
  change: "-0.25",
  changePercent: "-0.29%",
  volume: "2.9M",
  positive: false,
  category: "Futures",
},

]

const mockTabs = [
  { label: "Indices" },
  { label: "Stocks" },
  { label: "Commodities" },
  { label: "Currencies" },
  { label: "ETFs" },
  { label: "Bonds" },
  { label: "Funds" },
  { label: "Cryptocurrency" },
];


export default function MarketsTable() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // 👇 get active category
  const activeCategory = mockTabs[value].label;
  const filteredRows = rows.filter((r) => r.category === activeCategory);

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="black"
        variant="scrollable"
        scrollButtons={false}
        sx={{
          "& .MuiTabs-flexContainer": {
            display: "flex",
            justifyContent: "flex-start",
            gap: "20px",
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
              fontSize: "14px",
              padding: 0,
            }}
          />
        ))}
      </Tabs>

      <Box sx={{ marginTop: "10px" }}>
        {filteredRows.length > 0 ? (
          <TableContainer sx={{overflowX:"auto"}}>
        <Table>
          <TableHead>
            <TableRow sx={{
              '& > th': {
                fontWeight:"600",
                fontSize:"12px"
              }
            }} >
              <TableCell>Name</TableCell>
              <TableCell>Last</TableCell>
              <TableCell>High</TableCell>
              <TableCell>Low</TableCell>
              <TableCell>Chg.</TableCell>
              <TableCell>Chg. %</TableCell>
              <TableCell>Volume</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row, i) => (
              <TableRow key={i} >
                <TableCell sx={{whiteSpace:"nowrap"}}>
                  <Box sx={{display:"flex", alignItems:"center", gap:"5px"}}>
                  <img src={row.logo} height={"11px"} width={"14px"}/>
                  {row.name}
                  </Box>
                </TableCell>
                <TableCell>{row.last}</TableCell>
                <TableCell>{row.high}</TableCell>
                <TableCell>{row.low}</TableCell>
                <TableCell sx={{ color: row.positive ? "green" : "red" }}>
                  {row.change}
                </TableCell>
                <TableCell  sx={{ color: row.positive ? "green" : "red" }}>
                  {row.changePercent}
                </TableCell>
                <TableCell>{row.volume}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
        ) : (
          <Typography>No Market available for this {activeCategory}</Typography>
        )
}
      </Box>
    </Box>
  );
}
