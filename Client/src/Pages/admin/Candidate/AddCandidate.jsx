// import * as React from "react";
// import { TextField, Button, Typography, Box, Grid, Paper } from "@mui/material";
// import DatePicker from "../../../Components/Form/DatePicker";
// import ContentHeader from "../../../Components/ContentHeader";
// import InputField from "../../../Components/Form/InputField";
// import { ErrorMessage } from "../../../Components/Form/ErrorMessage";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";

// export default function AddCandidate() {
//   const today = new Date();
//   const maxDate =
//     today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
//   const navigate = useNavigate();
//   const [join, setJoin] = useState(2000);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const username = e.target.username.value;
//     const firstName = e.target.fname.value;
//     const lastName = e.target.lname.value;
//     const dob = e.target.dob.value;
//     const qualification = e.target.qualification.value;
//     console.log(join);
//     const location = e.target.location.value;
//     const description = e.target.description.value;
//     const data = {
//       username,
//       firstName,
//       lastName,
//       dob,
//       qualification,
//       join,
//       location,
//       description,
//     };

//     axios
//       .post("http://localhost:1322/api/auth/candidate/register", data)
//       .then((res) => {
//         console.log(res.status);
//         if (res.status === 201) {
//           navigate("/admin/candidate");
//         }
//       });
//   };

//   return (
//     <div className="admin__content">
//       <ContentHeader />
//       <div className="content">
//         <form onSubmit={handleSubmit} method="POST">
//           <Paper elevation={3}>
//             <Box px={3} py={2}>
//               <Typography variant="h6" align="center" margin="dense">
//                 Add Candidate
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
//                 <Grid item xs={12} sm={6}>
//                   <DatePicker name="dob" title="Birth Date" max={maxDate} />
//                   <ErrorMessage />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     type="number"
//                     label="Politices Join From (Year)"
//                     fullWidth
//                     readOnly
//                     inputProps={{ min: 1900, max: 2099 }}
//                     value={join}
//                     onChange={(e) => {
//                       setJoin(e.target.value);
//                     }}
//                     variant="outlined"
//                   />
//                   <ErrorMessage />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <InputField
//                     label="Qualification"
//                     name="qualification"
//                     fullWidth={true}
//                   />
//                   <ErrorMessage />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <InputField
//                     label="Location"
//                     name="location"
//                     fullWidth={true}
//                   />
//                   <ErrorMessage />
//                 </Grid>
//                 <Grid item xs={12} sm={12}>
//                   <TextField
//                     label="Description"
//                     name="description"
//                     multiline
//                     rows={5}
//                     fullWidth={true}
//                   />
//                   <ErrorMessage />
//                 </Grid>
//               </Grid>
//               <Box mt={3}>
//                 <Button type="submit" variant="contained" color="primary">
//                   Add Candidate
//                 </Button>
//               </Box>
//             </Box>
//           </Paper>
//         </form>
//       </div>
//     </div>
//   );
// }


import * as React from "react";
import { TextField, Button, Typography, Box, Grid, Paper } from "@mui/material";
import DatePicker from "../../../Components/Form/DatePicker";
import ContentHeader from "../../../Components/ContentHeader";
import InputField from "../../../Components/Form/InputField";
import { ErrorMessage } from "../../../Components/Form/ErrorMessage";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function AddCandidate() {
  const today = new Date();
  const maxDate =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const navigate = useNavigate();
  const [join, setJoin] = useState(2000);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const firstName = e.target.fname.value;
    const lastName = e.target.lname.value;
    const dob = e.target.dob.value;
    const qualification = e.target.qualification.value;
    const location = e.target.location.value;
    const description = e.target.description.value;
    const data = {
      username,
      firstName,
      lastName,
      dob,
      qualification,
      join,
      location,
      description,
    };

    axios
      .post("http://localhost:1322/api/auth/candidate/register", data)
      .then((res) => {
        if (res.status === 201) {
          navigate("/admin/candidate");
        }
      });
  };

  return (
    <div className="admin__content">
      <ContentHeader />
      <div className="content" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <form onSubmit={handleSubmit} method="POST">
          <Paper elevation={3} sx={{
              padding: "30px",
              borderRadius: "15px",
              backgroundColor: "#f9f9f9",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}>
            <Box px={3} py={4}>
              <Typography variant="h5"
                align="center"
                marginBottom="20px"
                fontWeight="bold"
                color="primary">
                ADD CANDIDATE
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <InputField label="Username" name="username" fullWidth />
                  <ErrorMessage />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputField label="First Name" name="fname" fullWidth />
                  <ErrorMessage />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputField label="Last Name" name="lname" fullWidth />
                  <ErrorMessage />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <DatePicker name="dob" title="Birth Date" max={maxDate} />
                  <ErrorMessage />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    type="number"
                    label="Politics Join From (Year)"
                    fullWidth
                    readOnly
                    inputProps={{ min: 1900, max: 2099 }}
                    value={join}
                    onChange={(e) => setJoin(e.target.value)}
                    variant="outlined"
                  />
                  <ErrorMessage />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputField label="Qualification" name="qualification" fullWidth />
                  <ErrorMessage />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputField label="Location" name="location" fullWidth />
                  <ErrorMessage />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Description"
                    name="description"
                    multiline
                    rows={5}
                    fullWidth
                  />
                  <ErrorMessage />
                </Grid>
              </Grid>
              <Box mt={3} display="flex" justifyContent="center">
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
                  Add Candidate
                </Button>
              </Box>
            </Box>
          </Paper>
        </form>
      </div>
    </div>
  );
}
