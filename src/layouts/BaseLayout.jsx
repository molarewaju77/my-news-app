import { createTheme,ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import {Box} from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import RightBar from "../components/RightBar";
import { useState    } from "react";
import { useLocation } from "react-router-dom";


const theme = createTheme({
    palette: {
        primary: {
            main: "#1B1464", //blue
        },
        secondary: {
            main:"#179301", //green
        }
    },
    typography: {
        fontFamily:"Arial, sans-serif",
    }
})



export default function BaseLayout(){

    const [mobileOpen, setMobileOpen] = useState(false);


    // //backend dev will write the logic to confirm if the user is a premium user then pass the props to the pages 
    // // state for premimum content
    // const [isPremium, setIsPremium] = useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    //to hide the right bar when we are on stock pick page 
    const { pathname } = useLocation();
    const noRightBarRoutes = ["/stock-picks"];

    const showRightbar = !noRightBarRoutes.includes(pathname);

    return(
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Box sx={{}}>
            {/* Navbar */}
            <Navbar onMenuClick={handleDrawerToggle}/>

            <Box display="flex" sx={{ overflowX: "hidden" }}>
            {/* Fixed Sidebar */}
            <Box
                sx={{
                position: "fixed",
                left: 0,
                top: 0,
                bottom: 0,
                width: { md: "200px", xs: "0" }, // reserve width for sidebar
                flexShrink: 0,
                }}
            >
                <Sidebar mobileOpen={mobileOpen} onClose={handleDrawerToggle} />
            </Box>

            {/* Main content + RightBar */}
            <Box
                sx={{
                marginLeft: { xs: "0", md: "200px" }, // offset for fixed sidebar
                flex: 1,
                mt: "21px",
                display: "flex",
                flexDirection: "column",
                gap: "30px",
                overflowX: "hidden", // ensure no horizontal scroll
                }}
            >
                {/* Top content area */}
                <Box
                display="flex"
                gap="30px"
                sx={{
                    flexDirection: { md: "row", xs: "column" },
                    flexShrink: 0,
                    overflowX: "hidden", // prevent children from pushing out
                }}
                >
                <Box flex={1} minWidth={0}>
                    <Outlet context={{showRightbar}}/>
                </Box>
                <Box sx={{ flexShrink: 0 }}>
                    {showRightbar && <RightBar/>}
                </Box>
                </Box>

                {/* Footer below Main + RightBar */}
                <Box sx={{ position: "sticky", bottom: "0", width: "100%" }}>
                <Footer />
                </Box>
            </Box>
            </Box>

            </Box>

        </ThemeProvider>
    );
}
