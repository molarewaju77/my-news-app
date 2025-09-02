import React from "react";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaTiktok,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#150462] text-white px-4 sm:px-6 py-10">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-10">
        {/* Left Logo and Copyright */}
        <div className="flex flex-col justify-between">
          <div className="text-2xl font-bold mb-4 flex items-center gap-2">
            <div className="bg-white text-[#150462] rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">
              S
            </div>
            <span className="text-white">Stockertim</span>
          </div>
          <p className="text-xs text-gray-300 mt-4 md:mt-6">
            © Copyright 2025 Stockertim. All rights reserved.
          </p>
        </div>

        {/* Center Menus */}
        <div className="md:col-span-2 grid grid-cols-3 sm:grid-cols-3 gap-6 sm:gap-4 text-sm text-gray-300">
          {/* Top Markets */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-3">TOP MARKETS</h4>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Dow Jones</li>
              <li className="hover:text-white cursor-pointer">S&P 500</li>
              <li className="hover:text-white cursor-pointer">Nasdaq</li>
              <li className="hover:text-white cursor-pointer">FTSE 100</li>
              <li className="hover:text-white cursor-pointer">Bitcoin</li>
            </ul>
          </div>

          {/* Explore Menu */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-3">EXPLORE MENU</h4>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Markets</li>
              <li className="hover:text-white cursor-pointer">Portfolio</li>
              <li className="hover:text-white cursor-pointer">Watchlist</li>
              <li className="hover:text-white cursor-pointer">Trade Ideas</li>
              <li className="hover:text-white cursor-pointer">Academy</li>
            </ul>
          </div>

          {/* Helpful Links */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-3">HELPFUL LINKS</h4>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Contact Support</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Disclaimer</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Press</li>
            </ul>
          </div>
        </div>

        {/* Right Social & Disclaimer */}
        <div className="flex flex-col justify-between">
          {/* Social Icons */}
          <div className="flex gap-4 text-lg text-gray-300 mb-4 flex-wrap">
            <FaXTwitter className="hover:text-white cursor-pointer transition-colors" />
            <FaLinkedinIn className="hover:text-white cursor-pointer transition-colors" />
            <FaInstagram className="hover:text-white cursor-pointer transition-colors" />
            <FaYoutube className="hover:text-white cursor-pointer transition-colors" />
            <FaFacebookF className="hover:text-white cursor-pointer transition-colors" />
            <FaTiktok className="hover:text-white cursor-pointer transition-colors" />
          </div>

          {/* Disclaimer */}
          <p className="text-[11px] text-gray-400 leading-snug mb-3">
            DISCLAIMER: Stockertim Premium provides educational trading signals only.
            It is not financial advice or registered financial advice. Always do your
            own research. Investing carries risk. We are not liable for your investments.
          </p>

          {/* Powered by */}
          <p className="text-[10px] text-right text-gray-400">
            Privacy policy & Terms and condition
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;