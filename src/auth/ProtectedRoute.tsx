import useAuth from "hooks/useAuth";
import { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}
const ProtectedRoute: FC<Props> = ({ children }) => {
  const Redirect = useNavigate();
  const { isAuthenticated } = useAuth();
  let authenticated = isAuthenticated;

  return <>{authenticated ? Redirect(-1) : children}</>;
};

export default ProtectedRoute;
