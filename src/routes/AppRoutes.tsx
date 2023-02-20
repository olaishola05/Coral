import App from "../App";
import ErrorPage from "../Pages/Error/ErrorPage";

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "login",
    element: <div>Login page</div>
  },
  {
    path: "signup",
    element: <div>Register page</div>,
    children: [
      {
        path: "signup/email-sent",
        element: <div>Step 1</div>
      },
      {
        path: "signup/profile",
        element: <div>Step 2</div>
      },
    ]
  },
];