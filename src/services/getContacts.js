import axios from "axios";
import { API_URL } from "../constants/apiUrl";

export const getContacts = (setDataFunction) => {
  let endPoint = "contacts/";
  setDataFunction(
    axios(API_URL + endPoint)
      .then((response) => {
        setDataFunction(response.data);
      })
      .catch((error) => {
        return "An error ocurred, we could't load contacts, please try again";
      })
  );
};
