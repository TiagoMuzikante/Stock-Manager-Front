import axios from "axios";

const api = axios.create({
  baseURL: "http://195.200.6.87:7415",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;