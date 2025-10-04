import { useRouteError } from "react-router";

const ErrorPage = function () {
  const err = useRouteError(); // useRouteError() Hook for handling errors occur in a specific route.
  console.log(err);

  return (
    <>
      <h1> Oops something went wrong ... </h1>
      <p>
        {err.data} {err.status} {err.statusText}
      </p>
    </>
  );
};

export default ErrorPage;
