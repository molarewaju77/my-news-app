import React, { useState } from 'react'
import { 
  Box, 
  Button, 
  Divider, 
  TextField, 
  Typography 
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { Email } from '@mui/icons-material';

//styled component for Textfield
const InputField = styled(TextField)({
  borderRadius: "8.99px", 
  "& fieldset": { border: 0 ,  height:"44px",},            
  "&:hover fieldset": { border:0 },      
  "&.Mui-focused fieldset": { border: 0 }, 
  border: " 0.9px solid #6E6E70 ",
  width:"100%",
});

const EmailForm = ({onNext}) => {
    const [email, setemail] = useState("");
    const navigate = useNavigate();

    function handlesubmit(e){
        e.preventDefault();
        const email = e.target.email.value; // grab email

        onNext({email}); 
    }

  return (
    <Box component="form" onSubmit={handlesubmit}>
        <Typography variant="h6" gutterBottom>
        Enter your Email
        </Typography>

        <Box>
        <Typography sx={{color:"#6E6E70", fontSize:"12.58px", fontWeight:"550", mb:"10px"}}>
            We’ll send a confirmation code to your email.
        </Typography>
        <InputField size='small' name='email' value={email} required type='email'
            onChange={(e) => setemail(e.target.value)}
        />
        </Box>

        <Button type='submit' sx={{textTransform:"none", color:"#FFFFFF", backgroundColor:"#1B1C1E", fontSize:"14px",width:"100%",height:"44.04px", borderRadius:"8.99px",mt:"236px"}}>
        Continue
        </Button>
        <Divider sx={{mt:"23px"}}/>

        <Box mt={"10px"}>
        <Typography sx={{fontSize:"14px",fontWeight:"550", color:"#1B1C1E", mb:"10.43px"}}> 
            Already have an account ? <Link to="/register" style={{textDecoration:"none", color:"#218BC5",}}>
            Sign in
            </Link>
        </Typography>
        </Box>
    </Box>
  )
}

export default EmailForm