import axios from "axios";

const apiURL = "http://localhost:4000/";

export const axiosInstance = axios.create({
  baseURL: apiURL,
  headers: {
    "Content-Type": "application/json"
  }
});
