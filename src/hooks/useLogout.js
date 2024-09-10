import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { logOutUserProfileApi } from "../services/AuthServices";

const useLogout = ()=>{
    const navigate = useNavigate();
    const queryClient = useQueryClient();

      const { mutateAsync: LogOut } = useMutation({
        mutationFn: logOutUserProfileApi,
        onSuccess: () => {
          queryClient.invalidateQueries({queryKey:["user"]})
          navigate("/");
          navigate(0)
        },
      });
      return {LogOut}
}
export default useLogout