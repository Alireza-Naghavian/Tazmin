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
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const { data } = await axios.get(`${Base_Url}/user/refresh-token`, {
          withCredentials: true,
        });

        return api(originalRequest);
      } catch (err) {
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);
export default http;
