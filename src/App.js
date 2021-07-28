import React from "react";
import "./App.css";

import { getContacts } from "./services/getContacts";

import { Grid } from "@material-ui/core";

import MainList from "./components/MainList/MainList";
import ContactDetails from "./components/ContactDetail/ContactDetails";
import { getContactsByFilter } from "./services/getContactByFilter";

import HeaderComponent from "./components/HeaderComponent";

function App() {
  const [contactData, setContactData] = React.useState([]);
  const [selectedContact, setSelectedContact] = React.useState(null);
  const [searchValue, setSearchValue] = React.useState(null);

  React.useEffect(() => {
    getContacts(setContactData);
  }, []);
  React.useEffect(() => {
    searchValue && getContactsByFilter(setContactData, searchValue);
  }, [searchValue]);

  const clearSelected = () => setSelectedContact(null);
  return (
    <Grid container className="App">
      <Grid md={selectedContact ? 10 : 12}>
        <HeaderComponent sendSearchValue={setSearchValue} />
        {contactData && (
          <MainList
            tableData={contactData}
            selectContact={setSelectedContact}
            sendSearchValue={setSearchValue}
          />
        )}
      </Grid>
      {selectedContact && (
        <Grid md={2}>
          <ContactDetails
            contactId={selectedContact}
            clearSelected={clearSelected}
          />
        </Grid>
      )}
    </Grid>
  );
}

export default App;
