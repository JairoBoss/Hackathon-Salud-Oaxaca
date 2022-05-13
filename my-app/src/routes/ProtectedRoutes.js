import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import PrivateLayout from "../components/Private/PrivateLayout";

const ProtectedRoutes = () => {
  const user = { id: 1 };
  const location = useLocation();

  return user.id !== -1 ? (
    <PrivateLayout></PrivateLayout>
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} replace />
  );
};

export default ProtectedRoutes;
