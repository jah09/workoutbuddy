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
const requireAuth=require('../middleware/requireAuth');
router.use(requireAuth)//require auth for all workout routes
//get all workouts
router.get("/", getWorkouts);

//get single workout
router.get("/:id", getWorkout);

//post a workout
router.post("/", createWorkout);

//delete a workout
router.delete("/:id", deleteWorkout);

//update a workout
router.put("/:id", updateWorkout);
//export the route
module.exports = router;
