import http from "./httpServices";

export const getUserListApi = async() => {
    return http.get("admin/user/list").then(({ data }) => data.data);
  };
  export const changeVerifyStatusApi = ({ userId, data }) => {
    return http
      .patch(`/admin/user/verify/${userId}`, data)
      .then(({ data }) => data.data);
  };
  