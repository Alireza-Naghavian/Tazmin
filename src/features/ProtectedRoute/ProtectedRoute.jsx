import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../ui/Loader";
import useAuthorize from "./hooks/useAuthorize";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // const [cookies] = useCookies();
  const { isAuthenticated, isAuthorized, isUserLoading, isVerified } =useAuthorize();
  useEffect(() => {
    if (!isAuthenticated && !isUserLoading) navigate("/");
    // if(!cookies.userLogin) navigate("/",{replace:true})
    if (!isVerified && !isUserLoading) navigate("/not-access");
    if (isAuthorized && !isUserLoading) navigate("/note-access");
  }, [navigate, isAuthenticated, isAuthorized]);
  if (isUserLoading)
    return (
      <div className="flex items-center justify-center h-screen bg-secondary-100">
        <Loader />
      </div>
    );

  if (isAuthenticated & isVerified) return children;
}

export default ProtectedRoute;
