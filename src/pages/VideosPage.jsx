import React from 'react';
import { Box, Typography, CardMedia, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import MarketOverview from '../components/MarketOverview';
import Composites from '../components/Composite';

import { useContext } from 'react';
import { VideoContext } from '../Context/VideoContext';

const VideoCard = ({ video }) => {
  return (
    <Box
      component={Link}
      to={`/videos/${video.id}`}   // <-- go to single video page
      sx={{
        textDecoration: "none",
        color: "inherit",
        width: {xs:"100%" , md:"31%"},
      }}
    >
      {/* Thumbnail with duration overlay */}
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          image={video.thumbnail}
          loading="lazy"
          alt={video.title}
          sx={{
            width: "100%",
            height:{xs:"200px", md:"144px"},
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
          }}
        >
          {video.duration}
        </Typography>
      </Box>

      {/* Title */}
      <Typography
        sx={{
          mt: "14px",
          mb: "4px",
          fontWeight: 700,
          fontSize: "15px",
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

const VideosPage = () => {
  const {videos} = useContext(VideoContext);
  
  //filer if its feautured or not...
  const featuredVideo = videos.find((v) => v.featured);
  const latestVideos = videos.filter((v) => !v.featured);

  return (
    <Box sx={{boxShadow:'1',display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",maxWidth:"100%"}}>
      <MarketOverview/>
      <Composites/>
      {featuredVideo && (
        <Box mt={"75px"} width={"95%"}>
          <Typography sx={{fontSize:"24px", fontWeight:"700", mb:"25px"}} >Featured</Typography>
          <Box component={Link} to={`/videos/${featuredVideo.id}`} sx={{display:"flex", flexWrap:"wrap", flexDirection:{xs:"column-reverse", md:"initial"}}}>
            <Box
              component="img"
              src={featuredVideo.thumbnail}
              alt={featuredVideo.title}
              sx={{ height: "272px", width:{xs:"100%", md:"55%",}, objectFit: "cover", }}
            />
            <Stack sx={{height:"272px", backgroundColor:"#ECEDEF", width:{xs:"100%",md:"45%"}, flexDirection:"column", justifyContent:"center",px:"30px"}}>
              <Typography sx={{fontSize:"16.41px", fontWeight:"700",mb:"10px"}}>
                {featuredVideo.title}
              </Typography>
              <Typography sx={{fontSize:"10.9px", fontWeight:"400",mb:"10px"}}>
                {featuredVideo.summary}
              </Typography>
              <Typography sx={{fontSize:"8px", fontWeight:"400"}}>Stockertim Video • <span> {featuredVideo.time}</span></Typography>
            </Stack>
          </Box>
        </Box>
      )}

      <Box mt={"75px"} width={"95%"}>
        <Typography sx={{fontSize:"24px", fontWeight:"700", mb:"15px"}} >Latest videos</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent:"space-between",
            rowGap:"20px",
            flexWrap:"wrap",
          }}
        >
          {latestVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </Box>
        <Box mt="50px" sx={{height:"100px",width:"100%",backgroundColor:"gray",display:"flex",alignItems:"center",justifyContent:"center"}}>
          Ads Space
        </Box>
      </Box>
    </Box>
  )
}

export default VideosPage