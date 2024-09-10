import axios from "axios";
const Base_Url = import.meta.env.VITE_BASE_URL;
const api = axios.create({
  baseURL: Base_Url,
  withCredentials: true,
});

const http = {
  post: api.post,
  get: api.get,
  delete: api.delete,
  put: api.put,
  patch: api.patch,
};

api.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
);
export default http;
