import React, { useState } from "react";
import WorkoutForm from "./WorkoutForm";
import Home from "./Home";
import { WorkoutProvider } from "../context/WorkoutContext";
function CommonAncestorComponent() {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (newWorkout) => {
    setWorkouts((prevWorkouts) => [...prevWorkouts, newWorkout]);
  };

  return (
    <WorkoutProvider>
      <>
        <WorkoutForm />
        <Home />
      </>
    </WorkoutProvider>
  );
}

export default CommonAncestorComponent;
