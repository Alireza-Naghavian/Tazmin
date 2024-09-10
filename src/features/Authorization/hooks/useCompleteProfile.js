import { useMutation } from "@tanstack/react-query";
import { completeProfileApi } from "../../../services/AuthServices";
import { toast } from "react-toastify"
const useCompleteProfile = () => {
const {mutate:completeProfile , isPending:isProfileLoading} =  useMutation({
    mutationFn: completeProfileApi,
    onSuccess:(data)=>{
        toast.success(data.message,{
            position:"top-center"
        })
    },
    onError:(err)=>{
        toast.error(err?.response?.data?.message)
    }
  });
  return {completeProfile,isProfileLoading}
};
export default useCompleteProfile;
