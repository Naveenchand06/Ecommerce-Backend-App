// Importing Packages
const PORT = 3000;
const express = require("express");

// Importing Files
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/auth", authRoutes);

// If URL doesn't match
app.use((req, res) => {
  res.status(400).json({ error: "Invalid End point" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Connected at PORT -> ${PORT}`);
});
