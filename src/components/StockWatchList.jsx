import React, { useState, useContext, useEffect } from 'react'
import {
  Box,
  Tabs,
  Tab,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Button,
  MenuItem,
  Select,
  Stack,
  IconButton,
  TableContainer
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

import { StockTableContext } from '../Context/StockContext';

const StockWatchList = () => {
  const [portfolio, setPortfolio] = useState("Add portfolio");
  const [value, setValue] = useState(0);
  const [ticker , setTicker] = useState("Add ticker")
  const [watchlist, setWatchlist] = useState([]);

  //to use the stocktable context
  const {categories, rows, loading} = useContext(StockTableContext);

  // ✅ Load watchlist from localStorage on mount
  useEffect(() => {
    const savedWatchlist = localStorage.getItem("watchlist");
    if (savedWatchlist) {
      setWatchlist(JSON.parse(savedWatchlist));
    }
  }, []);

  // ✅ Save watchlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);
  
  // Reset ticker value when portfolio (category) is changed
  useEffect(() => {
    setTicker("Add ticker");  // Reset ticker to default when portfolio changes
  }, [portfolio]);

  const activeCategory = categories[value]?.value;
  const filteredRows = watchlist.filter((row) => row.category === activeCategory);

  const handleAdd = () => {
    if (portfolio !== "Add portfolio" && ticker !== "Add ticker") {
      const rowToAdd = rows.find(
        (r) => r.ticker === ticker && r.category === portfolio
      );
      if (rowToAdd && !watchlist.find((w) => w.ticker === ticker && w.category === portfolio)) {
        setWatchlist([...watchlist, rowToAdd]);
      }
    }
  };

  const handleDelete = (ticker, category) => {
    setWatchlist(watchlist.filter((w) => !(w.ticker === ticker && w.category === category)));
  };

  return (
    <>
      <Box sx={{backgroundColor:"#F6F6F6",p:"18px"}}>
        <Typography sx={{fontSize:"22px", fontWeight:"600",pb:"8px"}}>Select Ticker to add</Typography>
        <Box sx={{display:"flex",justifyContent:"space-between",flexWrap:"wrap", gap:"20px",width:"100%"}}>
          <Stack flexDirection={"row"} alignItems={"center"} sx={{gap:{xs:"0", md:"20px"}, justifyContent:{xs:"space-between", md:"initial"}}} width={{xs:"100%", md:"initial"}}>
            <Select value={portfolio} onChange={(e) => setPortfolio(e.target.value)} 
                size="small"
                sx={{height:"50px",borderRadius:"0", color:"#6E6E70",backgroundColor:"#FFFFFF",fontSize:"14px",borderRadius:"5px",width:{xs:"50%", md:"initial"},
                "& .MuiOutlinedInput-notchedOutline": {
                border: "none", // removes border
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                border: "none", // no border on hover
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "none", // no border on focus
                },}}
              >
              <MenuItem value="Add portfolio">Add portfolio</MenuItem>
              {categories.map((category) => (
                <MenuItem value={category.label}>{category.label}</MenuItem>
              ))}
            </Select>
            <Select size='small' value={ticker} onChange={(e) => setTicker(e.target.value)}
                sx={{height:"50px",borderRadius:"0", color:"#6E6E70",fontSize:"14px",backgroundColor:"#FFFFFF",borderRadius:"5px",width:{xs:"45%", md:"initial"},
                "& .MuiOutlinedInput-notchedOutline": {
                border: "none", // removes border
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                border: "none", // no border on hover
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "none", // no border on focus
                },}}
              >
              <MenuItem value="Add ticker" > Ticker </MenuItem>
              {rows
                .filter((t) => t.category === portfolio) // only tickers in chosen category
                .map((t) => (
                  <MenuItem key={t.ticker} value={t.ticker}>
                    {t.ticker}
                  </MenuItem>
              ))}
            </Select>
          </Stack>
          <Button startIcon={<AddIcon/>} onClick={handleAdd} sx={{textTransform:"none",backgroundColor:"#1B1464",color:"white",fontSize:"14px",height:"50px",px:"30px"}}>Add Symbol</Button>
        </Box>
      </Box>

      <Box sx={{mt:"15px"}}>
        {/* Tabs */}
        <Tabs
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
          textColor="black"
          variant="scrollable"
          scrollButtons={false}
          sx={{
            "& .MuiTabs-flexContainer": {
              display: "flex",
              justifyContent: "flex-start",
              gap: "20px",
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "#218BC5",
              height: "3px",
            },
          }}
        >
          {categories.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              sx={{
                color: value === index ? "#218BC5" : "#232526",
                borderBottom: 1,
                borderColor: "divider",
                fontSize: "14px",
                padding: 0,
              }}
            />
          ))}
        </Tabs>
  
        {/* Table */}
        <Box sx={{ marginTop: "30px" }}>
          {filteredRows.length > 0 ? (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#f9fafb" }}>
                    {[
                      "Ticker",
                      "Name",
                      "Market Cap",
                      "Current Price",
                      "% Share Portfolio",
                      "% Margin 52Wks - High",
                      "% Margin 52Wks - Low",
                      "52 Wks High",
                      "52 Wks Low",
                      "", // added column
                    ].map((head, i) => (
                      <TableCell
                        key={i}
                        sx={{
                          fontWeight: 600,
                          fontSize: "13px",
                          lineHeight:"18px",
                          color: "#374151",
                          padding: "10px 9px",
                          borderBottom: "2px solid #e5e7eb",
                        }}
                      >
                        {head}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredRows.length > 0 ? (
                    filteredRows.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row.ticker}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.marketCap}</TableCell>
                        <TableCell>{row.currentPrice}</TableCell>
                        <TableCell>{row.sharePortfolio}</TableCell>
                        <TableCell>{row.marginHigh}</TableCell>
                        <TableCell>{row.marginLow}</TableCell>
                        <TableCell>{row.wksHigh}</TableCell>
                        <TableCell>{row.wksLow}</TableCell>
                        <TableCell>
                          <IconButton
                            color="error"
                            onClick={() => handleDelete(row.ticker, row.category)}
                          >
                            <DeleteIcon sx={{fontSize:"17px"}}/>
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={10} align="center">No data</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Typography variant="body2" sx={{ mt: 2 , fontSize:"24px", fontWeight:"700", textAlign:"center",color:"#CACCD0"}}>
              No data
            </Typography>
          )}
        </Box>
      </Box>
    </>
  )
}

export default StockWatchList
