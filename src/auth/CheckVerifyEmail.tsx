import useAuth from "hooks/useAuth";
import { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}
const CheckVerifyEmail: FC<Props> = ({ children }) => {
  const Redirect = useNavigate();
  const { user } = useAuth();
  const verifiedEmail = user?.email_verified_at;

  return <>{verifiedEmail ? Redirect("/dashboard") : children}</>;
};

export default CheckVerifyEmail;
