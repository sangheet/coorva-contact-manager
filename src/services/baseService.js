import axios from "axios";
const url = "https://coorva-coding-challenge.herokuapp.com/api/";

const apiConsumer = axios.create({
  baseURL: url,
  headers: {
    "content-type": "application/json",
  },
});
export default apiConsumer;
