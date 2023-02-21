import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/Error/ErrorPage";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Root from "../Pages/Root";
import Dashboard from "../Pages/Dashboard/Dashboard";



const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Dashboard />,
        children: [
          {
            path: "/board/processes",
            element: <div>Processes</div>,
          },
          {
            path: "/board/processes/:id",
            element: <div>Processes</div>,
          }
        ],
      },

      {
        path: "login",
        element: <Login />,
      },

      {
        path: "signup",
        element: <Signup />,
      },

      {
        path: "signup/sent-email",
        element: <div>Sent Email</div>,
      },
      {
        path: "signup/complete-profile",
        element: <div>Profile</div>,
      },
    ]
  },
];

export const router = createBrowserRouter(routes);