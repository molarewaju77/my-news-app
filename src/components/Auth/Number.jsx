import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaBell, FaBriefcase, FaMobileAlt, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Image from "/public/image.png";
import LogoImage from "../../assets/_2359108631152.svg"

const NumberValidation = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validatePhoneNumber = (number) => {
    return /^\d{10,15}$/.test(number);
  };

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Only digits
    setPhone(value);
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!phone) {
      setError("Phone number is required");
      setIsSubmitting(false);
      return;
    }

    if (!validatePhoneNumber(phone)) {
      setError("Please enter a valid 10-15 digit phone number");
      setIsSubmitting(false);
      return;
    }

    try {
      await new Promise((res) => setTimeout(res, 1000)); // Simulate API

      toast.success("Confirmation code sent to your phone!", {
        position: "top-center",
        autoClose: 5000,
      });

      setPhone("");
    } catch (err) {
      toast.error("Failed to send confirmation. Please try again.", {
        position: "top-center",
        autoClose: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col shadow-2xl md:flex-row bg-white w-[80%] mx-auto">
      <ToastContainer />

      {/* Image Section */}
      <div
        className="hidden md:flex md:w-1/2 relative bg-cover bg-center bg-gray-900"
        style={{ backgroundImage:`url(${Image})`,}}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 w-full p-12 flex flex-col justify-between">
          <div>
            <img src={LogoImage} alt="Company Logo" className="w-24 h-24 mb-8 rounded-xl" />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Premium Stock Insights</h2>
            <ul className="space-y-4 text-white">
              <li className="flex items-start gap-3">
                <FaBell className="text-blue-400 mt-1 flex-shrink-0" />
                Real-time market alerts and notifications
              </li>
              <li className="flex items-start gap-3">
                <FaBriefcase className="text-blue-400 mt-1 flex-shrink-0" />
                Expert portfolio recommendations
              </li>
              <li className="flex items-start gap-3">
                <FaMobileAlt className="text-blue-400 mt-1 flex-shrink-0" />
                Mobile-optimized trading experience
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 relative flex items-center justify-center p-6 md:p-12">
        {/* Cancel icon */}
        <Link
          to="/"
          className="absolute top-4 right-4 text-gray-600 hover:text-red-600 text-2xl"
          title="Cancel and go to homepage"
        >
          <FaTimes />
        </Link>

        <div className="w-full max-w-md space-y-8">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Enter your number</h1>
            <p className="text-gray-600">
              Enter your phone number. We will send your confirmation code there.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={handleChange}
                  placeholder="e.g. 1234567890"
                  className={`w-full px-4 py-3 border ${error ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200`}
                  maxLength={15}
                />
              </div>
              {error && (
                <p className="mt-2 text-sm text-red-600">
                  {error}
                </p>
              )}
            </div>
            <Link to="/code-phone-number">
              <button
                disabled={isSubmitting}
                className={`w-full mb-5 flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-black rounded-2xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : "Send Confirmation Code"}
              </button>
            </Link>

            <div className="text-center">
              <p className="font-bold font-sans">
                Already have an account?{" "}
                <Link to="/login">
                <a href="#" className="text-blue-600 font-bold hover:underline">
                  Sign in
                </a>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NumberValidation;
