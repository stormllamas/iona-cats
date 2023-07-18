import { Container } from "react-bootstrap";
import { Link, useRouteError } from "react-router-dom";

import { RouteErrorResponse } from "../../../types/common";

const ErrorPage = () => {
  const error = useRouteError() as RouteErrorResponse;

  return (
    <Container>
      <div id="error-page">
        <h1>Oops!</h1>
        <h5>Sorry, an unexpected error has occurred.</h5>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/">Click here to go back to more cats!</Link>
      </div>
    </Container>
  );
};

export default ErrorPage;
