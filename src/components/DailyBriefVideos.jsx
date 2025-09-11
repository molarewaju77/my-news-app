import React from "react";
import { Box, Typography, CardMedia } from "@mui/material";

const videos = [
  {
    id: 1,
    title: "Oracle climbs 40% after earnings report & what it means for the market",
    thumbnail: "https://img.youtube.com/vi/qUYW8F3zfrE/hqdefault.jpg",
    duration: "06:15",
    url: "https://www.youtube.com/watch?v=qUYW8F3zfrE",
    time: "Just now"
  },
  {
    id: 2,
    title: "Markets in 3 Minutes: US Stocks Will Continue to Underperform",
    thumbnail: "https://img.youtube.com/vi/xn_JYMrRQeo/hqdefault.jpg",
    duration: "03:00",
    url: "https://www.youtube.com/watch?v=xn_JYMrRQeo",
    time: "2 hours ago"
  },
  {
    id: 3,
    title: "Earnings season commentary: What investors need to know",
    thumbnail: "https://img.youtube.com/vi/tgbNymZ7vqY/hqdefault.jpg",
    duration: "05:42",
    url: "https://www.youtube.com/watch?v=tgbNymZ7vqY",
    time: "13h ago"
  }
];

const VideoCard = ({ video }) => {
  return (
    <Box
      component="a"
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        textDecoration: "none",
        color: "inherit",
        minWidth: "252px",
      }}
    >
      {/* Thumbnail with duration overlay */}
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          image={video.thumbnail}
          alt={video.title}
          sx={{
            width: "100%",
            height: "144px",
            borderRadius: "10px",
            objectFit: "cover",
          }}
        />
        <Typography
          variant="body2"
          sx={{
            position: "absolute",
            bottom: 8,
            left: 8,
            backgroundColor: "rgba(0,0,0,0.8)",
            color: "white",
            fontSize: "12px",
            borderRadius: "4px"
          }}
        >
          {video.duration}
        </Typography>
      </Box>

      {/* Title */}
      <Typography
        sx={{
          mt: "14px",
          mb:"4px",
          fontWeight: 700,
          fontSize: "15px"
        }}
      >
        {video.title}
      </Typography>

      {/* Time */}
      <Typography sx={{ fontSize: "11px", fontWeight: 400 }}>
        {video.time}
      </Typography>
    </Box>
  );
};

const DailyBriefVideos = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap:"30px",
        overflowX:"scroll"
      }}
    >
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </Box>
  );
};

export default DailyBriefVideos;
