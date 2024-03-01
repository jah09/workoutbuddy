import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
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
    <div className="px-16 py-10">
      <h1 className="text-2xl text-black font-medium "> Home page</h1>
      <div className="mt-10">
        {workouts &&
          workouts.map((workout) => (
            <div
              className="flex flex-col p-6 mb-2 bg-[#09150c] shadow-md hover:shodow-lg rounded-2xl w-[50%]"
              key={workout._id}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16 h-16 rounded-2xl p-3 border border-blue-100 text-accentcolor bg-myfontcolor"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <div className="flex flex-col ml-3">
                    <div className="font-medium leading-none text-myfontcolor">
                      {workout.title}
                    </div>
                    <p className="text-sm text-gray-600 leading-none mt-1 text-myfontcolor">
                      Reps: {workout.reps}
                    </p>
                    <p className="text-sm text-gray-600 leading-none mt-1 text-myfontcolor">
                      Load: {workout.load}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
