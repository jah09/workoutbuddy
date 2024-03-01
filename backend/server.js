//require the .env and invoke the config
require("dotenv").config();
//require particular router
//const workoutRoutes = require("./routes/workouts");

const mongoose = require("mongoose"); //connect to db
const express = require("express");
const workoutRoutes = require("./routes/workout");
//express app start
const app = express();
const cors = require('cors');
app.use(cors());

//install global middleware
app.use(express.json());
app.use((req, res, next) => {
  next();
});

//use that routes in our app->route //routes
app.use('/api/workouts', workoutRoutes); //use all routes attach from workoutRoutes

//connect to db
mongoose
  .connect(process.env.MONGO_URI) //it will take a little time to connecct so aysnc siya maong mag .promise
  .then((result) => {
    //listen  for the request
    app.listen(process.env.PORT, () => {
      console.log();
      console.log("Listening on port!", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("The error is", err);
  });

 
