import axios from "axios";
import { getToken } from "../utils/token";

const instance = axios.create({
  baseURL: "/api",
});

instance.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
