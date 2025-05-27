import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/authContext";

const ProtectedRoute = ({ children, requiredRole }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && user.role !== requiredRole && user.role !== "SuperAdmin") {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;