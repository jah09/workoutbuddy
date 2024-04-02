import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const { dispatch } = useAuthContext();
  const signup = async (email, password) => {
    setLoading(true);
    setError(null);
    const response = await fetch("/api/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    console.log("19", response);
    // const json = await response.json();

    try {
      const json = await response.json();
      console.log("Parsed Response:", json); // Log the parsed JSON data

      if (!response.ok) { 
        setLoading(false);
        setError(json.error);
      }
      if (response.ok) {
        alert(json.mssg);
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

  return { signup, error, loading };
};
