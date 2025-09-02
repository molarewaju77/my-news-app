import React from 'react'
import { Box, Button } from '@mui/material'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import MarketOverview from '../components/MarketOverview';
import Composites from '../components/Composite';
import MarketsTable from '../components/MarketsTable';

const MarketPage = () => {
  return (
    <Box sx={{boxShadow:1,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",maxWidth:"100%"}}>
      <MarketOverview/>
      <Composites/>
      <Box sx={{marginTop:"78px",width:'95%'}}>
        <Button color='black' endIcon={<ArrowForwardIosOutlinedIcon/>} sx={{fontSize:"24px",fontWeight:"700",textTransform:"none"}}>
            Markets
        </Button>
        <Box>
            <MarketsTable/>
        </Box>
        <Box m="70px 0 100px 0" sx={{height:"100px",width:"100%",backgroundColor:"gray",display:"flex",alignItems:"center",justifyContent:"center"}}>
            Ads Space
        </Box>
      </Box>
    </Box>
  )
}

export default MarketPage