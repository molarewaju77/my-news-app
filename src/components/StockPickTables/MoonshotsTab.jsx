import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

//component to lock some cells for non loggged in user and non premium user
import LockedCell from "./LockedCell";

// Mock data (will be replaced with API later)
const rows = [
  { ticker: "CAT", name: "Caterpillar Inc", marketCap: "174.12B", currentPrice: 324.55, sharePortfolio: "4.11%", marginHigh: "-2.34%", marginLow: "72.81%", wksHigh: 332.77, wksLow: 215.34 },
  { ticker: "GE", name: "General Electric Co", marketCap: "173.88B", currentPrice: 154.22, sharePortfolio: "3.21%", marginHigh: "-1.77%", marginLow: "81.92%", wksHigh: 158.31, wksLow: 98.41 },
  { ticker: "LMT", name: "Lockheed Martin Corp", marketCap: "111.94B", currentPrice: 471.63, sharePortfolio: "2.88%", marginHigh: "-2.28%", marginLow: "66.44%", wksHigh: 482.12, wksLow: 392.54 },
  { ticker: "RTX", name: "RTX Corp", marketCap: "148.22B", currentPrice: 102.37, sharePortfolio: "3.41%", marginHigh: "-3.44%", marginLow: "63.28%", wksHigh: 108.12, wksLow: 81.77 },
  { ticker: "DAL", name: "Delta Air Lines Inc", marketCap: "29.44B", currentPrice: 44.87, sharePortfolio: "1.19%", marginHigh: "-4.65%", marginLow: "58.77%", wksHigh: 47.11, wksLow: 28.93 },
  { ticker: "UAL", name: "United Airlines Holdings Inc", marketCap: "16.73B", currentPrice: 54.62, sharePortfolio: "0.98%", marginHigh: "-2.82%", marginLow: "61.55%", wksHigh: 56.93, wksLow: 34.12 },
  { ticker: "FDX", name: "FedEx Corp", marketCap: "67.45B", currentPrice: 259.88, sharePortfolio: "2.44%", marginHigh: "-1.65%", marginLow: "84.12%", wksHigh: 263.55, wksLow: 195.12 },
  { ticker: "UPS", name: "United Parcel Service Inc", marketCap: "123.61B", currentPrice: 142.77, sharePortfolio: "2.77%", marginHigh: "-2.51%", marginLow: "72.14%", wksHigh: 148.24, wksLow: 119.55 },
  { ticker: "MMM", name: "3M Co", marketCap: "53.12B", currentPrice: 98.66, sharePortfolio: "1.55%", marginHigh: "-3.38%", marginLow: "59.84%", wksHigh: 102.31, wksLow: 85.22 },
  { ticker: "DE", name: "Deere & Co", marketCap: "107.88B", currentPrice: 392.11, sharePortfolio: "2.63%", marginHigh: "-1.92%", marginLow: "76.34%", wksHigh: 398.77, wksLow: 305.45 },
];

const isPremium = false;

const MoonshotsTab = () => {
  return (
    <Box>
      <TableContainer component={Paper} sx={{ overflowX: "auto" ,}}>
        <Table size="small">
          {/* Table Head */}
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600, fontSize: "10.44px" }}>Ticker</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: "10.44px" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: "10.44px" }}>Market Cap ($B)</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: "10.44px" }}>Current Price</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: "10.44px" }}>% Share Portfolio</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: "10.44px" }}>% Margin 52Wks - High</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: "10.44px" }}>Ch% Margin 52Wks - Low</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: "10.44px" }}>52 Wks High</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: "10.44px" }}>52 Wks Low</TableCell>
            </TableRow>
          </TableHead>

          {/* Table Body */}
          <TableBody>
            {rows.map((row, i) => (
              <TableRow key={i}>
                {/* LOCKED when not premium */}
                <TableCell sx={{ fontWeight: 600, fontSize: "10.44px" }}>
                  {isPremium ? row.ticker : <LockedCell>{row.ticker}</LockedCell>}
                </TableCell>
                <TableCell sx={{ fontWeight: 600, fontSize: "10.44px" }}>
                  {isPremium ? row.name : <LockedCell>{row.name}</LockedCell>}
                </TableCell>
                <TableCell sx={{ fontSize: "10.44px" }}>
                  {isPremium ? row.marketCap : <LockedCell>{row.marketCap}</LockedCell>}
                </TableCell>

                {/* ALWAYS visible */}
                <TableCell sx={{ fontSize: "10.44px" }}>{row.currentPrice}</TableCell>
                <TableCell sx={{ fontSize: "10.44px" }}>{row.sharePortfolio}</TableCell>

                {/* LOCKED when not premium */}
                <TableCell sx={{ fontSize: "10.44px" }}>
                  {isPremium ? row.marginHigh : <LockedCell>{row.marginHigh}</LockedCell>}
                </TableCell>
                <TableCell sx={{ fontSize: "10.44px" }}>
                  {isPremium ? row.marginLow : <LockedCell>{row.marginLow}</LockedCell>}
                </TableCell>

                {/* ALWAYS visible */}
                <TableCell sx={{ fontSize: "10.44px" }}>{row.wksHigh}</TableCell>
                <TableCell sx={{ fontSize: "10.44px" }}>{row.wksLow}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MoonshotsTab;


