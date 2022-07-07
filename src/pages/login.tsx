import { FC, useState } from "react";
import useAuth from "hooks/useAuth";
import Label from "components/Label";
import Input from "components/Input";
import AuthCard from "components/AuthCard";
import GuestLayout from "layouts/GuestLayout";
import { NavLink } from "react-router-dom";
import ApplicationLogo from "components/ApplicationLogo";
import LoadingButton from "components/LoadingButton";
import ShowAlert from "components/ShowAlert";
import ShowError from "components/ShowError";

const Login: FC = () => {
  const { login, errors, message, isLoading } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange =
    (prop: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [prop]: event.target.value });
    };

  const submitForm = (event: React.SyntheticEvent) => {
    event.preventDefault();
    login(formData);
  };

  return (
    <GuestLayout>
      <AuthCard>
        <div className="flex justify-center mb-2 ">
          <NavLink to="/">
            <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
          </NavLink>
        </div>
        <ShowAlert message={message} />

        <form onSubmit={submitForm}>
          {/* Email Address */}
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              className="mt-1"
              onChange={handleChange("email")}
              required
              autoFocus
            />
            <ShowError errors={errors} type="email" />
          </div>
          {/* Password */}
          <div className="mt-4">
            <Label htmlFor="password">Password</Label>
            <Input
              required
              id="password"
              type="password"
              className="mt-1"
              value={formData.password}
              onChange={handleChange("password")}
              autoComplete="current-password"
            />
            <ShowError errors={errors} type="password" />
          </div>

          {/* Remember Me */}
          <div className="block mt-4">
            <label htmlFor="remember_me" className="inline-flex items-center">
              <input
                id="remember_me"
                type="checkbox"
                name="remember"
                className="rounded border-gray-300 text-indigo-600
                shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
          </div>

          <div className="flex items-center justify-between mt-4">
            <NavLink
              to="/forgot-password"
              className="underline text-sm text-gray-600 hover:text-gray-900"
            >
              Forgot your password?
            </NavLink>
            <LoadingButton isLoading={isLoading}>Login</LoadingButton>
          </div>
        </form>
      </AuthCard>
    </GuestLayout>
  );
};

export default Login;
