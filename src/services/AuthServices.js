import http from "./httpServices";

export const sendOtpApi = (data) => {
  return http.post("/user/get-otp", data).then(({ data }) => data.data);
};

export const CheckOtpApi = (data) => {
  return http.post("/user/check-otp", data).then(({ data }) => data.data);
};

export const completeProfileApi = (data) => {
  return http
    .post("/user/complete-profile", data)
    .then(({ data }) => data.data);
};
export const getUserProfileApi =async () => {
try {
  return  await http.get("/user/refresh-token").then(({data})=>data.data);


} catch (error) {
  console.log(error);
}
};
export const UpdateUserProfileApi = (data) => {
  return http.patch("/user/update",data).then(({ data }) => data.data);
};
export const logOutUserProfileApi = () => {
  return http.post("/user/logout").then(({ data }) => data.data);
};