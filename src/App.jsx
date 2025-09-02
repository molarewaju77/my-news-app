import './App.css'
import { Box,Typography } from "@mui/material";
import BaseLayout from './layouts/BaseLayout';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NewsPage from './pages/NewsPage';
import MarketPage from './pages/MarketPage';
import StockPicksPage from './pages/StockPicksPage';
import TradeAlertPage from './pages/TradeAlertPage';
import VideosPage from './pages/VideosPage';

import NavbarLayout from './layouts/NavbarLayout';
import Subscription from './components/subscription';

function App() {
  return (
    <Routes>
      <Route element={<BaseLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/news' element={<NewsPage/>}/>
        <Route path='/market' element={<MarketPage/>}/>
        <Route path='/stock-picks' element={<StockPicksPage/>}/>
        <Route path='/trade-alert' element={<TradeAlertPage/>}/>
        <Route path='/videos' element={<VideosPage/>}/>
      </Route>

      {/* pages using only Navbar Layout{only NAvbar at the Top} */}
      <Route element={<NavbarLayout/>}>
        <Route path='/subscription' element={<Subscription/>}/>
      </Route>
    </Routes>
  )
}

export default App
