import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const [workouts, setWorkouts] = useState([]);
  console.log("The workouts is/are", workouts);
  //render once when components render
  useEffect(() => {
    // console.log("the dispatch", dispatch);

    const fetchWorkouts = async () => {
      // const response = await fetch("/api/workouts");
      // const json = await response.json(); // Parse the response directly as JSON

      // if (response.ok) {
      //   console.log("The response 20", json);
      //   dispatch({ type: "SET_WORKOUTS", payload: json });
      // }
      try {
        const response = await axios.get("/api/workouts").then((res) => {
          setWorkouts(res.data); // Assuming json is an array of workouts or an object
          // console.log("The response 20", response);
        });

        // if (!response.ok) {
        //   console.error("Error fetching workouts: ", response);
        //   throw new Error(`API request failed with status ${response.status}`);
        // }

        //const json = await response.json(); // Parse the response directly as JSON
      } catch (error) {
        console.error("Error fetching workouts: ", error);
      }
    };
    fetchWorkouts();
  }, []);
const handleNewWorkout = (newWorkout) => {
  setWorkouts((prevWorkouts) => [newWorkout,...prevWorkouts ]);
};
  return (
    <div className="px-16 py-10   flex   ">
      <div className=" w-1/2  ">
        <h1 className="text-2xl text-myfontcolor font-medium "> Home page</h1>
        <div className="mt-10">
          {workouts && workouts.length > 0 ? (
            workouts.map((workout) => (
              <WorkoutDetails workout={workout} key={workout._id} />
            ))
          ) : (
            <p className="text-xl text-myfontcolor font-medium py-2">
              No workouts available yet
            </p>
          )}
        </div>
      </div>
      <div className="w-1/2 p-6">
        <WorkoutForm onNewWorkout={handleNewWorkout}/>
      </div>
    </div>
  );
};

export default Home;
