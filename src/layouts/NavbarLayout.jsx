import React from 'react'
import NavBar from '../components/Navbar'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

const NavbarLayout = () => {
  return (
    <Box>
        <NavBar/>
        <Outlet/>
    </Box>
  )
}

export default NavbarLayout
