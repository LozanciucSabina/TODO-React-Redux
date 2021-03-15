import React from "react";

export default function authenticationForm({ submit, componentName }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    submit(e.target.elements);
  };
  return (
    <form className="authentication__form" onSubmit={handleSubmit}>
      <input
        className="authentication__form__input"
        type="email"
        name="email"
        placeholder="Email"
      />
      <input
        className="authentication__form__input"
        type="password"
        name="password"
        placeholder="Password"
      />
      <button className="authentication__form__submit-btn" type="submit">
        {componentName}
      </button>
    </form>
  );
}
