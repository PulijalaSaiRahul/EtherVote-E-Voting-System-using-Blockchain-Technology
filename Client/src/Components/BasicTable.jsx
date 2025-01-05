// import * as React from "react";
// import { DataGrid, GridToolbar } from "@mui/x-data-grid";

// export default function DataTable(props) {
//   return (
//     <div>
//       <DataGrid
//         getRowId={(row) => row._id}
//         autoHeight
//         rows={props.rows}
//         pageSize={25}
//         columns={props.columns}
//         checkboxSelection={props.checkboxSelection ? false : true}
//         disableSelectionOnClick
//         components={{ Toolbar: GridToolbar }}
//       />
//     </div>
//   );
// }

import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

export default function DataTable(props) {
  return (
    <div
      style={{
        height: "auto",
        width: "95%", // Adds spacing on the sides
        backgroundColor: "#ffffff",
        borderRadius: "15px", // Rounded corners for the table
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Soft shadow
        padding: "20px", // Adds padding inside the container
        margin: "20px auto", // Centers the table with vertical spacing
      }}
    >
      <DataGrid
        getRowId={(row) => row._id}
        autoHeight
        rows={props.rows}
        pageSize={25}
        columns={props.columns}
        checkboxSelection={!props.checkboxSelection} /* Boolean toggle */
        disableSelectionOnClick
        components={{ Toolbar: GridToolbar }}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
            borderRadius: "15px", // Smooth corners for the grid area
          },
          "& .MuiDataGrid-cell": {
            color: "#333333", /* Dark text for readability */
            borderBottom: "1px solid #f0f0f0",
            fontSize: "14px",
          },
          "& .MuiDataGrid-row:hover": {
            backgroundColor: "#f9f9f9", /* Light hover effect */
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#f7f7f7",
            color: "#444444",
            fontWeight: "600",
            fontSize: "15px",
            textTransform: "capitalize",
            borderBottom: "2px solid #eeeeee",
            borderTopLeftRadius: "15px", // Rounded corners for the header
            borderTopRightRadius: "15px",
          },
          "& .MuiDataGrid-toolbarContainer": {
            backgroundColor: "#f7f7f7",
            color: "#666666",
            borderBottom: "1px solid #eeeeee",
            padding: "5px",
            borderTopLeftRadius: "15px", // Match the container's rounded corners
            borderTopRightRadius: "15px",
          },
          "& .MuiCheckbox-root": {
            color: "#1976d2 !important", /* Consistent blue color */
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: "#f7f7f7",
            borderTop: "1px solid #eeeeee",
            borderBottomLeftRadius: "15px", // Rounded corners for the footer
            borderBottomRightRadius: "15px",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "#ffffff",
          },
          "& .MuiDataGrid-columnSeparator": {
            display: "none", /* Removes vertical column separator lines */
          },
        }}
      />
    </div>
  );
}

