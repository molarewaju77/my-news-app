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
  { ticker: "BABA", name: "Alibaba Group Holding Ltd", marketCap: "189.23B", currentPrice: 76.41, sharePortfolio: "4.72%", marginHigh: "-3.87%", marginLow: "61.54%", wksHigh: 82.22, wksLow: 58.12 },
  { ticker: "NKE", name: "Nike Inc", marketCap: "139.51B", currentPrice: 90.38, sharePortfolio: "3.11%", marginHigh: "-2.43%", marginLow: "68.77%", wksHigh: 94.82, wksLow: 66.14 },
  { ticker: "PEP", name: "PepsiCo Inc", marketCap: "240.89B", currentPrice: 176.25, sharePortfolio: "5.92%", marginHigh: "-1.65%", marginLow: "87.41%", wksHigh: 179.88, wksLow: 152.34 },
  { ticker: "KO", name: "Coca-Cola Co", marketCap: "258.77B", currentPrice: 60.19, sharePortfolio: "6.44%", marginHigh: "-2.05%", marginLow: "79.38%", wksHigh: 62.15, wksLow: 51.47 },
  { ticker: "SONY", name: "Sony Group Corp", marketCap: "115.42B", currentPrice: 97.63, sharePortfolio: "2.82%", marginHigh: "-4.29%", marginLow: "72.56%", wksHigh: 103.28, wksLow: 79.45 },
  { ticker: "IBM", name: "International Business Machines Corp", marketCap: "172.34B", currentPrice: 152.77, sharePortfolio: "4.16%", marginHigh: "-3.12%", marginLow: "65.92%", wksHigh: 158.11, wksLow: 118.53 },
  { ticker: "ADBE", name: "Adobe Inc", marketCap: "234.88B", currentPrice: 480.22, sharePortfolio: "7.14%", marginHigh: "-1.84%", marginLow: "93.44%", wksHigh: 489.11, wksLow: 310.57 },
  { ticker: "COST", name: "Costco Wholesale Corp", marketCap: "380.15B", currentPrice: 846.55, sharePortfolio: "6.72%", marginHigh: "-2.61%", marginLow: "98.18%", wksHigh: 864.22, wksLow: 495.44 },
  { ticker: "SBUX", name: "Starbucks Corp", marketCap: "104.27B", currentPrice: 91.36, sharePortfolio: "2.53%", marginHigh: "-3.74%", marginLow: "66.12%", wksHigh: 97.28, wksLow: 72.15 },
  { ticker: "QCOM", name: "Qualcomm Inc", marketCap: "192.74B", currentPrice: 210.44, sharePortfolio: "4.99%", marginHigh: "-1.92%", marginLow: "84.77%", wksHigh: 214.88, wksLow: 101.27 },
];

const isPremium = false;

const IronDomeTab = () => {
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

export default IronDomeTab;
