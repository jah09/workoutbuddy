const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new Schema({
  //path: { type: String, required: true },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  //number of repitition of this exercise
  password: {
    type: String,
    required: true,
  },
});

// Define a static method named 'signup' on the userSchema schema
userSchema.statics.signup = async function (email, password) {
  //validation check for email and password
  if (!email || !password) {
    // Throw an error if either email or password is missing
    throw Error("All field must be filled");
  }
  if (!validator.isEmail(email)) {
    // Throw an error if the provided email is not valid
    throw Error("Email is not valid");
  }
  if (!validator.isStrongPassword(password)) {
    // Throw an error if the provided password is not strong
    throw Error("Password is not strong");
  }
  // Check if the email already exists in the database
  const exists = await this.findOne({ email });
  if (exists) {
    // Throw an error if the email is already in use
    throw Error("Email already in use.");
  }

  // Generate a salt for password hashing
  const salt = await bcrypt.genSalt(10);
  // Hash the password using the generated salt
  const hashed = await bcrypt.hash(password, salt);
  // Create a new user document in the database with the hashed password
  const user = await this.create({ email, password: hashed });

  // Return the newly created user document
  return user;
};

//static login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    // Throw an error if either email or password is missing
    throw Error("All field must be filled");
  }
  const user = await this.findOne({ email });
  if (!user) {
    // Throw an error if the email is already in use
    throw Error("Incorrect email");
  }
  //password- plain ge enter ni user for login .. user.password- naa na sa database
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect password");
  }
  return user;
};
module.exports = mongoose.model("User", userSchema);
