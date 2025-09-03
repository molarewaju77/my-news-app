import { Accordion, AccordionDetails, AccordionSummary, Box, Drawer, Link as MuiLink, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = ({ mobileOpen, onClose }) => {

  const Links = [
    {text:"Daily Brief", path:"/"},
    {text:"News", path:"/news"},
    {text:"Markets", path:"/market"},
    {text:"Stock Picks", path:"/stock-picks"},
    {text:"Trade Alert", path:"/trade-alert"},
    {text:"Videos", path:"/videos"},
  ]

  const AccodionDetailsLInks = [
    {text:"Academy", path:"/academy"},
    {text:"Community", path:"/community"},
    {text:"AI driven", path:"/ai-driven"},
    {text:"Gamification", path:"gamification"}
  ]
  
  //we created this before the return statement so we dont create it twicw for desktop and mobile
  const Drawerwidth = 234;
  const DrawerContent = (
    <Box sx={{display:"flex", justifyContent:"center", flexDirection:"column",marginTop:"40px", width:{xs: Drawerwidth, md:"200px"}}}>
      <Box sx={{display:"flex", flexDirection:"column"}}>
        {Links.map((Link, index) =>(
          <MuiLink key={index} to={Link.path} component={NavLink} underline='none' sx={{fontSize:"14px",height:"40px",paddingLeft:"26px"}}>
            {Link.text}
          </MuiLink>
        ))
        }
      </Box>
      <Box>
      <Accordion elevation={0}>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>} >
          <Typography sx={{paddingLeft:"10px",fontSize:"14px"}} component="span">Extras</Typography>
        </AccordionSummary>
        {AccodionDetailsLInks.map((AccodionDetailsLInk, index)=> (
          <AccordionDetails key={index} sx={{marginLeft:"25px",display:"flex",p:"10px"}}>
            <MuiLink underline='none' sx={{color:"#6E6E70",fontSize:'14px'}} to={AccodionDetailsLInk.path} component={NavLink} >{AccodionDetailsLInk.text}</MuiLink>
          </AccordionDetails>
        ))}
      </Accordion>
      </Box>
    </Box>
  )
  return (
    <>
    {/* For desktop */}
    <Box sx={{borderRight:"1px solid black",width: "200px", position: "fixed",paddingTop:"80px", height: "100vh" , display:{xs:"none",md:"block"}}} minHeight="100vh" maxHeight="">
      {DrawerContent}
    </Box>

    {/* for mobile screen */}
    <Drawer sx={{width:"200px", position:"fixed "}}
    open={mobileOpen}
    onClick={onClose}
    onClose={onClose}   // clicking outside or Esc will also call onClose
    >
      {DrawerContent}
    </Drawer>
    </>
  )
}

export default Sidebar
