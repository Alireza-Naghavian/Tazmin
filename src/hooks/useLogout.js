import { useMutation } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import { logOutUserProfileApi } from "../services/AuthServices";

const useLogout = ()=>{
    const [cookies,setCookie] = useCookies(["userLogin"]);
    const navigate = useNavigate();
    const setCookieHandler = ()=>{
        const exp = new Date();
        exp.setDate(exp.getDate() - 2);
        setCookie("userLogin","userLoggedIn" , {path:"/",expires:exp})
      }
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