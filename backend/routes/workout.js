const express = require("express");
//import the controller
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");
const router = express.Router();

//get all workouts
router.get("/", getWorkouts);

//get single workout
router.get("/:id", getWorkout);

//post a workout
router.post("/", createWorkout);

//delete a workout
router.delete("/:id", deleteWorkout);

//update a workout
router.patch("/:id", updateWorkout);
//export the route
module.exports = router;
