import { Box } from '@mui/material';
import React, { useRef,useState,useEffect } from 'react'
const TRADINGVIEW_SCRIPT_URL = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";

// Expanded list of market cards with popular symbols
const MARKET_CARDS = [
  { symbol: "OANDA:SPX500USD", title: "S&P 500" },
  { symbol: "NASDAQ:NDX", title: "Nasdaq 100" },
  { symbol: "NASDAQ:AAPL", title: "Apple" },
  { symbol: "NASDAQ:TSLA", title: "Tesla" },
  { symbol: "NASDAQ:MSFT", title: "Microsoft" },
  { symbol: "NASDAQ:GOOGL", title: "Google" },
  { symbol: "NASDAQ:AMZN", title: "Amazon" },
  { symbol: "NASDAQ:NVDA", title: "Nvidia" },
  { symbol: "NASDAQ:META", title: "Meta" },
  { symbol: "NYSE:BRK.B", title: "Berkshire" },
  { symbol: "NASDAQ:INTC", title: "Intel" },
  { symbol: "NASDAQ:AMD", title: "AMD" },
  { symbol: "NASDAQ:ADBE", title: "Adobe" },
  { symbol: "NASDAQ:CSCO", title: "Cisco" },
  { symbol: "NASDAQ:PEP", title: "Pepsi" },
  { symbol: "NYSE:WMT", title: "Walmart" },
  { symbol: "NYSE:JNJ", title: "J&J" },
  { symbol: "NYSE:PG", title: "P&G" },
  { symbol: "NYSE:V", title: "Visa" },
  { symbol: "NYSE:MA", title: "Mastercard" },
  { symbol: "NYSE:DIS", title: "Disney" },
  { symbol: "NYSE:KO", title: "Coca-Cola" },
  { symbol: "NYSE:XOM", title: "Exxon" },
  { symbol: "NYSE:CVX", title: "Chevron" },
  { symbol: "NYSE:JPM", title: "JPMorgan" },
  { symbol: "NYSE:GS", title: "Goldman" },
  { symbol: "NYSE:BA", title: "Boeing" },
  { symbol: "NYSE:CAT", title: "Caterpillar" },
  { symbol: "NYSE:HD", title: "Home Depot" },
  { symbol: "NYSE:MCD", title: "McDonald's" },
];


const TradingViewWidget = ({ symbol }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement("script");
    script.src = TRADINGVIEW_SCRIPT_URL;
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol,
      width: "100%",
      height: "100%",
      locale: "en",
      dateRange: "1D",
      colorTheme: "light",
      isTransparent: true,
      autosize: true,
      largeChartUrl: "",
    });

    containerRef.current.innerHTML = "";
    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [symbol]);

  return <div className="w-full h-[90px]" ref={containerRef} />;
};

/**
 * TradingView Mini Card Component
 */
//minicard width was 250 before so i changed it to 175 px so may change it later
//will change the font sizes the width and height later
const TradingViewMiniCard = ({ symbol, title }) => (
  <div className="bg-white rounded-xl border border-gray-200 shadow-sm w-[180px]  flex-shrink-0 flex flex-col justify-between">
    <div className="text-sm font-semibold text-gray-700 flex items-center gap-2 px-2 pt-2">
      <div className="w-5 h-5 rounded-full bg-black text-white text-xs flex items-center justify-center">
        {title.charAt(0)}
      </div>
      {title}
    </div>
    <div className="mt-1">
      <TradingViewWidget symbol={symbol} />
    </div>
  </div>
);

/**
 * Enhanced Market Overview with Auto-Scrolling Effect
 */
const MarketOverview = () => {
  const scrollContainerRef = useRef(null);
  const [cards, setCards] = useState([...MARKET_CARDS, ...MARKET_CARDS]); // Duplicate for seamless looping
  const animationRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollPosition = 0;
    const scrollSpeed = 1; // Adjust speed as needed
    let lastTimestamp = performance.now();

    const autoScroll = (timestamp) => {
      if (!isPaused && container) {
        const delta = timestamp - lastTimestamp;
        lastTimestamp = timestamp;
        
        scrollPosition += (scrollSpeed * delta) / 16; // Normalize to 60fps
        container.scrollLeft = scrollPosition;

        // Reset to start when reaching the end
        if (scrollPosition >= container.scrollWidth / 2) {
          scrollPosition = 0;
          container.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(autoScroll);
    };

    animationRef.current = requestAnimationFrame(autoScroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  return (
    //width 627px on large screen 95% on small sreen(Container) but the actual width is supposed to be 727px on large screen but it is causing overflow that why i reduced to 627px
    <Box sx={{width:{md:"95%", xs:"95vw"}}} >
      <div 
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide py-2 w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {cards.map((card, idx) => (
          <TradingViewMiniCard
            key={`${card.symbol}-${idx}`}
            symbol={card.symbol}
            title={card.title}
          />
        ))}
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </Box>
  );
}

export default MarketOverview
