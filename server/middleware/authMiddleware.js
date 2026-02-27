const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    // 1️⃣ get header
    const authHeader = req.headers.authorization;

    // if no token
    if (!authHeader) {
      return res.status(401).json({ msg: "No token provided" });
    }

    // 2️⃣ remove Bearer word
    const token = authHeader.split(" ")[1];

    // 3️⃣ verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 4️⃣ attach user to request
    req.user = decoded;

    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ msg: "Token is not valid" });
  }
};
