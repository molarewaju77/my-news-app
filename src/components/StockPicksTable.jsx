import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";

// Mock data
const rows = [
  { ticker: "PLTR", name: "Palantir Technologies Inc", marketCap: "64.66B", currentPrice: 142.1, sharePortfolio: "62.27%", marginHigh: "-4.13%", marginLow: "569.34%", wksHigh: 148.22, wksLow: 21.23, category: "VBTC-500" },
  { ticker: "UBER", name: "Uber Technologies Inc", marketCap: "64.66B", currentPrice: 142.1, sharePortfolio: "62.27%", marginHigh: "-4.13%", marginLow: "569.34%", wksHigh: 148.22, wksLow: 21.23, category: "VBTC-500" },
  { ticker: "AAPL", name: "Apple Inc", marketCap: "2.86T", currentPrice: 227.12, sharePortfolio: "18.53%", marginHigh: "-2.44%", marginLow: "89.72%", wksHigh: 232.67, wksLow: 119.55, category: "Global Stars" },
  { ticker: "TSLA", name: "Tesla Inc", marketCap: "842.15B", currentPrice: 269.85, sharePortfolio: "8.11%", marginHigh: "-6.21%", marginLow: "91.38%", wksHigh: 287.50, wksLow: 140.95, category: "Moonshots" },
  { ticker: "NVDA", name: "NVIDIA Corp", marketCap: "3.12T", currentPrice: 1187.62, sharePortfolio: "21.76%", marginHigh: "-1.28%", marginLow: "112.59%", wksHigh: 1203.54, wksLow: 545.12, category: "Iron dome" },
];

const categories = [
  { label: "VBTC-500", value: "VBTC-500" },
  { label: "Tenet", value: "Tenet" },
  { label: "Iron dome", value: "Iron dome" },
  { label: "Global Stars", value: "Global Stars" },
  { label: "Moonshots", value: "Moonshots" },
  { label: "ETFs- Index Funds", value: "ETFs- Index Funds" },
];

export default function StockPicksTable() {
  const [value, setValue] = useState(0);

  const activeCategory = categories[value].value;
  const filteredRows = rows.filter((row) => row.category === activeCategory);

  return (
    <Box>
      {/* Tabs */}
      <Tabs
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
        textColor="black"
        variant="scrollable"
        scrollButtons={false}
        sx={{
          "& .MuiTabs-flexContainer": {
            display: "flex",
            justifyContent: "flex-start",
            gap: "10px",
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "#218BC5",
            height: "3px",
          },
        }}
      >
        {categories.map((tab, index) => (
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

      {/* Table */}
      <Box sx={{ marginTop: "30px" }}>
        {filteredRows.length > 0 ? (
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f9fafb" }}>
                {[
                  "Ticker",
                  "Name",
                  "Market Cap",
                  "Current Price",
                  "% Share Portfolio",
                  "% Margin 52Wks - High",
                  "% Margin 52Wks - Low",
                  "52 Wks High",
                  "52 Wks Low",
                ].map((head, i) => (
                  <TableCell
                    key={i}
                    sx={{
                      fontWeight: 600,
                      fontSize: "13px",
                      color: "#374151",
                      padding: "10px 16px",
                      borderBottom: "2px solid #e5e7eb",
                    }}
                  >
                    {head}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows.map((row, index) => (
                <TableRow
                  key={index}
                  hover
                  sx={{
                    "&:hover": { backgroundColor: "#f3f4f6" },
                  }}
                >
                  <TableCell sx={{ fontSize: "13px" }}>{row.ticker}</TableCell>
                  <TableCell sx={{ fontSize: "13px" }}>{row.name}</TableCell>
                  <TableCell sx={{ fontSize: "13px" }}>{row.marketCap}</TableCell>
                  <TableCell sx={{ fontSize: "13px" }}>{row.currentPrice}</TableCell>
                  <TableCell sx={{ fontSize: "13px" }}>{row.sharePortfolio}</TableCell>
                  <TableCell sx={{ fontSize: "13px" }}>{row.marginHigh}</TableCell>
                  <TableCell sx={{ fontSize: "13px" }}>{row.marginLow}</TableCell>
                  <TableCell sx={{ fontSize: "13px" }}>{row.wksHigh}</TableCell>
                  <TableCell sx={{ fontSize: "13px" }}>{row.wksLow}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <Typography variant="body2" sx={{ mt: 2 }}>
            No stocks found for {activeCategory}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
