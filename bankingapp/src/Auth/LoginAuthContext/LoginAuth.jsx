import { Box } from "@chakra-ui/react";
import React, { useState } from "react";

import { createContext } from "react";
export const LoginAuth = createContext();

export default function LoginAuthContextProvider({ children }) {
  const [isAuth, setIsauth] = useState(false);

  const login = () => {
    setIsauth(true);
  };
  const logout = () => {
    setIsauth(false);
  };
  return (
    <LoginAuth.Provider value={{ login, logout, isAuth }}>
      {children}
    </LoginAuth.Provider>
  );
}
