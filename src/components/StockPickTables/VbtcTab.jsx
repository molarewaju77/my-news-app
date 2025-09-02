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
  { ticker: "PLTR", name: "Palantir Technologies Inc", marketCap: "64.66B", currentPrice: 142.1, sharePortfolio: "62.27%", marginHigh: "-4.13%", marginLow: "569.34%", wksHigh: 148.22, wksLow: 21.23 },
  { ticker: "UBER", name: "Uber Technologies Inc", marketCap: "64.66B", currentPrice: 142.1, sharePortfolio: "62.27%", marginHigh: "-4.13%", marginLow: "569.34%", wksHigh: 148.22, wksLow: 21.23 },
  { ticker: "HOOD", name: "Robinhood Markets Inc", marketCap: "64.66B", currentPrice: 142.1, sharePortfolio: "62.27%", marginHigh: "-4.13%", marginLow: "569.34%", wksHigh: 148.22, wksLow: 21.23 },
  { ticker: "AAPL", name: "Apple Inc", marketCap: "2.86T", currentPrice: 227.12, sharePortfolio: "18.53%", marginHigh: "-2.44%", marginLow: "89.72%", wksHigh: 232.67, wksLow: 119.55 },
  { ticker: "MSFT", name: "Microsoft Corp", marketCap: "2.73T", currentPrice: 412.59, sharePortfolio: "15.47%", marginHigh: "-3.12%", marginLow: "67.81%", wksHigh: 425.25, wksLow: 245.92 },
  { ticker: "AMZN", name: "Amazon.com Inc", marketCap: "1.92T", currentPrice: 182.44, sharePortfolio: "10.22%", marginHigh: "-1.66%", marginLow: "73.18%", wksHigh: 185.55, wksLow: 105.37 },
  { ticker: "GOOGL", name: "Alphabet Inc Class A", marketCap: "2.08T", currentPrice: 166.31, sharePortfolio: "12.04%", marginHigh: "-2.83%", marginLow: "82.14%", wksHigh: 171.17, wksLow: 91.34 },
  { ticker: "TSLA", name: "Tesla Inc", marketCap: "842.15B", currentPrice: 269.85, sharePortfolio: "8.11%", marginHigh: "-6.21%", marginLow: "91.38%", wksHigh: 287.50, wksLow: 140.95 },
  { ticker: "NVDA", name: "NVIDIA Corp", marketCap: "3.12T", currentPrice: 1187.62, sharePortfolio: "21.76%", marginHigh: "-1.28%", marginLow: "112.59%", wksHigh: 1203.54, wksLow: 545.12 },
  { ticker: "META", name: "Meta Platforms Inc", marketCap: "1.27T", currentPrice: 478.92, sharePortfolio: "9.43%", marginHigh: "-2.09%", marginLow: "95.23%", wksHigh: 488.32, wksLow: 245.12 },

  // ...more rows
];

const isPremium = false;

const VbtcTab = () => {
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

export default VbtcTab;
