import { useMutation } from "@tanstack/react-query";
import { CheckOtpApi } from "../../../services/AuthServices";

const useCheckOtp = () => {
  
  const {
    mutateAsync: checkOtp,
    error,
    isPending: isCheckLoading,
  } = useMutation({
    mutationFn: CheckOtpApi,
  });

  return { isCheckLoading, checkOtp };
};
export default useCheckOtp;
