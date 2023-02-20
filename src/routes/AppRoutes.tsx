import App from "../App";
import ErrorPage from "../Pages/Error/ErrorPage";

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  }
];