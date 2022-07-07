import { FC } from "react";
import useAuth from "hooks/useAuth";
import AuthCard from "components/AuthCard";
import { useParams } from "react-router-dom";
import ShowAlert from "components/ShowAlert";

const VerifyEmail: FC = () => {
  const { token } = useParams();
  const { verifyEmail, message } = useAuth();

  if (token) {
    verifyEmail(token);
  }

  return (
    <>
      {message && (
        <AuthCard>
          <ShowAlert message={message} />
        </AuthCard>
      )}
    </>
  );
};

export default VerifyEmail;
