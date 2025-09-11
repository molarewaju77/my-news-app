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

import LockedCell from "./LockedCell";
import { useContext } from 'react';
import { StockTableContext } from '../Context/StockContext';

export default function StockPicksTable() {
  const [value, setValue] = useState(0);

  //to use the stocktable context
  const {categories, rows, loading} = useContext(StockTableContext);

  const [premium, setPremimum] = useState(false);

  const activeCategory = categories[value]?.value || " ";
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
                      lineHeight:"18px",
                      color: "#374151",
                      padding: "10px 9px",
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
                  <TableCell sx={{ fontSize: "13px" }}>
                    {premium ? row.ticker : <LockedCell />}
                  </TableCell>
                  <TableCell sx={{ fontSize: "13px" }}>
                    {premium ? row.name : <LockedCell />}
                  </TableCell>
                  <TableCell sx={{ fontSize: "13px" }}>{row.marketCap}</TableCell>
                  <TableCell sx={{ fontSize: "13px" }}>{row.currentPrice}</TableCell>
                  <TableCell sx={{ fontSize: "13px" }}>{row.sharePortfolio}</TableCell>
                  <TableCell sx={{ fontSize: "13px" }}>
                    {premium ? marginHigh : <LockedCell />}
                  </TableCell>
                  <TableCell sx={{ fontSize: "13px" }}>
                    {premium ? marginLow : <LockedCell />}
                  </TableCell>
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
