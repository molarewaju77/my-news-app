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
  const [email, setemail] = useState("");
  const [password, SetPassword] = useState("")
  const [fullName, setFullName] = useState("")
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  function handlesubmit(e){
    e.preventDefault();
    const form = e.target;

    const data = {
      fullName: form.fullName.value,
      email: form.email.value,
      password: form.password.value,
    }

    navigate("/")
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
            <InputField size='small' name='fullName' value={fullName} required type='text'
              onChange={(e) => setFullName(e.target.value)}
            />
          </Box>
          <Box>
            <Typography sx={{color:"#6E6E70", fontSize:"12.58px", fontWeight:"550", mb:"10px"}}>Email</Typography>
            <InputField  size='small' name='email' value={email} required type='email'
              onChange={(e) => setemail(e.target.value)}
            />
          </Box>
          <Box>
            <Typography sx={{color:"#6E6E70", fontSize:"12.58px", fontWeight:"550", mb:"10px"}}>Password</Typography>
            <InputField  size='small' required name='password' value={password}
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





















// src/Registration.jsx
// import React, { useState } from "react";
// import { FaGoogle, FaFacebookF, FaEye, FaEyeSlash, FaBell, FaBriefcase, FaMobileAlt, FaTimes } from "react-icons/fa";
// import { ToastContainer, toast } from "react-toastify";
// import { useNavigate, Link } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";
// import Image from "/public/signUpflow.svg";
// import LogoImage from "../../assets/_2359108631152.svg"

// const Registration = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
//     else if (formData.fullName.length < 3) newErrors.fullName = "Name must be at least 3 characters";
//     if (!formData.email) newErrors.email = "Email is required";
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter a valid email";
//     if (!formData.password) newErrors.password = "Password is required";
//     else if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       toast.success("Account created successfully!", {
//         position: "top-center",
//         autoClose: 3000,
//       });

//       // Save user data to localStorage
//       const userData = {
//         firstName: formData.fullName.split(' ')[0],
//         lastName: formData.fullName.split(' ').slice(1).join(' ') || '',
//         email: formData.email
//       };
//       localStorage.setItem("user", JSON.stringify(userData));

//       // Redirect to dashboard with user data
//       navigate("/dashboard", { state: userData });

//       // Reset form
//       setFormData({ fullName: "", email: "", password: "" });
//     } else {
//       toast.error("Please fix the errors in the form");
//     }
//   };

//   const handleGoogleSignIn = async () => {
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const user = result.user;
      
//       // Save Google user data to localStorage
//       const userData = {
//         firstName: user.displayName?.split(' ')[0] || 'User',
//         lastName: user.displayName?.split(' ').slice(1).join(' ') || '',
//         email: user.email
//       };
//       localStorage.setItem("user", JSON.stringify(userData));

//       toast.success("Signed in with Google!");
//       navigate("/dashboard", { state: userData });
//     } catch (error) {
//       console.error(error);
//       toast.error("Google Sign-In failed.");
//     }
//   };

//   const handleFacebookSignIn = async () => {
//     try {
//       const result = await signInWithPopup(auth, facebookProvider);
//       const user = result.user;
      
//       // Save Facebook user data to localStorage
//       const userData = {
//         firstName: user.displayName?.split(' ')[0] || 'User',
//         lastName: user.displayName?.split(' ').slice(1).join(' ') || '',
//         email: user.email
//       };
//       localStorage.setItem("user", JSON.stringify(userData));

//       toast.success("Signed in with Facebook!");
//       navigate("/dashboard", { state: userData });
//     } catch (error) {
//       console.error(error);
//       toast.error("Facebook Sign-In failed.");
//     }
//   };

//   return (
//     <div className=" mt-20 flex flex-col md:flex-row bg-white w-[905px] mx-auto">
//       <ToastContainer />
//       {/* Left panel */}
//       <div className="hidden md:flex md:w-1/2 rounded-xl relative bg-cover bg-center" style={{ backgroundImage:`url(${Image})` }}>
//         <div className="relative z-10 w-full p-10 flex flex-col justify-between h-full">
//           <img src={LogoImage} alt="Logo" className="w-50 h-50" />
//           <div className="space-y-4">
//             <p className="text-2xl text-white font-medium">Explore premium Stock Picks and trade alerts</p>
//             <ul className="space-y-3 text-white text-sm">
//               <li className="flex items-center gap-2"><FaBell className="text-blue-400" /> Real-Time Alerts</li>
//               <li className="flex items-center gap-2"><FaBriefcase className="text-blue-400" /> Portfolio Specialization</li>
//               <li className="flex items-center gap-2"><FaMobileAlt className="text-blue-400" /> Mobile First</li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Right form panel */}
//       <div className="w-full md:w-1/2 p-6 max-w-md mx-auto flex flex-col justify-center relative">
//         <Link to="/" className="absolute top-6 right-6 text-gray-500 hover:text-red-500 text-xl">
//           <FaTimes />
//         </Link>

//         <div className="space-y-6">
//           <div className="text-center">
//             <h1 className="text-2xl text-black font-bold">Create Free Account</h1>
//             <p className="text-gray-600">Join our community today</p>
//           </div>

//           <div className="space-y-3">
//             <button onClick={handleGoogleSignIn} className="w-full py-3 flex items-center justify-center gap-3 border border-gray-300 rounded-md hover:bg-gray-50">
//               <FaGoogle className="text-[#DB4437]" />
//               Continue with Google
//             </button>
//             <button onClick={handleFacebookSignIn} className="w-full py-3 flex items-center justify-center gap-3 border border-gray-300 rounded-md hover:bg-gray-50">
//               <FaFacebookF className="text-[#1877F2]" />
//               Continue with Facebook
//             </button>
//           </div>

//           <div className="flex items-center">
//             <hr className="flex-grow border-gray-300" />
//             <span className="mx-4 text-sm text-gray-500">or</span>
//             <hr className="flex-grow border-gray-300" />
//           </div>

//           <form className="space-y-4" onSubmit={handleSubmit} noValidate>
//             {/* Full Name */}
//             <div>
//               <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
//               <input
//                 type="text"
//                 name="fullName"
//                 id="fullName"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 placeholder="Your full name"
//                 className={`w-full px-3 py-2 border ${errors.fullName ? "border-red-500" : "border-gray-300"} rounded-md`}
//               />
//               {errors.fullName && <p className="text-sm text-red-600 mt-1">{errors.fullName}</p>}
//             </div>

//             {/* Email */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="you@example.com"
//                 className={`w-full px-3 py-2 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-md`}
//               />
//               {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
//             </div>

//             {/* Password */}
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   id="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   placeholder="Create a password"
//                   className={`w-full px-3 py-2 border ${errors.password ? "border-red-500" : "border-gray-300"} rounded-md pr-10`}
//                 />
//                 <button type="button" onClick={togglePasswordVisibility} className="absolute right-3 top-2.5 text-gray-500">
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </button>
//               </div>
//               {errors.password && <p className="text-sm text-red-600 mt-1">{errors.password}</p>}
//             </div>

//             <button type="submit" className="w-full py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800">
//               Create Account
//             </button>

//             <p className="text-sm text-center text-gray-700">
//               Already have an account?{" "}
//               <Link to="/login" className="text-blue-600 hover:underline font-medium">Sign in</Link>
//             </p>
//           </form>

//           <p className="text-xs text-center text-gray-500">
//             By signing up, you agree to our <a href="#" className="text-blue-600 hover:underline">Terms</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Registration;