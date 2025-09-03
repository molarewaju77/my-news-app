import React, { useState } from "react";
import { Box, Tabs, Tab, Typography, Divider, Button } from "@mui/material";
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

// Import your tab components
import PersonalInfoTab from "../../components/Dashboard/PersonalInfoTab";
import SubscribtionTab from "../../components/Dashboard/SubscribtionTab";
import ReferalsTab from "../../components/Dashboard/ReferalsTab";

// Mock data for tabs
const mockTabs = [
  { label: "Personal information", component: <PersonalInfoTab/>},
  { label: "Subscription", component: <SubscribtionTab/>},
  { label: "Referrals", component:<ReferalsTab/>},
];

export default function Dashboard(){
    const [value, setValue] = useState(0);
  
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

  return(
    <Box sx={{width:{xs:"95%",md:"70%"},backgroundColor:"#FFFFFF", margin:"20px auto", boxShadow:'1'}}>
      <Box sx={{height:"78px",backgroundColor:"78px", display:"flex", alignItems:"center", pl:"40px", backgroundColor:"#1B1464"}}>
        <Typography sx={{fontSize:"24px", fontWeight:"600", color:"white"}}>Manage account</Typography>
      </Box>
      <Box sx={{width:"100%",m:{xs:"30px 0 0 0",md:"30px 0 0 41px"},}}>
        <Tabs                 
          value={value}
          onChange={handleChange}
          textColor="red"
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons={false}
          sx={{
          "& .MuiTabs-indicator": {
          backgroundColor: "#218BC5",
          height: "3px",
          },
          }}      
        >
          {mockTabs.map((tab, index)=> (
            <Tab 
              key={index}
              label={tab.label}
              sx={{
              color: value === index ? "#218BC5" : "#232526",
              borderBottom: 1, borderColor: 'divider',
              textTransform: "none",
              fontSize:"16px",
              fontWeight:"600",
              }}
            />
          ))}
        </Tabs>
        <Box sx={{marginTop:"30px"}}>
          {mockTabs[value].component}
        </Box>
      </Box>

      <Divider sx={{mt:"65px"}} />

      <Box display={'flex'} gap={'29px'} sx={{p:"27px 0 27px 39px", }}>
        <Button sx={{textTransform:"none",fontSize:"16px", fontWeight:"400",}} startIcon={<HelpOutlineOutlinedIcon/>}>Help</Button>
        <Button sx={{textTransform:"none",fontSize:"16px", fontWeight:"400",}}  component="a" href="+44 810 00000"startIcon={<CallOutlinedIcon/>}>Call us at +44 810 00000</Button>
      </Box>
    </Box>

  );
}















































// import React, { useState, useEffect } from "react";
// import { FaUpload, FaQuestionCircle, FaPhone } from "react-icons/fa";
// import { FaFacebookF, FaEnvelope, FaXTwitter, FaRegCopy } from "react-icons/fa6";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useLocation } from "react-router-dom";
// import { Box } from '@mui/material';

