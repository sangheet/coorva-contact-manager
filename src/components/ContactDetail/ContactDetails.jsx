import React from "react";

import { Grid } from "@material-ui/core";
import { getContactDetails } from "../../services/getContactDetails";

import CloseIcon from "@material-ui/icons/Close";
import ContactShare from "./ContactShare";

function ContactDetails(props) {
  const [contactData, setContactData] = React.useState([]);

  const Styles = {
    blackH1: {
      color: "black",
    },
    imageWrapper: {
      backgroundImage: `url(${contactData.image})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "200px",
      height: "200px",
      borderRadius: 100,
      marginLeft: 50,
      backgroundPosition: "50% 50%",
    },
    closeIcon: {
      margin: 15,
      padding: 10,
      color: "black",
      float: "right",
    },
  };

  React.useEffect(() => {
    getContactDetails(setContactData, props.contactId);
  }, [props.contactId]);
  return (
    <Grid className="contact-details-container">
      <div onClick={props.clearSelected}>
        <h1 style={Styles.closeIcon}>
          <CloseIcon />
        </h1>
      </div>
      <div style={Styles.imageWrapper}></div>
      <h1 style={Styles.blackH1}>
        {contactData?.first_name} {contactData?.last_name}
      </h1>
      <h2>{contactData?.phone}</h2>
      <span>{contactData?.email}</span>
      <hr />
      <ContactShare />
    </Grid>
  );
}

export default ContactDetails;
