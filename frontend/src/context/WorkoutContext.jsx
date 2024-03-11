// WorkoutContext.js

import React, { createContext, useState, useContext } from "react";

const WorkoutContext = createContext();
 
export const useWorkoutContext = () => {
  return useContext(WorkoutContext);
};

export const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (newWorkout) => {
    setWorkouts((prevWorkouts) => [...prevWorkouts, newWorkout]);
  };

  return (
    <WorkoutContext.Provider value={{ workouts, addWorkout }}>
      {children}
    </WorkoutContext.Provider>
  );
};
