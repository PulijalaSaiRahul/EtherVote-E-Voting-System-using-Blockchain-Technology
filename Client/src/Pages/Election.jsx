import { Grid, Toolbar, Typography , Box} from "@mui/material";
import React from "react";
import CardLayout from "../Components/User/CardLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import { serverLink } from "../Data/Variables";

const Election = () => {
  // const style = {
  //   pageTitle: {
  //     paddingTop: 5,
  //     paddingBottom: 5,
  //   },
  // };

  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      let res = await axios.get(serverLink + "voting/elections");
      let users = res.data;
      setData(users);
    }
    getData();
  }, []);

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
            Elections
          </Typography>
          </Grid>
          {data.map((item, index) => {
            return (
              <Grid item xs={6} md={4} key={index}>
                <CardLayout
                  index={index}
                  title={item.name}
                  candidates={item.candidates}
                  election={item._id}
                  link={item._id}
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

export default Election;
