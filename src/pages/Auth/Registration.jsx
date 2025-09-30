import React, { useState } from 'react';
import { 
  Box, 
  Button, 
  Divider, 
  IconButton, 
  InputAdornment, 
  Paper, 
  TextField, 
  Typography 
} from '@mui/material';
import Image from "/public/signUpflow.svg";
import LogoImage from "../../assets/_2359108631152.svg";
import GoggleImg from "../../assets/goggle.svg";
import FaceBookImg from "../../assets/facebook.svg";


import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CloseIcon from '@mui/icons-material/Close';
import styled from '@emotion/styled';
import { Link, useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useAuth } from '../../Context/AuthContext';


//styled component for Textfield
const InputField = styled(TextField)({
  borderRadius: "8.99px", 
  "& fieldset": { border: 0 },            
  "&:hover fieldset": { border:0 },      
  "&.Mui-focused fieldset": { border: 0 }, 
  border: " 0.9px solid #6E6E70 ",
  width:"100%",
})

const Registration = () => {
  const {setUser} = useAuth();

  const [email, setemail] = useState("");
  const [password, SetPassword] = useState("")
  const [fullName, setFullName] = useState("")
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  function handlesubmit(e) {
    e.preventDefault();
    const form = e.target;

    const fullName = form.fullName.value.trim();

    // Split into first + last (basic handling)
    const parts = fullName.split(" ");
    const firstName = parts[0];
    const lastName = parts.length > 1 ? parts.slice(1).join(" ") : null;

    const data = {
      fullName,
      firstName,
      lastName,
      email: form.email.value,
      password: form.password.value,
    };

    // For now (frontend only)
    setUser(data);

    navigate("/");
  }

  return (
    <Box sx={{height:{xs:"none", md:"100vh"},display:"flex",justifyContent:"center", alignItems:"center"}}>
      <Box
        sx={{
          backgroundImage: `url(${Image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",  
          backgroundPosition: "center",
          width: "400px",                
          height: "600px" ,
          p:"75px 51px",
          display:{xs:"none", md:"flex"},
          flexDirection:"column",
        }}
      >
        <Box component="img" src={LogoImage}/>
        <Box sx={{color:"white",mt:"auto"}}>
          <Typography sx={{fontSize:"24px" , color:"#FFFFFF",fontWeight:"500", mb:"22px"}}>Explore our premium stock pick and trade alert</Typography>
          <Typography sx={{fontSize:"11px", fontWeight:"400"}}><NotificationsNoneIcon fontSize='small'sx={{color:"#218BC5", fontSize:"13px"}}/> Real-Time Alerts</Typography>
          <Typography sx={{fontSize:"11px", fontWeight:"400"}}><SsidChartIcon fontSize='small' sx={{color:"#218BC5", fontSize:"13px"}}/> Portfolio specification</Typography>
          <Typography sx={{fontSize:"11px", fontWeight:"400"}}><PhoneIphoneIcon sx={{color:"#218BC5", fontSize:"13px"}}/> Mobile first</Typography>
        </Box>
      </Box>

      <Box sx={{width:{xs:"100%", md:"527px"}, height:{xs:"max-content", md:"600px"}, p:{xs:"60px 30px" ,md:"20px 91px"}, position:"relative", boxShadow: "0px 2px 6px rgba(0,0,0,0.05), 0px 8px 16px rgba(0,0,0,0.1)",}}>
        <IconButton
            onClick={() => navigate("/")}
            sx={{
              position:'absolute',
              right:"30px",
              top:"20px"
            }}
          >
            <CloseIcon/>
        </IconButton>
        <Typography fontSize={"21.57px"} fontWeight={"500"} mb={"15px"}>Create Free Account</Typography>
        <Box component={Button} textTransform={"none"} color={"black"} sx={{display:"flex", gap:"15.28px", height:"44px", width:"100%",border:" 0.9px solid #000000", borderRadius:"8.99px", alignItems:"center", justifyContent:"center"}}>
          <Box component="img" src={GoggleImg} height={"20.07px"} width={"20.07px"}/>
          <Typography sx={{fontSize:"12.58px", fontWeight:"500"}}>Sign in with Google</Typography>
        </Box>
        <Box component={Button} textTransform={"none"} color={"black"} sx={{display:"flex", gap:"15.28px", height:"44px", width:"100%",border:" 0.9px solid #000000", borderRadius:"8.99px", alignItems:"center", justifyContent:"center",mt:"10px"}}>
          <Box component="img" src={FaceBookImg} height={"20.07px"} width={"20.07px"}/>
          <Typography sx={{fontSize:"12.58px", fontWeight:"500"}}>Sign in with Facebook</Typography>
        </Box>
        <Box sx={{display:"flex", alignItems:"center", gap:'20px', mt:"10px", color:"#6E6E70"}}>
          <Divider sx={{flexGrow:"1"}}/>
          <Typography  sx={{fontSize:"12.58px", fontWeight:"500"}}>or</Typography>
          <Divider sx={{flexGrow:"1"}}/>
        </Box>

        <Box component="form" onSubmit={handlesubmit} sx={{display:"flex", flexDirection:"column", gap:"10px", mt:"9.64px",}}>
          <Box>
            <Typography sx={{color:"#6E6E70", fontSize:"12.58px", fontWeight:"550", mb:"10px"}}>Full name</Typography>
            <InputField size='small'placeholder='full name' name='fullName' value={fullName} required type='text'
              onChange={(e) => setFullName(e.target.value)}
            />
          </Box>
          <Box>
            <Typography sx={{color:"#6E6E70", fontSize:"12.58px", fontWeight:"550", mb:"10px"}}>Email</Typography>
            <InputField  size='small' placeholder='email' name='email' value={email} required type='email'
              onChange={(e) => setemail(e.target.value)}
            />
          </Box>
          <Box>
            <Typography sx={{color:"#6E6E70", fontSize:"12.58px", fontWeight:"550", mb:"10px"}}>Password</Typography>
            <InputField  size='small' required name='password' value={password} placeholder='password'
              type={showPassword ? "text" : "password"} 
              onChange={(e) => SetPassword(e.target.value)}
              InputProps={{
                endAdornment: password && (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <VisibilityOff /> : <Visibility/>}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Box>
          <Button type='submit' sx={{textTransform:"none", color:"#FFFFFF", backgroundColor:"#1B1C1E", fontSize:"14px",width:"100%",height:"44.04px", borderRadius:"8.99px"}}>
            Create Account
          </Button>
          <Divider/>
        </Box>

        <Box mt={"10px"}>
          <Typography sx={{fontSize:"14px",fontWeight:"550", color:"#1B1C1E", mb:"10.43px"}}> 
            Already have an account ? <Link to="/login" style={{textDecoration:"none", color:"#218BC5",}}>
            Sign in
            </Link>
          </Typography>
          <Typography sx={{fontSize:"14px", color:"#6E6E70"}}> By signing in you agree to our <Link to="/login" style={{textDecoration:"none", color:"#218BC5",}}>
            Terms & condition
          </Link> and <Link to="/login" style={{textDecoration:"none", color:"#218BC5",}}>Privacy Policy</Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Registration
