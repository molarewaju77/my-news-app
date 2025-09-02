import { Box, Typography, Divider, Chip } from '@mui/material'
import React from 'react'

// mock data (will replace with API later)
const dailyBriefsData = [
  {
    id: 1,
    company: "Robinhood Markets Inc.",
    symbol: "$HOOD",
    buyZone: "$70.00 – $71.97 per share",
    description:
      "Robinhood continues to gain momentum on the back of its expanding product offerings and growing retail investor base. This pullback presents a chance to accumulate at a fair valuation.",
  },
  {
    id: 2,
    company: "Uber Technologies Inc.",
    symbol: "$UBER",
    buyZone: "$83.99 – $84.09 per share",
    description:
      "Despite potential short-term competition from Tesla’s robotaxi developments, Uber remains the undisputed leader in ride-hailing and is already invested in autonomous tech through Waymo and Wayve. The fundamentals remain strong.",
  },
  
]

export default function DailyBriefs()  {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={'30px'}>
      {dailyBriefsData.map((brief, index) => (
  <React.Fragment key={brief.id}>
    <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
      <Typography sx={{color:'#232A31', fontSize:"14px",fontWeight:"700"}}>
        {brief.company} ({brief.symbol})
      </Typography>

      <Chip
        label={`Buy Zone: ${brief.buyZone}`}
        sx={{
          backgroundColor: "#31B275",
          fontSize:"14px",
          fontWeight:"500",
          color:"white",
          width:"278px",
          borderRadius: "20px",
        }}
      />

      <Typography variant="body2" color="text.secondary">
        {brief.description}
      </Typography>
    </Box>

    {/* Divider between items */}
    {index < dailyBriefsData.length && <Divider />}
  </React.Fragment>
))}
    </Box>
  )
}

