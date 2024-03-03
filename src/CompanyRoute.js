import { Navigate } from "react-router-dom";

export const CompanyRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user.role != "Company") {
    return <Navigate to="/" replace />;
  }

  return children;
};
