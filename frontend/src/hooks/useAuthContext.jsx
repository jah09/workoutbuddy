import { AuthContext } from "../context/AuthContext.jsx";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error("userAuthContext must be used inside an authcontextprovider");
  }
  return context;
};
