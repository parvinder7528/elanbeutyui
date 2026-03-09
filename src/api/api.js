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
  // baseURL: "http://localhost:5000",
headers:{
  "Authorization":"Bearer "+localStorage.getItem("authToken") || ""
}
  
});

export default API;
