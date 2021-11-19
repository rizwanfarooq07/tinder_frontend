import axios from "axios";

const instance = axios.create({
  baseURL: "https://rizwan-tinder-backend.herokuapp.com/",
});

export default instance;
