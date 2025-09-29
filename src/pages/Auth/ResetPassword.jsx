import React, { useState } from 'react';
import { 
  Box, 
  IconButton, 
  LinearProgress, 
  Typography 
} from '@mui/material';
import Image from "/public/signUpflow.svg";
import LogoImage from "../../assets/_2359108631152.svg";

// stepper components
import EmailForm from '../../components/Auth/EmailForm';
import VerificationForm from '../../components/Auth/VerificationForm';
import SetPasswordForm from '../../components/Auth/SetPasswordForm';

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

// toast
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const steps = ["Phone", "Verification", "Password"];

const ResetPassword = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  
  const handleNext = (data = {}) => {
    if (data.email) {
      setEmail(data.email);
    }
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleFinish = () => {
    // Show success toast
    toast.success("Password successfully reset", {
      position: "top-center",
      autoClose: 2000, // 2s before auto hide
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    });

    // Redirect after 3s
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  };

  return (
    <Box sx={{height:{xs:"none", md:"100vh"},display:"flex",justifyContent:"center", alignItems:"center"}}>
      {/* LEFT IMAGE PANEL */}
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

      {/* RIGHT FORM PANEL */}
      <Box sx={{width:{xs:"100%", md:"527px"}, height:{xs:"max-content", md:"600px"}, p:{xs:"60px 30px" ,md:"33px 91px"}, position:"relative", boxShadow: "0px 2px 6px rgba(0,0,0,0.05), 0px 8px 16px rgba(0,0,0,0.1)",}}>
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
        
        {/* Progress Line */}
        <LinearProgress
          variant="determinate"
          value={((activeStep + 1) / steps.length) * 100}
          sx={{
            height: "4px",
            borderRadius: "5px",
            backgroundColor: "#ECEDEF",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#1B1C1E", 
              borderRadius:"5px",
            },
            mb: "53px",
          }}
       />

        {/* Step content */}
        {activeStep === 0 && (
          <EmailForm onNext={handleNext}/>
        )}
        {activeStep === 1 && (
          <VerificationForm onNext={handleNext}  email={email}/>
        )}
        {activeStep === 2 && (
          <SetPasswordForm onFinish={handleFinish}/>
        )}

        {/* Toast container */}
        <ToastContainer />
      </Box>
    </Box>
  )
}

export default ResetPassword;
