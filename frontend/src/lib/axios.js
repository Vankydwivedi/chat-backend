import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chat-backend-ytnl.onrender.com/api",
  withCredentials: true,
});
