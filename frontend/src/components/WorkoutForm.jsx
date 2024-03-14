import React, { useState, useEffect } from "react";
import axios from "axios";
const WorkoutForm = ({ onNewWorkout, workout, isEdit }) => {
  console.log("workoutform line 4", workout);
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const [formData, setFormData] = useState({ title: "", load: "", reps: "" });
  useEffect(() => {
    if (isEdit && workout) {
      // If in edit mode and workout data is provided, set the form data to the workout data
      setFormData(workout);
    } else {
      // If not in edit mode, clear the form data
      setFormData({ title: "", load: "", reps: "" });
    }
  }, [isEdit, workout]);
  //function for submit button
  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };
    try {
      const response = await axios.post("/api/workouts", workout);
      console.log("the res is ", response);

      if (response.status === 200) {
        onNewWorkout(response.data);
        setTitle("");
        setLoad("");
        setReps("");
        setEmptyFields([]);
        setError();
      }
    } catch (error) {
      // Handle any network errors or errors thrown during the request
      if (error.response && error.response.data) {
        setError(error.response.data.error);
        setEmptyFields(error.response.data.emptyFields);
      } else {
        setError("An unexpected error occurred");
      }
      console.error("Error:", error);
    }
  };

  return (
    <div className="mt-10 p-2  ">
      <div className=" p-10 rounded-lg bg-[#09150c]   ">
        <form action="" onSubmit={handleSubmit} className="text-center">
          <h3 className="text-xl font-medium text-myfontcolor text-center">
            {isEdit ? "Edit Workout" : "Add Workout"}
          </h3>

          <input
            className={
              emptyFields.includes("title")
                ? "ring-offset-2 ring-2 ring-red-500 mb-2 mt-4 p-4 rounded-md w-full bg-myfontcolor text-black outline-none"
                : "mb-2 mt-4 p-4 rounded-md w-full bg-myfontcolor text-black outline-none"
            }
            value={formData.title}
            placeholder="Exercise title"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />

          <br />
          <input
            className={
              emptyFields.includes("load")
                ? "ring-offset-2 ring-2 ring-red-500 mb-2 mt-4 p-4 rounded-md w-full bg-myfontcolor text-black outline-none"
                : "mb-2 mt-4 p-4 rounded-md w-full bg-myfontcolor text-black outline-none"
            }
            placeholder="Load (in kg )"
            type="number"
            value={formData.load}
            onChange={(e) => setLoad(e.target.value)}
          />
          <br />
          <input
            className={
              emptyFields.includes("reps")
                ? "ring-offset-2 ring-2 ring-red-500 mb-2 mt-4 p-4 rounded-md w-full bg-myfontcolor text-black outline-none"
                : "mb-2 mt-4 p-4 rounded-md w-full bg-myfontcolor text-black outline-none"
            }
            placeholder="Reps"
            type="number"
            value={formData.reps}
            onChange={(e) => setReps(e.target.value)}
          />
          <br />
          <div className="mt-4 text-center">
            <button className="p-2 py-4 bg-primarycolor rounded-md font-medium w-full text-xl">
              {isEdit ? "Save Workout" : "Submit"}
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
