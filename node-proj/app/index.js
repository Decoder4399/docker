const express = require("express");
const mongoose = require("mongoose");

const app = express();

// MongoDB connection
mongoose.connect("mongodb://db:27017/testdb")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("🔥 Docker Compose Project Running!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
