import { Box } from '@mui/material';
import React, { createContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const VideoContext = createContext();

export const VideoProvider = ({children}) => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        const fetchVideos = async () => {
            const VideosData = [
                {
                    id: 1,
                    title: "Oracle climbs 40% after earnings report & what it means for the market",
                    thumbnail: "https://img.youtube.com/vi/qUYW8F3zfrE/hqdefault.jpg",
                    duration: "06:15",
                    url: "https://www.youtube.com/watch?v=qUYW8F3zfrE",
                    time: "Just now",
                    featured: true,
                    summary: "Spear Invest founder and chief investment officer Ivana Delevska joins BD8 Capital Partners CEO and chief investment officer."
                },
                {
                    id: 2,
                    title: "Markets in 3 Minutes: US Stocks Will Continue to Underperform",
                    thumbnail: "https://img.youtube.com/vi/xn_JYMrRQeo/hqdefault.jpg",
                    duration: "03:00",
                    url: "https://www.youtube.com/watch?v=xn_JYMrRQeo",
                    time: "2 hours ago",
                    summary: "Quick market update explaining why US stocks are expected to lag behind global peers."
                },
                {
                    id: 3,
                    title: "Earnings season commentary: What investors need to know",
                    thumbnail: "https://img.youtube.com/vi/tgbNymZ7vqY/hqdefault.jpg",
                    duration: "05:42",
                    url: "https://www.youtube.com/watch?v=tgbNymZ7vqY",
                    time: "13h ago",
                    summary: "Breaking down key earnings reports and how they impact investor sentiment."
                },
                {
                    id: 4,
                    title: "Tech stocks rally: Can it last through 2025?",
                    thumbnail: "https://img.youtube.com/vi/3fumBcKC6RE/hqdefault.jpg",
                    duration: "07:10",
                    url: "https://www.youtube.com/watch?v=3fumBcKC6RE",
                    time: "1 day ago",
                    summary: "Analysis of the ongoing tech rally and potential risks moving forward."
                },
                {
                    id: 5,
                    title: "Federal Reserve update: Key takeaways for investors",
                    thumbnail: "https://img.youtube.com/vi/VYOjWnS4cMY/hqdefault.jpg",
                    duration: "04:55",
                    url: "https://www.youtube.com/watch?v=VYOjWnS4cMY",
                    time: "2 days ago",
                    summary: "Highlights from the latest Federal Reserve meeting and market implications."
                },
                {
                    id: 6,
                    title: "AI boom: Why NVIDIA and AMD are in focus",
                    thumbnail: "https://img.youtube.com/vi/L_jWHffIx5E/hqdefault.jpg",
                    duration: "08:22",
                    url: "https://www.youtube.com/watch?v=L_jWHffIx5E",
                    time: "3 days ago",
                    summary: "Exploring how NVIDIA and AMD are driving growth in the AI sector."
                },
                {
                    id: 7,
                    title: "Global markets weekly wrap",
                    thumbnail: "https://img.youtube.com/vi/hY7m5jjJ9mM/hqdefault.jpg",
                    duration: "09:30",
                    url: "https://www.youtube.com/watch?v=hY7m5jjJ9mM",
                    time: "4 days ago",
                    summary: "A round-up of the most important events shaping global markets this week."
                },
                {
                    id: 8,
                    title: "What higher oil prices mean for inflation",
                    thumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/hqdefault.jpg",
                    duration: "05:05",
                    url: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
                    time: "5 days ago",
                    summary: "Discussion on rising oil prices and their impact on inflation trends."
                },
                {
                    id: 9,
                    title: "Beginner’s guide to ETF investing",
                    thumbnail: "https://img.youtube.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
                    duration: "11:12",
                    url: "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
                    time: "6 days ago",
                    summary: "Educational video introducing exchange-traded funds (ETFs) to new investors."
                },
                {
                    id: 10,
                    title: "Weekly stock picks: Top 3 to watch",
                    thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg",
                    duration: "06:45",
                    url: "https://www.youtube.com/watch?v=9bZkp7q19f0",
                    time: "1 week ago",
                    summary: "Analysts share three stock picks investors should keep an eye on this week."
                }
            ];

            setTimeout(() => {
                setVideos(VideosData);
                setLoading(false);
            }, 1000);  
        }
        fetchVideos(); 
    }, [])
    
    return (
        <VideoContext.Provider value={{videos, loading}}>
            {children}
        </VideoContext.Provider>
    )
}
