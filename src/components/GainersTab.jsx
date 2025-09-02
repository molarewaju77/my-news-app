import React from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import ClockImage from "../assets/clock.png";

// Example gainers data (replace with real API later)
const rows = [
  { name: "NFLX", last: 512.34, change: +6.42, volume: "32.11M" },
  { name: "MSFT", last: 420.78, change: +4.55, volume: "28.47M" },
  { name: "SHOP", last: 92.67, change: +3.98, volume: "25.83M" },
  { name: "META", last: 312.15, change: +2.64, volume: "22.10M" },
  { name: "AMD", last: 178.25, change: +2.13, volume: "20.55M" },
  { name: "SNOW", last: 189.33, change: +1.85, volume: "18.94M" },
  { name: "UBER", last: 72.44, change: +1.42, volume: "15.73M" },
];

export default function GainersTab() {
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
