
const BASE_URL = "https://elanbeautyflow.vercel.app";
// const BASE_URL = "http://localhost:5000";


const API = {
  get: async (endpoint, config = {}) => {
    return request({ method: "GET", endpoint, ...config });
  },
  post: async (endpoint, data, config = {}) => {
    return request({ method: "POST", endpoint, body: data, ...config });
  },
  put: async (endpoint, data, config = {}) => {
    return request({ method: "PUT", endpoint, body: data, ...config });
  },
  delete: async (endpoint, data, config = {}) => {
    return request({ method: "DELETE", endpoint, body: data, ...config });
  },
};

async function request({ endpoint, method = "GET", body, headers = {}, ...options }) {
  const token = localStorage.getItem("authToken");

  const fetchHeaders = {
    "Content-Type": "application/json",
    ...headers,
  };

  if (token) fetchHeaders["Authorization"] = `Bearer ${token}`;

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers: fetchHeaders,
    body: body ? JSON.stringify(body) : undefined,
    ...options,
  });

  let responseData = {};
  try {
    responseData = await response.json();
  } catch (err) {
    // ignore invalid JSON
  }

  if (!response.ok) {
    const error = new Error(responseData.message || "API request failed");
    error.status = response.status;
    error.data = responseData;
    throw error;
  }

  return responseData;
}

export default API;