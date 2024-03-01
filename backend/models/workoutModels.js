const mongoose = require("mongoose");
//this sile is model
//create new schema
const Schema = mongoose.Schema;

//if unsa porma sa schema sa workout, or unsa ang needed sa workout document
//make a model base on the schema, apply that schema to the model, and model will interact to database/collection on that name
const workoutSchema = new Schema(
  {
    //path: { type: String, required: true },

    title: {
      type: String,
      required: true,
    },
    //number of repitition of this exercise
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Workout", workoutSchema);
