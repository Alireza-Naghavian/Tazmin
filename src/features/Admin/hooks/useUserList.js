import { useQuery } from "@tanstack/react-query";
import { getUserListApi } from "../../../services/Adminservices";

const useUserList = ()=>{
    const { isLoading, data } = useQuery({
        queryKey: ["users"],
        queryFn: getUserListApi,
      });
      const { users } = data || {};
      return { isLoading, users };
}
export default  useUserList