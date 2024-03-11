//import the workoutmodel
const Workout = require("../models/workoutModels");
const mongoose = require("mongoose");
//get all workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });

  res.status(200).json(workouts);
};
//get a single workouts
const getWorkout = async (req, res) => {
  const { id } = req.params;
  const workout = await Workout.findById(id);
  //echeck sa mongoose if this ID is valid or not
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not such workouts" });
  }

  if (!workout) {
    return res.status(404).json({ error: "Not such workouts" });
  }
  res.status(200).json(workout);
};

//create a new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  let emptyFields = [];
  if (!title) {
    emptyFields.push("title");
  }
  if (!load) {
    emptyFields.push("load");
  }
  if (!reps) {
    emptyFields.push("reps");
  }
  // greater than 0
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill all fields", emptyFields });
  }
  //add docs to db
  try {
    const workout = await Workout.create({
      title,
      load,
      reps,
    });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
//delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not such workouts" });
  }
  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(404).json({ error: "Not such workouts" });
  }
  res.status(200).json(workout);
};
//update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  // console.log("Line 57",req.params)
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not such workouts" });
  }
  const workout = await Workout.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!workout) {
    return res.status(404).json({ error: "Not such workouts" });
  }
  res.status(200).json(workout);
};
//export the function or this file
module.exports = {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
};
