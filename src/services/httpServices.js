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

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const original_config = err.config;
    if (err.response.status === 401 && !original_config.retry) {
      original_config.retry = true; //aviodance from infinite loop
      try {
        const { data } = await axios.get(`${Base_Url}/user/refresh-token`, {
          withCredentials: true,
        });
        if (data) return api(original_config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(err);
  }
);
export default http;
