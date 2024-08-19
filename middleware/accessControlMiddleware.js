import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../utils/jwt.js";

const AuthorizeRole = (...roles) => {
  return (req, res, next) => {0
    const tokenUser = req.cookies ? req.cookies.UserToken : undefined;

    if (!tokenUser) {
      res.status(401).json({ message: "Unauthorized" });
    }

    req.payload = jwt.verify(tokenUser, JWT_SECRET);

    if (req.payload && roles.includes(req.payload.role)) {
      next();
    } else {
      res.status(403).json({ message: "Forbidden" });
    }
  };
};

export default AuthorizeRole;
