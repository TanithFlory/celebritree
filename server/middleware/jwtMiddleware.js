import jwt from "jsonwebtoken";

const verifyJwt = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.json({ success: false, message: "No token provided" });
    }
    const decoded = jwt.verify(token, process.env.REACT_APP_JWT_ACCESS_SECRET);
    req.data = {...decoded};
    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};

export default verifyJwt;
