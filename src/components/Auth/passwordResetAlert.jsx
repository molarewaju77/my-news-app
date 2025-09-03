import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import LogoImage from "../../assets/_2359108631152.svg" // Replace with your actual path
import WelcomeImage from "/public/passwordAlert.png"; // Replace with your actual welcome image path

export default function WelcomeEmail() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-6 sm:p-8">
        {/* Header: Logo */}
        <div className="flex items-center gap-2 justify-center mb-6">
          <img src={LogoImage} alt="Stockertim Logo" className="h-8 w-auto" />
          <span className="text-xl font-bold text-[#262262]">Stockerim</span>
        </div>

        {/* Welcome Image */}
        <div className="mb-6">
          <img
            src={WelcomeImage}
            alt="Welcome to Stockerim"
            className="w-full rounded-lg object-cover"
          />
        </div>

        {/* Greeting */}
        <p className="text-gray-700 mb-1">Hi Ridwan,</p>
        <p className="text-gray-700 mb-4">
          Dear Subscriber: <span className="font-semibold">[first name]</span>,
        </p>

        {/* Message */}
        <p className="text-gray-700 mb-4">
          Thank you for subscribing to Stockertim Premium! 🙏
        </p>

        <p className="text-gray-700 mb-4">
          You can expect personalized, stock, newsletter insights and stock
          strategy ideas to power your portfolio like never before — helping you
          stay ahead of the market and spot the best investing opportunities.
        </p>

        <p className="text-gray-700 mb-4">
          At Stockerim, our mission is simple: <br />
          <strong>Keep investing. Keep growing.</strong>
        </p>

        <p className="text-gray-700 mb-6">Let’s boost your premium account. 🚀</p>

        {/* CTA */}
        <div className="mb-6 text-center">
          <button className="bg-[#262262] hover:bg-[#1e1b56] text-white px-6 py-2 rounded-md text-sm font-medium">
            Let's Boost
          </button>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-700 mb-4">
          Thanks, <br />The Stockertim Team
        </p>

        {/* Disclaimer */}
        <p className="text-xs text-gray-400 mb-6">
          This email was sent from{" "}
          <a href="mailto:support@stockertim.com" className="text-blue-600">
            support@stockertim.com
          </a>
          . If you’d rather not receive this kind of email, you can{" "}
          <a href="#" className="text-blue-600">
            Unsubscribe
          </a>
          .
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

        {/* Copyright */}
        <p className="text-center text-xs text-gray-400 mt-6">
          © 2025 Stockertim. All rights reserved.
        </p>
      </div>
    </div>
  );
}
