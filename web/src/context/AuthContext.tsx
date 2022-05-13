import { useState } from "react";
import { createContext, ReactElement, ReactNode } from "react";
import { Usuario } from "../models/Usuario";

export interface IAuthContext {
  currentUser?: Usuario;
  login: (user: Usuario, token: string) => void;
  logout: () => void;
  checkUser: () => void;
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }): ReactElement => {
  const [currentUser, setCurrentUser] = useState<Usuario | undefined>(undefined);

  const login = async (user: Usuario, token: string) => {
    localStorage.setItem("currentUser", JSON.stringify(user));
    localStorage.setItem("token", token);    
    setCurrentUser(new Usuario(user));
  };

  const logout = async () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
    setCurrentUser(undefined);
  };

  const checkUser = async () => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) setCurrentUser(new Usuario(JSON.parse(currentUser)));
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        login,
        logout,
        checkUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;