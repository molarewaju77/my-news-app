import { Box, Typography } from '@mui/material'
import React from 'react'

import MarketOverview from '../components/MarketOverview'
import Composites from '../components/Composite'
import StockOverview from '../components/StockOverview'
import { useOutletContext } from 'react-router-dom'

const StockPicksPage = () => {

  //this is passed from the outlet can be used to reduce any content in this page because the right bar wont show //will set it up later
  const { showRightbar } = useOutletContext();

  return (
    <Box sx={{boxShadow:'1',display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",maxWidth:"100%"}}>
      <MarketOverview/>
      <Composites/>
      <Box sx={{width:"95%",marginTop:"49px"}}>
        <Typography sx={{fontSize:"24px", fontWeight:"700"}}> Stock Picks</Typography>
        <Box sx={{mt:"17px"}}>
          <StockOverview/>
        </Box>
      </Box>
      <Box mt="30px" sx={{height:"100px",width:"95%",backgroundColor:"gray",display:"flex",alignItems:"center",justifyContent:"center"}}>
        Ads Space
      </Box>
    </Box>
  )
}

export default StockPicksPage
