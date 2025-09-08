import { Box, Menu, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'

const StockWatchList = () => {



  return (
    <Box>
      <Typography>Select Ticker to add</Typography>
      <Box>
        <Select>
          <MenuItem>VBTC-500</MenuItem>
          <MenuItem>Tenet</MenuItem>
          <MenuItem>Iron dome</MenuItem>
          <MenuItem>Global Stars</MenuItem>
          <MenuItem>Moonshots</MenuItem>
          <MenuItem>ETFs-Index Funds</MenuItem>
        </Select>
      </Box>
    </Box>
  )
}

export default StockWatchList
