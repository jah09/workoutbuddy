import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
//import { WorkoutsContextProvider } from "./context/WorkoutContext.jsx";
import { AuthContextProvider } from './context/AuthContext';
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App/>
    </AuthContextProvider> 
    {/* <WorkoutsContextProvider>
      <App />{" "}
    </WorkoutsContextProvider> */}
  </React.StrictMode>
);
