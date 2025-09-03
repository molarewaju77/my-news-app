import React from 'react'
import { Box, Button, Divider, Typography } from '@mui/material';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { useNavigate, useParams } from 'react-router-dom'

import RelatedNews from '../components/RelatedNews';

//mock data for news will be replaced with api later
import NewsImg from "../assets/news.png"
import CommentImg from "../assets/commentImg.png"

const latestNews = [
    {
    id: 1,
    image: NewsImg,
    title: "US stock futures dip after Trump slaps 30% tariffs on Mexico , EU; CPI awaited",
    summary: `Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- 
    U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- 
    U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- 
    U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and 
    `, 
    comments: [
      { id: 1, name: "Frank Victor", image: CommentImg , time: "Today 6 : 15 PM" , text: "Stocks down rates up is back again. if you park in short term higher rates they get cut by next spring. feels like TINA again but with a twist", },
      { id: 2, name: "Stephen Daniel", image: CommentImg , time: "Today 5 : 14 PM" , text: "Stocks down rates up is back again. if you park in short term higher rates they get cut by next spring. feels like TINA again but with a twist", },
      { id: 3, name: "Alice Dais", image: CommentImg , time: "Today 8 : 14 PM" , text: "Stocks down rates up is back again. if you park in short term higher rates they get cut by next spring. feels like TINA again but with a twist", },  
    ]
  },
    {
    id: 2,
    image: NewsImg,
    title: "Musk says Tesla shareholders will vote on xAI investment",
    summary: `"Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- 
    U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- 
    U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- 
    U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and 
    "`, 
    comments: [
      { id: 1, name: "Frank Victor", image: CommentImg , time: "Today 6 : 15 PM" , text: "Stocks down rates up is back again. if you park in short term higher rates they get cut by next spring. feels like TINA again but with a twist", },
      { id: 2, name: "Stephen Daniel", image: CommentImg , time: "Today 5 : 14 PM" , text: "Stocks down rates up is back again. if you park in short term higher rates they get cut by next spring. feels like TINA again but with a twist", },
      { id: 3, name: "Alice Dais", image: CommentImg , time: "Today 8 : 14 PM" , text: "Stocks down rates up is back again. if you park in short term higher rates they get cut by next spring. feels like TINA again but with a twist", },  
    ]
  },
    {
    id: 3,
    image: NewsImg,
    title: "Bitcoin price today: dips below $118k amid regulatory caution",
    summary: `"Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- 
    U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- 
    U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- 
    U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and 
    "`, 
    comments: [
      { id: 1, name: "Frank Victor", image: CommentImg , time: "Today 6 : 15 PM" , text: "Stocks down rates up is back again. if you park in short term higher rates they get cut by next spring. feels like TINA again but with a twist", },
      { id: 2, name: "Stephen Daniel", image: CommentImg , time: "Today 5 : 14 PM" , text: "Stocks down rates up is back again. if you park in short term higher rates they get cut by next spring. feels like TINA again but with a twist", },
      { id: 3, name: "Alice Dais", image: CommentImg , time: "Today 8 : 14 PM" , text: "Stocks down rates up is back again. if you park in short term higher rates they get cut by next spring. feels like TINA again but with a twist", },  
    ]
  },
]

const NewsDetailsPage = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  return (
    <Box sx={{width:"95%", margin:"auto"}}>
      <Box display={"flex"} alignItems={'center'}  gap={'14px'}>
        <Button onClick={()=> navigate("/news")} sx={{backgroundColor:"#F6F6F6", minWidth:"0px",}}><ArrowBackIosNewOutlinedIcon sx={{fontSize:"20px"}} /></Button>
        <Typography color='#000000' fontSize={'12px'}>News / <span style={{color:"#1B1C1E"}}>{"US stock futures dip after Trump slaps 30% tariffs on Mexico , EU; CPI awaited"}</span></Typography>
      </Box>
      <Box mt={'19px'}>
        <Typography sx={{fontSize:"32px", fontWeight:"700",lineHeight:"45px"}}>{"US stock futures dip after Trump slaps 30% tariffs on Mexico , EU; CPI awaited"}</Typography>
      </Box>
      <Box mt={'88px'} sx={{height:"369px", width:"100%",backgroundColor:"red"}} src={"hello"} alt={"news.title"} component="img"/>
      <Typography bgcolor={""} mt={"27px"} py={"20px"}>{"news.summary"}</Typography>

      <Divider/>
        <Box display={'flex'} gap={'40px'} height={'65px'}>
          <Button sx={{fontSize:"12px",color:"#218BC5",textTransform:"none"}} startIcon={<BookmarkBorderOutlinedIcon/>}>Save</Button>
          <Button sx={{fontSize:"12px",color:"#218BC5",textTransform:"none"}} startIcon={<ShareOutlinedIcon/>}>Share</Button>
          <Button sx={{fontSize:"12px",color:"#218BC5",textTransform:"none"}} startIcon={<ChatBubbleOutlineIcon/>}>Comments {"(News.comments.length)"}</Button>
        </Box>
      <Divider/>

      <Box>
        <Box>

        </Box>
      </Box>

      <Box mt={'91px'}>
        <Typography sx={{fontSize:"24px", fontWeight:"700"}}>Related News</Typography>
        <Box mt={'20px'}>
          <RelatedNews/>
        </Box>
      </Box>
        
    </Box>
  )
}

export default NewsDetailsPage
