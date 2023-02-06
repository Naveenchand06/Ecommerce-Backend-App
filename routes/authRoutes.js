const express = require("express");
const authRouter = express.Router();

const { signUpUser } = require("../controllers/authController");

const {
  signUpMiddleware,
  loginMiddleware,
} = require("../middlewares/inputMiddleware");

authRouter.post("/signup", signUpMiddleware, signUpUser);

authRouter.post("/login", loginMiddleware, (req, res) => {
  res.json({ msg: "Naveenchand" });
});

module.exports = authRouter;
