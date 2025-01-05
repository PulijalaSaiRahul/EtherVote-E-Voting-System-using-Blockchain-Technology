// import { Breadcrumbs, Button } from "@mui/material";
// import React from "react";
// import { Link } from "react-router-dom";

// const ContentHeader = (props) => {
//   const url = window.location.pathname;
//   const filename = url.substring(url.lastIndexOf("/admin") + 7);
//   const data = filename.split("/");

//   return (
//     <>
//       <div className="content__header">
//         <div className="content__header__path">
//           <Breadcrumbs maxItems={4} aria-label="breadcrumb">
//             <Link underline="hover" color="inherit" to="/admin/dashboard">
//               Home
//             </Link>
//             {data.map((item, index) => {
//               return (
//                 <Link underline="hover" key={index} color="inherit" to="/">
//                   {item}
//                 </Link>
//               );
//             })}
//           </Breadcrumbs>
//         </div>
//         {props.title && (
//           <Link to={props.link}>
//             <Button variant="contained" className="content__header__button">
//               {props.title}
//             </Button>
//           </Link>
//         )}
//       </div>
//       <hr />
//     </>
//   );
// };

// export default ContentHeader;

import { Breadcrumbs, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ContentHeader = (props) => {
  const url = window.location.pathname;
  const filename = url.substring(url.lastIndexOf("/admin") + 7); // Extract route from the URL
  const data = filename.split("/"); // Split the path into segments

  // Create a helper function to generate the route dynamically
  const createBreadcrumbLink = (pathSegments, index) => {
    return `/admin/${pathSegments.slice(0, index + 1).join("/")}`;
  };

  return (
    <>
      <div className="content__header">
        <div className="content__header__path" style={{ marginBottom: "1px" }}>
          <Breadcrumbs
            maxItems={4}
            aria-label="breadcrumb"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              gap: "8px", // Spacing between breadcrumb items
              fontSize: "16px", // Larger font size for better readability
              fontWeight: "600", // Make breadcrumb text bold
              color: "#1976d2", // Color for breadcrumb items
            }}
          >
            <Link
              underline="hover"
              color="inherit"
              to="/admin/dashboard"
              style={{ fontWeight: "600", color: "#1976d2" }} // Bold "Home" link
            >
              Home
            </Link>
            {data.map((item, index) => {
              const breadcrumbLink = createBreadcrumbLink(data, index); // Generate the correct link dynamically
              return (
                <Link
                  underline="hover"
                  key={index}
                  color="inherit"
                  to={breadcrumbLink} // Link to the correct route dynamically
                  style={{
                    fontWeight: "600", // Bold each breadcrumb item
                    color: "#1976d2", // Set color for each item
                    display: "flex", // Ensure inline items
                    alignItems: "center", // Align items properly
                  }}
                >
                  {item}
                </Link>
              );
            })}
          </Breadcrumbs>
        </div>
        {props.title && (
          <Link to={props.link}>
            <Button
              variant="contained"
              className="content__header__button"
              sx={{
                padding: "8px 16px",
                backgroundColor: "#1976d2",
                borderRadius: "4px",
                "&:hover": {
                  backgroundColor: "#1565c0", // Darker blue on hover
                },
                fontSize: "14px", // Adjust button text size
                textTransform: "capitalize", // Keep button text natural
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {props.title}
            </Button>
          </Link>
        )}
      </div>
      <hr style={{ marginTop: "16px", border: "1px solid #ddd" }} />
    </>
  );
};

export default ContentHeader;

