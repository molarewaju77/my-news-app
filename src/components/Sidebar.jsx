import { Accordion, AccordionDetails, AccordionSummary, Box, Drawer, Link as MuiLink, Typography, useMediaQuery, useTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';

import { NavLink } from 'react-router-dom'

const Sidebar = ({ mobileOpen, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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

  // helper to close when a link is clicked
  const handleNavClick = () => {
    if (isMobile) {
      onClose();
    }
  };
  
  
  //we created this before the return statement so we dont create it twicw for desktop and mobile
  const Drawerwidth = 234;
  const DrawerContent = (
    <Box sx={{display:"flex", justifyContent:"center", flexDirection:"column",paddingTop:{xs:"60px", md:"40px"}, width:{xs: Drawerwidth, md:"200px",position:"relative"}}}>
      <Box sx={{display:"flex", flexDirection:"column"}}>
        {Links.map((link, index) =>(
          <NavLink key={index} to={link.path}  onClick={handleNavClick}
            style={({isActive}) => ({
              color: isActive ? "#218BC5" : "black",
              backgroundColor: isActive && "rgba(250, 250, 250, 1)",
              borderRight: isActive && " 2px solid rgba(0, 0, 0, 1)",
              paddingLeft:"25px",
              fontSize:"14px",
              height:"40px",
              display: "flex",
              alignItems: "center",
            })}
          >
            {link.text}
          </NavLink>
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
      <CloseIcon onClick={onClose}  sx={{position:"absolute", top:"20px", right:"20px",display:{xs:"block", md:"none"}}}/>
    </Box>
  )
  return (
    <>
    {/* For desktop */}
    <Box sx={{width: "200px", position: "fixed",paddingTop:"80px", height: "100vh" , display:{xs:"none",md:"block"}}} minHeight="100vh" maxHeight="">
      {DrawerContent}
    </Box>

    {/* for mobile screen */}
    <Drawer sx={{width:"200px", position:"fixed "}}
    open={mobileOpen}
    onClose={onClose}   // clicking outside or Esc will also call onClose
    >
      {DrawerContent}
    </Drawer>
    </>
  )
}

export default Sidebar
