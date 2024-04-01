import { toast } from "react-toastify";
import { changeVerifyStatusApi } from "../../../services/Adminservices";
import { useMutation } from "@tanstack/react-query";

const useChangeUserStatus = () => {
    const { isPending: isLoading, mutate: ChangeUserSt } = useMutation({
      mutationKey: ["users"],
      mutationFn: changeVerifyStatusApi,
      onSuccess: (data) => {
        toast.success(data.message);
      },
      onError: (err) => {
        toast.error(err?.response?.data?.message);
      },
    });
  
    return { isLoading, ChangeUserSt };
  };
  
  export default useChangeUserStatus;
  