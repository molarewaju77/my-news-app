import { Box, IconButton } from "@mui/material";
import React from "react";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { FaCheck, FaQuestionCircle, FaPhone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    title: "BASIC",
    price: "00",
    billing: "Free",
    features: ["News Alert", "Earnings Alerts", "Stockertim Videos"],
    bgColor: "bg-gray-200",
    titleColor: "bg-gray-600 text-white",
    buttonColor: "from-[#001F9B] to-[#00B6F0]",
  },
  {
    title: "PREMIUM",
    price: "10",
    billing: "Billed Quarterly",
    features: [
      "News Alert",
      "Earnings Alerts",
      "Stockertim Videos",
      "Stockertim Portfolio Alerts",
      "Daily Briefing",
      "Weekly Roundup",
      "Stock Picks",
      "HY Review Event - Video meeting 1 hour",
      "Full Year Review Events - Video Meeting 1 hour",
    ],
   
    titleColor: "bg-sky-500 text-white",
    buttonColor: "from-[#001F9B] to-[#00B6F0]",
  },
  {
    title: "PRIVATE",
    price: "100",
    billing: "Billed Quarterly",
    features: [
      "News Alert",
      "Earnings Alerts",
      "Stockertim Videos",
      "Stockertim Portfolio Alerts",
      "Daily Briefing",
      "Weekly Roundup",
      "Stock Picks",
      "Quarterly Checkups Voice call - 15 minutes",
      "Monthly Portfolio Checkups - Video call 45 minutes",
      "Bespoke Portfolio Design - Video call 45 minutes",
      "HY Review Event - Video meeting 1 hour",
      "Full Year Review Events - Video Meeting 1 hour",
    ],
  
    titleColor: "bg-green-700 text-white",
    buttonColor: "from-[#001F9B] to-[#00B6F0]",
  },
];

export default function SubscriptionPlans() {
  const navigate = useNavigate();
  
  return (
    <Box sx={{pt:'60px'}}>
      <IconButton
        onClick={() => {
          if (window.history.length > 2) {
            navigate(-1);
          } else {
            navigate("/"); // fallback to home
          }
        }}
          sx={{
            position:'absolute',
            right:{xs:"10px", md:"60px"},
            top:{xs:"10px", md:"20px"}
          }}
        >
          <CloseOutlinedIcon/>
      </IconButton>
      <div className="bg-white pb-12 flex items-center flex-col m-auto shadow-md  w-[90%] sm:w-[70%] lg:w-[80%]">
        <div className="bg-[#1B1464] py-[20px] w-[100%] pl-[39px]">
          <h2 className="text-xl md:text-2xl font-semibold text- text-[#FAFAFA]">
            Subscription options
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6  w-[80%] sm:w-[100%] md:w-[80%]  mt-[40px]">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${plan.bgColor} rounded-lg shadow-md p-6`}
            >
              <h3
                className={`text-center text-sm font-semibold py-2 px-4 rounded-full w-fit mx-auto mb-4 ${plan.titleColor}`}
              >
                {plan.title}
              </h3>

              <div className="text-center my-4">
                <p className="text-4xl font-bold">${plan.price}</p>
                <p className="text-sm text-gray-600">{plan.billing}</p>
              </div>

              <div className="flex justify-center my-4">
                <button
                  className={`bg-gradient-to-r ${plan.buttonColor} text-white font-semibold py-2 px-6 rounded-full text-sm`}
                >
                  Select plan
                </button>
              </div>

              <ul className="text-sm text-gray-800 mt-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <FaCheck className="text-black mt-[2px] mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* Help and Contact Section */}
          <div className="mt-12 text-sm text-gray-800 flex gap-2">
            <div className="flex items-center space-x-2 mb-2">
              <FaQuestionCircle className="text-black" />
              <span>Help</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhone className="text-black" />
              <span>Call us at +44 7398 750 479</span>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}
