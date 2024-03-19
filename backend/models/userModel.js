const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    //path: { type: String, required: true },

    email: {
      type: String,
      required: true,
      unique:true,
    },
    //number of repitition of this exercise
    passworf: {
      type: String,
      required: true,

    },
    
  }
 
);

module.exports = mongoose.model("User", userSchema);