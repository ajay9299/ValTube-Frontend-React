import axios from "axios";

const API_BASE =
  (import.meta.env.VITE_API_BASE as string) || "http://localhost:3002";

console.log("API_BASE:", API_BASE);

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

// request interceptor to attach token
api.interceptors.request.use((config) => {
  try {
    const token = localStorage.getItem("access_token");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (e) {
    // noop
  }
  return config;
});

// response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Only redirect on 401 if NOT a login or register request
    if (error.response?.status === 401) {
      const isAuthRoute =
        error.config?.url?.includes("/auth/login") ||
        error.config?.url?.includes("/auth/register");
      if (!isAuthRoute) {
        localStorage.removeItem("access_token");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  },
);

export default api;
