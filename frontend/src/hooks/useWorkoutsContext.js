import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);
//   console.log("na call ni");
  if (!context) {
    throw Error("useWorkoutsContext must be used inside an");
  }
  return context;
};
