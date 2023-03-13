import jwt from "jsonwebtoken";

const verifyJwt = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.json({ success: false, message: "No token provided" });
    }
    const decoded = jwt.verify(token, process.env.REACT_APP_JWT_SECRET);
    const userId = decoded.userid;
    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};

export default verifyJwt;
