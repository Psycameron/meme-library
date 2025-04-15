import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  res => res,
  err => {
    console.error(err.response?.data || err.message);
    return Promise.reject(err);
  }
);

export default api;
