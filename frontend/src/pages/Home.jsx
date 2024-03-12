import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const [workouts, setWorkouts] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
 
  //render once when components render
  useEffect(() => {
    fetchWorkouts();
  }, []);
  //retrieve the workouts
  const fetchWorkouts = async () => {
    try {
      const response = await axios.get("/api/workouts").then((res) => {
        setWorkouts(res.data); // Assuming json is an array of workouts or an object
      });
    } catch (error) {
      console.error("Error fetching workouts: ", error);
    }
  };
  const handleNewWorkout = (newWorkout) => {
    setWorkouts((prevWorkouts) => [newWorkout, ...prevWorkouts]);
  };
  //delete a workout
  const handleDeleteWorkout = async (id) => {
    try {
      await axios.delete(`/api/workouts/${id}`);
      // After successful deletion, reload data from the server
      fetchWorkouts();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //edit a workout
  const handleEditWorkout = async () => {
    // e.preventDefault();
   
    setIsEdit(true);
  };
  return (
    <div className="px-16 py-10   flex   ">
      <div className=" w-1/2  ">
        <h1 className="text-2xl text-myfontcolor font-medium "> Home page</h1>
        <div className="mt-10">
          {workouts && workouts.length > 0 ? (
            workouts.map((workout) => (
              <WorkoutDetails
                workout={workout}
                key={workout._id}
                onDelete={handleDeleteWorkout}
                onEdit={handleEditWorkout}
              />
            ))
          ) : (
            <p className="text-xl text-myfontcolor font-medium py-2">
              No workouts available yet
            </p>
          )}
        </div>
      </div>
      <div className="w-1/2 p-6">
        <WorkoutForm onNewWorkout={handleNewWorkout} isEdit={isEdit} />
      </div>
    </div>
  );
};

export default Home;
