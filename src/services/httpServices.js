import axios from "axios";
const Base_Url = "http://localhost:5000/api";
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
