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
  { ticker: "ZM", name: "Zoom Video", marketCap: "19.45B", currentPrice: 63.12, sharePortfolio: "1.82%", marginHigh: "-3.12%", marginLow: "59.44%", wksHigh: 66.24, wksLow: 45.18 },
  { ticker: "SNAP", name: "Snap Inc", marketCap: "23.91B", currentPrice: 18.77, sharePortfolio: "0.95%", marginHigh: "-4.21%", marginLow: "64.22%", wksHigh: 20.11, wksLow: 9.73 },
  { ticker: "ROKU", name: "Roku Inc", marketCap: "11.33B", currentPrice: 74.22, sharePortfolio: "0.84%", marginHigh: "-5.13%", marginLow: "61.34%", wksHigh: 79.77, wksLow: 55.44 },
  { ticker: "LYFT", name: "Lyft Inc", marketCap: "6.21B", currentPrice: 14.33, sharePortfolio: "0.42%", marginHigh: "-2.77%", marginLow: "55.18%", wksHigh: 15.21, wksLow: 8.62 },
  { ticker: "ETSY", name: "Etsy Inc", marketCap: "9.88B", currentPrice: 76.55, sharePortfolio: "0.67%", marginHigh: "-3.66%", marginLow: "62.15%", wksHigh: 80.14, wksLow: 55.23 },
  { ticker: "TWTR", name: "Twitter (X)", marketCap: "41.12B", currentPrice: 44.81, sharePortfolio: "1.18%", marginHigh: "-1.92%", marginLow: "72.34%", wksHigh: 46.22, wksLow: 30.11 },
  { ticker: "SPOT", name: "Spotify", marketCap: "51.67B", currentPrice: 258.77, sharePortfolio: "2.12%", marginHigh: "-2.55%", marginLow: "81.11%", wksHigh: 263.88, wksLow: 120.42 },
  { ticker: "SQ", name: "Block", marketCap: "46.91B", currentPrice: 71.92, sharePortfolio: "1.36%", marginHigh: "-4.44%", marginLow: "68.23%", wksHigh: 75.33, wksLow: 45.19 },
  { ticker: "PINS", name: "Pinterest", marketCap: "28.77B", currentPrice: 41.28, sharePortfolio: "0.92%", marginHigh: "-3.21%", marginLow: "63.19%", wksHigh: 43.88, wksLow: 24.17 },
  { ticker: "UBER", name: "Uber", marketCap: "149.22B", currentPrice: 71.12, sharePortfolio: "2.87%", marginHigh: "-2.14%", marginLow: "78.91%", wksHigh: 74.88, wksLow: 35.42 },
];

//will be later passed as props from the backend
const isPremium = false;

const EtfFundsTab = () => {
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

export default EtfFundsTab;
