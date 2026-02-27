const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
  name: String,
  level: Number,
  score: Number,
  date: String,
});

module.exports = mongoose.model("Score", scoreSchema);
