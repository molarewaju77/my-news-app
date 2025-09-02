import React from 'react'
import { Box, Button } from '@mui/material'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

import MarketOverview from '../components/MarketOverview';
import Composites from '../components/Composite';

import TradeAlerts from '../components/Trade-Alert/TradeAlerts';

const TradeAlertPage = () => {
  return (
    <Box sx={{boxShadow:1,boxShadow:'1',display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",maxWidth:"100%"}}>
      <MarketOverview/>
      <Composites/>
      
      <Box sx={{marginTop:"78px",width:'95%'}}>
        <Button color='black' endIcon={<ArrowForwardIosOutlinedIcon/>} sx={{fontSize:"24px",fontWeight:"700",textTransform:"none"}}>
            Trade Alerts
        </Button>
        <Box>
            <TradeAlerts/>
        </Box>
        <Box m="70px 0 80px 0" sx={{height:"100px",width:"100%",backgroundColor:"gray",display:"flex",alignItems:"center",justifyContent:"center"}}>
            Ads Space
        </Box>
      </Box>
    </Box>
  )
}

export default TradeAlertPage
