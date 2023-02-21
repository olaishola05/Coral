import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>{error.status}</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}