import http from "./httpServices";

export const createProjectApi = (data) => {
  return http.post("/project/add", data).then(({ data }) => data.data);
};
