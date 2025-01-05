// import React, { useEffect, useState } from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { Avatar, Backdrop, CircularProgress } from "@mui/material";
// import axios from "axios";
// import { stringToAv, stringToColor } from "../../Data/Methods";
// import { serverLink, isFaceRecognitionEnable } from "../../Data/Variables";
// import { useNavigate } from "react-router-dom";

// const CandidateLayout = (props) => {
//   const navigate = useNavigate();
//   const [data, setData] = useState("");
//   const [msg, setMsg] = useState("");
//   const link = "/login";

//   const [loading, setLoading] = useState(false);

//   const handleClick = async (id) => {
//     setLoading(true);
//     if (isFaceRecognitionEnable) {
//       setMsg(" Accessing Camera");
//       try {
//         var res = await axios.post(serverLink + "op");
//       } catch (err) {
//         alert(err.response.data);
//         setLoading(false);
//         return;
//       }
//       let userName = res.data;

//       setMsg(userName + " Detected");

//       res = await axios.get(serverLink + "user/username/" + userName);
//       let user = res.data[0];
//       if (!user) {
//         alert("User with " + userName + "username Not Found");
//         setLoading(false);
//         return;
//       }
//       const tmp = {
//         candidate_id: data._id,
//         candidate_username: props.username,
//         election_id: props.id,
//         user_id: user._id,
//         user_username: user.username,
//       };

//       setMsg("");
//       setLoading(false);

//       navigate(link, { state: { info: tmp } });
//     } else {
//       const sendingData = {
//         candidate_id: data._id,
//         candidate_username: props.username,
//         election_id: props.id,
//       };
//       navigate(link, { state: { info: sendingData } });
//     }
//   };

//   useEffect(() => {
//     async function getData() {
//       let res = await axios.get(serverLink + "candidate/" + props.username);
//       let user = res.data;
//       setData(user);
//     }
//     getData();
//     // eslint-disable-next-line
//   }, [props.username]);

//   return (
//     <>
//       <Backdrop
//         sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
//         open={loading}
//       >
//         <div>
//           <CircularProgress color="inherit" />
//         </div>
//         <div>{msg}</div>
//       </Backdrop>

//       <Card sx={{ maxWidth: 345 }}>
//         <CardMedia
//           height="140"
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             height: "285px",
//             alignItems: "center",
//           }}
//         >
//           {" "}
//           <Avatar
//             aria-label="recipe"
//             sx={{
//               width: "200px",
//               height: "200px",
//               fontSize: "50px",
//               bgcolor: stringToColor(data.firstName + " " + data.lastName),
//             }}
//           >
//             {data !== "" && stringToAv(data.firstName, data.lastName)}
//           </Avatar>
//         </CardMedia>
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             {props.username}
//           </Typography>
//           <Typography variant="body2" color="text.secondary" component="div">
//             {data !== null && (
//               <>
//                 <Typography>
//                   Name : {data.firstName + " " + data.lastName}
//                 </Typography>
//                 <Typography>Location: {data.location}</Typography>
//               </>
//             )}
//           </Typography>
//         </CardContent>
//         <CardActions>
//           <Button size="small" onClick={() => handleClick(data._id)}>
//             Vote
//           </Button>
//         </CardActions>
//       </Card>
//     </>
//   );
// };

// export default CandidateLayout;

import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, Backdrop, CircularProgress } from "@mui/material";
import axios from "axios";
import { stringToAv, stringToColor } from "../../Data/Methods";
import { serverLink, isFaceRecognitionEnable } from "../../Data/Variables";
import { useNavigate } from "react-router-dom";

const CandidateLayout = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const [msg, setMsg] = useState("");
  const link = "/login";

  const [loading, setLoading] = useState(false);

  const handleClick = async (id) => {
    setLoading(true);
    if (isFaceRecognitionEnable) {
      setMsg(" Accessing Camera");
      try {
        var res = await axios.post(serverLink + "op");
      } catch (err) {
        alert(err.response.data);
        setLoading(false);
        return;
      }
      let userName = res.data;

      setMsg(userName + " Detected");

      res = await axios.get(serverLink + "user/username/" + userName);
      let user = res.data[0];
      if (!user) {
        alert("User with " + userName + " username Not Found");
        setLoading(false);
        return;
      }
      const tmp = {
        candidate_id: data._id,
        candidate_username: props.username,
        election_id: props.id,
        user_id: user._id,
        user_username: user.username,
      };

      setMsg("");
      setLoading(false);

      navigate(link, { state: { info: tmp } });
    } else {
      const sendingData = {
        candidate_id: data._id,
        candidate_username: props.username,
        election_id: props.id,
      };
      navigate(link, { state: { info: sendingData } });
    }
  };

  useEffect(() => {
    async function getData() {
      let res = await axios.get(serverLink + "candidate/" + props.username);
      let user = res.data;
      setData(user);
    }
    getData();
    // eslint-disable-next-line
  }, [props.username]);

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <div>
          <CircularProgress color="inherit" />
        </div>
        <div>{msg}</div>
      </Backdrop>

      <Card
        sx={{
          maxWidth: 345,
          borderRadius: "15px", // Rounded corners for the card
          boxShadow: 3, // Shadow for a modern look
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease", // Smooth transition
          "&:hover": {
            transform: "scale(1.05)", // Slight zoom on hover
            boxShadow: 8, // Bigger shadow on hover
          },
        }}
      >
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
        <CardContent sx={{ paddingBottom: 2 }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: "bold", textAlign: "center" }}>
            {props.username}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: "left", marginBottom: 1 }}>
            {data !== null && (
              <>
                <Typography>
                  <strong>Name:</strong> {data.firstName + " " + data.lastName}
                </Typography>
                <Typography>
                  <strong>Location:</strong> {data.location}
                </Typography>
              </>
            )}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button
            size="small"
            onClick={() => handleClick(data._id)}
            sx={{
              backgroundColor: "#00bcd4",
              color: "white",
              "&:hover": {
                backgroundColor: "#008c9e",
              },
              borderRadius: "5px",
              fontWeight: "bold",
              padding: "8px 20px", // Add padding for better button size
            }}
          >
            Vote
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CandidateLayout;
