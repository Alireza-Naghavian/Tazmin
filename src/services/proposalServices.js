import http from "./httpServices";

export const send_req_api = (data) => {
  return http.post(`/proposal/add`, data).then(({ data }) => data.data);
};
