import React, { useRef, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LogoImage from "../../assets/_2359108631152.svg"

export default function EmailVerification() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const code = otp.join("");
    if (code.length < 6) {
      toast.error("Please enter the full 6-digit code.");
      return;
    }

    // Normally you'd send code to backend here
    toast.success("✅ Verification successful!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8">
        <ToastContainer position="top-center" autoClose={3000} />

        {/* Logo and Brand Name */}
       {/* Logo and Brand Name */}
{/* Logo and Brand Name */}
<div className="flex  ">
  <img src={LogoImage} alt="Stockertim Logo" className=" "  /> </div>



        {/* Title and Greeting */}
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-1">
          Confirm Verification Code
        </h2>
        <p className="text-center text-gray-600 text-sm mb-4">Hi Ridwan,</p>

        {/* Instructions */}
        <p className="text-sm text-gray-600 mb-6 text-center">
          Please enter the One Time Password (OTP) sent to your number.
        </p>

        {/* OTP Inputs */}
        <div className="flex justify-between mb-6 gap-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-10 h-12 sm:w-12 sm:h-14 text-center border-2 border-gray-300 rounded-md text-lg font-bold text-gray-800 focus:outline-none focus:border-blue-500"
            />
          ))}
        </div>

        {/* Timer note */}
        <p className="text-sm text-gray-500 mb-4 text-center">
          This code is valid for 5 minutes. If it doesn't work, try again or use the link sent to your email.
        </p>

        {/* Verify Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-[#262262] hover:bg-[#1e1b56] text-white py-2 rounded-md text-sm font-medium mb-6"
        >
          Verify Email
        </button>

        {/* Footer */}
        <p className="text-sm text-gray-700 mb-4">
          Thanks,<br />Stockertim Team
        </p>

        {/* Email Info */}
        <p className="text-xs text-gray-400 mb-6">
          This email was sent from{" "}
          <a href="mailto:support@stockertim.com" className="text-blue-600">
            support@stockertim.com
          </a>. If you’d rather not receive this kind of email, you can{" "}
          <a href="#" className="text-blue-600">Unsubscribe</a>.
        </p>

        {/* Contact Section */}
        <div className="border-t border-gray-200 pt-4 text-center text-sm text-gray-500">
          <p className="font-semibold">Get in touch</p>
          <p>Call us at +44 7398 750 479</p>
          <p>
            <a href="mailto:support@stockertim.com" className="text-blue-600">
              support@stockertim.com
            </a>
          </p>
          <div className="flex justify-center mt-3 space-x-4 text-gray-400 text-lg">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          © 2025 Stockertim. All rights reserved.
        </p>
      </div>
    </div>
  );
}
