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

//static sign up method
userSchema.statics.signup = async function (email, password) {
  //validation
  if (!email || !password) {
    throw Error("All field must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not strong");
  }
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already in use.");
  }

  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);
  const user = await this.create({ email, password: hashed });

  return user;
};
module.exports = mongoose.model("User", userSchema);
