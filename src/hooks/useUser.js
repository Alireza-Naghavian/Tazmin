import { useQuery } from "@tanstack/react-query";
import { getUserProfileApi } from "../services/AuthServices";

const useUser = () => {
  const { data, isPending: isUserLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUserProfileApi,
  });
  const { user } = data || {};
  return { user, isUserLoading };
};
export default useUser;
