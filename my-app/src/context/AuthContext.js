import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const login = async (user, token) => {
    localStorage.setItem("currentUser", JSON.stringify(user));
    localStorage.setItem("token", token);
    setCurrentUser(user);
  };

  const logout = async () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
    setCurrentUser(undefined);
  };

  const checkUser = async () => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) setCurrentUser(JSON.parse(currentUser));
  };

  return (
    <AuthContext.Provider value={{ currentUser, checkUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
