import React from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import ClockImage from "../assets/clock.png"


// Example data (replace with real API later)
const rows = [
  { name: "NVDA", last: 160.0, change: +1.11, volume: "138.13M" },
  { name: "TSLA", last: 297.81, change: +1.32, volume: "103.25M" },
  { name: "DDOG", last: 145.94, change: -4.25, volume: "86.39M" },
  { name: "PLTR", last: 139.71, change: +0.42, volume: "59.83M" },
  { name: "AMZN", last: 219.36, change: -1.84, volume: "45.69M" },
  { name: "AAPL", last: 210.01, change: +0.03, volume: "42.85M" },
  { name: "GOOGL", last: 174.36, change: -1.37, volume: "40.44M" },
];

export default function MostActiveTab() {
  return (
    <TableContainer sx={{}}>
      <Table size="small">
        {/* Table Header */}

        <TableHead>
            <TableRow
                sx={{
                "& .MuiTableCell-head": {
                    fontSize: "10.44px",
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

        {/* Table Body */}
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell sx={{ fontSize: "10.44px", fontWeight: 600 }}>{row.name}</TableCell>
              <TableCell  sx={{ fontSize: "10.44px", fontWeight: 400 }} >{row.last}</TableCell>
              <TableCell sx={{ color: row.change >= 0 ? "green" : "red" ,fontSize: "10.44px", fontWeight: 400 }}>
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
