import http from "./httpServices";

export const send_req_api = (data) => {
  return http.post(`/proposal/add`, data).then(({ data }) => data.data);
};
export const GetAllProposalApi = (data) => {
  return http.get(`/proposal/list`, data).then(({ data }) => data.data);
};
export const chageProposalStApi = ({ proposalId, ...data }) => {
  return http.patch(`/proposal/${proposalId}`, data).then(({ data }) => data.data);
};
