import axios from "axios";
import { API_URL } from "../constants/apiUrl";

export const getContactDetails = (setDataFunction, contactId) => {
  let endPoint = `contacts/detail/?id=${contactId}`;
  setDataFunction(
    axios(API_URL + endPoint)
      .then((response) => {
        setDataFunction(response.data);
      })
      .catch((error) => {
        return "An error ocurred, we could't load contact details, please try again";
      })
  );
};
