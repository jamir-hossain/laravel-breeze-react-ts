import Home from "pages/home";
import NotFound from "pages/404";
import { lazy, Suspense } from "react";
import AuthGuard from "auth/AuthGuard";
import Dashboard from "pages/dashboard";
import VerifyEmail from "pages/verify-email";
import VerifyEmailResent from "pages/verify-email-resent";
import CheckVerifyEmail from "auth/CheckVerifyEmail";
import ProtectedRoute from "auth/ProtectedRoute";

const Loadable = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<h1>Loading.....</h1>}>
      <Component {...props} />
    </Suspense>
  );

// Dashboard page
const AppLayout = Loadable(lazy(() => import("layouts/AppLayout")));

// authentication pages
const Login = Loadable(lazy(() => import("pages/login")));
const Register = Loadable(lazy(() => import("pages/register")));
const ForgotPassword = Loadable(lazy(() => import("pages/forgot-password")));
const PasswordReset = Loadable(lazy(() => import("pages/password-reset")));

// routes
export const all_routes = [
  {
    path: "/dashboard",
    element: (
      <AuthGuard>
        <AppLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "home",
        element: <Home />,
      },
      // {
      //   path: "verify-email-resent",
      //   element: <VerifyEmailResent />,
      // },
    ],
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: (
      <ProtectedRoute>
        <Login />
      </ProtectedRoute>
    ),
  },
  {
    path: "/register",
    element: (
      <ProtectedRoute>
        <Register />
      </ProtectedRoute>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <ProtectedRoute>
        <ForgotPassword />
      </ProtectedRoute>
    ),
  },
  {
    path: "/password-reset/:token",
    element: (
      <ProtectedRoute>
        <PasswordReset />
      </ProtectedRoute>
    ),
  },
  {
    path: "/verify-email/:token",
    element: (
      <CheckVerifyEmail>
        <VerifyEmail />
      </CheckVerifyEmail>
    ),
  },
  {
    path: "/session/404",
    element: <NotFound />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
