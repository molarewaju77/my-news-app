import React, {useEffect, useState } from 'react'
import { createContext } from 'react'
import NewsImg from "../assets/TrendNewsImg.png"


export const NewsContext = createContext();

export const NewsProvider = ({children}) => {
    const [News, setNews] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
          const fetchNews = async () => {
            const NewsData = [
              {
                id: 1,
                category: "trending",
                image: NewsImg,
                title: "Government Launches New Initiative",
                summary: "Power Banks, A/C Units Among Recent Recalled Items Sold at Costco...",
                timestamp: "Today, 4:42 PM",
                publisher: "Ridwan",
                comments: [
                  { id: 1, author: "Aisha", text: "Great move!", time: "4:50 PM" },
                  { id: 2, author: "Emeka", text: "Hope it works out.", time: "5:02 PM" }
                ]
              },
              {
                id: 2,
                category: "tech",
                image: NewsImg,
                title: "Tech Giants Announce Partnership",
                summary: "Big moves in the tech world...",
                timestamp: "Today, 3:30 PM",
                publisher: "Ridwan",
                comments: [
                  { id: 1, author: "John", text: "This is huge!", time: "3:45 PM" }
                ]
              },
            ];
              setTimeout(() => {
                setNews(NewsData);
                setLoading(false);
              }, 1000);
            };

            fetchNews();
    },[])


  return (
    <NewsContext.Provider value={{News, loading}}>
      {children}
    </NewsContext.Provider>
  )
};
