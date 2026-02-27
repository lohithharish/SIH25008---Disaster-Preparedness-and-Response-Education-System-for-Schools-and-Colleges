const { updateDisaster } = require("../controllers/disasterController");
const express = require("express");
const router = express.Router();

// Middlewares
const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

// Controllers
const {
  createDisaster,
  getDisasters,
  deleteDisaster,
} = require("../controllers/disasterController");


// ==============================
// PROTECTED ROUTES (JWT REQUIRED)
// ==============================

// CREATE disaster with image upload
router.post(
  "/",
  authMiddleware,
  upload.single("image"),
  createDisaster
);

// GET all disasters
router.get(
  "/",
  authMiddleware,
  getDisasters
);

// DELETE disaster
router.delete(
  "/:id",
  authMiddleware,
  deleteDisaster
);

// UPDATE disaster
router.put(
  "/:id",
  authMiddleware,
  upload.single("image"),
  updateDisaster
);

module.exports = router;
