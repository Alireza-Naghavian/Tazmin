import { useMutation } from "@tanstack/react-query";
import {  sendOtpApi } from "../../../services/AuthServices";
import { toast } from "react-toastify";
const useSendOtp = () => {
  const {
    error,
    mutate:sendUserOtp,
    isPending: isSendLoading,
  } = useMutation({
    mutationKey: ["user"],
    mutationFn: sendOtpApi,
    onSuccess: (data) => {
      toast.success(data.message, {
        position: "top-right",
      });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
  return { isSendLoading, sendUserOtp, error };
};
export default useSendOtp;
