import { useMutation } from "@tanstack/react-query";
import { removeProjectApi } from "../../../services/ProjectsServices";
import { toast } from "react-toastify";

const useRemoveProject = () => {
  const { isPending: deleteLoading, mutate: deleteProject } = useMutation({
    mutationFn: removeProjectApi,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
  return { deleteLoading, deleteProject };
};
export default useRemoveProject;
