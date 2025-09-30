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
  "& fieldset": { border: 0 ,  height:"44px",},            
  "&:hover fieldset": { border:0 },      
  "&.Mui-focused fieldset": { border: 0 }, 
  border: " 0.9px solid #6E6E70 ",
  width:"100%",
})

const Login = () => {
  const {setUser} = useAuth();
  const [email, setemail] = useState("");
  const [password, SetPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  function handlesubmit(e){
    e.preventDefault();
    const form = e.target;

    const data = {
      email: form.email.value,
      password: form.password.value,
    }

    setUser(data)
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
        <Typography fontSize={"21.57px"} fontWeight={"500"} mb={"15px"}>Member sign in</Typography>
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
            <Typography sx={{color:"#6E6E70", fontSize:"12.58px", fontWeight:"550", mb:"10px"}}>Email</Typography>
            <InputField name='email' value={email} required type='email'
              onChange={(e) => setemail(e.target.value)}
            />
          </Box>
          <Box>
            <Typography sx={{color:"#6E6E70", fontSize:"12.58px", fontWeight:"550", mb:"10px"}}>Password</Typography>
            <InputField required name='password' value={password}
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
            Sign in
          </Button>
          <Divider/>
        </Box>

        <Box mt={"10px"}>
          <Typography sx={{fontSize:"14px",fontWeight:"550", color:"#1B1C1E", mb:"10.43px"}}> 
            Dont have an account? <Link to="/register" style={{textDecoration:"none", color:"#218BC5",}}>
            Create free account
            </Link>
          </Typography>
          <Typography sx={{fontSize:"14px", color:"#6E6E70"}}> By signing in you agree to our <Link to="/login" style={{textDecoration:"none", color:"#218BC5",}}>
            Terms & condition
          </Link> and <Link to="/login" style={{textDecoration:"none", color:"#218BC5",}}>Privacy Policy</Link>
          </Typography>
          <Typography sx={{fontSize:"14px", color:"#6E6E70"}}>
            Forget password ? <Link to="/reset-password" style={{textDecoration:"none", color:"#218BC5",}}> Reset</Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Login

















// import React from 'react';
// import { 
//   Box, 
//   Button, 
//   Divider, 
//   IconButton, 
//   Paper, 
//   TextField, 
//   Typography 
// } from '@mui/material';
// import Image from "/public/signUpflow.svg";
// import LogoImage from "../../assets/_2359108631152.svg";
// import GoggleImg from "../../assets/goggle.svg";
// import FaceBookImg from "../../assets/facebook.svg";


// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import SsidChartIcon from '@mui/icons-material/SsidChart';
// import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
// import CloseIcon from '@mui/icons-material/Close';
// import styled from '@emotion/styled';
// import { Link } from 'react-router-dom';


// //styled component for Textfield
// const InputField = styled(TextField)({
//   borderRadius: "8.99px", 
//   "& fieldset": { border: 0 ,  height:"34px",},            
//   "&:hover fieldset": { border:0 },      
//   "&.Mui-focused fieldset": { border: 0 }, 
//   border: " 0.9px solid #6E6E70 ",
//   width:"100%",
// })

// const Login  = () => {
  
//   function handlesubmit(e){
//     e.preventDefafault();
//   }

//   return (
//     <Box sx={{height:"100vh",display:"flex",justifyContent:"center", alignItems:"center"}}>
//       <Box
//         sx={{
//           backgroundImage: `url(${Image})`,
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",  
//           backgroundPosition: "center",
//           width: "400px",                
//           height: "600px" ,
//           p:"75px 51px",
//           display:"flex",
//           flexDirection:"column",
//         }}
//       >
//         <Box component="img" src={LogoImage}/>
//         <Box sx={{color:"white",mt:"auto"}}>
//           <Typography sx={{fontSize:"24px" , color:"#FFFFFF",fontWeight:"500", mb:"22px"}}>Explore our premium stock pick and trade alert</Typography>
//           <Typography sx={{fontSize:"11px", fontWeight:"400"}}><NotificationsNoneIcon fontSize='small'sx={{color:"#218BC5", fontSize:"13px"}}/> Real-Time Alerts</Typography>
//           <Typography sx={{fontSize:"11px", fontWeight:"400"}}><SsidChartIcon fontSize='small' sx={{color:"#218BC5", fontSize:"13px"}}/> Portfolio specification</Typography>
//           <Typography sx={{fontSize:"11px", fontWeight:"400"}}><PhoneIphoneIcon sx={{color:"#218BC5", fontSize:"13px"}}/> Mobile first</Typography>
//         </Box>
//       </Box>

//       <Box component={Paper} sx={{width:"527px", height:"600px", p:"20px 91px", position:"relative"}}>
//         <IconButton
//             // onClick={handleclose}
//             sx={{
//               position:'absolute',
//               right:"30px",
//               top:"20px"
//             }}
//           >
//             <CloseIcon/>
//         </IconButton>
//         <Typography fontSize={"21.57px"} fontWeight={"500"} mb={"15px"}>Create Free Account</Typography>
//         <Box component={Button} textTransform={"none"} color={"black"} sx={{display:"flex", gap:"15.28px", height:"44px", width:"100%",border:" 0.9px solid #000000", borderRadius:"8.99px", alignItems:"center", justifyContent:"center"}}>
//           <Box component="img" src={GoggleImg} height={"20.07px"} width={"20.07px"}/>
//           <Typography sx={{fontSize:"12.58px", fontWeight:"500"}}>Sign in with Google</Typography>
//         </Box>
//         <Box component={Button} textTransform={"none"} color={"black"} sx={{display:"flex", gap:"15.28px", height:"44px", width:"100%",border:" 0.9px solid #000000", borderRadius:"8.99px", alignItems:"center", justifyContent:"center",mt:"10px"}}>
//           <Box component="img" src={FaceBookImg} height={"20.07px"} width={"20.07px"}/>
//           <Typography sx={{fontSize:"12.58px", fontWeight:"500"}}>Sign in with Facebook</Typography>
//         </Box>
//         <Box sx={{display:"flex", alignItems:"center", gap:'20px', mt:"10px", color:"#6E6E70"}}>
//           <Divider sx={{flexGrow:"1"}}/>
//           <Typography  sx={{fontSize:"12.58px", fontWeight:"500"}}>or</Typography>
//           <Divider sx={{flexGrow:"1"}}/>
//         </Box>

//         <Box component="form" onSubmit={handlesubmit} sx={{display:"flex", flexDirection:"column", gap:"10px", mt:"9.64px",}}>
//           <Box>
//             <Typography sx={{color:"#6E6E70", fontSize:"12.58px", fontWeight:"550", mb:"10px"}}>Full name</Typography>
//             <InputField size='small' required type='email'/>
//           </Box>
//           <Box>
//             <Typography sx={{color:"#6E6E70", fontSize:"12.58px", fontWeight:"550", mb:"10px"}}>Email</Typography>
//             <InputField  size='small' required type='email'/>
//           </Box>
//           <Box>
//             <Typography sx={{color:"#6E6E70", fontSize:"12.58px", fontWeight:"550", mb:"10px"}}>Password</Typography>
//             <InputField  size='small' required type='password'/>
//           </Box>
//           <Button type='submit' sx={{textTransform:"none", color:"#FFFFFF", backgroundColor:"#159A42", fontSize:"14px",width:"100%",height:"44.04px", borderRadius:"8.99px"}}>
//             Create Account
//           </Button>
//           <Divider/>
//         </Box>

//         <Box mt={"10px"}>
//           <Typography sx={{fontSize:"14px",fontWeight:"550", color:"#1B1C1E", mb:"10.43px"}}> 
//             Already have an account ? <Link to="/register" style={{textDecoration:"none", color:"#218BC5",}}>
//             Sign in
//             </Link>
//           </Typography>
//           <Typography sx={{fontSize:"14px", color:"#6E6E70"}}> By signing in you agree to our <Link to="/login" style={{textDecoration:"none", color:"#218BC5",}}>
//             Terms & condition
//           </Link> and <Link to="/login" style={{textDecoration:"none", color:"#218BC5",}}>Privacy Policy</Link>
//           </Typography>
//         </Box>
//       </Box>
//     </Box>
//   )
// }

// export default Login 









































// // src/Login.jsx
// import React, { useState } from "react";
// import {
//   FaGoogle,
//   FaEye,
//   FaEyeSlash,
//   FaBell,
//   FaBriefcase,
//   FaMobileAlt,
//   FaFacebookF,
//   FaTimes,
// } from "react-icons/fa";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Link, useNavigate } from "react-router-dom";
// import Image from "/public/image.png";
// import LogoImage from "../../assets/_2359108631152.svg"

// const Login = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.email) {
//       newErrors.email = "Email is required";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email";
//     }

//     if (!formData.password) {
//       newErrors.password = "Password is required";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: "" }));
//     }
//   };

//   const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       const name = formData.email.split("@")[0]; // Just an example
//       const userData = {
//         name: name.charAt(0).toUpperCase() + name.slice(1),
//         email: formData.email,
//       };

//       // ✅ Save to localStorage
//       localStorage.setItem("user", JSON.stringify(userData));

//       toast.success("Logged in successfully!", {
//         position: "top-center",
//         autoClose: 3000,
//       });

//       navigate("/dashboard"); // Redirect
//       setFormData({ email: "", password: "" });
//     } else {
//       toast.error("Please fix the errors in the form");
//     }
//   };

//   return (
//     <div className="min-h-screen lg:mt-16 mt-30 flex shadow-xl flex-col md:flex-row bg-white w-[80%] mx-auto">
//       <ToastContainer />

//       {/* Image Section */}
//       <div
//         className="hidden md:flex md:w-1/2 rounded-xl relative bg-cover bg-center"
//         style={{ backgroundImage:`url(${Image})`,}}
//       >
//         <div className="absolute inset-0 bg-black opacity-30"></div>
//         <div className="relative z-10 w-full p-10 flex flex-col justify-between h-full">
//           <img src={LogoImage} alt="Logo" className="w-50 h-50 hidden md:flex" />
//           <div className="space-y-4 mt-[-50px]">
//             <p className="text-2xl text-white font-medium">
//               Explore premium Stock Picks and trade alerts
//             </p>
//             <ul className="space-y-3 text-white text-sm">
//               <li className="flex items-center gap-2">
//                 <FaBell className="text-blue-400" />
//                 Real-Time Alerts
//               </li>
//               <li className="flex items-center gap-2">
//                 <FaBriefcase className="text-blue-400" />
//                 Portfolio Specialization
//               </li>
//               <li className="flex items-center gap-2">
//                 <FaMobileAlt className="text-blue-400" />
//                 Mobile First
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Form Section */}
//       <div className="w-full md:w-1/2 p-6 max-w-md mx-auto bg-white flex flex-col justify-center relative">
//         <Link
//           to="/"
//           className="absolute top-6 right-6 text-gray-500 hover:text-red-500 text-xl"
//         >
//           <FaTimes />
//         </Link>

//         <div className="md:hidden mb-6 text-center">
//           <h1 className="text-2xl font-bold text-black">Stockertrim</h1>
//           <p className="text-sm text-gray-600">
//             Explore premium Stock Picks and trade alerts
//           </p>
//         </div>

//         <div className="space-y-6">
//           <div className="text-center space-y-2">
//             <h1 className="text-2xl text-black font-bold">Member Sign In</h1>
//           </div>

//           <div className="space-y-3">
//             <button className="flex items-center justify-center gap-3 w-full px-4 py-3 border border-gray-300 bg-white text-gray-700 rounded-md hover:bg-gray-50">
//               <FaFacebookF className="text-[#1877F2] text-lg" />
//               <span className="font-medium">Sign in with Facebook</span>
//             </button>
//             <button className="flex items-center justify-center gap-3 w-full px-4 py-3 border border-gray-300 bg-white text-gray-700 rounded-md hover:bg-gray-50">
//               <FaGoogle className="text-[#DB4437] text-lg" />
//               <span className="font-medium">Sign in with Google</span>
//             </button>
//           </div>

//           <div className="flex items-center">
//             <div className="flex-grow border-t border-gray-300"></div>
//             <span className="mx-4 text-sm text-gray-500">or</span>
//             <div className="flex-grow border-t border-gray-300"></div>
//           </div>

//           <form className="space-y-4" onSubmit={handleSubmit} noValidate>
//             <div>
//               <label className="block text-sm mb-1">Email</label>
//               <input
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 type="email"
//                 placeholder="Enter your email"
//                 className={`w-full px-3 py-2 border ${
//                   errors.email ? "border-red-500" : "border-gray-300"
//                 } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
//               />
//               {errors.email && (
//                 <p className="mt-1 text-sm text-red-600">{errors.email}</p>
//               )}
//             </div>

//             <div>
//               <label className="block text-sm mb-1">Password</label>
//               <div className="relative">
//                 <input
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   value={formData.password}
//                   onChange={handleChange}
//                   placeholder="Enter your password"
//                   className={`w-full px-3 py-2 border ${
//                     errors.password ? "border-red-500" : "border-gray-300"
//                   } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10`}
//                 />
//                 <button
//                   type="button"
//                   onClick={togglePasswordVisibility}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </button>
//               </div>
//               {errors.password && (
//                 <p className="mt-1 text-sm text-red-600">{errors.password}</p>
//               )}
//             </div>

//             <button
//               type="submit"
//               className="w-full py-3 px-4 bg-black hover:bg-gray-800 text-white font-medium rounded-md"
//             >
//               Sign In
//             </button>
//           </form>

//           <p className="text-sm text-center text-gray-700">
//             Don&apos;t have an account?{" "}
//             <Link to="/register" className="text-blue-600 hover:underline">
//               Create your account
//             </Link>
//           </p>
//           <p className="text-xs text-gray-500 text-center">
//             By signing in, you agree to our{" "}
//             <a href="#" className="text-blue-600 hover:underline">
//               Terms and Conditions
//             </a>{" "}
//             and{" "}
//             <a href="#" className="text-blue-600 hover:underline">
//               Privacy Policy
//             </a>
//             .
//           </p>
//           <p className="text-center text-gray-700">
//             Forgot password?{" "}
//             <Link to="/set-password" className="text-blue-600 hover:underline">Reset</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
