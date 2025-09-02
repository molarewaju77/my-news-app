import React from "react";
import { FaCheck, FaQuestionCircle, FaPhone } from "react-icons/fa";

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
  return (
    <div className="bg-white py-12 w-[80%] sm:w-[100%] md:w-[80%]  flex items-center flex-col m-auto">
      <h2 className="text-xl md:text-2xl font-semibold mb-10 text-center text-[#0F0C43]">
        Subscription options
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
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
      </div>

      {/* Help and Contact Section */}
      <div className="mt-12 text-sm text-gray-800 self-start">
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
  );
}
