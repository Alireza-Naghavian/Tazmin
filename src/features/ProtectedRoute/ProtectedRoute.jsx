import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../ui/Loader";
import useAuthorize from "./hooks/useAuthorize";
import useUser from "../../hooks/useUser";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { user, isUserLoading } = useUser();
  const { isAuthenticated, isAuthorized, isVerified } = useAuthorize();

  useEffect(() => {
    if (user === undefined && !isVerified && !isUserLoading)
      navigate("/not-access");
    if (user !== undefined && isAuthorized && !isUserLoading)
      navigate("/note-access");
  }, [navigate, isVerified, user, isUserLoading]);
  if (isUserLoading)
    return (
      <div className="flex items-center justify-center h-screen bg-secondary-100">
        <Loader />
      </div>
    );

  if (isAuthenticated & isVerified) return children;
}

export default ProtectedRoute;
