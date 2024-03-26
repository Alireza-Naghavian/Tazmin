import http from "./httpServices";

export const GetAllOwnerProjectsApi = () => {
  return http.get("/project/owner-projects").then(({ data }) => data.data);
};
