// import * as React from "react";
// import CssBaseline from "@mui/material/CssBaseline";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { Box } from "@mui/material";
// import homeimg from "../images/main.gif";



// const theme = createTheme();


// export default function Home() {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <main>
//         <Box
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             minHeight: "calc(100vh - 128px)",
//           }}
//         >
//           <img
//             style={{ width: "60vw" }}
//             src={homeimg}
//             alt="random"
//           />
//         </Box>
//       </main>
//     </ThemeProvider>
//   );
// }

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import homeimg from "../images/aivideo.mp4";

// Create theme
const theme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "91.5vh", // Full viewport height
            background: "linear-gradient(135deg, #00bcd4, #8e24aa)", // Gradient background
            padding: "16px",
            textAlign: "center", // Center text
            overflow: "hidden", // Prevent scrolling
          }}
        >

          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "white",
              mb: 3,
              fontFamily: "'Roboto', sans-serif",
              letterSpacing: "1px",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)", // Shadow for text
            }}
          >
            Welcome to EtherVote
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              mb: 3,
              fontFamily: "'Roboto', sans-serif",
              fontWeight: "300",
            }}
          >
            Empowering Secure Elections with Blockchain Technology
          </Typography>


          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: "80vw",
              overflow: "hidden",
              borderRadius: "10px",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)", // Shadow for image container
            }}
          >
            {/* <img
              src={homeimg}
              alt="Home Animation"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                transition: "transform 0.5s ease-in-out", // Smooth hover effect
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1)"; // Zoom effect on hover
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)"; // Reset on mouse leave
              }}
            /> */}
            <video
              src={homeimg} // Replace with the path to your video file
              alt="Home Animation"
              style={{
                width: "100%",
                height: "50vh",
                objectFit: "cover",
                transition: "transform 0.5s ease-in-out", // Smooth hover effect
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1)"; // Zoom effect on hover
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)"; // Reset on mouse leave
              }}
              loop // Optional: make video loop
              muted // Optional: mute the video
              autoPlay // Optional: autoplay the video
            />

          </Box>
        </Box>
      </main>
    </ThemeProvider>
  );
}
