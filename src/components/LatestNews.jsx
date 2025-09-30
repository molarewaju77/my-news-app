import React from 'react'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { LatestNewsContext } from '../Context/LatestNewsContext'

const LatestNews = () => {
  const { latestNews } = useContext(LatestNewsContext);

  // if no news available
  if (!latestNews || latestNews.length === 0) return <Typography>No news available.</Typography>;

  return (
    <Box display={'flex'} flexDirection={'column'} gap={'28px'}>
      <Box>
        {latestNews.slice(0, 1).map((news) => (
          <Box
            component={Link}
            to={`/news/${news.id}`}
            key={news.id}
            sx={{
              height: "187px",
              display: "flex",
              justifyContent: { xs: "center", md: "space-between" },
              gap: { xs: "20px", md: "0" },
              overflow: "hidden",
              cursor: "pointer"
            }}
          >
            <Box
              src={news.image}
              component="img"
              sx={{ height: "100%", width: { xs: "46%", md: "46%" }, objectFit: "cover" }}
            />
            <Box sx={{ width: { xs: "43%", md: "50%" }, overflow: "hidden" }}>
              <Typography
                mb={"11px"}
                sx={{ fontSize: { xs: "17px", md: "24px" }, fontWeight: "600", lineHeight: { xs: "22px", md: "30px" } }}
              >
                {news.title}
              </Typography>
              {/* Concatenate summary array into a string */}
              <Typography sx={{ fontSize: "12px", fontWeight: "400", lineHeight: "20px", color: "#1B1C1E" }}>
                {Array.isArray(news.summary) ? news.summary.join(" ") : news.summary}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: { xs: "center", md: "space-between" }, gap: { xs: "20px", md: "0" } }}>
        {latestNews.slice(1).map((news) => (
          <Box
            component={Link}
            to={`/news/${news.id}`}
            key={news.id}
            sx={{ width: { xs: "46%", md: "22.5%" }, height: "187px", overflow: "hidden", cursor: "pointer" }}
          >
            <Box
              src={news.image}
              alt="latest News"
              component="img"
              sx={{ height: "113px", width: "100%", marginBottom: "13px" }}
            />
            <Typography sx={{ fontSize: '14px', fontWeight: "600" }}>
              {news.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default LatestNews
