// import React from "react";
// import { Button, Grid, Paper, Typography } from "@mui/material";
// import { Box } from "@mui/system";
// import InputField from "../../../Components/Form/InputField";
// import InputTags from "../../../Components/Form/InputTags";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import ContentHeader from "../../../Components/ContentHeader";

// const AddElection = () => {
//   const navigate = useNavigate();
//   const [candidates, setCandidates] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const name = e.target.name.value;
//     const data = { name, candidates };
//     console.log(data);

//     axios
//       .post("http://localhost:1322/api/auth/election/register", data)
//       .then((res) => {
//         console.log(res.status);
//         if (res.status === 201) {
//           navigate("/admin/election");
//         }
//       });
//   };

//   return (
//     <>
//       <div className="admin__content">
//         <ContentHeader />
//         <div className="content">
//           <form onSubmit={handleSubmit} method="POST">
//             <Paper elevation={3}>
//               <Box px={3} py={2}>
//                 <Typography variant="h6" align="center" margin="dense">
//                   Elections
//                 </Typography>
//                 <Grid container pt={3} spacing={3}>
//                   <Grid item xs={12} sm={6}>
//                     <InputField label="name" name="name" fullWidth={true} />
//                   </Grid>
//                   <Grid item xs={12} sm={6}></Grid>
//                   <Grid item xs={12} sm={6}>
//                     <InputTags
//                       setCandidates={setCandidates}
//                       candidates={candidates}
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}></Grid>
//                 </Grid>
//                 <Box mt={3}>
//                   <Button type="submit" variant="contained" color="primary">
//                     Save
//                   </Button>
//                 </Box>
//               </Box>
//             </Paper>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AddElection;

import React from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import InputField from "../../../Components/Form/InputField";
import InputTags from "../../../Components/Form/InputTags";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ContentHeader from "../../../Components/ContentHeader";

const AddElection = () => {
  const navigate = useNavigate();
  const [candidates, setCandidates] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const data = { name, candidates };
    console.log(data);

    axios
      .post("http://localhost:1322/api/auth/election/register", data)
      .then((res) => {
        console.log(res.status);
        if (res.status === 201) {
          navigate("/admin/election");
        }
      });
  };

  return (
    <div className="admin__content">
      <ContentHeader />
      <div className="content" style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
        <form onSubmit={handleSubmit} method="POST">
          <Paper elevation={3} sx={{
              padding: "30px",
              borderRadius: "15px",
              backgroundColor: "#f9f9f9",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}>
            <Box px={4} py={3}>
            <Typography variant="h5"
                align="center"
                marginBottom="20px"
                fontWeight="bold"
                color="primary">
                CREATE ELECTION
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <InputField label="Election Name" name="name" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputTags
                    setCandidates={setCandidates}
                    candidates={candidates}
                  />
                </Grid>
              </Grid>
              <Box mt={4} display="flex" justifyContent="center">
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
                  Save Election
                </Button>
              </Box>
            </Box>
          </Paper>
        </form>
      </div>
    </div>
  );
};

export default AddElection;
