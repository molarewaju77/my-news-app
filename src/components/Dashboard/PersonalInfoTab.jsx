import React, { use, useRef, useState } from 'react'
import { Avatar, Box, Button, Grid, TextField, Typography } from '@mui/material'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import styled from '@emotion/styled';

//style for input field text
const TextFieldText = styled(Typography)({
  fontSize:"14px",
  fontWeight:"400",
  color:"#1B1C1E",
  marginBottom:"9px"
})

//styled component for Textfield
const InputField = styled(TextField)({
    borderRadius: "5px", // keep / customize radius
    "& fieldset": { border: 0 },            // default (no border line)
    "&:hover fieldset": { border:0 },      // hover
    "&.Mui-focused fieldset": { border: 0 }, // focus 
    backgroundColor:"#F6F6F6" ,
    width:"100%"
})


/* mock data for the input value so i would have passed it from the create 
account state but you may have change the flow so you will replace it yourself boss*/


const PersonalInfoTab = () => {
  // Mock user data
  const [user, setUser] = useState({
    firstName: "Ridwan",
    lastName: "Olukoya",
    email: "ridorolukoya@gmail.com",
    image: null,
  });

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUser({
        ...user,
        image: URL.createObjectURL(file),
      });
    }
  };
  
  const fileInputRef = useRef(null);
  //connect the button onclick to the fle onclick
  const handleClick = () => {
    fileInputRef.current.click(); 
  };

  return (
    <Box sx={{width:{xs:"97%", md:"75%"}, display:"flex", flexDirection:"column",gap:"27px",mx:{md:"0",xs:"auto"}}}>
      <Box borderRadius={'5px'} sx={{height:"97px",display:"flex",justifyContent:"space-between",alignItems:"center",px:{xs:"15px", md:"36px"},border:"1px solid #ECEDEF"}}>
        <Box sx={{display:"flex",gap:"19px",alignItems:"center"}}>
          <Avatar
            src={user.image || undefined}
            sx={{
              width: 59.21,
              height: 55.38,
              fontSize: 24,
              bgcolor: "primary.main",
            }}
          >
            {!user.image && user.firstName.charAt(0).toUpperCase()}
         </Avatar>
          <Box>
            <Typography sx={{fontSize:"14px",fontWeight:"500", color:"#000000"}}>{user.firstName} {user.lastName}</Typography>
            <Typography sx={{fontSize:"11px",fontWeight:"400", color:"#000000"}}>{user.email}</Typography>
          </Box>
        </Box>
        <Button onClick={handleClick} sx={{fontSize:"10px",fontWeight:"400",backgroundColor:"#ECEDEF",color:"black",textTransform:"none",p:"8px 14px",borderRadius:"5px"}} startIcon={<FileUploadOutlinedIcon fontSize='small'/>}>
          Upload image
            <input
              type="file"
              accept="image/*"
              hidden
              ref={fileInputRef}
              onChange={handleImageUpload}
            />
        </Button>
      </Box> 

      <Box component="form" borderRadius={'5px'} border={"1px solid #ECEDEF"} p={{xs:"40px 20px",md:"40px"}}>
        <Typography fontSize={"16px"} fontWeight={"500"}>Your details</Typography>
        <Grid container spacing={3} mt={'28px'}>
          <Grid size={{xs:12 , md:6}}>
            <TextFieldText>First Name</TextFieldText>
            <InputField size="small" value={user.firstName}/>
          </Grid>
          <Grid size={{xs:12 , md:6}}>
            <TextFieldText>Last Name</TextFieldText>
            <InputField size="small" value={user.lastName}/>
          </Grid>
          <Grid size={{xs:12 , md:6}}>
            <TextFieldText>Email</TextFieldText>
            <InputField size="small" value={user.email}/>
          </Grid>
          <Grid size={{xs:12 , md:6}}>
            <Button type='submit' sx={{textTransform:"none",backgroundColor:"rgba(26, 27, 106, 1)",color:"white", p:"8px 45px",borderRadius:"20px"}}>Update profile</Button>
          </Grid>
        </Grid>
      </Box>

      <Box component="form" borderRadius={'5px'} border={"1px solid #ECEDEF"} p={{xs:"40px 20px",md:"40px"}}>
        <Typography fontSize={"16px"} fontWeight={"500"}>Change password</Typography>
        <Grid container spacing={3} mt={'28px'}>
          <Grid size={{xs:12 , md:6}}>
            <TextFieldText>Current password</TextFieldText>
            <InputField required size="small" placeholder='Current password' />
          </Grid>
          <Grid size={{xs:12 , md:6}}>
            <TextFieldText>Confirm password</TextFieldText>
            <InputField required size="small" placeholder='Confirm password'/>
          </Grid>
          <Grid size={{xs:12 , md:6}}>
            <TextFieldText>New password</TextFieldText>
            <InputField required size="small" placeholder='New password'/>
          </Grid>
          <Grid size={{xs:12 , md:6}}>
            <Button type='submit' sx={{textTransform:"none",backgroundColor:"rgba(26, 27, 106, 1)",color:"white", p:"8px 45px",borderRadius:"20px"}}>Change password</Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default PersonalInfoTab
