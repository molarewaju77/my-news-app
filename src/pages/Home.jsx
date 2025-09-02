import React from 'react'
import { Box, Button, Table } from '@mui/material'
import {Link} from '@mui/material'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Link as RouterLink } from 'react-router-dom'

import MarketOverview from '../components/MarketOverview'
import Composites from '../components/Composite'
import News from '../components/News';
import DailyBriefs from '../components/DailyBriefs';
import DailyBriefTradeAlert from '../components/DailyBriefTradeAlert';
import DailyBriefVideos from '../components/DailyBriefVideos';
import StockPicksTable from '../components/StockPicksTable';//will check this later


const Home = () => {

  return (
    <Box sx={{boxShadow:'1',display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",maxWidth:"100%"}}>
      <MarketOverview/>
      <Composites/>
      <Box mt="30px" sx={{height:"100px",width:"95%",backgroundColor:"gray",display:"flex",alignItems:"center",justifyContent:"center"}}>
        Ads Space
      </Box>
      <Box sx={{width:"95%"}}>
        <Button color='black' endIcon={<ArrowForwardIosOutlinedIcon/>} sx={{fontSize:"24px",fontWeight:"700",textTransform:"none"}} component={RouterLink} to="/news">
          News
        </Button>
        <News/>
        <Box sx={{mt:"28px",textAlign:"right",}}>
           <Link underline='none' sx={{fontSize:"12px",fontWeight:"500",color:"#218BC5"}} component={RouterLink} to="/news"> Show more news </Link>
        </Box>

        <Box>
          <Button color='black' endIcon={<ArrowForwardIosOutlinedIcon/>} sx={{fontSize:"24px",fontWeight:"700",textTransform:"none"}} component={RouterLink} to="">
            Daily brief
          </Button>
          <Box sx={{marginTop:"20px"}}>
            <DailyBriefs/>
          </Box>
          <Box sx={{mt:"28px",textAlign:"right",}}>
            <Link underline='none' sx={{fontSize:"12px",fontWeight:"500",color:"#218BC5"}} component={RouterLink} to="/news"> Show more news </Link>
          </Box>
        </Box>

        <Box mt="30px" sx={{height:"100px",width:"100%",backgroundColor:"gray",display:"flex",alignItems:"center",justifyContent:"center"}}>
          Ads Space
        </Box>
      </Box>

      {/* Stock Picks */}
      <Box sx={{width:"95%",marginTop:{xs:"49px", md:"74px"}}}>
        <Button color='black' endIcon={<ArrowForwardIosOutlinedIcon/>} sx={{fontSize:"24px",fontWeight:"700",textTransform:"none"}} component={RouterLink} to="/stock-picks">
          Stock Picks
        </Button>

        {/* added height 500px so it wont show the full table on the home page   */}
        <Box sx={{height:"500px",overflowY:"hidden"}}>
          <StockPicksTable/>
        </Box>

        <Box sx={{mt:"28px",textAlign:"right",}}>
          <Link underline='none' sx={{fontSize:"12px",fontWeight:"500",color:"#218BC5"}} component={RouterLink} to="/stock-picks"> Show more stocks Picks </Link>
        </Box>

        <Box mt="50px" sx={{height:"100px",width:"100%",backgroundColor:"gray",display:"flex",alignItems:"center",justifyContent:"center"}}>
          Ads Space
        </Box>
      </Box>

      {/* Trade alerts */}
      <Box sx={{width:"95%",marginTop:"78px"}}>
        <Button color='black' endIcon={<ArrowForwardIosOutlinedIcon/>} sx={{fontSize:"24px",fontWeight:"700",textTransform:"none"}} component={RouterLink} to="/stock-picks">
          Trade Alerts
        </Button>
        <Box>
          <DailyBriefTradeAlert/>
        </Box>

        <Box sx={{mt:"28px",textAlign:"right",}}>
          <Link underline='none' sx={{fontSize:"12px",fontWeight:"500",color:"#218BC5"}} component={RouterLink} to="/"> Show more trade alert</Link>
        </Box>

        <Box mt="50px" sx={{height:"100px",width:"100%",backgroundColor:"gray",display:"flex",alignItems:"center",justifyContent:"center"}}>
          Ads Space
        </Box>
      </Box>

      {/* Videos */}
      <Box sx={{width:"95%",margin:"78px 0 123px 0"}}>
        <Button color='black' endIcon={<ArrowForwardIosOutlinedIcon/>} sx={{fontSize:"24px",fontWeight:"700",textTransform:"none"}} component={RouterLink} to="/videos">
          Videos
        </Button>
        <Box sx={{mt:"30px"}}>
          <DailyBriefVideos/>
        </Box>
        <Box sx={{mt:"28px",textAlign:"right",}}>
          <Link underline='none' sx={{fontSize:"12px",fontWeight:"500",color:"#218BC5"}} component={RouterLink} to="/news"> Show more videos</Link>
        </Box>
      </Box>

    </Box>
  )
}

export default Home
