const mongoose = require("mongoose");

const disasterSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: {
  type: String,
  },
  
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ["Flood", "Fire", "Earthquake", "Landslide", "Storm"],
    required: true
  },
  locationName: String,

  // GPS coordinates
  latitude: Number,
  longitude: Number,

  severity: {
    type: String,
    enum: ["Low", "Medium", "High"],
    default: "Low"
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Disaster", disasterSchema);
