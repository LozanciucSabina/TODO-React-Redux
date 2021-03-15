import { Link } from "react-router-dom";

import AuthenticationForm from "./AuthenticationForm";

export default function authenticationMessage({
  componentName,
  submitHandler,
  path,
  redirectLinkName,
}) {
  return (
    <div className="authentication">
      <h1 className="authentication__type">{componentName}</h1>
      <AuthenticationForm
        submit={submitHandler}
        componentName={componentName}
      />
      <div className="authentication__line"></div>
      <Link className="authentication__redirect-link" to={path}>
        {redirectLinkName}
      </Link>
    </div>
  );
}
