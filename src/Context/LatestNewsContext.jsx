// src/context/NewsContext.js
import { createContext, useState, useEffect } from 'react';

//mock data for latest news array in the fetch ...
import NewsImg from "../assets/news.png"
import CommentImg from "../assets/commentImg.png"


export const LatestNewsContext = createContext();

export const LatestNewsProvider = ({ children }) => {
  const [latestNews, setLatestNews] = useState([]);
  const [loading, setLoading] = useState(true);
  

//so i used mock data in the fectch so we will replace with the api call later when  the api is ready 
  useEffect(() => {
    const fetchNews = async () => {
      const latestNewsData = [
          {
          id: 1,
          image: NewsImg,
          title: "US stock futures dip after Trump slaps 30% tariffs on Mexico , EU; CPI awaited",
          summary: [
            "Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com --",
            " U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- ",
            "This move follows similar levies against Canada.",
            "Analysts warn the tariffs could impact global economic stability."
          ]
          ,
          comments: [
            { id: 1, name: "Frank Victor", image: CommentImg , time: "Today 6 : 15 PM" , text: "Stocks down rates up is back again. if you park in short term higher rates they get cut by next spring. feels like TINA again but with a twist", },
            { id: 2, name: "Stephen Daniel", image: CommentImg , time: "Today 5 : 14 PM" , text: "Stocks down rates up is back again. if you park in short term higher rates they get cut by next spring. feels like TINA again but with a twist", },
            { id: 3, name: "Alice Dais", image: CommentImg , time: "Today 8 : 14 PM" , text: "Stocks down rates up is back again. if you park in short term higher rates they get cut by next spring. feels like TINA again but with a twist", },  
          ]
        },
          {
          id: 2,
          image: NewsImg,
          title: "Musk says Tesla shareholders will vote on xAI investment",
          summary: [
            "Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com --",
            " U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- ",
            "This move follows similar levies against Canada.",
            "Analysts warn the tariffs could impact global economic stability."
          ],
          comments: [
            { id: 1, name: "Frank Victor", image: CommentImg , time: "Today 6 : 15 PM" , text: "Stocks down rates up is back again. if you park in short term higher rates they get cut by next spring. feels like TINA again but with a twist", },
            { id: 2, name: "Stephen Daniel", image: CommentImg , time: "Today 5 : 14 PM" , text: "Stocks down rates up is back again. if you park in short term higher rates they get cut by next spring. feels like TINA again but with a twist", },
            { id: 3, name: "Alice Dais", image: CommentImg , time: "Today 8 : 14 PM" , text: "Stocks down rates up is back again. if you park in short term higher rates they get cut by next spring. feels like TINA again but with a twist", },  
          ]
        },
          {
          id: 3,
          image: NewsImg,
          title: "Bitcoin price today: dips below $118k amid regulatory caution",
          summary: [
            "Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com --",
            " U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- ",
            "This move follows similar levies against Canada.",
            "Analysts warn the tariffs could impact global economic stability."
          ],
          comments: [
            { id: 1, name: "Frank Victor", image: CommentImg , time: "Today 6 : 15 PM" , text: "Stocks down rates up is back again. if you park in short term higher rates they get cut by next spring. feels like TINA again but with a twist", },
            { id: 2, name: "Stephen Daniel", image: CommentImg , time: "Today 5 : 14 PM" , text: "Stocks down rates up is back again. if you park in short term higher rates they get cut by next spring. feels like TINA again but with a twist", },
            { id: 3, name: "Alice Dais", image: CommentImg , time: "Today 8 : 14 PM" , text: "Stocks down rates up is back again. if you park in short term higher rates they get cut by next spring. feels like TINA again but with a twist", },  
          ]
        },
          {
          id: 4,
          image: NewsImg,
          title: "reaking up Nvidia; signs 3 orders to support AI",
          summary: [
            "Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com --",
            " U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- ",
            "This move follows similar levies against Canada.",
            "Analysts warn the tariffs could impact global economic stability."
          ], 
          comments: [
            { id: 1, name: "Frank Victor", image: CommentImg , time: "Today 6 : 15 PM" , text: "Stocks down rates up is back again. if you park in short term higher rates they get cut by next spring. feels like TINA again but with a twist", },
            { id: 2, name: "Stephen Daniel", image: CommentImg , time: "Today 5 : 14 PM" , text: "Stocks down rates up is back again. if you park in short term higher rates they get cut by next spring. feels like TINA again but with a twist", },
            { id: 3, name: "Alice Dais", image: CommentImg , time: "Today 8 : 14 PM" , text: "Stocks down rates up is back again. if you park in short term higher rates they get cut by next spring. feels like TINA again but with a twist", },  
          ]
        },
          {
          id: 5,
          image: NewsImg,
          title: "A/C Units Among Recent Recalled Items Sold at Costco",
          summary: [
            "Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com --",
            " U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war after President Donald Trump slapped 30% tariffs on Mexico and the European Union, after similar levies against Canada and Investing.com -- ",
            "This move follows similar levies against Canada.",
            "Analysts warn the tariffs could impact global economic stability."
          ],
          comments: [
            { id: 1, name: "Frank Victor", image: CommentImg , time: "Today 6 : 15 PM" , text: "Stocks down rates up is back again. if you park in short term higher rates they get cut by next spring. feels like TINA again but with a twist", },
            { id: 2, name: "Stephen Daniel", image: CommentImg , time: "Today 5 : 14 PM" , text: "Stocks down rates up is back again. if you park in short term higher rates they get cut by next spring. feels like TINA again but with a twist", },
            { id: 3, name: "Alice Dais", image: CommentImg , time: "Today 8 : 14 PM" , text: "Stocks down rates up is back again. if you park in short term higher rates they get cut by next spring. feels like TINA again but with a twist", },  
          ]
        },
      ];

      setTimeout(() => {
        setLatestNews(latestNewsData);
        setLoading(false);
      }, 1000);
    };

    fetchNews();
  }, []);

  return (
    <LatestNewsContext.Provider value={{ latestNews, loading }}>
      {children}
    </LatestNewsContext.Provider>
  );
};
