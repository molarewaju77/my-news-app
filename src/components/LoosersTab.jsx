import React from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import ClockImage from "../assets/clock.png";

// Example losers data (replace with real API later)
const rows = [
  { name: "COIN", last: 187.42, change: -5.12, volume: "30.21M" },
  { name: "ROKU", last: 58.90, change: -4.66, volume: "25.47M" },
  { name: "SQ", last: 72.34, change: -3.95, volume: "22.83M" },
  { name: "PYPL", last: 60.18, change: -3.42, volume: "20.74M" },
  { name: "BABA", last: 78.55, change: -2.67, volume: "18.31M" },
  { name: "ZM", last: 66.41, change: -2.19, volume: "16.92M" },
  { name: "INTC", last: 34.25, change: -1.77, volume: "14.65M" },
];

export default function LosersTab() {
  return (
    <TableContainer>
      <Table size="small">
        {/* Table Header */}
        <TableHead>
          <TableRow
            sx={{
              "& .MuiTableCell-head": {
                fontSize: "10.44px",
                fontWeight: "600",
              },
            }}
          >
            <TableCell>Name</TableCell>
            <TableCell>Last</TableCell>
            <TableCell>Chg.%</TableCell>
            <TableCell>Vol.</TableCell>
          </TableRow>
        </TableHead>

        {/* Table Body */}
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell sx={{ fontSize: "10.44px", fontWeight: 600 }}>{row.name}</TableCell>
              <TableCell sx={{ fontSize: "10.44px", fontWeight: 400 }}>{row.last}</TableCell>
              <TableCell
                sx={{
                  color: row.change >= 0 ? "green" : "red",
                  fontSize: "10.44px",
                  fontWeight: 400,
                }}
              >
                {row.change > 0 ? `+${row.change}%` : `${row.change}%`}
              </TableCell>
              <TableCell sx={{ fontSize: "10.44px" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  {row.volume}
                  <img src={ClockImage} alt="" />
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
