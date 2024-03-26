import { useQuery } from "@tanstack/react-query";
import { GetAllOwnerProjectsApi } from "../../../services/ownerServices";

const useGetAllOwnerProjects = () => {
  const { isPending: ProjectsLoading, data } = useQuery({
    queryKey: ["owner-projects"],
    queryFn: GetAllOwnerProjectsApi,
  });
  const { projects = [] } = data || {};
  return { projects, ProjectsLoading };
};
export default  useGetAllOwnerProjects;
