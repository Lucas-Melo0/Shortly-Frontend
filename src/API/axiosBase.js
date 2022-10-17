import axios from "axios";

const axiosBase = axios.create({
  baseURL: "https://shortly-backen.herokuapp.com",
});

export { axiosBase };
