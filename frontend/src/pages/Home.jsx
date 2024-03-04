import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);
  console.log("The workouts is/are", workouts);
  //render once when components render
  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch("/api/workouts");

        if (!response.ok) {
          console.error("Error fetching workouts: ", response);
          throw new Error(`API request failed with status ${response.status}`);
        }

        const json = await response.json(); // Parse the response directly as JSON

        setWorkouts(json); // Assuming json is an array of workouts or an object
      } catch (error) {
        console.error("Error fetching workouts: ", error);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="px-16 py-10   flex   ">
      <div className=" w-1/2  ">
        <h1 className="text-2xl text-myfontcolor font-medium "> Home page</h1>
        <div className="mt-10">
          {workouts &&
            workouts.map((workout) => (
              <WorkoutDetails workout={workout} key={workout._id} />
            ))}
        </div>
      </div>
      <div className="w-1/2 p-6">
        <WorkoutForm />
      </div>
    </div>
  );
};

export default Home;
