import { createContext, useState } from 'react';
import NewsImg from "../assets/TrendNewsImg.png";

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const NewsData = [
    {
      id: 1,
      category: "trending",
      image: NewsImg,
      title: "Government Launches New Initiative",
      summary: "Power Banks, A/C Units Among Recent Recalled Items Sold at Costco...",
      timestamp: "Today, 4:15 AM",
      publisher: "Michael",
      comments: [
        { id: 1, author: "Aisha", text: "Great move!", time: "9:30 AM" },
        { id: 2, author: "Emeka", text: "Hope it works out.", time: "10:10 AM" }
      ]
    },
    {
      id: 2,
      category: "trending",
      image: NewsImg,
      title: "Stock Market Opens Higher",
      summary: "Investors are optimistic following global economic data...",
      timestamp: "Today, 4:35 AM",
      publisher: "Michael",
      comments: [
        { id: 1, author: "Chinedu", text: "Finally some good news!", time: "11:20 AM" }
      ]
    },
    {
      id: 3,
      category: "trending",
      image: NewsImg,
      title: "Oil Prices Surge After OPEC+ Announcement",
      summary: "Crude prices jumped as OPEC+ agreed to extend production cuts...",
      timestamp: "Today, 4:45 AM",
      publisher: "Michael",
      comments: [
        { id: 1, author: "Ngozi", text: "Transport fares will rise again...", time: "2:00 PM" }
      ]
    },
    {
      id: 4,
      category: "tech",
      image: NewsImg,
      title: "Tech Giants Announce Partnership",
      summary: "Big moves in the tech world as industry leaders collaborate...",
      timestamp: "Today, 1:20 AM",
      publisher: "Michael",
      comments: [
        { id: 1, author: "John", text: "This is huge!", time: "10:30 AM" }
      ]
    },
    {
        id: 5,
        category: "tech",
        image: NewsImg,
        title: "AI Startups Attract Record Investments",
        summary: "Venture capital firms are pouring billions into artificial intelligence...",
        timestamp: "Today, 2:05 AM",
        publisher: "Michael",
        comments: [
        { id: 1, author: "Tosin", text: "AI is the future!", time: "12:20 PM" }
        ]
    },
    {
        id: 6,
        category: "tech",
        image: NewsImg,
        title: "Smartphone Maker Unveils New Flagship Device",
        summary: "The device boasts advanced AI features and longer battery life...",
        timestamp: "Today, 2:40 AM",
        publisher: "Michael",
        comments: [
        { id: 1, author: "Ada", text: "Looks exciting!", time: "3:00 PM" }
        ]
    }
    // ...rest of your mock data
  ];

  const [News] = useState(NewsData);

  return (
    <NewsContext.Provider value={{ News }}>
      {children}
    </NewsContext.Provider>
  );
};





