import { createContext, useReducer,useEffect } from "react";

export const AuthContext = createContext();
export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
      };
    default:
      return state;
  }
};
export const AuthContextProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(authReducer, {
    user: null,
  });

  //this effect will fire once if the page/component is render
  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem('user')); //when store to the local storage it is json string so we need to pass into user nga naka object na siya.. token email 
    if(user){
      dispatch({type:"LOGIN",payload:user});
    }
  },[])
  console.log("auth context state", state);

  //return the auth context
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
