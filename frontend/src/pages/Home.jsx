import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const [workouts, setWorkouts] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editWorkout, setEditWorkout] = useState(null);
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
    //This line finds the index of the existing workout in the workouts array based on its _id. It uses the findIndex method, which returns the index of the first element in the array that satisfies the provided testing function. If no element satisfies the testing function, it returns -1.
    const existingWorkoutIndex = workouts.findIndex(
      (workout) => workout._id === newWorkout._id
    );

    //This conditional statement checks if the existingWorkoutIndex is not equal to -1, indicating that an existing workout with the same _id as newWorkout was found in the workouts array.
    if (existingWorkoutIndex !== -1) {
      // If the workout already exists, replace it with the updated one
      //If an existing workout is found, it updates the workouts array by replacing the existing workout with the newWorkout. It does this by creating a copy of the previous workouts array ([...prevWorkouts]), replacing the workout at existingWorkoutIndex with newWorkout, and then setting the state with the updated array.
      setWorkouts((prevWorkouts) => {
        const updatedWorkouts = [...prevWorkouts];
        updatedWorkouts[existingWorkoutIndex] = newWorkout;
        return updatedWorkouts;
      });
    } else {
      // If it's a new workout, add it to the workout list
      setWorkouts((prevWorkouts) => [newWorkout, ...prevWorkouts]);
    }
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
  const handleEdit = (workout) => {
    setIsEdit(true);
    setEditWorkout(workout);
  };
  const handleToggleEdit = () => {
    setIsEdit(!isEdit); // Toggle the edit mode
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
                handleEdit={handleEdit}
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
        <WorkoutForm
          onNewWorkout={handleNewWorkout}
          isEdit={isEdit}
          toggleEdit={handleToggleEdit}
          workout={editWorkout}
        />
      </div>
    </div>
  );
};

export default Home;
