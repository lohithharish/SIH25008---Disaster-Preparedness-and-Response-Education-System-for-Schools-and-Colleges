const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const scoreRoutes = require("./routes/scoreRoutes");
require("dotenv").config();

const app = express();   // ⭐ MUST be before routes

// middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/api/password", require("./routes/passwordRoutes"));


// routes
const authRoutes = require("./routes/authRoutes");
const disasterRoutes = require("./routes/disasterRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/disasters", disasterRoutes);

app.use("/api/scores", scoreRoutes);

// connect DB + start server
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected Successfully");

    app.listen(5000, () => {
        console.log("Server running on port 5000");
    });
})
.catch(err => console.log("MongoDB Error:", err));
