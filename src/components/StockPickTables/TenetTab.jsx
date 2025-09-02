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
  { ticker: "NFLX", name: "Netflix Inc", marketCap: "268.45B", currentPrice: 605.32, sharePortfolio: "7.81%", marginHigh: "-3.22%", marginLow: "85.47%", wksHigh: 623.11, wksLow: 320.44 },
  { ticker: "SQ", name: "Block Inc", marketCap: "46.73B", currentPrice: 71.28, sharePortfolio: "4.23%", marginHigh: "-5.65%", marginLow: "64.12%", wksHigh: 78.11, wksLow: 38.24 },
  { ticker: "SHOP", name: "Shopify Inc", marketCap: "87.56B", currentPrice: 68.93, sharePortfolio: "6.91%", marginHigh: "-1.92%", marginLow: "74.55%", wksHigh: 70.35, wksLow: 39.12 },
  { ticker: "AMD", name: "Advanced Micro Devices Inc", marketCap: "254.62B", currentPrice: 182.74, sharePortfolio: "11.67%", marginHigh: "-2.17%", marginLow: "97.38%", wksHigh: 187.20, wksLow: 93.84 },
  { ticker: "BA", name: "Boeing Co", marketCap: "141.29B", currentPrice: 215.41, sharePortfolio: "3.14%", marginHigh: "-4.83%", marginLow: "69.52%", wksHigh: 226.44, wksLow: 139.21 },
  { ticker: "PYPL", name: "PayPal Holdings Inc", marketCap: "70.81B", currentPrice: 64.22, sharePortfolio: "2.39%", marginHigh: "-6.11%", marginLow: "56.73%", wksHigh: 68.55, wksLow: 50.12 },
  { ticker: "ORCL", name: "Oracle Corp", marketCap: "390.14B", currentPrice: 142.19, sharePortfolio: "5.61%", marginHigh: "-1.88%", marginLow: "88.24%", wksHigh: 144.12, wksLow: 91.56 },
  { ticker: "DIS", name: "Walt Disney Co", marketCap: "212.35B", currentPrice: 118.64, sharePortfolio: "4.47%", marginHigh: "-2.41%", marginLow: "71.35%", wksHigh: 122.48, wksLow: 84.25 },
  { ticker: "INTC", name: "Intel Corp", marketCap: "162.42B", currentPrice: 42.73, sharePortfolio: "3.23%", marginHigh: "-4.55%", marginLow: "61.88%", wksHigh: 46.12, wksLow: 28.74 },
  { ticker: "CRM", name: "Salesforce Inc", marketCap: "295.11B", currentPrice: 309.57, sharePortfolio: "8.77%", marginHigh: "-1.42%", marginLow: "92.13%", wksHigh: 315.26, wksLow: 191.33 },
];

const isPremium = false;

const TenetTab = () => {
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

export default TenetTab;