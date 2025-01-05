// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { Link } from "react-router-dom";

// export default function CardLayout(props) {
//   const image = "https://picsum.photos/200/300?random=" + props.index;
//   const link = "" + props.link;

//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         height="140"
//         image={image}
//         alt="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {props.title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary" component="div">
//           <strong>Candidates :</strong>
//           {props.candidates.slice(0, 2).map((item, index) => {
//             return (
//               <Typography key={index}>
//                 {index + 1}. {item}
//                 {index === 1 && props.candidates.length > 2 && " ..."}
//               </Typography>
//             );
//           })}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Link to={link} state={{ info: props.info }}>
//           <Button size="small">View Details</Button>
//         </Link>
//       </CardActions>
//     </Card>
//   );
// }

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function CardLayout(props) {
  const image = "https://picsum.photos/200/300?random=" + props.index;
  const link = "" + props.link;

  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: "15px", // Apply 15px rounded corners
        boxShadow: 3, // Adding shadow for depth
        '&:hover': {
          boxShadow: 6, // Increased shadow on hover
          transform: 'scale(1.05)', // Slight zoom effect on hover
          transition: '0.3s ease-in-out', // Smooth transition
        },
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={props.title} // Make sure alt text is dynamic and descriptive
        sx={{
          borderTopLeftRadius: "15px", // Rounded top corners of image
          borderTopRightRadius: "15px", // Rounded top corners of image
        }}
      />
      <CardContent sx={{ paddingBottom: 2,textAlign: 'left' }}>
        <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
          <strong>Candidates:</strong>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.candidates.slice(0, 2).map((item, index) => {
            return (
              <Typography key={index} variant="body2" color="text.secondary">
                {index + 1}. {item}
                {index === 1 && props.candidates.length > 2 && " ..."}
              </Typography>
            );
          })}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'right' }}>
        <Link to={link} state={{ info: props.info }} style={{ textDecoration: 'none' }}>
          <Button size="small" sx={{ backgroundColor: "#00bcd4", color: "white", '&:hover': { backgroundColor: "#008c9e" } }}>
            View Details
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

