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
import VideoDetailsPage from './pages/VideoDetailsPage';

import NavbarLayout from './layouts/NavbarLayout';
import Subscription from './components/subscription';
import Registration from './pages/Auth/Registration';
import Login from './pages/Auth/LoginPage';

import Dashboard from "./pages/dashboard/Dashboard"; 

//auth context
import AuthProvider from './Context/AuthContext';

//Auth components
import ResetPassword from './pages/Auth/ResetPassword';
import NumberVal  from "../src/components/Auth/Number"; 
import CodePhoneNumber from "../src/components/Auth/CodeEmail";  

import ScrollToTop from './components/ScrollToTop';

import {  LatestNewsProvider } from './Context/LatestNewsContext';
import {NewsProvider} from './Context/NewsContext';
import {StockProvider} from './Context/StockContext';
import { VideoProvider } from './Context/VideoContext';

function App() {
  return (
    <AuthProvider>
      <LatestNewsProvider>
        <NewsProvider>
          <StockProvider>
            <VideoProvider>
              <ScrollToTop />
              <Routes>
                <Route element={<BaseLayout/>}>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/news' element={<NewsPage/>}/>
                  <Route path='/news/:id' element={<NewsDetailsPage/>}/>
                  <Route path='/market' element={<MarketPage/>}/>  
                  <Route path='/stock-picks' element={<StockPicksPage/>}/>
                  <Route path='/trade-alert' element={<TradeAlertPage/>}/>
                  <Route path='/videos' element={<VideosPage/>}/>
                  <Route path='/videos/:id' element={<VideoDetailsPage/>}/>
                </Route>

                {/* pages /components using only Navbar Layout{only NAvbar at the Top} */}
                <Route element={<NavbarLayout/>}>
                  <Route path='/subscription' element={<Subscription/>}/>
                  <Route path="/dashboard" element={<Dashboard/>}/>
                </Route>

                {/* for sign up flow*/}
                <Route path='/register' element={<Registration/>} />
                <Route path="/Login" element={<Login />} />
                <Route path='/reset-password' element={<ResetPassword/>}/>
                <Route path="/NumberVal" element={<NumberVal/>}/>
                <Route path="/code-phone-number" element={<CodePhoneNumber/>}/> 
              </Routes>   
            </VideoProvider>  
          </StockProvider>
        </NewsProvider>
      </LatestNewsProvider>
    </AuthProvider>
  )
}

export default App
