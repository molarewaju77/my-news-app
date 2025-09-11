import { Box } from "@mui/material";

import lockSYmbol from "../assets/lock-symbol.png"

export default function LockedCell() {

return(
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 32,
      height: 32,
      backgroundColor: "rgba(0,0,0,0.08)", // subtle gray background
    }}
   >
    <img
      src={lockSYmbol}
      alt="Locked"
      style={{ width: 18, height: 18 }}
    />
   </Box>
   );
}