import http from "./httpServices";

export const sendOtpApi = (data) => {
  return http.post("/user/get-otp", data).then(({ data }) => data.data);
};

export const CheckOtpApi = (data)=>{
  return http.post("/user/check-otp",data).then(({data})=>data.data)
}