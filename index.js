// Importing Packages
const PORT = 3000;
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

// Importing Files
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
mongoose.set("strictQuery", true);

// Connecting to MongoDB Service
connectDB();

const app = express();

// Middlewares
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
