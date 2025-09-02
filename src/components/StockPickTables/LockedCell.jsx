import React from "react";
import { Box, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

const LockedCell = ({ children }) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Blurred text */}
      <Typography
        sx={{
          filter: "blur(4px)",
          color: "transparent",
          position:"relative",
          textShadow: "0 0 8px rgba(0,0,0,0.5)", // makes blur look stronger
        }}
      >
        {children}
      </Typography>

      {/* Lock icon centered */}
      <LockIcon
        sx={{
          position: "absolute",
          fontSize: 16,
          color: "gray",
        }}
      />
    </Box>
  );
};

export default LockedCell;
