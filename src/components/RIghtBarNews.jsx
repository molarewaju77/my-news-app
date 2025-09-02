import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import NewsImage from "../assets/rightNews.png"

const newsData = [
  {
    id: 1,
    image: NewsImage, // replace with real image url
    title: "Alphabet shares rise as AI fuels revenue surge and massive spending plans",
  },
  {
    id: 2,
    image: NewsImage,
    title: "Bitcoin price today: dips below $118k amid regulatory caution; altcoins plunge",
  },
  {
    id: 3,
    image: NewsImage,
    title: "Trump said he considered breaking up Nvidia; signs 3 orders to support AI",
  },
];

export default function RightBarNews() {
return (
  <Box sx={{ bgcolor: "background.paper", p: 1 ,display:"flex",flexDirection:"column",gap:"18px",marginTop:"30px"}}>
    {newsData.map((item, index) => (
      <React.Fragment key={item.id}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: 60,        // container fixed height
            gap: 1, // may change it to 10px later
          }}
        >
          <Box
            component="img"
            src={item.image}
            alt={item.title}
            sx={{
              width: 97,       // fixed width
              height: "100%",  // full height of parent (60px)
              objectFit: "cover",
            }}
          />
          <Typography
            variant="body2"
            sx={{
              fontWeight: 500,
              lineHeight: 1.2, // keeps text compact
              fontSize:'13px'
            }}
          >
            {item.title}
          </Typography>
        </Box>
      </React.Fragment>
    ))}
    <Divider/>
  </Box>
);

}
