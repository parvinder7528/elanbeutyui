import axios from "axios";

// const API = axios.create({
//   baseURL: import.meta.env.VITE_API_URL || "https://elegant1-backend.vercel.app",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export default API;

const API = axios.create({
  baseURL: "https://elanbeautyapi.onrender.com",
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;
