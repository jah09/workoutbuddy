import React, { useState } from "react";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  //function for submit button
  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, load, reps };

    //now we want to fetch api to post a request
    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout), //dili maka send sa workout na object so e turn sya into JSON
      //header property pra mo ingon nga content is Json
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    } else {
      setTitle("");
      setLoad("");
      setReps("");
      setError();
      console.log("New workout added", json);
    }
  };
  return (
    <div className="mt-10 p-2  ">
      <div className=" p-10 rounded-lg bg-[#09150c]   ">
        <form action="" onSubmit={handleSubmit} className="text-center">
          <h3 className="text-xl font-medium text-myfontcolor text-center">
            Add a new Workout
          </h3>
          <input
            className="mb-2 mt-4 p-4 rounded-md w-full bg-myfontcolor text-black outline-none"
            value={title}
            placeholder="Exercise title"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <input
            className="mb-2 mt-4 p-4 rounded-md w-full bg-myfontcolor text-black outline-none"
            placeholder="Load (in kg )"
            type="number"
            value={load}
            onChange={(e) => setLoad(e.target.value)}
          />
          <br />
          <input
            className="mb-2 mt-4 p-4 rounded-md w-full bg-myfontcolor text-black outline-none"
            placeholder="Reps"
            type="number"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
          />
          <br />
          <div className="mt-4 text-center">
            <button className="p-2 py-4 bg-primarycolor rounded-md font-medium w-full text-xl">
              Add workout
            </button>
          </div>
          <br />
          {error && <div className="text-red-500">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default WorkoutForm;
