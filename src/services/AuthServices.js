import http from "./httpServices";

export const sendOtp = (data) => {
  return http.post("/user/get-otp", data).then(({ data }) => data.data);
};
