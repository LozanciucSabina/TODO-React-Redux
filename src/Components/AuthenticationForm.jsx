import React from "react";

export default ({ submit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    submit(e.target.elements);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" placeholder="Email" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Submit</button>
    </form>
  );
};
