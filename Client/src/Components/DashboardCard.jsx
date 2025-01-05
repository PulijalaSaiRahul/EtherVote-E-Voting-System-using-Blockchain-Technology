// import React from "react";
// import { Card, CardContent, Typography } from "@mui/material";
// import { Box } from "@mui/system";
// import GroupIcon from "@mui/icons-material/Group";

// const DashboardCard = (props) => {
//   return (
//     <div>
//       <div className="content" style={{ paddingBottom: "20px" }}>
//         <Card sx={{ display: "flex", padding: "15px" }}>
//           <Box sx={{ display: "flex", flexDirection: "column" }}>
//             <CardContent sx={{ flex: "1 0 auto" }}>
//               <Typography component="div" variant="h4">
//                 <div style={{ justifyContent: "center" }}>{props.title}</div>
//               </Typography>
//             </CardContent>
//             <CardContent>
//               <Typography component="div" variant="h6">
//                 <div style={{ justifyContent: "center" }}>{props.data}</div>
//               </Typography>
//             </CardContent>
//           </Box>
//           <Box>
//             <GroupIcon sx={{ display: "flex", pt: "20px", fontSize: "35px" }} />
//           </Box>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default DashboardCard;

import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import GroupIcon from "@mui/icons-material/Group";

const DashboardCard = (props) => {
  return (
    <div style={{ margin: "20px" }}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "20px",
          background: "linear-gradient(145deg, #ffffff, #f0f0f0)",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "15px",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.03)",
            boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <Box sx={{ flex: 1, textAlign: "left" }}>
          <CardContent>
            <Typography
              component="div"
              variant="h4"
              sx={{ fontWeight: "bold", color: "#333" }}
            >
              {props.title}
            </Typography>
            <Typography
              component="div"
              variant="h6"
              sx={{ marginTop: "10px", color: "#555" }}
            >
              {props.data}
            </Typography>
          </CardContent>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#f5f5f5",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
          }}
        >
          <GroupIcon sx={{ fontSize: "35px", color: "#1976d2" }} />
        </Box>
      </Card>
    </div>
  );
};

export default DashboardCard;
