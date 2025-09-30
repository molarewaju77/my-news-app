import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

// Mock Data
const mockData = {
  title: "IBRG Composite Portfolio",
  headers: ["Performance YTD", "PLTR As % Portfolio"],
  mainValues: ["56.59%", "56.59%", "52.78%"],
  bottom: {
    leftLabel: "NASDAQ 100 YTD",
    leftValue: "8.61%",
    rightValue: "6.67%",
    rightLabel: "S&P 500 YTD",
  }
};

const Composite = () => {
  return (
    <Grid container sx={{flexGrow:"1",justifyContent:"center",color:"#FFFFFF",width:"95%",mt:"30px"}}>
      {/* Title */}
      <Grid bgcolor={"black"} size={8} display={'flex'} alignItems={"center"} justifyContent={"center"} sx={{height:"35px",border:"1px dashed white"}}>
        <Typography sx={{
          fontSize: { xs: "6.26px", md: "12px" },
          fontWeight:"600",
          width:"100%",
          textAlign:"center"
        }}>
          {mockData.title}
        </Typography>
      </Grid>
      
      {/* Headers */}
      <Grid bgcolor={'#6E6E70'} display={'flex'} alignItems={"center"} size={6} sx={{height:"27px",border:"1px dashed white"}}>
        <Typography sx={{
          fontSize: { xs: "6.26px", md: "12px" },
          fontWeight:"600",
          width:"100%",
          pl:"38px"
        }}>
          {mockData.headers[0]}
        </Typography>
      </Grid>
      <Grid bgcolor={'#6E6E70'} size={6} display={'flex'} alignItems={"center"} sx={{height:"27px",border:"1px dashed white"}}>
        <Typography sx={{
          fontSize: { xs: "6.26px", md: "12px" },
          fontWeight:"600",
          width:"100%",
          pl:"38px"
        }}>
          {mockData.headers[1]}
        </Typography>
      </Grid>
      
      {/* Main Values */}
      <Grid bgcolor={'#31B275'} size={3} display={'flex'} alignItems={"center"} justifyContent={"center"} sx={{height:"78px",border:"1px dashed white"}}>
        <Typography sx={{
          fontSize: { xs: "18.77px", md: "36px" },
          fontWeight:"600",
          width:"100%",
          textAlign:"center"
        }}>
          {mockData.mainValues[0]}
        </Typography>
      </Grid>
      <Grid bgcolor={'#31B275'} size={3} display={'flex'} alignItems={"center"} justifyContent={"center"} sx={{height:"78px",border:"1px dashed white"}}>
        <Typography sx={{
          fontSize: { xs: "18.77px", md: "36px" },
          fontWeight:"600",
          width:"100%",
          textAlign:"center"
        }}>
          {mockData.mainValues[1]}
        </Typography>
      </Grid>
      <Grid bgcolor={'#31B275'} size={6} display={'flex'} alignItems={"center"} justifyContent={"center"} sx={{height:"78px",border:"1px dashed white"}}>
        <Typography sx={{
          fontSize: { xs: "18.77px", md: "36px" },
          fontWeight:"600",
          width:"100%",
          textAlign:"center"
        }}>
          {mockData.mainValues[2]}
        </Typography>
      </Grid>
      
      {/* Bottom Section */}
      <Grid bgcolor={'#6E6E70'} size={2} display={'flex'} alignItems={"center"} justifyContent={"center"} sx={{height:"76px",border:"1px dashed white"}}>
        <Typography sx={{
          fontSize: { xs: "7.3px", md: "14px" },
          fontWeight:"600",
          width:"100%",
          textAlign:"center"
        }}>
          {mockData.bottom.leftLabel}
        </Typography>
      </Grid>
      <Grid bgcolor={'#31B275'} size={4} display={'flex'} alignItems={"center"} justifyContent={"center"} sx={{height:"76px",border:"1px dashed white"}}>
        <Typography sx={{
          fontSize: { xs: "18.77px", md: "36px" },
          fontWeight:"600",
          width:"100%",
          textAlign:"center"
        }}>
          {mockData.bottom.leftValue}
        </Typography>
      </Grid>
      <Grid bgcolor={'#31B275'} size={4} display={'flex'} alignItems={"center"} justifyContent={"center"} sx={{height:"76px",border:"1px dashed white"}}>
        <Typography sx={{
          fontSize: { xs: "18.77px", md: "36px" },
          fontWeight:"600",
          width:"100%",
          textAlign:"center"
        }}>
          {mockData.bottom.rightValue}
        </Typography>
      </Grid>
      <Grid bgcolor={'#6E6E70'} size={2} display={'flex'} alignItems={"center"} justifyContent={"center"} sx={{height:"76px",border:"1px dashed white"}}>
        <Typography sx={{
          fontSize: { xs: "7.3px", md: "14px" },
          fontWeight:"600",
          width:"100%",
          textAlign:"center"
        }}>
          {mockData.bottom.rightLabel}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Composite