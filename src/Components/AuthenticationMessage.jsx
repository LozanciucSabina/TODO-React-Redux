import { Link } from "react-router-dom";

import AuthenticationForm from "./AuthenticationForm";

export default function authenticationMessage({
  componentName,
  submitHandler,
  path,
  message,
  redirectLinkName,
}) {
  return (
    <div className="auth">
      <h1>{componentName}</h1>
      <AuthenticationForm submit={submitHandler} />
      <p>
        {message}
        <Link to={path}>{redirectLinkName}</Link>
      </p>
    </div>
  );
}
