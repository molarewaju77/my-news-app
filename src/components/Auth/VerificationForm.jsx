import React, { useRef, useState, useEffect } from 'react'
import { 
  Box, 
  Button, 
  Grid, 
  TextField, 
  Typography 
} from '@mui/material';
import styled from '@emotion/styled';

// Styled TextField
const InputField = styled(TextField)({
  borderRadius: "8.99px", 
  "& fieldset": { border: 0 },            
  "&:hover fieldset": { border: 0 },      
  "&.Mui-focused fieldset": { border: 0 }, 
  border: "0.9px solid #6E6E70",
  width:"100%",
});

const VerificationForm = ({ onNext, email }) => {
  const [code, setCode] = useState(Array(6).fill(""));
  const [timer, setTimer] = useState(10); // 10-second countdown
  const [canResend, setCanResend] = useState(false);

  const inputsRef = useRef([]);

  // Countdown effect
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleResend = () => {
    setTimer(10);
    setCanResend(false);
    // You can also trigger your resend code API here
    console.log("Resend code triggered");
  };

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/, ""); // only digits
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalCode = code.join("");
    console.log("OTP entered:", finalCode);
    onNext();
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>
        6-Digit code
      </Typography>

      <Box>
        <Typography sx={{ color:"#6E6E70", fontSize:"12.58px", fontWeight:"500", mb:"10px" }}>
          Enter the code sent to {email}
        </Typography>

        <Grid container spacing={"10.54px"} mt={"20px"}>
          {Array.from({ length: 6 }).map((_, index) => (
            <Grid item size={2} key={index}>
              <InputField 
                required
                size='small'
                type="tel"
                value={code[index]}
                inputRef={(el) => (inputsRef.current[index] = el)}
                inputProps={{
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  maxLength: 1,
                  style: { textAlign: "center" }
                }}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            </Grid>
          ))}
        </Grid>

        <Typography sx={{ fontSize:"12.58px", fontWeight:'500', color:"#6E6E70", mt:"18px", cursor: canResend ? "pointer" : "default" }}
          onClick={canResend ? handleResend : undefined}
        >
          {canResend ? "Resend" : `Resend code in 0:${timer < 10 ? `0${timer}` : timer}`}
        </Typography>
      </Box>

      <Button type='submit' sx={{ textTransform:"none", color:"#FFFFFF", backgroundColor:"#1B1C1E", fontSize:"14px", width:"100%", height:"44.04px", borderRadius:"8.99px", mt:"236px" }}>
        Continue
      </Button>
    </Box>
  )
}

export default VerificationForm;
