import './App.css'
import { Box,Typography } from "@mui/material";
import BaseLayout from './layouts/BaseLayout';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NewsPage from './pages/NewsPage';
import NewsDetailsPage from './pages/NewsDetailsPage';
import MarketPage from './pages/MarketPage';
import StockPicksPage from './pages/StockPicksPage';
import TradeAlertPage from './pages/TradeAlertPage';
import VideosPage from './pages/VideosPage';

import NavbarLayout from './layouts/NavbarLayout';
import Subscription from './components/subscription';
import Registration from './pages/Auth/Registration';
import Login from './pages/Auth/LoginPage';

import Dashboard from "./pages/dashboard/Dashboard"; 


//Auth components
import SetPassword from "../src/components/Auth/SetPassword";
import NumberVal  from "../src/components/Auth/Number"; 
import CodePhoneNumber from "../src/components/Auth/CodeEmail";  

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<BaseLayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/news' element={<NewsPage/>}/>
          <Route path='/news-details' element={<NewsDetailsPage/>}/>
          <Route path='/market' element={<MarketPage/>}/>
          <Route path='/stock-picks' element={<StockPicksPage/>}/>
          <Route path='/trade-alert' element={<TradeAlertPage/>}/>
          <Route path='/videos' element={<VideosPage/>}/>
        </Route>

        {/* pages /components using only Navbar Layout{only NAvbar at the Top} */}
        <Route element={<NavbarLayout/>}>
          <Route path='/subscription' element={<Subscription/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Route>

          {/* for sign up flow*/}
          <Route path='/register' element={<Registration/>} />
          <Route path="/Login" element={<Login />} />
          <Route path='/set-password' element={<SetPassword/>} ></Route>
          <Route path="/NumberVal" element={<NumberVal/>}/>
          <Route path="/code-phone-number" element={<CodePhoneNumber/>}/> 
      </Routes>
    </>
  )
}

export default App
