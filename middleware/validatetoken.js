import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../utils/jwt.js";

export const authMidlleware = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "missing token" });

  try {
    const { payload } = jwt.verify(token, JWT_SECRET, { complete: true });

    req.payload = payload;

    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "your session has expired" });
    } else {
      console.log(error);
      return res.status(401).json({ menssage: "invalid token" });
    }
  }
};
