import { useMutation } from "@tanstack/react-query";
import { UpdateUserProfileApi } from "../../../services/AuthServices";
import { toast } from "react-toastify";

const useUpdateProfile = () => {
  const { isPending: isEditLoading, mutateAsync: updateProfile } = useMutation({
    mutationFn: UpdateUserProfileApi,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
  return { isEditLoading, updateProfile };
};
export default useUpdateProfile;
