import { useQuery } from "@tanstack/react-query";
import { getUserProfileApi } from "../services/AuthServices";

const useUser = () => {
  const { data, isPending: isUserLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUserProfileApi,
    
  });
  let user;
  if(data === undefined){
    user = null
  }else{
    user  = data?.user 
  }
  return { user, isUserLoading };
};
export default useUser;
