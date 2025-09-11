import { Box } from '@mui/material'
import React from 'react'
import MarketInsights from './MarketInsights'
import RIghtBarNews from './RIghtBarNews'

const RightBar = () => {
  return (
    <Box sx={{height:"100%",width:{xs:"100%", md:"327px"},backgroundColor:"",paddingTop:"80px", boxShadow: 1,overflowX:"hidden",alignItems:"center"}} display={'flex'} flexDirection={'column'}>
      <MarketInsights/>
      <Box mt="39.1px" sx={{height:"200px", width:"95%",backgroundColor:"gray",display:"flex",alignItems:"center",justifyContent:"center"}}>
        Ads Space
      </Box>
      <RIghtBarNews/>
      <Box mt="34px" sx={{height:"200px", width:"95%",backgroundColor:"gray",display:"flex",alignItems:"center",justifyContent:"center"}}>
        Ads Space
      </Box>
    </Box>
  )
}

export default RightBar


