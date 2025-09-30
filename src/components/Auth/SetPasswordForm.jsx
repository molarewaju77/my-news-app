import React, { useState } from 'react'
import { 
  Box, 
  Button, 
  IconButton, 
  InputAdornment, 
  Typography 
} from '@mui/material';
import styled from '@emotion/styled';
import { Visibility, VisibilityOff } from '@mui/icons-material';

// styled component for Textfield
import { TextField } from '@mui/material';
const InputField = styled(TextField)({
  borderRadius: "8.99px", 
  "& fieldset": { border: 0 ,  height:"44px"},            
  "&:hover fieldset": { border:0 },      
  "&.Mui-focused fieldset": { border: 0 }, 
  border: "0.9px solid #6E6E70",
  width:"100%",
});

const SetPasswordForm = ({ onFinish }) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // ✅ call parent finish handler
    onFinish();
  }

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom mb={"10px"}>
        Set new password
      </Typography>

      {/* Password */}
      <Box mb={"17.83px"}>
        <Typography sx={{color:"#6E6E70", fontSize:"12.58px", fontWeight:"550", mb:"10px"}}>
          Password
        </Typography>
        <InputField  
          size='small' 
          required 
          name='password'
          placeholder='password'
          value={password}
          type={showPassword ? "text" : "password"} 
          onChange={(e) => setPassword(e.target.value)}
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

      {/* Confirm Password */}
      <Box>
        <Typography sx={{color:"#6E6E70", fontSize:"12.58px", fontWeight:"550", mb:"10px"}}>
          Confirm password
        </Typography>
        <InputField  
          size='small' 
          required 
          name='confirmPassword'   // ✅ fixed name
          placeholder='confirm password'
          value={confirmPassword}
          type={showConfirmPassword ? "text" : "password"} 
          onChange={(e) => setConfirmPassword(e.target.value)}
          InputProps={{
            endAdornment: confirmPassword && (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </Box>

      {/* Submit button */}
      <Button 
        type='submit' 
        sx={{
          textTransform:"none", 
          color:"#FFFFFF", 
          backgroundColor:"#1B1C1E", 
          fontSize:"14px",
          width:"100%",
          height:"44.04px", 
          borderRadius:"8.99px",
          mt:"162px"
        }}
      >
        Finish
      </Button>
    </Box>
  )
}

export default SetPasswordForm
