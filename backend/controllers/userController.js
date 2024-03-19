const User=require('../models/userModel');

//login user
const loginUser=async(req,res)=>{
res.json({mssg:'Login user'});
}



//signup
const signupUser = async (req, res) => {
  res.json({ mssg: "signup user" });
};

module.exports = { loginUser ,signupUser};