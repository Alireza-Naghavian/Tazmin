import http from "./httpServices";

export const createProjectApi = (data) => {
  return http.post("/project/add", data).then(({ data }) => data.data);
};
export const ChangeStatusProjectApi = ({ id, data }) => {
  return http.patch(`/project/${id}`, data).then(({ data }) => data.data);
};
export const removeProjectApi = (id) => {
  return http.delete(`/project/${id}`).then(({ data }) => data.data);
};
export function editProjectApi({ id, newProject }) {
  return http
    .patch(`/project/update/${id}`, newProject)
    .then(({ data }) => data.data);
}