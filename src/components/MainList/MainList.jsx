import React from "react";

import { Grid } from "@material-ui/core/";

import DataTableComponent from "./DataTableComponent";

function MainList(props) {
  return (
    <Grid container>
      <Grid item md={props.selectedContact ? 9 : 12}>
        <DataTableComponent
          tableData={props.tableData}
          selectContact={props.selectContact}
        />
      </Grid>
    </Grid>
  );
}

export default MainList;
