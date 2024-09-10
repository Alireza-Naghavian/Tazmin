import { useLocation } from "react-router-dom";
import useUser from "../../../hooks/useUser"

const useAuthorize =()=>{
  const  {user,isUserLoading} =   useUser();

  const {pathname} = useLocation();
  let isAuthenticated = false;
  if(user && user!==undefined) isAuthenticated = true;
  let isAuthorized = false
  let isVerified = false
  if(user&& Number(user?.status === 2)) isVerified = true;

  const ROLES = {
    admin: "ADMIN",
  
  }

  const desiredRole = pathname.split("/").at(1);
  if(Object.keys(ROLES).includes(desiredRole)){
    if(user && user!==undefined&& user?.role !== ROLES[desiredRole]) isAuthorized=true
  }
  return {isUserLoading,isAuthenticated,isAuthorized,user,isVerified,user}
}
export default  useAuthorize