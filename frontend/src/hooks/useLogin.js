import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";
export const useLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const { dispatch } = useAuthContext();
  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    const response = await fetch("/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    // const json = await response.json();

    try {
      const json = await response.json();
      console.log("Parsed Response:", json); // Log the parsed JSON data

      if (!response.ok) {
        setLoading(false);
        setError(json.error);
      }
      if (response.ok) {
        alert(json.mss);
        navigate("/");
        //save the user to local storage

        localStorage.setItem("user", JSON.stringify(json));

        //update the auth context
        dispatch({ type: "LOGIN", payload: json });
        setLoading(false);
      }
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  };

  return { login, error, loading };
};
