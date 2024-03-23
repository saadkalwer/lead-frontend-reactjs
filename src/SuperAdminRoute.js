import { Navigate } from "react-router-dom";

export const SuperAdminRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user.role != "Super Admin") {
    return <Navigate to="/" replace />
  }

  return children;
};
