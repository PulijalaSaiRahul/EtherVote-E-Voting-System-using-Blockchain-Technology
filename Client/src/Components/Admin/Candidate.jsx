import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import axios from "axios";
import { stringToColor, stringToAv } from "../../Data/Methods";
import { serverLink } from "../../Data/Variables";

const Candidate = (props) => {
  const [data, setData] = useState("");

  useEffect(() => {
    async function getData() {
      let res = await axios.get(serverLink + "candidate/" + props.username);
      let user = res.data;
      setData(user);
    }
    getData();
  }, [props.username]);

  return (
    <>
      <Card sx={{
          maxWidth: 345,
          borderRadius: "15px", // Rounded corners for the card
          boxShadow: 3, // Shadow for a modern look
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease", // Smooth transition
          "&:hover": {
            transform: "scale(1.05)", // Slight zoom on hover
            boxShadow: 8, // Bigger shadow on hover
          },
        }}>
        <CardMedia
          height="140"
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "285px",
            alignItems: "center",
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px", // Rounded top corners for image
          }}
        >
          {" "}
          <Avatar
            aria-label="recipe"
            sx={{
              width: "200px",
              height: "200px",
              fontSize: "50px",
              bgcolor: stringToColor(data.firstName + " " + data.lastName),
              border: "5px solid white", // Add a white border around the avatar
              boxShadow: 2, // Slight shadow for depth
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.1)", // Zoom on hover for the avatar
              },
            }}
          >
            {data !== "" && stringToAv(data.firstName, data.lastName)}
          </Avatar>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.username}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            {data !== null && (
              <>
                <Typography>
                  Name : {data.firstName + " " + data.lastName}
                </Typography>
                <Typography>Total Vote : {props.vote}</Typography>
                <Typography>Location: {data.location}</Typography>
              </>
            )}
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small" onClick={() => handleClick(data._id)}>
            Vote
          </Button> */}
        </CardActions>
      </Card>
    </>
  );
};

export default Candidate;
