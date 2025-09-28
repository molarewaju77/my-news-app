import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const StockTableContext = createContext();

export  const StockProvider = ({children}) => {
  const [rows, setRows] =useState([]);
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    const fetchRows = async () => {
      const RowsData = [
        // VBTC-500 (4)
        { ticker: "PLTR", name: "Palantir Technologies Inc", marketCap: "64.66B", currentPrice: 142.1, sharePortfolio: "62.27%", marginHigh: "-4.13%", marginLow: "569.34%", wksHigh: 148.22, wksLow: 21.23, category: "VBTC-500" },
        { ticker: "UBER", name: "Uber Technologies Inc", marketCap: "122.3B", currentPrice: 62.4, sharePortfolio: "15.42%", marginHigh: "-3.55%", marginLow: "78.92%", wksHigh: 66.1, wksLow: 24.7, category: "VBTC-500" },
        { ticker: "MSFT", name: "Microsoft Corp", marketCap: "3.45T", currentPrice: 425.6, sharePortfolio: "23.12%", marginHigh: "-2.91%", marginLow: "64.15%", wksHigh: 432.8, wksLow: 290.3, category: "VBTC-500" },
        { ticker: "GOOGL", name: "Alphabet Inc", marketCap: "2.18T", currentPrice: 168.2, sharePortfolio: "10.32%", marginHigh: "-1.72%", marginLow: "54.47%", wksHigh: 172.3, wksLow: 98.6, category: "VBTC-500" },
        { ticker: "CRM", name: "Salesforce Inc", marketCap: "300.5B", currentPrice: 275.8, sharePortfolio: "8.42%", marginHigh: "-2.18%", marginLow: "47.65%", wksHigh: 284.9, wksLow: 186.4, category: "VBTC-500" },
        { ticker: "ADBE", name: "Adobe Inc", marketCap: "270.3B", currentPrice: 515.4, sharePortfolio: "7.92%", marginHigh: "-3.14%", marginLow: "51.32%", wksHigh: 528.6, wksLow: 375.8, category: "VBTC-500" },

        // Global Stars (4)
        { ticker: "AAPL", name: "Apple Inc", marketCap: "2.86T", currentPrice: 227.12, sharePortfolio: "18.53%", marginHigh: "-2.44%", marginLow: "89.72%", wksHigh: 232.67, wksLow: 119.55, category: "Global Stars" },
        { ticker: "AMZN", name: "Amazon.com Inc", marketCap: "1.88T", currentPrice: 189.4, sharePortfolio: "12.47%", marginHigh: "-3.01%", marginLow: "73.64%", wksHigh: 196.7, wksLow: 103.2, category: "Global Stars" },
        { ticker: "META", name: "Meta Platforms Inc", marketCap: "1.34T", currentPrice: 497.3, sharePortfolio: "9.87%", marginHigh: "-5.23%", marginLow: "84.12%", wksHigh: 515.6, wksLow: 275.8, category: "Global Stars" },
        { ticker: "NFLX", name: "Netflix Inc", marketCap: "288.4B", currentPrice: 650.7, sharePortfolio: "6.25%", marginHigh: "-4.41%", marginLow: "77.53%", wksHigh: 672.2, wksLow: 345.9, category: "Global Stars" },
        { ticker: "DIS", name: "Walt Disney Co", marketCap: "210.1B", currentPrice: 101.8, sharePortfolio: "4.11%", marginHigh: "-1.85%", marginLow: "46.23%", wksHigh: 105.2, wksLow: 82.5, category: "Global Stars" },
        { ticker: "NVDA", name: "NVIDIA Corp", marketCap: "3.12T", currentPrice: 1187.6, sharePortfolio: "22.16%", marginHigh: "-1.05%", marginLow: "112.12%", wksHigh: 1203.5, wksLow: 545.1, category: "Global Stars" },
        
        // Moonshots (4)
        { ticker: "TSLA", name: "Tesla Inc", marketCap: "842.15B", currentPrice: 269.85, sharePortfolio: "8.11%", marginHigh: "-6.21%", marginLow: "91.38%", wksHigh: 287.50, wksLow: 140.95, category: "Moonshots" },
        { ticker: "SPCE", name: "Virgin Galactic Holdings", marketCap: "650M", currentPrice: 1.87, sharePortfolio: "2.11%", marginHigh: "-12.73%", marginLow: "215.43%", wksHigh: 6.7, wksLow: 0.87, category: "Moonshots" },
        { ticker: "NKLA", name: "Nikola Corp", marketCap: "750M", currentPrice: 5.23, sharePortfolio: "1.89%", marginHigh: "-9.18%", marginLow: "187.25%", wksHigh: 12.5, wksLow: 3.4, category: "Moonshots" },
        { ticker: "RIVN", name: "Rivian Automotive Inc", marketCap: "14.6B", currentPrice: 12.8, sharePortfolio: "3.75%", marginHigh: "-7.61%", marginLow: "142.12%", wksHigh: 24.6, wksLow: 9.1, category: "Moonshots" },

        // Iron Dome (4)
        { ticker: "NVDA", name: "NVIDIA Corp", marketCap: "3.12T", currentPrice: 1187.62, sharePortfolio: "21.76%", marginHigh: "-1.28%", marginLow: "112.59%", wksHigh: 1203.54, wksLow: 545.12, category: "Iron dome" },
        { ticker: "AMD", name: "Advanced Micro Devices Inc", marketCap: "312.6B", currentPrice: 191.3, sharePortfolio: "6.74%", marginHigh: "-2.92%", marginLow: "98.47%", wksHigh: 198.6, wksLow: 92.1, category: "Iron dome" },
        { ticker: "INTC", name: "Intel Corp", marketCap: "174.3B", currentPrice: 40.7, sharePortfolio: "4.83%", marginHigh: "-4.11%", marginLow: "55.82%", wksHigh: 44.9, wksLow: 23.5, category: "Iron dome" },
        { ticker: "ASML", name: "ASML Holding NV", marketCap: "420.1B", currentPrice: 1045.2, sharePortfolio: "7.68%", marginHigh: "-3.27%", marginLow: "74.39%", wksHigh: 1078.3, wksLow: 580.4, category: "Iron dome" },

        // ETFs - Index Funds (4)
        { ticker: "SPY", name: "SPDR S&P 500 ETF", marketCap: "500B", currentPrice: 520.6, sharePortfolio: "25.61%", marginHigh: "-0.85%", marginLow: "28.43%", wksHigh: 526.9, wksLow: 412.3, category: "ETFs- Index Funds" },
        { ticker: "QQQ", name: "Invesco QQQ Trust", marketCap: "300B", currentPrice: 451.8, sharePortfolio: "19.54%", marginHigh: "-1.12%", marginLow: "36.25%", wksHigh: 458.7, wksLow: 342.2, category: "ETFs- Index Funds" },
        { ticker: "VTI", name: "Vanguard Total Stock Market ETF", marketCap: "350B", currentPrice: 261.9, sharePortfolio: "17.42%", marginHigh: "-1.36%", marginLow: "33.47%", wksHigh: 266.5, wksLow: 198.3, category: "ETFs- Index Funds" },
        { ticker: "ARKK", name: "ARK Innovation ETF", marketCap: "12.4B", currentPrice: 48.2, sharePortfolio: "8.33%", marginHigh: "-4.74%", marginLow: "61.28%", wksHigh: 53.7, wksLow: 33.5, category: "ETFs- Index Funds" },
      ];

      const categoriesData = [
        { label: "VBTC-500", value: "VBTC-500" },
        { label: "Tenet", value: "Tenet"},
        { label: "Iron dome", value: "Iron dome" },
        { label: "Global Stars", value: "Global Stars" },
        { label: "Moonshots", value: "Moonshots" },
        { label: "ETFs- Index Funds", value: "ETFs- Index Funds" },
      ];

      setTimeout(() => {
        setRows(RowsData)
        setCategories(categoriesData)
        setLoading(false)
      }, 500);
    }
    fetchRows();
  },[])

  return (  
    <StockTableContext.Provider value={{ rows, categories, loading}}>
        {children}
    </StockTableContext.Provider>
  )
}