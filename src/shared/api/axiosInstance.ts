import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
  timeout: 10_000,
});

axiosInstance.interceptors.request.use(config => {
  return config;
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  },
);
