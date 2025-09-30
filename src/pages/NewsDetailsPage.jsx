import React, { useState, useContext } from 'react'
import { 
  Avatar,
  Box,
  Button, 
  Divider, 
  Stack, 
  TextField, 
  Typography 
} from '@mui/material';
import { IoChatbubbleOutline } from "react-icons/io5";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { PiShareFat } from "react-icons/pi";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { useNavigate, useParams } from 'react-router-dom'

import RelatedNews from '../components/RelatedNews';
import { LatestNewsContext } from '../Context/LatestNewsContext';

// Mock user data
const user = {
  firstName: "Michael",
  lastName: "Olukoya",
  image: null,
}

const NewsDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { latestNews } = useContext(LatestNewsContext);

  const [showComments, setShowComments] = useState(false);
  const [likedComments, setLikedComments] = useState({});

  // Find the news item by id
  const news = latestNews.find((n) => String(n.id) === String(id));

  if (!news) return <Typography sx={{ mt: 4, textAlign: "center" }}>News not found.</Typography>;

  const handleShowComment = () => setShowComments(!showComments);
  const handlePublish = () => console.log("news published 😂");
  const toggleLike = (id) => setLikedComments(prev => ({ ...prev, [id]: !prev[id] }));

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: news.title,
        text: "Check out this news article!",
        url: window.location.href,
      })
      .then(() => console.log("Shared successfully!"))
      .catch((error) => console.error("Error sharing", error));
    } else {
      alert("Sharing is not supported on this device/browser.");
    }
  };

  return (
    <Box sx={{ width: "100%", margin: "auto", boxShadow: "1" }}>
      <Box width={"92%"} margin={"auto"}>
        <Box display={"flex"} alignItems={'center'} gap={'14px'}>
          <Button onClick={() => navigate("/news")} sx={{ backgroundColor: "#F6F6F6", minWidth: "0px" }}>
            <ArrowBackIosNewOutlinedIcon sx={{ fontSize: "20px" }} />
          </Button>
          <Typography color='#000000' fontSize={'12px'}>
            News / <span style={{ color: "#1B1C1E" }}>{news.title}</span>
          </Typography>
        </Box>

        <Box mt={'19px'}>
          <Typography sx={{ fontSize: "32px", fontWeight: "700", lineHeight: "45px" }}>{news.title}</Typography>
        </Box>

        <Box mt={'88px'} sx={{ height: "369px", width: "100%" }} src={news.image} alt={news.title} component="img" />

        <Box mt={"27px"} py={"20px"}>
          {Array.isArray(news.summary) ? (
            <Stack spacing={2}>
              {news.summary.map((paragraph, index) => (
                <Typography key={index} fontSize="16px" lineHeight="28px">{paragraph}</Typography>
              ))}
            </Stack>
          ) : (
            <Typography>{news.summary}</Typography>
          )}
        </Box>

        <Divider />
        <Box display={'flex'} gap={'40px'} height={'65px'} alignItems={'center'}>
          <Button onClick={handleShare} sx={{ fontSize: "12px", color: "#218BC5", textTransform: "none" }} startIcon={<ShareOutlinedIcon />}>Share</Button>
          <Box>
            <Button onClick={handleShowComment} sx={{ fontSize: "12px", color: "#218BC5", textTransform: "none" }} startIcon={<IoChatbubbleOutline />}>
              Comments&nbsp;({news.comments.length})
              {showComments ? <KeyboardArrowDownOutlinedIcon /> : <KeyboardArrowUpOutlinedIcon />}
            </Button>
          </Box>
        </Box>
        <Divider />

        <Box sx={{ mt: "20px" }}>
          {showComments && (
            <Box>
              <Typography sx={{ color: "rgba(110, 110, 112, 1)", fontSize: "24px", mb: "20px" }}>Comments ({news.comments.length})</Typography>
              
              <Box sx={{ display: "flex", flexDirection: "column", gap: "25px" }} component="form">
                <Box sx={{ display: "flex", gap: "20px" }}>
                  <Avatar
                    src={user.image || undefined}
                    sx={{ width: 59.21, height: 55.38, fontSize: 24, bgcolor: "primary.main" }}
                  >
                    {!user.image && user.firstName.charAt(0).toUpperCase()}
                  </Avatar>
                  <TextField
                    multiline
                    label="Add a comment..."
                    rows={2}
                    fullWidth
                    sx={{ "& .MuiInputBase-input": { fontSize: 14 } }}
                  />
                </Box>
                <Button type='submit' onClick={handlePublish} sx={{ alignSelf: "flex-end", backgroundColor: "rgba(110, 110, 112, 1)", color: "white", textTransform: "none", p: "8px 30px" }}>Publish</Button>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", gap: "30px", mt: "30px" }}>
                {news.comments.map((comment, index) => (
                  <Box key={index} sx={{ display: "flex", flexDirection: "column" }}>
                    <Divider sx={{ mb: 2 }} />
                    <Box sx={{ display: "flex", gap: "17px" }}>
                      <Avatar
                        src={comment.image || undefined}
                        sx={{ width: 59.21, height: 55.38, fontSize: 24, bgcolor: "primary.main" }}
                      >
                        {!comment.image && comment.name.charAt(0).toUpperCase()}
                      </Avatar>

                      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                        <Typography sx={{ fontSize: "15px", fontWeight: "600" }}>{comment.name}</Typography>
                        <Typography sx={{ fontSize: "12px", fontWeight: "400", color: "rgba(110, 110, 112, 1)" }}>{comment.time}</Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: "7px", ml: "72.21px" }}>
                      <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>{comment.text}</Typography>
                      <Box sx={{ gap: "20px", display: "flex" }}>
                        <Button onClick={() => toggleLike(comment.id)} startIcon={likedComments[comment.id] ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />} sx={{ textTransform: "none", color: "rgba(110, 110, 112, 1)" }}>Like</Button>
                        <Button onClick={handleShare} startIcon={<PiShareFat />} sx={{ textTransform: "none" }} color='rgba(110, 110, 112, 1)'>share</Button>
                      </Box>
                    </Box>
                    <Divider sx={{ mt: 2 }} />
                  </Box>
                ))}
              </Box>
            </Box>
          )}
        </Box>

        <Box mt={'91px'}>
          <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>Related News</Typography>
          <Box mt={'20px'}>
            <RelatedNews />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default NewsDetailsPage;
