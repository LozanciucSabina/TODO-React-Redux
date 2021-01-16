import React, { useEffect, useState } from "react";

import app from "../firebase.js";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
