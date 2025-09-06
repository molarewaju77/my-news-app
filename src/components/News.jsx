import React, { useState } from "react";
import { Box, Tabs, Tab, CardMedia, Divider, Typography } from "@mui/material";


import { useContext } from "react";
import { NewsContext } from "../Context/NewsContext";

const mockTabs = [
  { label: "Trending News", category: "trending" },
  { label: "Tech", category: "tech" },
  { label: "Stock", category: "stock" },
  { label: "Cryptocurrency", category: "crypto" },
  { label: "Energy", category: "energy" },
  { label: "Politics", category: "politics" },
];

export default function News(){
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const {News, loading} = useContext(NewsContext)

  if (loading) return <Typography>Loadinnhh</Typography>

  // Get active tab category
  const activeCategory = mockTabs[value].category;

  // Filter news based on tab
  const filteredNews = News.filter(item => item.category === activeCategory);

  

  return(
    <Box sx={{width:"100%"}}>
      <Tabs                 
        value={value}
        onChange={handleChange}
        textColor="red"
        indicatorColor="primary"
        variant="scrollable"
        scrollButtons={false}
        sx={{
        "& .MuiTabs-indicator": {
        backgroundColor: "#218BC5",
        height: "3px",
        },
        }}      
      >
        {mockTabs.map((tab, index)=> (
          <Tab 
            key={index}
            label={tab.label}
            sx={{
            color: value === index ? "#218BC5" : "#232526",
            borderBottom: 1, borderColor: 'divider',
            fontSize:"13px",
            }}
          />
        ))}
      </Tabs>
      <Box sx={{marginTop:"30px"}}>
        {filteredNews.length > 0 ? (
          filteredNews.map((news, index)=> (
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

          {/* Divider between items*/}
          {index < filteredNews.length && <Divider/>}
        </React.Fragment>
          ))
        ) : (
          <Typography>No news found in this category.</Typography>
        )}
      </Box>
    </Box>
  );
}


