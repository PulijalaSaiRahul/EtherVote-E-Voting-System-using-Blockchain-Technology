// import React from "react";
// import { Button, Typography, Box, Grid, Paper } from "@mui/material";
// import InputField from "../../../Components/Form/InputField";
// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { ErrorMessage } from "../../../Components/Form/ErrorMessage";
// import axios from "axios";
// import ContentHeader from "../../../Components/ContentHeader";
// import { serverLink } from "../../../Data/Variables";

// const ViewUser = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     async function getData() {
//       const link = serverLink + "user/" + id;
//       const t = await axios.get(link);
//       setData(t.data);
//     }
//     getData();
//   }, [id]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const username = e.target.username.value;
//     const email = e.target.email.value;
//     const fname = e.target.fname.value;
//     const lname = e.target.lname.value;
//     const mobile = e.target.mobile.value;
//     const profile = e.target.profile.files[0];
//     const sendData = new FormData();
//     sendData.append("username", username);
//     sendData.append("fname", fname);
//     sendData.append("lname", lname);
//     sendData.append("email", email);
//     sendData.append("mobile", mobile);
//     sendData.append("profile", profile);
//     sendData.append("avatar", username + "." + profile.name.split(".").pop());

//     const link = serverLink + "user/edit/" + data._id;

//     axios.post(link, sendData).then((res) => {
//       if (res.status === 201) {
//         navigate("/admin/user");
//       }
//     });
//   };

//   return (
//     <div className="admin__content">
//       <ContentHeader />
//       {data && (
//         <div className="content">
//           <form onSubmit={handleSubmit} method="POST">
//             <Paper elevation={3}>
//               <Box px={3} py={2}>
//                 <Typography variant="h6" align="center" margin="dense">
//                   Edit User
//                 </Typography>
//                 <Grid container pt={3} spacing={3}>
//                   <Grid item xs={12} sm={12}>
//                     <InputField
//                       label="username"
//                       name="username"
//                       fullWidth={true}
//                       value={data.username}
//                     />
//                     <ErrorMessage />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <InputField
//                       label="First Name"
//                       name="fname"
//                       fullWidth={true}
//                       value={data.fname}
//                     />
//                     <ErrorMessage />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <InputField
//                       label="Last Name"
//                       name="lname"
//                       fullWidth={true}
//                       value={data.lname}
//                     />
//                     <ErrorMessage />
//                   </Grid>
//                   <Grid item xs={12} sm={12}>
//                     <InputField
//                       label="E-mail"
//                       name="email"
//                       fullWidth={true}
//                       value={data.email}
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={12}>
//                     <InputField
//                       label="Mobile"
//                       name="mobile"
//                       fullWidth={true}
//                       value={data.mobile}
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={12}>
//                     <input type="file" label="Upload Image" name="profile" />
//                     <ErrorMessage />
//                   </Grid>
//                 </Grid>
//                 <Box mt={3}>
//                   <Button type="submit" variant="contained" color="primary">
//                     Update User
//                   </Button>
//                 </Box>
//               </Box>
//             </Paper>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ViewUser;

import React, { useEffect, useState } from "react";
import { Button, Typography, Box, Grid, Paper } from "@mui/material";
import InputField from "../../../Components/Form/InputField";
import { useNavigate, useParams } from "react-router-dom";
import { ErrorMessage } from "../../../Components/Form/ErrorMessage";
import axios from "axios";
import ContentHeader from "../../../Components/ContentHeader";
import { serverLink } from "../../../Data/Variables";

const ViewUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const link = serverLink + "user/" + id;
      const t = await axios.get(link);
      setData(t.data);
    }
    getData();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const fname = e.target.fname.value;
    const lname = e.target.lname.value;
    const mobile = e.target.mobile.value;
    const profile = e.target.profile.files[0];
    const sendData = new FormData();
    sendData.append("username", username);
    sendData.append("fname", fname);
    sendData.append("lname", lname);
    sendData.append("email", email);
    sendData.append("mobile", mobile);
    sendData.append("profile", profile);
    sendData.append("avatar", username + "." + profile.name.split(".").pop());

    const link = serverLink + "user/edit/" + data._id;

    axios.post(link, sendData).then((res) => {
      if (res.status === 201) {
        navigate("/admin/user");
      }
    });
  };

  return (
    <div className="admin__content">
      <ContentHeader />
      {data && (
        <div className="content" style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
          <form onSubmit={handleSubmit} method="POST">
            <Paper elevation={3} sx={{
              padding: "30px",
              borderRadius: "15px",
              backgroundColor: "#f9f9f9",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}>
              <Box px={3} py={2}>
              <Typography variant="h5"
                align="center"
                marginBottom="20px"
                fontWeight="bold"
                color="primary">
                EDIT USER
              </Typography>
                <Grid container spacing={3}>

                  {/* Username Field */}
                  <Grid item xs={12}>
                    <InputField
                      label="Username"
                      name="username"
                      fullWidth
                      value={data.username}
                    />
                    <ErrorMessage />
                  </Grid>

                  {/* First and Last Name Fields */}
                  <Grid item xs={12} sm={6}>
                    <InputField
                      label="First Name"
                      name="fname"
                      fullWidth
                      value={data.fname}
                    />
                    <ErrorMessage />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InputField
                      label="Last Name"
                      name="lname"
                      fullWidth
                      value={data.lname}
                    />
                    <ErrorMessage />
                  </Grid>

                  {/* Email and Mobile Fields */}
                  <Grid item xs={12}>
                    <InputField
                      label="Email"
                      name="email"
                      fullWidth
                      value={data.email}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputField
                      label="Mobile"
                      name="mobile"
                      fullWidth
                      value={data.mobile}
                    />
                  </Grid>

                  {/* Profile Image Upload */}
                  <Grid item xs={12}>
                    <input
                      type="file"
                      label="Upload Image"
                      name="profile"
                      accept="image/*"
                      style={{ width: "100%" }}
                    />
                    <ErrorMessage />
                  </Grid>
                </Grid>

                {/* Submit Button */}
                <Box display="flex" justifyContent="center" mt={3}>
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
                  Update User
                </Button>
                </Box>
              </Box>
            </Paper>
          </form>
        </div>
      )}
    </div>
  );
};

export default ViewUser;
