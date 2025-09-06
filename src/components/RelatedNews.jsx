import { Box } from '@mui/material'
import React from 'react'
import { Typography, Divider, CardMedia } from "@mui/material";

import { useContext } from 'react';
import { NewsContext } from '../Context/NewsContext';


export default function RelatedNews() {
  const {News} = useContext(NewsContext)

  return (
    <Box sx={{gap:"15px", display:"flex", flexDirection:"column"}} >
      {News.map((news, index) => (
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
          {index < News.length && <Divider />}
        </React.Fragment>
      ))}
    </Box>
  );
}