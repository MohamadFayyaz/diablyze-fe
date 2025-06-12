import axios from "axios";

const API_BASE_URL = "http://localhost:3000/"; // Adjust if your backend runs on different port

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor to include auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = {
  register: async (data: { name: string; email: string; password: string }) => {
    return api.post("/register", data);
  },

  login: async (data: { email: string; password: string }) => {
    return api.post("/login", data);
  },

  getProfile: async () => {
    return api.get("/profile");
  },

  logout: async () => {
    return api.post("/logout");
  },
};

export const predictService = {
  predict: async (data: { gender: string; age: string; hypertension: string, heartDisease: string, smoking: string, bmi: string, hba1c: string, glucose: string }) => {
    return api.post("/api/predict", data);
  },
};

export default api;
