import React from "react";

export default function authenticationForm({ submit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    submit(e.target.elements);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Submit</button>
    </form>
  );
}
