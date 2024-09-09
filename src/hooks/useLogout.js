import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { logOutUserProfileApi } from "../services/AuthServices";

const useLogout = ()=>{
    // const [cookies,setCookie] = useCookies(["userLogin"]);
    const navigate = useNavigate();
    const setCookieHandler = ()=>{
      console.log("text2");
        // const exp = new Date();
        // exp.setDate(exp.getDate() - 2);
        // setCookie("userLogin","userLoggedIn" , {path:"/",expires:exp})
      }
      const { mutateAsync: LogOut } = useMutation({
        mutationFn: logOutUserProfileApi,
        onSuccess: () => {
          setIsOpen(false);
          navigate("/");
        },
      });
      return {LogOut,setCookieHandler}
}
export default useLogout