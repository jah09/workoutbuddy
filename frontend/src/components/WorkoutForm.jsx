import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
const WorkoutForm = ({ onNewWorkout, workout, isEdit, toggleEdit }) => {
  //const [formData, setFormData] = useState({ title: "", load: "", reps: "" });
  const [formData, setFormData] = useState({
    title: workout ? workout.title : "",
    load: workout ? workout.load : "",
    reps: workout ? workout.reps : "",
  });

  // const [isEditClick, setIsEditClick] = useState(isEdit);

  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const { user } = useAuthContext();
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
    if (!user) {
      setError("You must be login");
      return;
    }
    //const workout = { title, load, reps };
    //for editing then update
    if (isEdit) {
      try {
        const response = await axios.put(
          `/api/workouts/${formData._id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        if (response.status === 200) {
          onNewWorkout(response.data);
          setFormData({ title: "", load: "", reps: "" });
          setEmptyFields([]);
          setError();
          toggleEdit(); // Toggle the edit mode after successful update
        }
      } catch (error) {
        if (error.response && error.response.data) {
          setError(error.response.data.error);
          setEmptyFields(error.response.data.emptyFields);
        } else {
          setError("An unexpected error occurred");
        }
      }
    } else {
      //for inserting workout
      try {
        const response = await axios.post("/api/workouts", formData, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        if (response.status === 200) {
          onNewWorkout(response.data);
          setFormData({ title: "", load: "", reps: "" });
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
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="mt-10 p-2  ">
      <div className=" p-8 rounded-lg bg-[#09150c]   ">
        <form action="" onSubmit={handleSubmit} className="text-center">
          <h3 className="text-xl font-medium text-myfontcolor text-center">
            {isEdit ? "Edit Workout" : "Add Workout"}
          </h3>

          <input
            className={
              emptyFields?.includes("title")
                ? "ring-offset-2 ring-2 ring-red-500 mb-2 mt-4 p-4 rounded-md w-full bg-myfontcolor text-black outline-none"
                : "mb-2 mt-4 p-4 rounded-md w-full bg-myfontcolor text-black outline-none"
            }
            value={formData.title}
            placeholder="Exercise title"
            type="text"
            name="title"
            onChange={handleInputChange}
          />

          <br />
          <input
            className={
              emptyFields?.includes("load")
                ? "ring-offset-2 ring-2 ring-red-500 mb-2 mt-4 p-4 rounded-md w-full bg-myfontcolor text-black outline-none"
                : "mb-2 mt-4 p-4 rounded-md w-full bg-myfontcolor text-black outline-none"
            }
            placeholder="Load (in kg )"
            type="number"
            value={formData.load}
            name="load"
            onChange={handleInputChange}
          />
          <br />
          <input
            className={
              emptyFields?.includes("reps")
                ? "ring-offset-2 ring-2 ring-red-500 mb-2 mt-4 p-4 rounded-md w-full bg-myfontcolor text-black outline-none"
                : "mb-2 mt-4 p-4 rounded-md w-full bg-myfontcolor text-black outline-none"
            }
            placeholder="Reps"
            type="number"
            value={formData.reps}
            name="reps"
            onChange={handleInputChange}
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
