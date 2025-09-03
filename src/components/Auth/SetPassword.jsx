import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaBell, FaBriefcase, FaMobileAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LogoImage from "../../assets/_2359108631152.svg"
import Image from "/public/image.png";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      toast.success("Password reset successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      
      setFormData({
        password: "",
        confirmPassword: ""
      });
    } else {
      toast.error("Please fix the errors in the form", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="min-h-screen flex shadow-xl flex-col md:flex-row bg-white">
      {/* Toast container */}
      <ToastContainer />
      
      {/* Image Section */}
      <div 
        className="hidden md:flex md:w-1/2 rounded-xl relative bg-cover bg-center"
        style={{ backgroundImage:`url(${Image})`,}}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        
        <div className="relative z-10 w-full p-10 flex flex-col justify-between h-full">
          <div className="flex items-center space-x-4">
            <img src={LogoImage} alt="Logo" className="w-50 h-50 hidden md:flex" />
          </div>

          <div className="space-y-4 mt-[-50px]">
            <p className="text-2xl text-white font-medium hidden md:flex">Explore premium Stock Picks and trade alerts</p>
            <ul className="space-y-3 text-white text-sm">
              <li className="flex items-center gap-2">
                <FaBell className="text-blue-400" />
                Real-Time Alerts
              </li>
              <li className="flex items-center gap-2">
                <FaBriefcase className="text-blue-400" />
                Portfolio Specialization
              </li>
              <li className="flex items-center gap-2">
                <FaMobileAlt className="text-blue-400" />
                Mobile First
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 p-6 max-w-md mx-auto bg-white flex flex-col justify-center">
        <div className="md:hidden mb-6 text-center">
          <h1 className="text-2xl font-bold text-black hidden md:flex">Stockertrim</h1>
          <p className="text-sm text-gray-600 hidden md:flex">Explore premium Stock Picks and trade alerts</p>
        </div>

        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl text-black font-bold">Set your Password</h1>
           
          </div>

          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${errors.password ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10`}
                  placeholder="Enter new password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${errors.confirmPassword ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10`}
                  placeholder="Confirm new password"
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                  aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
            </div>
            <Link to="/NumberVal">
              <button 
                className="w-full py-3 px-4 bg-black hover:bg-gray-800 text-white font-medium rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Continue
              </button>
            </Link>
            <p className="text-center text-gray-700">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline font-medium">
                Login
              </Link>
            </p>
          </form>

          <p className="text-xs text-gray-500 text-center">
            By continuing, you agree to our{" "}
            <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a> and{" "}
            <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;