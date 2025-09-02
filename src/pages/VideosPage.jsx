import { Box } from '@mui/material'
import React from 'react'
import MarketOverview from '../components/MarketOverview';
import Composites from '../components/Composite';

const VideosPage = () => {
  return (
    <Box sx={{boxShadow:'1',display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",maxWidth:"100%"}}>
      <MarketOverview/>
      <Composites/>
    </Box>
  )
}

export default VideosPage

