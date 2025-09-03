// src/Registration.jsx
import React, { useState } from "react";
import { FaGoogle, FaFacebookF, FaEye, FaEyeSlash, FaBell, FaBriefcase, FaMobileAlt, FaTimes } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Image from "/public/image.png";
import LogoImage from "../../assets/_2359108631152.svg"

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    else if (formData.fullName.length < 3) newErrors.fullName = "Name must be at least 3 characters";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter a valid email";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success("Account created successfully!", {
        position: "top-center",
        autoClose: 3000,
      });

      // Save user data to localStorage
      const userData = {
        firstName: formData.fullName.split(' ')[0],
        lastName: formData.fullName.split(' ').slice(1).join(' ') || '',
        email: formData.email
      };
      localStorage.setItem("user", JSON.stringify(userData));

      // Redirect to dashboard with user data
      navigate("/dashboard", { state: userData });

      // Reset form
      setFormData({ fullName: "", email: "", password: "" });
    } else {
      toast.error("Please fix the errors in the form");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      
      // Save Google user data to localStorage
      const userData = {
        firstName: user.displayName?.split(' ')[0] || 'User',
        lastName: user.displayName?.split(' ').slice(1).join(' ') || '',
        email: user.email
      };
      localStorage.setItem("user", JSON.stringify(userData));

      toast.success("Signed in with Google!");
      navigate("/dashboard", { state: userData });
    } catch (error) {
      console.error(error);
      toast.error("Google Sign-In failed.");
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const user = result.user;
      
      // Save Facebook user data to localStorage
      const userData = {
        firstName: user.displayName?.split(' ')[0] || 'User',
        lastName: user.displayName?.split(' ').slice(1).join(' ') || '',
        email: user.email
      };
      localStorage.setItem("user", JSON.stringify(userData));

      toast.success("Signed in with Facebook!");
      navigate("/dashboard", { state: userData });
    } catch (error) {
      console.error(error);
      toast.error("Facebook Sign-In failed.");
    }
  };

  return (
    <div className=" mt-20 flex flex-col md:flex-row bg-white w-[80%] mx-auto">
      <ToastContainer />
      {/* Left panel */}
      <div className="hidden md:flex md:w-1/2 rounded-xl relative bg-cover bg-center" style={{ backgroundImage:`url(${Image})` }}>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 w-full p-10 flex flex-col justify-between h-full">
          <img src={LogoImage} alt="Logo" className="w-50 h-50" />
          <div className="space-y-4">
            <p className="text-2xl text-white font-medium">Explore premium Stock Picks and trade alerts</p>
            <ul className="space-y-3 text-white text-sm">
              <li className="flex items-center gap-2"><FaBell className="text-blue-400" /> Real-Time Alerts</li>
              <li className="flex items-center gap-2"><FaBriefcase className="text-blue-400" /> Portfolio Specialization</li>
              <li className="flex items-center gap-2"><FaMobileAlt className="text-blue-400" /> Mobile First</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right form panel */}
      <div className="w-full md:w-1/2 p-6 max-w-md mx-auto flex flex-col justify-center relative">
        <Link to="/" className="absolute top-6 right-6 text-gray-500 hover:text-red-500 text-xl">
          <FaTimes />
        </Link>

        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-2xl text-black font-bold">Create Free Account</h1>
            <p className="text-gray-600">Join our community today</p>
          </div>

          <div className="space-y-3">
            <button onClick={handleGoogleSignIn} className="w-full py-3 flex items-center justify-center gap-3 border border-gray-300 rounded-md hover:bg-gray-50">
              <FaGoogle className="text-[#DB4437]" />
              Continue with Google
            </button>
            <button onClick={handleFacebookSignIn} className="w-full py-3 flex items-center justify-center gap-3 border border-gray-300 rounded-md hover:bg-gray-50">
              <FaFacebookF className="text-[#1877F2]" />
              Continue with Facebook
            </button>
          </div>

          <div className="flex items-center">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-sm text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your full name"
                className={`w-full px-3 py-2 border ${errors.fullName ? "border-red-500" : "border-gray-300"} rounded-md`}
              />
              {errors.fullName && <p className="text-sm text-red-600 mt-1">{errors.fullName}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`w-full px-3 py-2 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-md`}
              />
              {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  className={`w-full px-3 py-2 border ${errors.password ? "border-red-500" : "border-gray-300"} rounded-md pr-10`}
                />
                <button type="button" onClick={togglePasswordVisibility} className="absolute right-3 top-2.5 text-gray-500">
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && <p className="text-sm text-red-600 mt-1">{errors.password}</p>}
            </div>

            <button type="submit" className="w-full py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800">
              Create Account
            </button>

            <p className="text-sm text-center text-gray-700">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline font-medium">Sign in</Link>
            </p>
          </form>

          <p className="text-xs text-center text-gray-500">
            By signing up, you agree to our <a href="#" className="text-blue-600 hover:underline">Terms</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;