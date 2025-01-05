// import React from "react";
// import { Button, Typography, Box, Grid, Paper } from "@mui/material";
// import InputField from "../../../Components/Form/InputField";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ErrorMessage } from "../../../Components/Form/ErrorMessage";
// import axios from "axios";
// import ContentHeader from "../../../Components/ContentHeader";
// import { serverLink } from "../../../Data/Variables";

// const AddUser = () => {
//   const navigate = useNavigate();
//   const [locationData, setLocation] = useState({});

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const username = e.target.username.value;
//     const fname = e.target.fname.value;
//     const lname = e.target.lname.value;
//     const email = e.target.email.value;
//     const mobile = e.target.mobile.value;
//     const password = e.target.password.value;
//     const location = locationData.country_name;
//     const profile = e.target.profile.files[0];
//     const sendData = new FormData();
//     sendData.append("username", username);
//     sendData.append("fname", fname);
//     sendData.append("lname", lname);
//     sendData.append("email", email);
//     sendData.append("mobile", mobile);
//     sendData.append("password", password);
//     sendData.append("location", location);
//     sendData.append("profile", profile);
//     sendData.append("avatar", username + "." + profile.name.split(".").pop());

//     console.log(sendData);

//     axios.post(serverLink + "register", sendData).then((res) => {
//       console.log(res.status);
//       if (res.status === 201) {
//         navigate("/admin/user");
//       }
//     });
//   };

//   useEffect(() => {
//     async function getData() {
//       await axios
//         .get("https://geolocation-db.com/json/")
//         .then((res) => {
//           setLocation(res.data);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
//     getData();
//   }, []);

//   return (
//     <div className="admin__content">
//       <ContentHeader />
//       <div className="content">
//         <form onSubmit={handleSubmit} method="POST">
//           <Paper elevation={3}>
//             <Box px={3} py={2}>
//               <Typography variant="h6" align="center" margin="dense">
//                 Add User
//               </Typography>
//               <Grid container pt={3} spacing={3}>
//                 <Grid item xs={12} sm={12}>
//                   <InputField
//                     label="username"
//                     name="username"
//                     fullWidth={true}
//                   />
//                   <ErrorMessage />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <InputField
//                     label="First Name"
//                     name="fname"
//                     fullWidth={true}
//                   />
//                   <ErrorMessage />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <InputField label="Last Name" name="lname" fullWidth={true} />
//                   <ErrorMessage />
//                 </Grid>
//                 <Grid item xs={12} sm={12}>
//                   <InputField label="E-mail" name="email" fullWidth={true} />
//                 </Grid>
//                 <Grid item xs={12} sm={12}>
//                   <InputField label="Mobile" name="mobile" fullWidth={true} />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <InputField
//                     type="password"
//                     label="Password"
//                     name="password"
//                     fullWidth={true}
//                   />
//                   <ErrorMessage />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <InputField
//                     type="password"
//                     label="Confirm Password"
//                     name="confirmpassword"
//                     fullWidth={true}
//                   />
//                   <ErrorMessage />
//                 </Grid>
//                 <Grid item xs={12} sm={12}>
//                   <input
//                     type="file"
//                     label="Upload Image"
//                     name="profile"
//                     fullWidth={true}
//                   />
//                   <ErrorMessage />
//                 </Grid>
//               </Grid>
//               <Box mt={3}>
//                 <Button type="submit" variant="contained" color="primary">
//                   Add User
//                 </Button>
//               </Box>
//             </Box>
//           </Paper>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddUser;

import React from "react";
import { Button, Typography, Box, Grid, Paper } from "@mui/material";
import InputField from "../../../Components/Form/InputField";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "../../../Components/Form/ErrorMessage";
import axios from "axios";
import ContentHeader from "../../../Components/ContentHeader";
import { serverLink } from "../../../Data/Variables";

const AddUser = () => {
  const navigate = useNavigate();
  const [locationData, setLocation] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const fname = e.target.fname.value;
    const lname = e.target.lname.value;
    const email = e.target.email.value;
    const mobile = e.target.mobile.value;
    const password = e.target.password.value;
    const location = locationData.country_name;
    const profile = e.target.profile.files[0];
    const sendData = new FormData();
    sendData.append("username", username);
    sendData.append("fname", fname);
    sendData.append("lname", lname);
    sendData.append("email", email);
    sendData.append("mobile", mobile);
    sendData.append("password", password);
    sendData.append("location", location);
    sendData.append("profile", profile);
    sendData.append("avatar", username + "." + profile.name.split(".").pop());

    axios.post(serverLink + "register", sendData).then((res) => {
      if (res.status === 201) {
        navigate("/admin/user");
      }
    });
  };

  useEffect(() => {
    async function getData() {
      await axios
        .get("https://geolocation-db.com/json/")
        .then((res) => {
          setLocation(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getData();
  }, []);

  return (
    <div className="admin__content" style={{ padding: "20px" }}>
      <ContentHeader />
      <div className="content" style={{ maxWidth: "800px", margin: "auto" }}>
        <form onSubmit={handleSubmit} method="POST">
          <Paper
            elevation={3}
            sx={{
              padding: "30px",
              borderRadius: "15px",
              backgroundColor: "#f9f9f9",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Box>
              <Typography
                variant="h5"
                align="center"
                marginBottom="20px"
                fontWeight="bold"
                color="primary"
              >
                ADD USER
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <InputField
                    label="Username"
                    name="username"
                    fullWidth
                    required
                  />
                  <ErrorMessage />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputField
                    label="First Name"
                    name="fname"
                    fullWidth
                    required
                  />
                  <ErrorMessage />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputField
                    label="Last Name"
                    name="lname"
                    fullWidth
                    required
                  />
                  <ErrorMessage />
                </Grid>
                <Grid item xs={12}>
                  <InputField
                    label="E-mail"
                    name="email"
                    type="email"
                    fullWidth
                    required
                  />
                  <ErrorMessage />
                </Grid>
                <Grid item xs={12}>
                  <InputField
                    label="Mobile"
                    name="mobile"
                    type="tel"
                    fullWidth
                    required
                  />
                  <ErrorMessage />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputField
                    type="password"
                    label="Password"
                    name="password"
                    fullWidth
                    required
                  />
                  <ErrorMessage />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputField
                    type="password"
                    label="Confirm Password"
                    name="confirmpassword"
                    fullWidth
                    required
                  />
                  <ErrorMessage />
                </Grid>
                <Grid item xs={12}>
                  <input
                    type="file"
                    name="profile"
                    style={{
                      width: "100%",
                      padding: "10px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      backgroundColor: "#ffffff",
                    }}
                    required
                  />
                  <ErrorMessage />
                </Grid>
              </Grid>
              <Box
                mt={4}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{
                    padding: "10px 30px",
                    borderRadius: "25px",
                    fontSize: "16px",
                  }}
                >
                  Add User
                </Button>
              </Box>
            </Box>
          </Paper>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
