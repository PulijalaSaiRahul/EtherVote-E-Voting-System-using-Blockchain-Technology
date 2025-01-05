import React from "react";
import { useLocation } from "react-router-dom";
import { Grid, Toolbar, Typography,Box } from "@mui/material";
import Candidate from "../Components/Admin/Candidate";

const ResultCandidate = () => {
  const location = useLocation();
  const data = location.state.info;

  const style = {
    pageTitle: {
      paddingTop: 5,
      paddingBottom: 5,
    },
  };

  return (
    <div style={{ paddingBottom: 25 }}>
      <Box
          sx={{
            // display: "flex",
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
      <Toolbar>
        <Grid container pt={3} spacing={2}>
          <Grid container justifyContent="center" alignItems="center">
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
            Results of {data.name}
          </Typography>
          </Grid>
          {data.candidates != null &&
            data.candidates.map((item, index) => {
              return (
                <Grid item xs={6} md={4} key={index}>
                  <Candidate
                    username={item}
                    index={index}
                    id={data._id}
                    vote={data.vote[index]}
                  />
                </Grid>
              );
            })}
        </Grid>
      </Toolbar>
      </Box>
    </div>
  );
};

export default ResultCandidate;
