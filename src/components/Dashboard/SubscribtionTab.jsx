import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const SubscribtionTab = () => {
    const navigate = useNavigate();
  return (
    <Box gap={{xs:"30px", md:"0"}} flexDirection={{xs:"column", md:"row"}} p={{xs:"20px", md:'0 36px'}} sx={{mx:{xs:"auto",md:"0"},width: {xs:"95%",md:"75%"}, boxShadow:"1", height:{xs:"max-content",md:"97px"}, display:"flex", justifyContent:"space-between", alignItems:{xs:"flex-start",md:"center"}}}>
        <Box>
            <Typography fontSize={'14px'} fontWeight={'500'}>You are on free Trial</Typography>
            <Typography fontSize={'11px'} fontWeight={'400'}>Upgrae to enjoy premium content</Typography>
        </Box>
        <Box>
            <Button onClick={()=> navigate("/subscription")} variant='contained' sx={{textTransform:"none",backgroundColor:"rgba(26, 27, 106, 1)", p:" 10px 60px", borderRadius:"20px"}}>Upgrade</Button>
        </Box>
    </Box>
  )
}

export default SubscribtionTab
