import { useMutation } from "@tanstack/react-query";
import { ChangeStatusProjectApi } from "../../../services/ProjectsServices";
import { toast } from "react-toastify";

const useChangeStatusProject = () => {
  const { isPending: statusLoading, mutate: changeStatus } = useMutation({
    mutationFn: ChangeStatusProjectApi,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
  return { statusLoading, changeStatus };
};
export default useChangeStatusProject;
