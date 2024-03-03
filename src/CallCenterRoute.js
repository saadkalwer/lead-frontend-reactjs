import { Navigate } from "react-router-dom";

export const CallCenterRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user.role != "Call Center") {
    return <Navigate to="/" replace />;
  }

  return children;
};
