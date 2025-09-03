import React from 'react'
import { Box, Typography } from '@mui/material'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';    

//i added this so the user go fit know say the link don copy you fit remove am my oga 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import copyImg from "../../assets/copy.png"
import xLogo from "../../assets/Xlogo.png"

//mock referal link 
const referralLink = "https://www.stockertim.com/pricing/?share_your_love=ridor24";

//mock url will replace the url when it is ready 
const emailShare = "mailto:?subject=Check this out&body=Here is my referral link: https://example.com/ref/mock123";
const facebookShare ="https://www.facebook.com/sharer/sharer.php?u=https://example.com/ref/mock123";
const xShare = "https://x.com/intent/tweet?text=Join me on ExampleSite! https://example.com/ref/mock123";


const ReferalsTab = () => {
    
    function handleCopy(){
        navigator.clipboard.writeText(referralLink);
        toast.success("Link copied!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        });
    }

  return (
    <Box p={{xs:"20px",md:'36px'}} sx={{width: {xs:"95%",md:"75%"}, boxShadow:"2", mx:{xs:"auto",md:"0"}}}>
        <ToastContainer />
        <Box>
            <Typography mb={'10px'} fontSize={'14px'} fontWeight={'500'}>Get <span style={{color:"rgba(33, 139, 197, 1)"}}>one-month free membership</span> for every friend you refer</Typography>
            <Typography lineHeight={'20px'} fontSize={'11px'} fontWeight={'400'} width={'75%'}>You and your friend, who has never had a trading a stockertim account previously, each receive one-month free membership towards the purchase of any subscription</Typography>
        </Box>
        <Typography mt={"29px"} fontSize={'11px'} fontWeight={'400'} color='black'>Share the link</Typography>

        <Box mt={'10px'} display={'flex'} flexDirection={'column'} gap={'15px'}>
            <Box p={{xs:"0 20px" ,md:'0 28px'}} sx={{height:"44px",width:"100%",borderRadius:"5px", boxShadow:"1", display:"flex", alignItems:"center",justifyContent:"space-between"}}>
                <Typography color='rgba(110, 110, 112, 1)' fontSize={'11px'} fontWeight={'400'}>{referralLink}</Typography>
                <Box component="img" src={copyImg} sx={{cursor:"pointer"}} onClick={handleCopy} alt="Copy Link"/>
            </Box>
            <Box p={'0 28px'} component="a" href={emailShare} sx={{height:"44px",width:"100%",borderRadius:"5px", boxShadow:"1", display:"flex", alignItems:"center",justifyContent:"center",gap:"10px"}}>
                <EmailOutlinedIcon/>
                <Typography color='rgba(27, 28, 30, 1)' fontSize={'11px'} fontWeight={'400'}>Email</Typography>
            </Box>
            <Box p={'0 28px'}  component="a" href={facebookShare} sx={{height:"44px",width:"100%",borderRadius:"5px", boxShadow:"1", display:"flex", alignItems:"center",justifyContent:"center",gap:"10px"}}>
                <FacebookOutlinedIcon/>
                <Typography color='rgba(27, 28, 30, 1)' fontSize={'11px'} fontWeight={'400'}>Facebook</Typography>
            </Box>
            <Box p={'0 28px'} component="a" href={xShare} sx={{height:"44px",width:"100%",borderRadius:"5px", boxShadow:"1", display:"flex", alignItems:"center",justifyContent:"center",gap:"10px"}}>
                <Box component="img" src={xLogo}/>
                <Typography color='rgba(27, 28, 30, 1)' fontSize={'11px'} fontWeight={'400'}>X</Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default ReferalsTab
