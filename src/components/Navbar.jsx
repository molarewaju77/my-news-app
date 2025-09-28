import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Badge,
  Avatar,
  Box,
  InputBase,
  Button,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  Search as SearchIcon,
  AccountCircle,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import Logo from "../assets/_2359108631152.svg";

const NavBar = ({ onMenuClick }) => {
  const [anchorNotif, setAnchorNotif] = useState(null);
  const [anchorProfile, setAnchorProfile] = useState(null);

  // 👉 Replace later with real Auth
  const [user, setUser] = useState(null);

  const notifications = [
    { id: 1, title: "Market Update", content: "Tech stocks rally" },
    { id: 2, title: "New Stock Pick", content: "Check out AAPL" },
    { id: 3, title: "Motivational Quote", content: "Patience pays in markets" },
  ];

  return (
    <AppBar position="sticky" sx={{ bgcolor: "#1B1464" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left side - Menu & Logo */}
        <Box display="flex" alignItems="center">
          <IconButton color="inherit" onClick={onMenuClick} sx={{ display: { md: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Box component={Link} to="/" sx={{ ml: 1 }}>
            <Box
              component="img"
              src={Logo}
              alt="Logo"
              sx={{
                height: { xs: 20, md: 32 }, // 👈 20px on small, 32px on md+
              }}
            />
          </Box>
        </Box>

        {/* Middle - Search */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            bgcolor: "white",
            borderRadius: "20px",
            px: 2,
            width: "40%",
          }}
        >
          <SearchIcon sx={{ color: "gray", mr: 1 }} />
          <InputBase placeholder="Search news, symbols, companies…" fullWidth />
        </Box>

        {/* Right side - Conditional UI */}
        <Box display="flex" alignItems="center" gap={2}>
          {!user ? (
            // 👉 Not logged in
            <>
              <Button
                component={Link}
                to="/register"
                sx={{
                  background: "linear-gradient(90deg,#1B1464,#1A1B6A,#109BE8)",
                  color: "white",
                  px: "16px",
                  py: "6px",
                  borderRadius: "20px",
                  fontSize: "14px",
                  textTransform: "none",
                  "&:hover": { opacity: 0.9, background: "linear-gradient(90deg,#1B1464,#1A1B6A,#109BE8)" },
                }}
              >
                Get Started
              </Button>
              <Button
                component={Link}
                to="/login"
                sx={{
                  display: { xs: "none", md: "inline-flex" }, // 👈 only show from md up
                  color: "white",
                  fontSize: "14px",
                  textTransform: "none",
                  border: "1px solid white",  // <-- outline
                  borderRadius: "20px",
                  px: "16px",
                  py: "6px",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.1)", // subtle hover
                    border: "1px solid white",
                  },
                }}
              >
                Sign In
              </Button>
            </>
          ) : (
            // 👉 Logged in
            <>
              {/* Notifications */}
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

              {/* Profile */}
              <IconButton color="inherit" onClick={(e) => setAnchorProfile(e.currentTarget)}>
                <Avatar sx={{ bgcolor: "white", color: "#1B1464" }}>U</Avatar>
              </IconButton>
              <Menu
                anchorEl={anchorProfile}
                open={Boolean(anchorProfile)}
                onClose={() => setAnchorProfile(null)}          
              >
                <MenuItem component={Link} to="/dashboard">Manage Account</MenuItem>
                <MenuItem component={Link} to="/referral">Refer a Friend</MenuItem>
                <MenuItem component={Link} to="/watchlist">My Watchlist</MenuItem>
                <MenuItem component={Link} to="/help">Help Center</MenuItem>
                <MenuItem onClick={() => setUser(null)}>Sign Out</MenuItem>
              </Menu>
            </>
          )}
        </Box>
      </Toolbar>

      {/* Mobile Search (hidden on desktop) */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          alignItems: "center",
          bgcolor: "white",
          borderRadius: "20px",
          mx: 2,
          my: 1,
          px: 2,
        }}
      >
        <SearchIcon sx={{ color: "gray", mr: 1 }} />
        <InputBase placeholder="Search…" fullWidth />
      </Box>
    </AppBar>
  );
};

export default NavBar;
