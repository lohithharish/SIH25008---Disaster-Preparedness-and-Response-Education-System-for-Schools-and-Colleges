const Score = require("../models/Score");


// SAVE SCORE
exports.saveScore = async (req, res) => {
  try {
    const newScore = new Score(req.body);
    await newScore.save();
    res.json({ msg: "Score saved" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Error saving score" });
  }
};


// GET LEADERBOARD
exports.getScores = async (req, res) => {
  try {
    const scores = await Score.find().sort({ score: -1 }).limit(10);
    res.json(scores);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Error fetching scores" });
  }
};
