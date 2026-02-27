const Disaster = require("../models/disaster");


// ==============================
// CREATE DISASTER
// ==============================
exports.createDisaster = async (req, res) => {
  try {
    const { title, description, category, severity } = req.body;

    const image = req.file ? req.file.filename : null;

    const disaster = await Disaster.create({
      title,
      description,
      category,
      severity,
      image,
      user: req.user.id,
    });

    res.status(201).json({
      msg: "Disaster added successfully",
      disaster,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};


// ==============================
// GET ALL DISASTERS
// ==============================
exports.getDisasters = async (req, res) => {
  try {
    const disasters = await Disaster.find().sort({ createdAt: -1 });
    res.json(disasters);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};


// ==============================
// DELETE DISASTER
// ==============================
exports.deleteDisaster = async (req, res) => {
  try {
    await Disaster.findByIdAndDelete(req.params.id);
    res.json({ msg: "Disaster deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};
// ==============================
// UPDATE DISASTER
// ==============================
exports.updateDisaster = async (req, res) => {
  try {
    const { title, description, category, severity } = req.body;

    const updatedData = {
      title,
      description,
      category,
      severity,
    };

    // if new image uploaded
    if (req.file) {
      updatedData.image = req.file.filename;
    }

    const disaster = await Disaster.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );

    res.json({
      msg: "Disaster updated",
      disaster,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};
