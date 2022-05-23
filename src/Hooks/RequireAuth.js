import { Navigate, useLocation } from "react-router-dom";
import useFirebase from "./useFirebase";

const RequireAuth = ({ children }) => {
  const { userInfo } = useFirebase();

  const location = useLocation();
  if (!userInfo) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  } else {
    return children;
  }
};

export default RequireAuth;
