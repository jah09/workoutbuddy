import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();
  const logout = () => {
    //remove from local storage
    localStorage.removeItem("user");
    //dispatch logout fnction
    dispatch({ type: "LOGOUT" });
 
    navigate("/login");
  };
  return { logout };
};
