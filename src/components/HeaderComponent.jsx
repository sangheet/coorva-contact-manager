import React from "react";

import { Grid } from "@material-ui/core";
import ContactSearch from "./MainList/ContactSearch";
import MainLogo from "./MainLogo";

const Styles = {
  pullText: {
    color: "#DF1882",
    marginTop: -30,
  },
};

function HeaderComponent(props) {
  return (
    <Grid container className="headerContainer">
      <Grid item md={4}>
        <MainLogo />
      </Grid>
      <Grid item md={4} style={Styles.pullText}>
        <h6>Pull down to refresh</h6>
      </Grid>
      <Grid item md={4}>
        <ContactSearch sendSearchValues={props.sendSearchValue} />
      </Grid>
    </Grid>
  );
}

export default HeaderComponent;
