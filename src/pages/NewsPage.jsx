import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import MarketOverview from '../components/MarketOverview';
import Composites from '../components/Composite';
import News from '../components/News';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import LatestNews from '../components/LatestNews';


const NewsPage = () => {

  return (
    <>
    <Box sx={{boxShadow:1,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",maxWidth:"100%"}}>
      <MarketOverview/>
      <Composites/>
      <Box sx={{mt:"77px",width:"95%"}}>
        <Box>
          <Typography sx={{fontSize:"24px", fontWeight:"700"}}>Explore our latest News</Typography>
        </Box>
        <Box sx={{mt:"30px"}}>
          <LatestNews/>
        </Box>  
        <Box mt={"60px"} sx={{height:"100px",width:"100%",backgroundColor:"gray",display:"flex",alignItems:"center",justifyContent:"center"}}>
          Ads Space
        </Box>
      </Box>
      <Box mt={"70px"} sx={{width:"95%"}}>
        <Button color='black' endIcon={<ArrowForwardIosOutlinedIcon/>} sx={{fontSize:"24px",fontWeight:"700",textTransform:"none"}}>
          News
        </Button>
        <Box sx={{}}>
          <News/>
        </Box>
        <Box m="62px 0 112px 0" sx={{height:"100px",width:"100%",backgroundColor:"gray",display:"flex",alignItems:"center",justifyContent:"center"}}>
          Ads Space
        </Box>
      </Box>
    </Box>
    </>
  )
}

export default NewsPage
