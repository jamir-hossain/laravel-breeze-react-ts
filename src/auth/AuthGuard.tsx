import useAuth from "hooks/useAuth";
import VerifyEmailResent from "pages/verify-email-resent";
import { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}
const AuthGuard: FC<Props> = ({ children }) => {
  const Redirect = useNavigate();
  const { isAuthenticated, user } = useAuth();
  console.log(user);
  let authenticated = isAuthenticated;

  return (
    <>
      {authenticated ? (
        <>{user?.email_verified_at ? children : <VerifyEmailResent />}</>
      ) : (
        Redirect("/login")
      )}
    </>
  );
};

export default AuthGuard;
