import { Link } from "react-router-dom";
import AuthenticationForm from "./AuthenticationForm";

export const AuthMessage = ({
  componentName,
  submitHandler,
  path,
  message,
  redirectLinkName,
}) => {
  return (
    <>
      <h1>{componentName}</h1>
      <AuthenticationForm submit={submitHandler} />
      <p>
        {message}
        <Link to={path}>{redirectLinkName}</Link>
      </p>
    </>
  );
};
