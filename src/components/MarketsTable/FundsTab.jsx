import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Avatar
} from "@mui/material";

import CountryLogo from "../../assets/countrylogo.png"; // Your imported logo

// Mock data
const rows = [
  {
    name: "Dow Jones",
    logo: CountryLogo,
    last: "44,240.76",
    high: "44,436.96",
    low: "44,201.37",
    change: "-165.60",
    changePercent: "-0.37%",
    volume: "11.85M",
    positive: false,
  },
  {
    name: "S&P 500",
    logo: CountryLogo,
    last: "6,225.52",
    high: "6,242.70",
    low: "6,217.75",
    change: "-4.46",
    changePercent: "-0.07%",
    volume: "11.85M",
    positive: false,
  },
  {
    name: "Nasdaq",
    logo: CountryLogo,
    last: "20,418.46",
    high: "20,480.89",
    low: "20,377.36",
    change: "+5.95",
    changePercent: "+0.03%",
    volume: "11.85M",
    positive: true,
  },
  {
    name: "Small Cap 2000",
    logo: CountryLogo,
    last: "2,228.74",
    high: "2,238.53",
    low: "2,219.10",
    change: "+14.51",
    changePercent: "+0.66%",
    volume: "11.85M",
    positive: true,
  },
  {
    name: "S&P 500 VIX",
    logo: CountryLogo,
    last: "16.81",
    high: "17.44",
    low: "16.54",
    change: "-0.98",
    changePercent: "-5.51%",
    volume: "11.85M",
    positive: false,
  },
  {
    name: "S&P/TSX",
    logo: CountryLogo,
    last: "26,903.57",
    high: "27,070.18",
    low: "26,860.95",
    change: "-116.71",
    changePercent: "-0.43%",
    volume: "11.85M",
    positive: false,
  },
  {
    name: "Bovespa",
    logo: CountryLogo,
    last: "139,303",
    high: "139,591",
    low: "138,770",
    change: "-187",
    changePercent: "-0.13%",
    volume: "11.85M",
    positive: false,
  },
  {
    name: "S&P/BMV IPC",
    logo: CountryLogo,
    last: "57,183.32",
    high: "57,434.29",
    low: "56,821.70",
    change: "-240.08",
    changePercent: "-0.42%",
    volume: "11.85M",
    positive: false,
  },
  {
    name: "MSCI World",
    logo: CountryLogo,
    last: "4,031.51",
    high: "4,033.16",
    low: "4,031.45",
    change: "+1.50",
    changePercent: "+0.04%",
    volume: "11.85M",
    positive: true,
  },
  {
    name: "DAX",
    logo: CountryLogo,
    last: "24,206.91",
    high: "24,244.09",
    low: "24,063.42",
    change: "+133.24",
    changePercent: "+0.55%",
    volume: "11.85M",
    positive: true,
  }
];

export default function FundsTab() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>Name</strong></TableCell>
            <TableCell align="right"><strong>Last</strong></TableCell>
            <TableCell align="right"><strong>High</strong></TableCell>
            <TableCell align="right"><strong>Low</strong></TableCell>
            <TableCell align="right"><strong>Chg.</strong></TableCell>
            <TableCell align="right"><strong>Chg. %</strong></TableCell>
            <TableCell align="right"><strong>Volume</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Avatar src={row.logo} sx={{ width: 24, height: 24, mr: 1 }} />
                  <Typography variant="body2">{row.name}</Typography>
                </Box>
              </TableCell>
              <TableCell align="right">{row.last}</TableCell>
              <TableCell align="right">{row.high}</TableCell>
              <TableCell align="right">{row.low}</TableCell>
              <TableCell align="right" sx={{ color: row.positive ? "green" : "red" }}>
                {row.change}
              </TableCell>
              <TableCell align="right" sx={{ color: row.positive ? "green" : "red" }}>
                {row.changePercent}
              </TableCell>
              <TableCell align="right">{row.volume}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

