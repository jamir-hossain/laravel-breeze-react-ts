import { useState } from "react";
import useAuth from "hooks/useAuth";
import Input from "components/Input";
import Label from "components/Label";
import Button from "components/Button";
import AuthCard from "components/AuthCard";
import GuestLayout from "layouts/GuestLayout";
import ApplicationLogo from "components/ApplicationLogo";
import { NavLink, useParams, useSearchParams } from "react-router-dom";
import ShowError from "components/ShowError";

const PasswordReset = () => {
  const { token } = useParams();
  const [searchParams] = useSearchParams();
  const { passwordReset, errors } = useAuth();
  console.log(errors);

  const [formData, setFormData] = useState({
    email: searchParams.get("email") || "",
    password: "",
    password_confirmation: "",
  });

  const handleChange =
    (prop: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [prop]: event.target.value });
    };

  const submitForm = (event: React.SyntheticEvent) => {
    event.preventDefault();
    passwordReset({ token, ...formData });
  };

  return (
    <GuestLayout>
      <AuthCard>
        <div className="flex justify-center mb-2 ">
          <NavLink to="/">
            <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
          </NavLink>
        </div>
        <div className="mb-4 text-sm text-gray-600">
          Now set your new password here.
        </div>

        <form onSubmit={submitForm}>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              required
              autoFocus
              id="email"
              type="email"
              className="mt-1"
              value={formData.email}
              onChange={handleChange("email")}
            />
            <ShowError errors={errors} type="email" />
          </div>

          {/* Password */}
          <div className="mt-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              className="mt-1"
              onChange={handleChange("password")}
              required
            />
            <ShowError errors={errors} type="password" />
          </div>

          {/* Confirm Password */}
          <div className="mt-4">
            <Label htmlFor="password_confirmation">Confirm Password</Label>
            <Input
              type="password"
              id="password_confirmation"
              className="mt-1"
              value={formData.password_confirmation}
              onChange={handleChange("password_confirmation")}
              required
            />
            <ShowError errors={errors} type="password_confirmation" />
          </div>
          <div className="flex items-center justify-end mt-4">
            <Button>Reset Password</Button>
          </div>
        </form>
      </AuthCard>
    </GuestLayout>
  );
};

export default PasswordReset;
