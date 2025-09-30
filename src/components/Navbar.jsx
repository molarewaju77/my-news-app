import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  Avatar,
  Menu,
  MenuItem,
  Badge,
  Typography,
} from "@mui/material";
import { LockOutline, Menu as MenuIcon, Notifications as NotificationsIcon } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/_2359108631152.svg";
import { useAuth } from "../Context/AuthContext";

const NavBar = ({ onMenuClick }) => {
  const {user, logout} = useAuth();
  const [anchorNotif, setAnchorNotif] = useState(null);
  const [anchorProfile, setAnchorProfile] = useState(null);
  const navigate = useNavigate();

  const notifications = [
    { id: 1, title: "Market Update", content: "Tech stocks rally" },
    { id: 2, title: "New Stock Pick", content: "Check out AAPL" },
    { id: 3, title: "Motivational Quote", content: "Patience pays in markets" },
  ];

  const handleLogout = () => {
    logout();  // calls the context logout
    setAnchorProfile(null)
    navigate("/login"); 
  };
  return (
    <AppBar position="sticky" sx={{ bgcolor: "#1B1464", px: { xs: 0, md: 4 }, py: 1 }}>
      <Toolbar
        sx={{
          display: "flex",
          flexWrap:"wrap",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Box
          display="flex"
          alignItems="center"
          order={{ xs: 1, md: 1 }}
        >
          <IconButton
            color="inherit"
            onClick={onMenuClick}
            sx={{ display: { md: "none" }, mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <Box component={Link} to="/">
            <Box
              component="img"
              src={Logo}
              alt="Logo"
              sx={{ height: { xs: 22, md: 32 } }}
            />
          </Box>
        </Box>

        {/* Subscribe Button */}
        {user && (
        <Box
          sx={{
            order: { xs: 3, md: 2 },
            flexGrow: { md: 1 , xs: 1},
            display: "flex",
            justifyContent: { xs: "flex-start", md: "center" },
            mt: { xs: 1, md: 0 },
          }}
        >
          <Button component={Link} to="/subscription"
            startIcon={<LockOutline/>}
            sx={{
              background: `
                linear-gradient(180deg, #1B1464 0%, #1A1B6A 5%, #109BE8 100%),
                linear-gradient(360deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))
              `,
              boxShadow: '0 4px 12px rgba(16, 155, 232, 0.4)', // subtle light-blue glow
              color: '#fff',
              px: 3,
              py: 1.25,
              borderRadius: '999px', // makes it fully pill-shaped
              fontSize: '0.875rem',
              fontWeight: 500,
              textTransform: 'none',
              width: { xs: '100%', md: 'auto' },
              transition: 'all 0.3s ease',
              '&:hover': {
                opacity: 0.95,
                boxShadow: '0 6px 16px rgba(16, 155, 232, 0.5)',
              },
            }}
          >
            Subscribe to Premium
          </Button>
        </Box>
        )
      }

        {/* Right side - Sign In / Get Started or Profile */}
        <Box
          display="flex"
          alignItems="center"
          gap={2}
          order={{ xs: 2, md: 3 }}
        >
          {!user ? (
            <>
              <Button
                component={Link}
                to="/login"
                sx={{
                  color: "white",
                  fontSize: "14px",
                  textTransform: "none",
                  border: "1px solid white",
                  borderRadius: "20px",
                  display:{xs:"none",md:"block"},
                  px: "16px",
                  py: "6px",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                Sign In
              </Button>
              <Button
                component={Link}
                to="/register"
                sx={{
                  background: `
                    linear-gradient(180deg, #1B1464 0%, #1A1B6A 5%, #109BE8 100%),
                    linear-gradient(360deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))
                  `,
                  color: '#fff',
                  px: 3,
                  py: 1.25,
                  borderRadius: '999px',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  textTransform: 'none',
                  boxShadow: '0 4px 12px rgba(16, 155, 232, 0.4)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    opacity: 0.95,
                    boxShadow: '0 6px 16px rgba(16, 155, 232, 0.5)',
                    textDecoration: 'none', // avoid underline on hover
                  },
                  width: { xs: '100%', md: 'auto' },
                }}
              >
                Get Started
              </Button>
            </>
          ) : (
            <>
              <IconButton color="inherit" onClick={(e) => setAnchorNotif(e.currentTarget)}>
                <Badge badgeContent={notifications.length} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <Menu
                anchorEl={anchorNotif}
                open={Boolean(anchorNotif)}
                onClose={() => setAnchorNotif(null)}
              >
                {notifications.map((n) => (
                  <MenuItem key={n.id}>
                    <Box>
                      <Typography variant="subtitle2">{n.title}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {n.content}
                      </Typography>
                    </Box>
                  </MenuItem>
                ))}
              </Menu>
              <IconButton 
                color="inherit" 
                onClick={(e) => setAnchorProfile(e.currentTarget)}
              >
                <Avatar
                  src={user?.image || null} 
                  sx={{ width: 42, height: 42, bgcolor: "white", color: "#1B1464", cursor:"pointer" }}
                >
                  {/* Show first letter of firstName if no image */}
                  {!user?.image && user?.firstName
                    ? user.firstName.charAt(0).toUpperCase()
                    : null}
                </Avatar>
              </IconButton>
              <Menu
                anchorEl={anchorProfile}
                open={Boolean(anchorProfile)}
                onClose={() => setAnchorProfile(null)}
              >
                <MenuItem component={Link} to="/dashboard" onClick={() => setAnchorProfile(null)}>Manage Account</MenuItem>
                <MenuItem component={Link} to="/referral" onClick={() => setAnchorProfile(null)}>Refer a Friend</MenuItem>
                <MenuItem component={Link} to="/watchlist" onClick={() => setAnchorProfile(null)}>My Watchlist</MenuItem>
                <MenuItem component={Link} to="/help" onClick={() => setAnchorProfile(null)}>Help Center</MenuItem>
                <MenuItem onClick={handleLogout} >Sign Out</MenuItem>
              </Menu>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
