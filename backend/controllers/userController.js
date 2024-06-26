const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
//create a token
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

//login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Attempt to signup the user using the User.signup() method
    const user = await User.login(email, password);
    //create a token
    const token = createToken(user.id);
    // If signup is successful, send response with status code 200 and user data
    res.status(200).json({ email, token,mss:"Successfully login"});
  } catch (error) {
    // If an error occurs during signup, send response with status code 400 and error message
    res.status(400).json({ error: error.message });
  }
  // res.json({ mssg: "Login user" });
};

// Function to handle user signup
const signupUser = async (req, res) => {
  // Extract email and password from request body
  const { email, password } = req.body;
  try {
    // Attempt to signup the user using the User.signup() method
    const user = await User.signup(email, password);
    //create a token
    const token = createToken(user.id);
    // If signup is successful, send response with status code 200 and user data
    res.status(200).json({ email, token, mssg: "Successfully signup" });
  } catch (error) {
    // If an error occurs during signup, send response with status code 400 and error message
    res.status(400).json({ error: error.message });
  }
  // Note: This line will not execute because it's placed after the try-catch block
  // This seems to be a misplaced line of code
  //res.json({ mssg: "signup user" });
};

module.exports = { loginUser, signupUser };
