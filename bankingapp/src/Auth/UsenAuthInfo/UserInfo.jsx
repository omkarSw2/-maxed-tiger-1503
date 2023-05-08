import React, { createContext, useState } from "react";

export const AuthUserDetails = createContext();
export default function UserInfo({ children }) {
  const [userDetails, setUserDetails] = useState({});
  console.log(userDetails);
  const saveUserinfo = (info) => {
    setUserDetails(info);
  };
  const deleteUserInfo = (info) => {
    setUserDetails(null);
  };
  return (
    <AuthUserDetails.Provider
      value={{ saveUserinfo, deleteUserInfo, userDetails }}>
      {children}
    </AuthUserDetails.Provider>
  );
}
