import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Components/Spinner/Spinner";
import { AuthContext } from "../contexts/AuthProvider";
import { UserRoleContext } from "../contexts/UserRoleProvider";

const AdminRoute = ({ children }) => {
  const location = useLocation();

  const { user, loading } = useContext(AuthContext);
  const { role, loadingRole } = useContext(UserRoleContext);

  if (loading || loadingRole) {
    return <Spinner />;
  }

  if (user && role === "admin") {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
