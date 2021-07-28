import axios from "axios";
import { API_URL } from "../constants/apiUrl";

export const getContactsByFilter = (setDataFunction, searchValues) => {
  let endPoint = "contacts/search/?";
  let urlParams;
  if (searchValues.filter === "name") {
    urlParams = `first_name=${searchValues.param}`;
  }
  if (searchValues.filter === "lastName") {
    urlParams = `last_name=${searchValues.param}`;
  }
  if (searchValues.filter === "email") {
    urlParams = `email=${searchValues.param}`;
  }
  setDataFunction(
    axios(API_URL + endPoint + urlParams)
      .then((response) => {
        setDataFunction(response.data);
      })
      .catch((error) => {
        return "An error ocurred, we could't load contacts, please try again";
      })
  );
};
