const User = require("../models/userSchema");

// Signup Controller
// PATH -> /api/auth/signup
// API Type -> PUBLIC
const signUpUser = async (req, res) => {
  res.json({ msg: "Success" });
};

module.exports = {
  signUpUser,
};
