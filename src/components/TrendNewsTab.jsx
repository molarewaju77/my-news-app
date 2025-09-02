import { Box } from '@mui/material'
import React from 'react'
import { Typography, Divider, CardMedia } from "@mui/material";

//mock image // will be replaced with api later 
import trendNewsImg from "../assets/TrendNewsimg.png"

// mockTrendingNews will bw replaced with api later
 const trendingNews = [
  {
    id: 1,
    image:  trendNewsImg ,
    title: "Government Launches New Initiative",
    summary: "Power Banks, A/C Units Among Recent Recalled Items Sold at Costcoc Power Banks, A/C Units Among Recent Recalled Items Sold at Costco",
    timestamp: "Today, 4:42 PM",
    publisher: "Ridwan",
    comments: [
      { id: 1, author: "Aisha", text: "Great move!", time: "4:50 PM" },
      { id: 2, author: "Emeka", text: "Hope it works out.", time: "5:02 PM" }
    ]
  },
  {
    id: 2,
    image: trendNewsImg ,
    title: "Tech Giants Announce Partnership",
    summary: "Power Banks, A/C Units Among Recent Recalled Items Sold at Costcoc Power Banks, A/C Units Among Recent Recalled Items Sold at Costco",
    timestamp: "Today, 3:30 PM",
    publisher: "Ridwan",
    comments: [
      { id: 1, author: "John", text: "This is huge!", time: "3:45 PM" }
    ]
  },
  {
    id: 3,
    image: trendNewsImg ,
    title: "Stock Market Hits Record High",
    summary: "The stock market reached an all-time high today with investors optimistic.",
    timestamp: "Today, 2:15 PM",
    publisher: "Ridwan",
    comments: []
  },
  {
    id: 4,
    image: trendNewsImg,
    title: "New Breakthrough in Renewable Energy",
    summary: "Scientists report a major breakthrough in renewable energy technology.",
    timestamp: "Today, 6:00 PM",
    publisher: "Ridwan",
    comments: [
      { id: 1, author: "Amaka", text: "This is promising!", time: "6:15 PM" },
      { id: 2, author: "Tunde", text: "Future looks bright.", time: "6:20 PM" },
      { id: 3, author: "Ife", text: "Good for the planet.", time: "6:25 PM" }
    ]
  }
];

export default function TrendNewsTab() {
  return (
    <Box sx={{gap:"15px", display:"flex", flexDirection:"column"}} >
      {trendingNews.map((news, index) => (
        <React.Fragment key={news.id}>
          <Box display="flex" gap="10px" alignItems={"center"}>
            <CardMedia
              component="img"
              image={news.image}
              alt={news.title}
              sx={{ width: 139, height: 91, objectFit: "cover" }}
            />
            <Box>
              <Typography sx={{fontSize:"14px", fontWeight:"700"}}>
                {news.title}
              </Typography>
              {/* display summary on only large screen */}
              <Typography sx={{fontSize:"14px", fontWeight:"500", display:{xs:"none", md:"flex"}}}>
                {news.summary}
              </Typography>
              <Typography sx={{fontSize:"8.57px"}} variant="caption" color="#6E6E70" display="block" mt={1}>
                {news.timestamp} &nbsp; • &nbsp;  {news.comments.length}  Comments &nbsp;  • &nbsp;  By {news.publisher}
              </Typography>
            </Box>
          </Box>

          {/* Divider between items, but not after the last one */}
          {index < trendingNews.length && <Divider />}
        </React.Fragment>
      ))}
    </Box>
  );
}