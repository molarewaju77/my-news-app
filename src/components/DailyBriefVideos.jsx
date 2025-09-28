import React from "react";
import { useContext } from "react";
import { VideoContext } from "../Context/VideoContext";
import { Box, Typography, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";


const VideoCard = ({ video }) => {
  return (
    <Box
      component={Link}
      to={`/videos/${video.id}`}   // <-- go to single video page
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
  const {videos, loading} = useContext(VideoContext);

  return (
    <Box
      sx={{
        display: "flex",
        gap:"30px",
        overflowX:"scroll",
        scrollbarWidth:"none"
      }}
    >
      {videos.slice(0, 3).map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </Box>
  );
};

export default DailyBriefVideos;
