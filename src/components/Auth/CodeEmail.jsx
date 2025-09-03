import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaBell, FaBriefcase, FaMobileAlt, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Image from "/public/image.png";
import LogoImage from "../../assets/_2359108631152.svg"

const OtpVerify = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const code = otp.join("");
    if (code.length < 6) {
      toast.error("Please enter the full 6-digit code.");
      return;
    }

    setIsSubmitting(true);
    await new Promise((res) => setTimeout(res, 1000));
    toast.success("Code verified successfully!");
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      <ToastContainer />

      {/* Image Section */}
      <div
        className="hidden md:flex md:w-1/2 relative bg-cover bg-center bg-gray-900"
        sstyle={{ backgroundImage:`url(${Image})`,}}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 w-full p-12 flex flex-col justify-between">
          <img src={LogoImage} alt="Company Logo" className="w-24 h-24 mb-8" />
          <div className="space-y-6 text-white">
            <h2 className="text-3xl font-bold">Premium Stock Insights</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaBell className="text-blue-400 mt-1" />
                Real-time market alerts and notifications
              </li>
              <li className="flex items-start gap-3">
                <FaBriefcase className="text-blue-400 mt-1" />
                Expert portfolio recommendations
              </li>
              <li className="flex items-start gap-3">
                <FaMobileAlt className="text-blue-400 mt-1" />
                Mobile-optimized trading experience
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 relative">
        {/* Cancel Icon - positioned top-right as in your example */}
        <Link
          to="/"
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-xl"
          title="Cancel and go back"
        >
          <FaTimes />
        </Link>

        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">6-Digit Code</h1>
            <p className="text-gray-600">
              Enter the code sent to{" "}
              <span className="font-semibold text-black">+44 7398 750 479</span>
            </p>
          </div>

          <div className="flex justify-between gap-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputsRef.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-12 text-xl text-center border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
            ))}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-4 rounded-lg text-white font-medium bg-black hover:bg-gray-800 transition duration-200 ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Verifying..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtpVerify;