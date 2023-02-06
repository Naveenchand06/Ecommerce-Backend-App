// Signup Middleware
// PATH -> /api/auth/signup
const signUpMiddleware = (req, res, next) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  if (!name || !email || !password) {
    res.status(401).json({ error: "Invalid Input Signup" });
  } else {
    next();
  }
};

// Login Middleware
// PATH -> /api/auth/login
const loginMiddleware = (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body);
  if (!email || !password) {
    res.status(401).json({ error: "Invalid Input" });
  } else {
    next();
  }
};

module.exports = {
  signUpMiddleware,
  loginMiddleware,
};
