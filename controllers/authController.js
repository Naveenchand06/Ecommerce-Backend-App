const User = require("../models/userSchema");

// * PATH -> /api/auth/signup
// * Signup Controller
// * API Type -> PUBLIC
const signUpUser = async (req, res) => {
  res.json({ msg: "Success" });
};

// * PATH -> /api/auth/signup
// * Login Controller
// * API Type -> PUBLIC
const loginUser = async (req, res) => {
  res.json({ msg: "Success" });
};

module.exports = {
  signUpUser,
};
