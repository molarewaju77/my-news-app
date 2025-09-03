import React from 'react'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

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
    {
    id: 4,
    image: NewsImg,
    title: "reaking up Nvidia; signs 3 orders to support AI",
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
    id: 5,
    image: NewsImg,
    title: "A/C Units Among Recent Recalled Items Sold at Costco",
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

const LatestNews = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={'28px'}>
        <Box component={Link} to="/news-details">
            {latestNews.slice(0, 1).map((news) => (
                <Box key={news.id} sx={{height:"187px",display:"flex",justifyContent: {xs:"center", md:"space-between"}, gap:{xs:"20px", md:"0"},overflow:"hidden"}}>
                    <Box src={news.image} component="img" sx={{height:"100%", width:{xs:"46%",md:"46%"}, objectFit:"cover"}}/>
                    <Box sx={{width:{xs:"43%",md:"50%"},overflow:"hidden"}}>
                        <Typography mb={"11px"} sx={{fontSize:{xs:"17px",md:"24px"}, fontWeight:"600",lineHeight:{xs:"22px",md:"30px"}}}>{news.title}</Typography>
                        <Typography sx={{fontSize:"12px",fontWeight:"400",lineHeight:"20px",color:"#1B1C1E"}}>{news.summary}</Typography>
                    </Box>
                </Box>
            ))
            }
        </Box>
        <Box sx={{display:"flex",flexWrap:"wrap",justifyContent: {xs:"center", md:"space-between"}, gap:{xs:"20px", md:"0"}}}>
            {latestNews.slice(1).map((news) => (
                <Box key={news.id} sx={{width:{xs:"46%" ,md:"22.5%"},height:"187px",overflow:"hidden"}}>
                    <Box src={news.image} alt="latest News" component="img" sx={{height:"113px", width:"100%",marginBottom:"13px   "}}/>
                    <Typography sx={{fontSize:'14px', fontWeight:"600"}}>{news.title}</Typography>
                </Box>
            ))}
        </Box>
    </Box>
  )
}

export default LatestNews
