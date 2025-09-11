import React, { useState, useEffect, useRef } from "react";
import {
  FaSearch,
  FaLock,
  FaBars,
  FaBell,
  FaUserFriends,
  FaRegStar,
  FaQuestionCircle,
  FaSignOutAlt
} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/_2359108631152.svg";

const NavBar = ({ onMenuClick }) => {
  const [searchFocused, setSearchFocused] = useState(false);
  const [userInitial, setUserInitial] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const notificationsRef = useRef(null);
  const profileRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Notification items
  const notifications = [
    { id: 1, title: "Market Update: Tech stocks rally", content: "Tech sector gains 2.5% in early trading", time: "10:30 AM" },
    { id: 2, title: "New Stock Pick Added", content: "Check out our latest recommendation: AAPL", time: "Yesterday" },
    { id: 3, title: "Motivational Quote", content: "The stock market is a device for transferring money from the impatient to the patient.", time: "Monday" }
  ];

  // Get user data from location state or localStorage
  useEffect(() => {
    const userData = location.state || JSON.parse(localStorage.getItem("user")) || {};
    const firstName = userData.firstName || "";
    const lastName = userData.lastName || "";
    const email = userData.email || "";

    // setUserInitial(firstName ? firstName.charAt(0).toUpperCase() : "");
    setFullName(`${firstName} ${lastName}`.trim());
    setEmail(email);
  }, [location]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setShowProfileDropdown(false);
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
    setShowNotifications(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUserInitial("");
    setFullName("");
    setEmail("");
    navigate("/login", { state: null });
    setShowProfileDropdown(false);
  };

  return (
    <header className="sticky top-0 bottom-0 left-0 w-full z-50  bg-[#1B1464] text-white font-sans shadow-md">
      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <button aria-label="Toggle Menu"  onClick={onMenuClick} className="p-1">
            <FaBars size={20} className="text-white" />
          </button>

          <div className="flex-1 flex justify-center">
            <img src={Logo} alt="Logo" className="h-6 w-auto" />
          </div>

          {!userInitial ? (
            <div className="flex items-center gap-2">
              <Link to="/register">
                <button className="bg-sky-600 text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 whitespace-nowrap">
                  Get started
                </button>
              </Link>
             
            </div>
          ) : (
            <div className="flex items-center gap-2 sm:gap-3 ml-2">
              <button 
                onClick={toggleNotifications}
                className="relative p-1"
              >
                <FaBell className="text-white text-base sm:text-lg" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div 
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-blue-900 flex items-center justify-center text-xs sm:text-sm font-bold cursor-pointer"
                onClick={toggleProfileDropdown}
              >
                {userInitial}
              </div>
            </div>
          )}
        </div>

        {/* Mobile Notifications Dropdown */}
        {showNotifications && (
          <div className="fixed inset-0 z-40 mt-16">
            <div
              className="absolute inset-0 bg-black opacity-40"
              onClick={() => setShowNotifications(false)}
            />
            <div 
              ref={notificationsRef}
              className="absolute top-0 right-0 w-full sm:w-72 bg-white text-black shadow-lg rounded-b-lg max-h-[70vh] overflow-y-auto"
            >
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-bold text-gray-800">Notifications</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {notifications.map((notification) => (
                  <div key={notification.id} className="p-3 hover:bg-gray-50 cursor-pointer">
                    <div className="flex justify-between">
                      <h4 className="font-medium text-sm text-gray-900">{notification.title}</h4>
                      <span className="text-xs text-gray-500">{notification.time}</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">{notification.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Profile Dropdown */}
        {showProfileDropdown && (
          <div className="fixed inset-0 z-40 mt-16">
            <div
              className="absolute inset-0 bg-black opacity-40"
              onClick={() => setShowProfileDropdown(false)}
            />
            <div 
              ref={profileRef}
              className="absolute top-0 right-0 w-full sm:w-80 bg-white text-black shadow-lg rounded-b-lg max-h-[70vh] overflow-y-auto"
            >
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center text-lg font-bold">
                    {userInitial}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{fullName}</p>
                    <p className="text-xs text-gray-500">{email}</p>
                  </div>
                </div>
                <Link to="/dashboard">
                  <button className="mt-3 w-full bg-gray-100 text-sm font-medium py-2 rounded-md hover:bg-gray-200">
                    Manage your account
                  </button>
                </Link>
              </div>

              <div className="px-4 py-3">
                <Link to="/subscription">
                  <button className="w-full flex bg-gradient-to-r from-[#1B1464] via-[#1A1B6A] to-[#109BE8] items-center justify-center gap-2   text-white py-2 rounded-md text-sm font-medium hover:from-blue-800 hover:to-blue-500">
                    <FaLock size={12} />
                    Subscribe to premium
                  </button>
                </Link>
              </div>

              <ul className="text-sm text-gray-700 divide-y divide-gray-100">
                
                <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 cursor-pointer">
                <Link to="/referral">
                  <FaUserFriends size={14} className="text-gray-500" />
                  Refer a friend
                  </Link>
                </li>
              
                <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 cursor-pointer">
                  <FaRegStar size={14} className="text-gray-500" />
                  My Watchlist
                </li>
                <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 cursor-pointer">
                  <FaQuestionCircle size={14} className="text-gray-500" />
                  Help center
                </li>
                <li 
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 cursor-pointer"
                  onClick={handleLogout}
                >
                  <FaSignOutAlt size={14} className="text-gray-500" />
                  Sign out
                </li>
              </ul>
            </div>
          </div>
        )}

        <div
          className={`sticky top-0 px-4 py-3 transition-all duration-300 ${
            searchFocused ? "shadow-lg" : "shadow-md"
          } bg-gradient-to-r from-blue-950 to-blue-900`}
        >
          <div className="relative">
            <input
              type="search"
              placeholder="Search for news, symbols or companies"
              className="w-full py-2 sm:py-3 px-4 pr-12 rounded-full bg-white/95 text-xs sm:text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
            <FaSearch className="absolute right-4 top-2.5 sm:top-3.5 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center">
              <img src={Logo} alt="Logo" className="h-10 w-auto" />
            </div>

            <div className="flex-1 max-w-xl mx-8">
              <div className={`relative transition-all duration-200 ${searchFocused ? 'w-full' : 'w-full'}`}>
                <input
                  type="search"
                  placeholder="Search for news, symbols or companies"
                  className="w-full py-2.5 px-4 pr-10 rounded-full bg-white text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-200"
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
                <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link to="/subscription">
                <button className="flex items-center gap-2 px-5 py-2 text-white text-sm rounded-3xl bg-gradient-to-r from-[#1B1464] via-[#1A1B6A] to-[#109BE8] hover:from-sky-600 hover:to-sky-500 shadow hover:shadow-lg transition-all duration-200 active:scale-95">
                  <FaLock size={14} />
                  <span>Subscribe to Premium</span>
                </button>
              </Link>

              {!userInitial ? (
                <>
                  <Link to="/register">
                    <button
                      className="bg-[linear-gradient(90deg,#1B1464_0%,#1A1B6A_40%,#109BE8_100%)]
                                border border-[#218BC5]
                                text-white px-5 py-2
                                rounded-full text-sm font-semibold
                                shadow-[inset_0_0_10px_rgba(0,0,0,0.2)]
                                hover:opacity-90
                                transition-all duration-200 active:scale-95">
                      Get started
                    </button>
                  </Link>

                    <Link to="/login">
                    <button className="border border-white text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-white/5 transition-all duration-200 active:scale-95">
                      Sign in
                    </button>
                  </Link>
                </>
              ) : (
                <div className="flex items-center space-x-4">
                  <div className="relative" ref={notificationsRef}>
                    <button 
                      onClick={toggleNotifications}
                      className="relative p-2 text-white hover:bg-white/10 rounded-full transition-colors duration-200"
                    >
                      <FaBell className="text-lg" />
                      <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>
                    
                    {/* Desktop Notifications Dropdown */}
                    {showNotifications && (
                      <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg z-50 border border-gray-200">
                        <div className="p-3 border-b border-gray-200">
                          <h3 className="font-bold text-gray-800">Notifications</h3>
                        </div>
                        <div className="divide-y divide-gray-100 max-h-80 overflow-y-auto">
                          {notifications.map((notification) => (
                            <div key={notification.id} className="p-3 hover:bg-gray-50 cursor-pointer">
                              <div className="flex justify-between">
                                <h4 className="font-medium text-sm text-gray-900">{notification.title}</h4>
                                <span className="text-xs text-gray-500">{notification.time}</span>
                              </div>
                              <p className="text-xs text-gray-600 mt-1">{notification.content}</p>
                            </div>
                          ))}
                        </div>
                        <div className="p-2 border-t border-gray-200 text-center">
                          <button className="text-xs text-blue-600 hover:text-blue-800">
                            View All Notifications
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="relative" ref={profileRef}>
                    <div
                      className="w-9 h-9 rounded-full bg-white text-blue-900 flex items-center justify-center text-sm font-bold cursor-pointer hover:bg-gray-100 transition"
                      onClick={toggleProfileDropdown}
                    >
                      {userInitial}
                    </div>

                    {/* Desktop Profile Dropdown */}
                    {showProfileDropdown && (
                      <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-50 border border-gray-200">
                        <div className="p-4 border-b border-gray-200">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center text-lg font-bold">
                              {userInitial}
                            </div>
                            <div>
                              <p className="font-semibold text-sm">{fullName}</p>
                              <p className="text-xs text-gray-500">{email}</p>
                            </div>
                          </div>
                          <Link to="/dashboard">
                            <button className="mt-3 w-full bg-gray-100 text-sm font-medium py-2 rounded-md hover:bg-gray-200">
                              Manage your account
                            </button>
                          </Link>
                        </div>

                        <div className="px-4 py-3">
                          <Link to="/subscription">
                            <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#1B1464] via-[#1A1B6A] to-[#109BE8] text-white py-2 rounded-md text-sm font-medium hover:from-blue-800 hover:to-blue-500">
                              <FaLock size={12} />
                              Subscribe to premium
                            </button>
                          </Link>
                        </div>

                        <ul className="text-sm text-gray-700 divide-y divide-gray-100">
                          
                          <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 cursor-pointer">
                          
                            <FaUserFriends size={14} className="text-gray-500" />
                           <Link to="/referral">
                            Refer a friend
                            </Link>
                          </li>
                        
                          <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 cursor-pointer">
                            <FaRegStar size={14} className="text-gray-500" />
                            My Watchlist
                          </li>
                          <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 cursor-pointer">
                            <FaQuestionCircle size={14} className="text-gray-500" />
                            Help center
                          </li>
                          <li 
                            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 cursor-pointer"
                            onClick={handleLogout}
                          >
                            <FaSignOutAlt size={14} className="text-gray-500" />
                            Sign out
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex lg:hidden md:hidden items-center justify-between py-2 border-t border-white/10">
            <div className="flex lg:hidden md:hidden items-center space-x-4">
              <Link to="/watchlist" className="text-sm font-medium text-white hover:text-sky-300">
                Watchlist
              </Link>
              <Link to="/portfolio" className="text-sm font-medium text-white hover:text-sky-300">
                Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;