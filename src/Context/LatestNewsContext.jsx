import React, { createContext, useState } from "react";
import CommentImg from "../assets/commentImg.png";
import News3 from "../assets/news.png";

export const LatestNewsContext = createContext();

export const LatestNewsProvider = ({ children }) => {
  const latestNewsData = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1561414927-6d86591d0c4f?auto=format&fit=crop&w=800&q=80",
      title:
        "US stock futures dip after Trump slaps 30% tariffs on Mexico, EU; CPI awaited",
      summary: [
        "Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war...",
        "This move follows similar levies against Canada.",
        "Analysts warn the tariffs could impact global economic stability.",
      ],
      comments: [
        {
          id: 1,
          name: "Frank Victor",
          image: CommentImg,
          time: "Today 6:15 PM",
          text: "Stocks down rates up is back again...",
        },
        {
          id: 2,
          name: "Stephen Daniel",
          image: CommentImg,
          time: "Today 5:14 PM",
          text: "Stocks down rates up is back again...",
        },
        {
          id: 3,
          name: "Alice Dais",
          image: CommentImg,
          time: "Today 8:14 PM",
          text: "Stocks down rates up is back again...",
        },
      ],
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&w=800&q=80",
      title: "Musk says Tesla shareholders will vote on xAI investment",
      summary: [
        "Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war...",
        "This move follows similar levies against Canada.",
        "Analysts warn the tariffs could impact global economic stability.",
      ],
      comments: [
        {
          id: 1,
          name: "Frank Victor",
          image: CommentImg,
          time: "Today 6:15 PM",
          text: "Stocks down rates up is back again...",
        },
        {
          id: 2,
          name: "Stephen Daniel",
          image: CommentImg,
          time: "Today 5:14 PM",
          text: "Stocks down rates up is back again...",
        },
        {
          id: 3,
          name: "Alice Dais",
          image: CommentImg,
          time: "Today 8:14 PM",
          text: "Stocks down rates up is back again...",
        },
      ],
    },
    {
      id: 3,
      image:News3,
      title: "Bitcoin price today: dips below $118k amid regulatory caution",
      summary: [
        "Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war...",
        "This move follows similar levies against Canada.",
        "Analysts warn the tariffs could impact global economic stability.",
      ],
      comments: [
        {
          id: 1,
          name: "Frank Victor",
          image: CommentImg,
          time: "Today 6:15 PM",
          text: "Stocks down rates up is back again...",
        },
        {
          id: 2,
          name: "Stephen Daniel",
          image: CommentImg,
          time: "Today 5:14 PM",
          text: "Stocks down rates up is back again...",
        },
        {
          id: 3,
          name: "Alice Dais",
          image: CommentImg,
          time: "Today 8:14 PM",
          text: "Stocks down rates up is back again...",
        },
      ],
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      title: "Breaking up Nvidia; signs 3 orders to support AI",
      summary: [
        "Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war...",
        "This move follows similar levies against Canada.",
        "Analysts warn the tariffs could impact global economic stability.",
      ],
      comments: [
        {
          id: 1,
          name: "Frank Victor",
          image: CommentImg,
          time: "Today 6:15 PM",
          text: "Stocks down rates up is back again...",
        },
        {
          id: 2,
          name: "Stephen Daniel",
          image: CommentImg,
          time: "Today 5:14 PM",
          text: "Stocks down rates up is back again...",
        },
        {
          id: 3,
          name: "Alice Dais",
          image: CommentImg,
          time: "Today 8:14 PM",
          text: "Stocks down rates up is back again...",
        },
      ],
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
      title: "A/C Units Among Recent Recalled Items Sold at Costco",
      summary: [
        "Investing.com -- U.S. stock index futures fell on Sunday evening amid fears of an intensifying trade war...",
        "This move follows similar levies against Canada.",
        "Analysts warn the tariffs could impact global economic stability.",
      ],
      comments: [
        {
          id: 1,
          name: "Frank Victor",
          image: CommentImg,
          time: "Today 6:15 PM",
          text: "Stocks down rates up is back again...",
        },
        {
          id: 2,
          name: "Stephen Daniel",
          image: CommentImg,
          time: "Today 5:14 PM",
          text: "Stocks down rates up is back again...",
        },
        {
          id: 3,
          name: "Alice Dais",
          image: CommentImg,
          time: "Today 8:14 PM",
          text: "Stocks down rates up is back again...",
        },
      ],
    },
  ];

  const [latestNews] = useState(latestNewsData);

  return (
    <LatestNewsContext.Provider value={{ latestNews }}>
      {children}
    </LatestNewsContext.Provider>
  );
};
