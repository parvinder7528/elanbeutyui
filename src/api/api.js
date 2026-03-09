import axios from "axios";

// const API = axios.create({
//   baseURL: import.meta.env.VITE_API_URL || "https://elegant1-backend.vercel.app",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export default API;
// https://elanbeautyflow.vercel.app/
const API = axios.create({
  // baseURL: "https://elanbeautyapi.onrender.com",
    baseURL: "https://elanbeautyflow.vercel.app",

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
