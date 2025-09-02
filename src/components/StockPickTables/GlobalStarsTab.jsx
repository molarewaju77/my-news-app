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
  { ticker: "PFE", name: "Pfizer Inc", marketCap: "169.22B", currentPrice: 29.84, sharePortfolio: "2.11%", marginHigh: "-3.45%", marginLow: "54.32%", wksHigh: 32.12, wksLow: 25.44 },
  { ticker: "MRK", name: "Merck & Co Inc", marketCap: "325.17B", currentPrice: 131.66, sharePortfolio: "3.87%", marginHigh: "-2.12%", marginLow: "73.84%", wksHigh: 135.92, wksLow: 97.23 },
  { ticker: "UNH", name: "UnitedHealth Group Inc", marketCap: "477.34B", currentPrice: 518.75, sharePortfolio: "6.44%", marginHigh: "-1.38%", marginLow: "89.12%", wksHigh: 524.55, wksLow: 410.28 },
  { ticker: "CVX", name: "Chevron Corp", marketCap: "280.65B", currentPrice: 162.14, sharePortfolio: "5.23%", marginHigh: "-4.26%", marginLow: "68.39%", wksHigh: 169.11, wksLow: 112.57 },
  { ticker: "XOM", name: "Exxon Mobil Corp", marketCap: "410.28B", currentPrice: 113.56, sharePortfolio: "4.98%", marginHigh: "-2.71%", marginLow: "74.12%", wksHigh: 118.24, wksLow: 95.32 },
  { ticker: "V", name: "Visa Inc", marketCap: "553.91B", currentPrice: 266.47, sharePortfolio: "8.31%", marginHigh: "-1.74%", marginLow: "91.33%", wksHigh: 272.66, wksLow: 201.44 },
  { ticker: "MA", name: "Mastercard Inc", marketCap: "437.12B", currentPrice: 468.19, sharePortfolio: "7.22%", marginHigh: "-2.15%", marginLow: "85.24%", wksHigh: 474.88, wksLow: 312.15 },
  { ticker: "JPM", name: "JPMorgan Chase & Co", marketCap: "556.18B", currentPrice: 192.44, sharePortfolio: "6.12%", marginHigh: "-1.41%", marginLow: "79.58%", wksHigh: 195.77, wksLow: 132.28 },
  { ticker: "GS", name: "Goldman Sachs Group Inc", marketCap: "142.55B", currentPrice: 428.92, sharePortfolio: "3.76%", marginHigh: "-3.64%", marginLow: "67.88%", wksHigh: 441.26, wksLow: 310.47 },
  { ticker: "C", name: "Citigroup Inc", marketCap: "104.21B", currentPrice: 52.17, sharePortfolio: "2.44%", marginHigh: "-4.11%", marginLow: "59.42%", wksHigh: 56.12, wksLow: 38.77 },
];

const isPremium = false;

const GlobalStarsTab = () => {
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

export default GlobalStarsTab;

