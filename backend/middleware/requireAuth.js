const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const requireAuth = async (req, res, next) => {
  //verify authentication
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }
  const token = authorization.split(" ")[1];
  try {
    const { _id } = jwt.verify(token, process.env.SECRET); //grab the id from the token but e verify sa then ge pass ang parameter 'token'
    req.user = await User.findOne({ _id }).select("_id"); //pangitaon sa databse using _id and ge select ra didto is ang _id
    next(); //fire the next handler function
  } catch (error) {
    console.log("The error is", error);
    res.status(401).json({ error: "Request is not authorized" });
  }
};

module.exports = requireAuth;
