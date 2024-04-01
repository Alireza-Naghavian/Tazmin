import React, { useEffect } from "react";
import useAuthorize from "./hooks/useAuthorize";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../../ui/Loader";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated, isAuthorized, isUserLoading, isVerified } =useAuthorize();
  useEffect(() => {
    if (!isAuthenticated && !isUserLoading) navigate("/");
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