// function ReferralSection() {
//   const referralLink = "https://www.stockertim.com/pricing/?share_your_love=ridor24";

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(referralLink).then(() => {
//       toast.success("Referral link copied!", {
//         position: "top-center",
//         autoClose: 2000,
//         hideProgressBar: true,
//         closeOnClick: true,
//         pauseOnHover: false,
//         draggable: false,
//       });
//     });
//   };

//   const handleShare = (platform) => {
//     let url = "";
//     switch (platform) {
//       case "email":
//         url = `mailto:?subject=Join me on Stockertim&body=Check out Stockertim using my referral link: ${referralLink}`;
//         window.location.href = url;
//         break;
//       case "facebook":
//         url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}`;
//         window.open(url, "_blank");
//         break;
//       case "twitter":
//         url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(referralLink)}&text=Join me on Stockertim!`;
//         window.open(url, "_blank");
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto bg-white p-6 pt-4 rounded-xl space-y-6 font-sans text-sm text-gray-800">
//       <div className="space-y-2">
//         <h2 className="font-medium text-[15px]">
//           Get{" "}
//           <a href="#" className="text-blue-600 underline">
//             one-month free membership
//           </a>{" "}
//           for every friend you refer
//         </h2>
//         <p className="text-gray-600 text-sm leading-snug">
//           You and your friend each receive one-month free membership toward any subscription
//         </p>
//       </div>

//       <div>
//         <p className="mb-1 font-medium">Share the link</p>
//         <div className="relative">
//           <input
//             type="text"
//             readOnly
//             value={referralLink}
//             className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm bg-gray-50 text-gray-700 focus:outline-none"
//           />
//           <button
//             onClick={copyToClipboard}
//             className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
//           >
//             <FaRegCopy size={18} />
//           </button>
//         </div>
//       </div>

//       <div className="space-y-2">
//         <button 
//           onClick={() => handleShare("email")}
//           className="w-full border border-gray-300 flex items-center justify-center gap-2 py-2 rounded-lg text-sm hover:bg-gray-100 font-medium"
//         >
//           <FaEnvelope className="text-lg" />
//           Email
//         </button>
//         <button 
//           onClick={() => handleShare("facebook")}
//           className="w-full border border-gray-300 flex items-center justify-center gap-2 py-2 rounded-lg text-sm hover:bg-gray-100 font-medium"
//         >
//           <FaFacebookF className="text-lg" />
//           Facebook
//         </button>
//         <button 
//           onClick={() => handleShare("twitter")}
//           className="w-full border border-gray-300 flex items-center justify-center gap-2 py-2 rounded-lg text-sm hover:bg-gray-100 font-medium"
//         >
//           <FaXTwitter className="text-lg" />
//           X
//         </button>
//       </div>
//     </div>
//   );
// }

// function TrialStatusBanner() {
//   const handleUpgrade = () => {
//     toast.success("Payment successful! Your account has been upgraded.", {
//       position: "top-center",
//       autoClose: 3000,
//       hideProgressBar: true,
//     });
//   };

//   return (
//     <div className="flex items-center justify-between border border-gray-200 rounded-lg px-5 py-4 max-w-2xl mx-auto bg-white font-sans text-sm">
//       <div>
//         <p className="font-medium text-gray-900">You are on free Trial</p>
//         <p className="text-gray-600 mt-0.5">Upgrade to enjoy premium content</p>
//       </div>
//       <button 
//         onClick={handleUpgrade}
//         className="bg-gradient-to-r from-sky-500 to-indigo-700 text-white font-medium px-5 py-2 rounded-full shadow-sm hover:opacity-90 transition"
//       >
//         Upgrade
//       </button>
//     </div>
//   );
// }

// function PersonalInformationTab({ user }) {
//   const [formData, setFormData] = useState({
//     firstName: user?.firstName || "",
//     lastName: user?.lastName || "",
//     email: user?.email || "",
//     currentPassword: "",
//     newPassword: "",
//     confirmPassword: ""
//   });

//   const [errors, setErrors] = useState({});
//   const [isDirty, setIsDirty] = useState(false);

//   useEffect(() => {
//     if (isDirty) {
//       const requiredFieldsFilled = 
//         formData.firstName.trim() && 
//         formData.lastName.trim() && 
//         formData.email.trim();
      
//       if (requiredFieldsFilled) {
//         toast.info("All required fields are filled!", {
//           position: "top-center",
//           autoClose: 2000,
//           hideProgressBar: true,
//         });
//       }
//     }
//   }, [formData, isDirty]);

//   const validateField = (name, value) => {
//     let error = "";
//     switch (name) {
//       case "firstName":
//       case "lastName":
//         if (!value.trim()) error = "This field is required";
//         else if (value.length > 50) error = "Maximum 50 characters allowed";
//         break;
//       case "email":
//         if (!value.trim()) error = "Email is required";
//         else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "Invalid email format";
//         break;
//       case "currentPassword":
//       case "newPassword":
//         if (value && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value)) {
//           error = "Password must be at least 8 characters with uppercase, lowercase and number";
//         }
//         break;
//       case "confirmPassword":
//         if (value !== formData.newPassword) error = "Passwords don't match";
//         break;
//       default:
//         break;
//     }
//     return error;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//     setIsDirty(true);
//     if (isDirty) {
//       setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     let isValid = true;
//     Object.keys(formData).forEach(key => {
//       const error = validateField(key, formData[key]);
//       newErrors[key] = error;
//       if (error) isValid = false;
//     });
//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmitProfile = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       localStorage.setItem("user", JSON.stringify(formData));
//       toast.success("Profile updated successfully!", {
//         position: "top-center",
//         autoClose: 2000,
//       });
//     }
//   };

//   const handleSubmitPassword = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       toast.success("Password changed successfully!", {
//         position: "top-center",
//         autoClose: 2000,
//       });
//     }
//   };

//   const getInitial = () => {
//     if (formData.firstName) return formData.firstName.charAt(0).toUpperCase();
//     if (user?.firstName) return user.firstName.charAt(0).toUpperCase();
//     if (formData.email) return formData.email.charAt(0).toUpperCase();
//     return "U";
//   };

//   return (
//     <div className="space-y-10">
//       <div className="flex flex-col sm:flex-row justify-between shadow p-4 rounded items-center gap-4">
//         <div className="flex items-center gap-4 w-full sm:w-auto">
//           <div className="w-12 h-12 rounded-full bg-sky-600 text-white flex items-center justify-center font-semibold text-lg">
//             {getInitial()}
//           </div>
//           <div>
//             <h2 className="font-medium">
//               {formData.firstName || user?.firstName || "User"} {formData.lastName || user?.lastName || ""}
//             </h2>
//             <p className="text-gray-600 text-sm">{formData.email || user?.email || ""}</p>
//           </div>
//         </div>
//         <label className="flex items-center gap-2 cursor-pointer text-sm font-bold border border-blue-600 px-3 py-1 rounded-xl hover:bg-blue-50 w-full sm:w-auto justify-center">
//           <FaUpload />
//           <span>Upload Image</span>
//           <input type="file" className="hidden" />
//         </label>
//       </div>

//       <form onSubmit={handleSubmitProfile} className="space-y-4">
//         <p className="font-bold text-2xl text-gray-800">Your details</p>
//         <div className="grid md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm mb-1">First Name</label>
//             <input
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               className={`p-2 bg-gray-100 rounded-sm text-sm w-full ${errors.firstName ? "border border-red-500" : ""}`}
//               placeholder="First Name"
//             />
//             {errors.firstName && <span className="text-red-500 text-xs">{errors.firstName}</span>}
//           </div>
//           <div>
//             <label className="block text-sm mb-1">Last Name</label>
//             <input
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               className={`p-2 bg-gray-100 rounded-sm text-sm w-full ${errors.lastName ? "border border-red-500" : ""}`}
//               placeholder="Last Name"
//             />
//             {errors.lastName && <span className="text-red-500 text-xs">{errors.lastName}</span>}
//           </div>
//         </div>
//         <div className="flex flex-col md:flex-row gap-4 items-center mt-4">
//           <div className="w-full md:w-2/3">
//             <input
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className={`p-2 bg-gray-100 rounded-sm text-sm w-full ${errors.email ? "border border-red-500" : ""}`}
//               type="email"
//               placeholder="Email"
//             />
//             {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
//           </div>
//           <button type="submit" className="bg-blue-900 hover:bg-blue-700 text-white px-5 py-2 rounded text-sm">
//             Update profile
//           </button>
//         </div>
//       </form>

//       <form onSubmit={handleSubmitPassword} className="space-y-4">
//         <p className="font-bold text-2xl text-gray-800">Change password</p>
//         <div className="flex flex-col md:flex-row gap-4 w-full">
//           <div className="w-full md:w-1/2">
//             <input
//               name="currentPassword"
//               value={formData.currentPassword}
//               onChange={handleChange}
//               className={`p-2 bg-gray-100 rounded-sm text-sm w-full ${errors.currentPassword ? "border border-red-500" : ""}`}
//               type="password"
//               placeholder="Current password"
//             />
//             {errors.currentPassword && <span className="text-red-500 text-xs">{errors.currentPassword}</span>}
//           </div>
//           <div className="w-full md:w-1/2">
//             <input
//               name="newPassword"
//               value={formData.newPassword}
//               onChange={handleChange}
//               className={`p-2 bg-gray-100 rounded-sm text-sm w-full ${errors.newPassword ? "border border-red-500" : ""}`}
//               type="password"
//               placeholder="New password"
//             />
//             {errors.newPassword && <span className="text-red-500 text-xs">{errors.newPassword}</span>}
//           </div>
//         </div>
//         <div className="flex flex-col md:flex-row gap-4 items-center mt-4">
//           <div className="w-full md:w-1/2">
//             <input
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               className={`p-2 bg-gray-100 rounded-sm text-sm w-full ${errors.confirmPassword ? "border border-red-500" : ""}`}
//               type="password"
//               placeholder="Confirm password"
//             />
//             {errors.confirmPassword && <span className="text-red-500 text-xs">{errors.confirmPassword}</span>}
//           </div>
//           <button type="submit" className="bg-blue-900 hover:bg-blue-700 text-white px-5 py-2 rounded text-sm">
//             Change password
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default function ManageAccount() {
//   const [activeTab, setActiveTab] = useState("Personal information");
//   const tabs = ["Personal information", "Subscription", "Referrals"];
//   const location = useLocation();
//   const user = location.state || JSON.parse(localStorage.getItem("user")) || {};

//   return (
//     <div className="bg-white mt-20 lg:mt-16 py-10 shadow-xl px-4 md:px-16 max-w-4xl mx-auto font-sans">
//       <div className="bg-[#0F0C43] text-white text-base font-medium px-6 py-3 rounded-t-lg">
//         Manage account
//       </div>

//       <div className="px-6 py-6 bg-white rounded-b-lg">
//         <div className="flex space-x-6 text-sm mb-6 overflow-x-auto">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`pb-2 whitespace-nowrap ${
//                 activeTab === tab
//                   ? "border-b-2 border-[#0F0C43] text-[#0F0C43] font-medium"
//                   : "text-gray-500"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {activeTab === "Personal information" && <PersonalInformationTab user={user} />}
//         {activeTab === "Subscription" && (
//           <div className="space-y-6">
//             <TrialStatusBanner />
//             <div className="text-gray-600 text-sm">
//               Subscription management content goes here...
//             </div>
//           </div>
//         )}
//         {activeTab === "Referrals" && <ReferralSection />}
//       </div>

//       <div className="flex flex-col sm:flex-row justify-between text-sm text-gray-500 pt-6 px-6 gap-2">
//         <p className="flex items-center gap-1"><FaQuestionCircle /> Help</p>
//         <p className="flex items-center gap-1"><FaPhone /> Call us at +44 810 00000</p>
//       </div>

//       <ToastContainer />
//     </div>
//   );
// }