import React, { useContext, useState } from 'react';
import { Box, Button, Divider, Typography, Skeleton } from '@mui/material';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import { VideoContext } from '../Context/VideoContext';
import { useNavigate, useParams, Link } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';

const VideoCard = ({ video }) => {
  return (
    <Box
      component={Link}
      to={`/videos/${video.id}`}
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
            borderRadius: "4px",
            px: "4px"
          }}
        >
          {video.duration}
        </Typography>
      </Box>

      {/* Title */}
      <Typography sx={{ mt: "14px", mb: "4px", fontWeight: 700, fontSize: "15px" }}>
        {video.title}
      </Typography>

      {/* Time */}
      <Typography sx={{ fontSize: "11px", fontWeight: 400 }}>
        {video.time}
      </Typography>
    </Box>
  );
};

const VideoDetailsPage = () => {
  const { id } = useParams();
  const { videos } = useContext(VideoContext);
  const navigate = useNavigate();
  const [videoLoaded, setVideoLoaded] = useState(false);

  const video = videos.find((v) => v.id.toString() === id);

  // Safety check: if no video is found
  if (!video) {
    return (
      <Box sx={{ width: "95%", margin: "auto", textAlign: "center", mt: 10 }}>
        <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
          Video not found
        </Typography>
        <Button 
          onClick={() => navigate("/videos")} 
          sx={{ mt: 4, backgroundColor: "#F6F6F6" }}
        >
          Back to Videos
        </Button>
      </Box>
    );
  }

  const relatedVideos = videos.filter((v) => v.id.toString() !== id).slice(0, 3);

  const getEmbedUrl = (url) => {
    if (!url) return "";
    const videoId = new URL(url).searchParams.get("v");
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: video.title,
          text: "Check out this video!",
          url: video.url,
        });
      } catch (err) {
        console.log("Share canceled", err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(video.url);
        alert("Link copied to clipboard!");
      } catch (err) {
        console.log("Failed to copy", err);
      }
    }
  };

  return (
    <Box>
      <Box sx={{ width: "95%", margin: "auto" }}>
        {/* Back button */}
        <Button 
          onClick={() => navigate("/videos")} 
          sx={{ backgroundColor: "#F6F6F6", minWidth: "0px" }}
        >
          <ArrowBackIosNewOutlinedIcon sx={{ fontSize: "20px" }} />
        </Button>

        {/* Video Title */}
        <Typography sx={{ fontSize: "35px", fontWeight: "700", mt: "16px" }}>
          {video.title}
        </Typography>

        {/* Video Player with Skeleton */}
        <Box sx={{ height: "400px", m: "20px 0 30px 0", position: "relative" }}>
          {!videoLoaded && (
            <Skeleton animation="wave"
              variant="rectangular"
              width="100%"
              height="100%"
              sx={{ position: "absolute", top: 0, left: 0 }}
            />
          )}
          <iframe
            width="100%"
            height="100%"
            src={getEmbedUrl(video.url)}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ display: videoLoaded ? "block" : "none" }}
            onLoad={() => setVideoLoaded(true)}
          ></iframe>
        </Box>

        <Divider />
        {/* Time + Share */}
        <Box sx={{ display: "flex", alignItems: "center", py: "16px" }}>
          <Typography sx={{ fontSize: "13px", fontWeight: "400", flexGrow: "1" }}>
            {video.time}
          </Typography>
          <Button 
            onClick={handleShare} 
            sx={{ fontSize: "13px", color: "#000000", textTransform: "none" }} 
            startIcon={<IosShareOutlinedIcon fontSize='small' />}
          >
            Share
          </Button>
        </Box>
        <Divider />

        {/* Related Videos */}
        <Box mt="30px">
          <Typography sx={{ fontSize: "22px", fontWeight: "700", mb: "20px" }}>
            Related videos
          </Typography>
          <Box sx={{ display: "flex", gap:"30px", overflowX:"scroll", scrollbarWidth:"none"}}>
            {relatedVideos.map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </Box>
        </Box>

        {/* Ads Section */}
        <Box mt="75px" sx={{ height: "100px", width: "100%", backgroundColor: "gray", display: "flex", alignItems: "center", justifyContent: "center" }}>
          Ads Space
        </Box>
      </Box>
    </Box>
  );
};

export default VideoDetailsPage;
